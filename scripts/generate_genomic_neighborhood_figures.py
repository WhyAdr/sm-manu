"""Render manuscript neighborhood figures from canonical gbparse data.

Redraw the checked-in data:
    python scripts/generate_genomic_neighborhood_figures.py

Refresh from the complete Bakta GenBank files, then redraw:
    python scripts/generate_genomic_neighborhood_figures.py --refresh-data --genbank-dir PATH

Input directory must contain SM-NMZ.gbff and C14-NMZ.gbff. No sequence is uploaded.
GenBank parsing/window construction uses genbank_parser exclusively; the renderer
consumes its structured coordinates and uses DNA Features Viewer for every arrow.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import os
import re
import tempfile
from datetime import datetime, timezone
from importlib.metadata import version
from pathlib import Path

os.environ.setdefault("MPLCONFIGDIR", str(Path(tempfile.gettempdir()) / "sm-manu-mplcache"))
os.environ.setdefault("MPLBACKEND", "Agg")

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "figures" / "neighborhoods"
FIGURES = ROOT / "figures"
COLORS = {
    "biosynthesis": "#258A96",
    "transport": "#9471B3",
    "regulation": "#D4AD50",
    "other": "#C7CED5",
    "candidate": "#E88B33",
}
LEGEND = {
    "biosynthesis": "Catalytic / biosynthesis annotation",
    "transport": "Transport / polymer-processing annotation",
    "regulation": "Regulatory annotation",
    "other": "Other displayed CDS",
    "candidate": "Focal LadA-like candidate*",
}

# These abbreviate source product descriptions, rather than renaming genes.
ABBREVIATIONS = [
    ("hydroxybenzoate hydroxylase transcriptional activator", "activator"),
    ("hydroxybenzoate hydroxylase", "HBH"),
    ("polysaccharide biosynthesis/export", "export"),
    ("polysaccharide export protein wza", "Wza"),
    ("polysaccharide export", "export"),
    ("protein-tyrosine-phosphatase", "PTP"),
    ("tyrosine-protein kinase wzc", "Wzc"),
    ("cytidylyltransferase", "CTase"),
    ("saf domain", "SAF"),
    ("oligosaccharide flippase", "flippase"),
    ("polysaccharide biosynthesis protein", "glycan protein"),
    ("o-antigen ligase-related", "ligase-like"),
    ("o-antigen polymerase", "polymerase"),
    ("pyruvyl transferase", "PyrT"),
    ("galactoside o-acetyltransferase", "AcT"),
    ("glycosyl transferase", "GT"),
    ("glycosyltransferase", "GT"),
    ("mannosyltransferase", "ManT"),
    ("mannose-1-phosphate guanylyltransferase", "ManP"),
    ("phosphomannomutase", "PMM"),
    ("glycoside hydrolase", "GH"),
    ("cellulase", "GH"),
    ("acyltransferase", "AcT"),
    ("3-oxoacid coa-transferase subunit a", "CoA-T A"),
    ("3-oxoadipate coa-transferase subunit b", "CoA-T B"),
    ("3-carboxy-cis,cis-muconate cycloisomerase", "cyclois."),
    ("3-ketosteroid-9-alpha-hydroxylase reductase", "reductase"),
    ("hicb-like", "HicB-like"),
    ("duf805", "DUF805"),
    ("helix-turn-helix", "HTH"),
    ("hth ", "HTH"),
    ("mfs transporter", "MFS"),
    ("quinate dehydrogenase", "quinate DH"),
    ("polymerase", "polymerase"),
    ("hypothetical protein", "HP"),
]


def display_label(feature: dict, focal: bool) -> tuple[str, str]:
    if focal:
        return "LadA-like*", "candidate designation from manuscript sequence-placement analysis"
    if feature["gene"]:
        return feature["gene"], "source gene qualifier"
    product = feature["product"].lower()
    for match, label in ABBREVIATIONS:
        if match in product:
            return label, "abbreviation of source product qualifier"
    return feature["locus_tag"].split("_")[-1], "locus-tag suffix; product unassigned to a compact label"


def category(feature: dict, focal: bool) -> str:
    if focal:
        return "candidate"
    gene = feature["gene"] or ""
    product = feature["product"].lower()
    if re.search(r"regulat|activator|helix-turn-helix|\bhth\b|phosphatase|tyrosine.*kinase", product):
        return "regulation"
    if gene == "metQ" or re.search(r"transport|import|export|permease|flippase|polymerase|porin", product):
        return "transport"
    if gene in {"narG", "narK", "cybB", "alaC"} or "duf" in product or "hypothetical" in product or "antitoxin" in product:
        return "other"
    if re.search(r"synth|transferase|hydrolase|isomeras|oxygenas|hydroxylas|epoxidas|peroxidas|deacetylas|ligas|thioesteras|reductase|dehydrogenas|cycloisomeras|decarboxylas|hydratase|aldolas|thiolase|lactonas|mutase", product):
        return "biosynthesis"
    return "other"


def refresh(selection: dict, genbank_dir: Path) -> dict:
    from genbank_parser import read_genbank
    from genbank_parser.neighborhood import build_neighborhood
    from genbank_parser.visualization.neighborhood import render_neighborhood

    documents, paths = {}, {}
    payload = {"schema_version": "sm-manu.neighborhood-figures.v1", "inputs": {}, "figures": []}
    expected_lengths = {"SM-NMZ": 4970517, "C14-NMZ": 5050553}
    for isolate, expected in expected_lengths.items():
        path = genbank_dir / f"{isolate}.gbff"
        document = read_genbank(path)
        assert document.records[0].length == expected, f"Unexpected chromosome for {isolate}"
        assert document.records[0].topology == "circular"
        documents[isolate], paths[isolate] = document, path
        payload["inputs"][isolate] = {
            "file": path.name, "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
            "records": [{"id": r.id, "length": r.length, "topology": r.topology} for r in document.records],
        }

    native_check_done = False
    for figure in selection["figures"]:
        result_figure = {k: v for k, v in figure.items() if k != "panels"}
        result_figure["panels"] = []
        for panel in figure["panels"]:
            result_panel = {k: v for k, v in panel.items() if k != "tracks"}
            result_panel["tracks"] = []
            for track in panel["tracks"]:
                isolate = track["isolate"]
                document = documents[isolate]
                record = next(r for r in document.records if any(f.type == "CDS" and f.locus_tag == track["first"] for f in r.features))
                cds = sorted((f for f in record.features if f.type == "CDS"), key=lambda f: (f.start, f.end))
                indices = {f.locus_tag: i for i, f in enumerate(cds)}
                first, last = indices[track["first"]], indices[track["last"]]
                assert first <= last
                chosen = cds[first:last + 1]
                anchor = track.get("target", chosen[len(chosen) // 2].locus_tag)
                center = indices[anchor]
                neighborhood = build_neighborhood(paths[isolate], anchor, max(center - first, last - center))
                assert not neighborhood.wraps_origin
                wanted = {f.locus_tag for f in chosen}
                selected = [item for item in neighborhood.features if item.feature.locus_tag in wanted]
                assert {i.feature.locus_tag for i in selected} == wanted
                assert len(selected) == len(wanted)
                offset = min(item.local_start for item in selected) - 1
                source_start = min(f.start for f in chosen)
                source_end = max(f.end for f in chosen)
                features = []
                for item in selected:
                    feature = item.to_dict()
                    feature["local_start"] -= offset
                    feature["local_end"] -= offset
                    assert feature["local_start"] == feature["genomic_start"] - source_start + 1
                    assert feature["local_end"] == feature["genomic_end"] - source_start + 1
                    focal = item.feature.locus_tag == track.get("target")
                    feature["display_label"], feature["label_basis"] = display_label(feature, focal)
                    feature["category"] = category(feature, focal)
                    feature["is_focal_candidate"] = focal
                    feature["length_bp"] = item.feature.length
                    feature["translation_sha256"] = hashlib.sha256((item.feature.translation or "").encode()).hexdigest()
                    features.append(feature)
                result_panel["tracks"].append({
                    **track, "record": record.id, "genomic_start": source_start, "genomic_end": source_end,
                    "span_bp": source_end - source_start + 1, "anchor": anchor,
                    "canonical_window": neighborhood.window, "wraps_origin": False, "features": features,
                })
                print(f"Parsed {figure['stem']} {panel['letter']} {isolate}: {len(features)} CDS", flush=True)
                if track.get("target") and not native_check_done:
                    # Exercise the skill's native renderer as well as the shared
                    # typed neighborhood API used by the composite renderer.
                    native_path = ROOT.parent / "tmp" / "sm-manu-neighborhood-figures-2026-10-18" / "native-check.svg"
                    native_path.parent.mkdir(parents=True, exist_ok=True)
                    render_neighborhood(neighborhood, native_path, label_mode="gene")
                    native_check_done = True
            result_figure["panels"].append(result_panel)
        payload["figures"].append(result_figure)
    payload["generation"] = {
        "utc": datetime.now(timezone.utc).isoformat(),
        "parser": "genbank_parser.read_genbank + build_neighborhood + native render_neighborhood check",
        "coordinates": "Genomic/local coordinates are 1-based closed; rendering converts starts to 0-based half-open.",
        "orientation": "Native increasing genomic coordinates; arrowheads preserve annotated strands.",
        "scale": "Common bp scale within each panel; panels may use different spans. No sequence alignment or operon inference.",
        "packages": {name: version(name) for name in ("genbank-parser", "dna-features-viewer", "matplotlib", "biopython")},
    }
    return payload


def write_feature_table(payload: dict) -> None:
    fields = ["figure", "panel", "isolate", "record", "locus_tag", "gene", "product", "strand",
              "genomic_start", "genomic_end", "local_start", "local_end", "length_bp", "display_label",
              "label_basis", "category", "is_focal_candidate", "partial", "pseudo"]
    with (DATA / "plotted-features.tsv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, delimiter="\t", lineterminator="\n")
        writer.writeheader()
        for figure in payload["figures"]:
            for panel in figure["panels"]:
                for track in panel["tracks"]:
                    for feature in track["features"]:
                        row = {key: feature.get(key, "") for key in fields}
                        row.update(figure=figure["stem"], panel=panel["letter"], isolate=track["isolate"])
                        writer.writerow(row)


def render(payload: dict) -> None:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.patches import Patch
    from dna_features_viewer import GraphicFeature, GraphicRecord

    plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 9,
                         "svg.fonttype": "none", "svg.hashsalt": "sm-manu-neighborhood-2026-10-18",
                         "pdf.fonttype": 42})
    for figure in payload["figures"]:
        heights = []
        for panel in figure["panels"]:
            heights.append(0.25)
            for track in panel["tracks"]:
                heights.extend([0.20, 0.85, 0.16])
        total_height = sum(heights) + 1.4
        if len(figure["panels"]) == 1:
            total_height += 0.6
        has_candidate = any(f["is_focal_candidate"] for p in figure["panels"] for t in p["tracks"] for f in t["features"])
        bottom_margin = max(0.09, (1.1 if has_candidate else 0.85) / total_height)
        fig = plt.figure(figsize=(9.0, total_height), facecolor="white")
        grid = fig.add_gridspec(len(heights), 1, height_ratios=heights, hspace=0.08,
                               left=0.065, right=0.985, top=0.935, bottom=bottom_margin)
        row_index = 0
        for panel in figure["panels"]:
            title_ax = fig.add_subplot(grid[row_index])
            row_index += 1
            title_ax.axis("off")
            title_ax.text(0, 0.5, f"{panel['letter']}   {panel['title']}", transform=title_ax.transAxes,
                          ha="left", va="center", fontsize=10, weight="bold")
            max_span = max(t["span_bp"] for t in panel["tracks"])
            padding = max_span * 0.025
            for track in panel["tracks"]:
                metadata_ax = fig.add_subplot(grid[row_index])
                row_index += 1
                metadata_ax.axis("off")
                suffix = track["last"].split("_")[-1]
                title = (f"{track['isolate']}  |  {track['genomic_start']:,}–{track['genomic_end']:,} bp"
                         f"  |  {track['first']}–{suffix}")
                metadata_ax.text(0, 0.6, title, transform=metadata_ax.transAxes,
                                 ha="left", va="center", fontsize=8, color="#384653")
                ax = fig.add_subplot(grid[row_index])
                row_index += 1
                spacer_ax = fig.add_subplot(grid[row_index])
                row_index += 1
                spacer_ax.axis("off")
                graphic_features = []
                for feature in track["features"]:
                    strand = {"+": 1, "-": -1}.get(feature["strand"], 0)
                    graphic_features.append(GraphicFeature(
                        start=feature["local_start"] - 1, end=feature["local_end"], strand=strand,
                        label=feature["display_label"], color=COLORS[feature["category"]],
                        linecolor="#27323C", linewidth=0.6, thickness=12,
                        box_linewidth=0, box_color="white", label_link_color="#586574",
                        fontdict={"fontsize": 9, "fontstyle": "italic" if feature["gene"] and not feature["is_focal_candidate"] else "normal"},
                    ))
                record = GraphicRecord(sequence_length=track["span_bp"], features=graphic_features,
                                       first_index=0, labels_spacing=5)
                record.plot(ax=ax, with_ruler=True, annotate_inline=True,
                            strand_in_label_threshold=0, max_label_length=20,
                            x_lim=(-padding, max_span + padding))
                ax.set_xlim(-padding, max_span + padding)
                tick_step = 5000 if max_span > 12000 else 2000 if max_span > 5000 else 1000
                ticks = list(range(0, track["span_bp"] + 1, tick_step))
                ax.set_xticks(ticks)
                ax.set_xticklabels([f"{tick / 1000:g}" for tick in ticks], fontsize=8)
                ax.tick_params(axis="x", length=3, width=0.6, pad=2, colors="#52606D")
        fig.suptitle(figure["title"], x=0.065, y=0.987, ha="left", fontsize=14, weight="bold")
        used_categories = {f["category"] for p in figure["panels"] for t in p["tracks"] for f in t["features"]}
        keys = [key for key in COLORS if key in used_categories]
        fig.legend(handles=[Patch(facecolor=COLORS[k], edgecolor="#27323C", label=LEGEND[k]) for k in keys],
                   loc="lower left", bbox_to_anchor=(0.06, 0.055 if has_candidate else 0.025), ncol=2, frameon=False, fontsize=8)
        footnote = "Scale: kb from first displayed CDS; equal scale within each lettered panel. Arrows show annotated strand."
        if "candidate" in used_categories:
            footnote = "Scale: kb from first displayed CDS; equal scale within the panel. Arrows show annotated strand.\n*LadA-like is a candidate designation; source gene qualifier: ssuD."
        fig.text(0.065, 0.009, footnote, fontsize=7.5, color="#52606D")
        for suffix in ("svg", "png"):
            path = FIGURES / f"{figure['stem']}.{suffix}"
            metadata = {"Date": None} if suffix == "svg" else {"Software": "sm-manu / DNA Features Viewer"}
            fig.savefig(path, dpi=300, bbox_inches="tight", pad_inches=0.12, metadata=metadata)
            if suffix == "svg":
                # Matplotlib emits trailing spaces in multiline path attributes.
                # Newlines already delimit SVG path tokens; trim only line ends
                # so vector geometry is unchanged and repository checks pass.
                svg = path.read_text(encoding="utf-8")
                path.write_text("\n".join(line.rstrip() for line in svg.splitlines()) + "\n",
                                encoding="utf-8", newline="\n")
        plt.close(fig)
        print(f"Rendered {figure['stem']} (SVG + 300-dpi PNG)", flush=True)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--refresh-data", action="store_true")
    parser.add_argument("--genbank-dir", type=Path, default=ROOT.parent / "serratia-hydrocarbon-faa")
    args = parser.parse_args()
    selection = json.loads((DATA / "selection.json").read_text(encoding="utf-8"))
    data_path = DATA / "neighborhoods.json"
    if args.refresh_data:
        payload = refresh(selection, args.genbank_dir)
        data_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    else:
        payload = json.loads(data_path.read_text(encoding="utf-8"))
    for figure in payload["figures"]:
        for panel in figure["panels"]:
            for track in panel["tracks"]:
                for feature in track["features"]:
                    feature["display_label"], feature["label_basis"] = display_label(feature, feature["is_focal_candidate"])
                    feature["category"] = category(feature, feature["is_focal_candidate"])
    payload["generation"]["render_policy"] = "v2: metadata rows separated from plotted CDS tracks; annotation classes derived from raw qualifiers"
    data_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")
    write_feature_table(payload)
    render(payload)
    assets = [FIGURES / (f["stem"] + suffix) for f in payload["figures"] for suffix in (".svg", ".png")]
    assets += [DATA / name for name in ("selection.json", "neighborhoods.json", "plotted-features.tsv")]
    assets.append(Path(__file__).resolve())
    manifest = {str(path.relative_to(ROOT)).replace("\\", "/"): {
        "sha256": hashlib.sha256(path.read_bytes()).hexdigest(), "bytes": path.stat().st_size,
    } for path in assets}
    (DATA / "artifact-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
