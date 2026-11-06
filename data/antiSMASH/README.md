# antiSMASH v8.0.4 Biosynthetic Gene Cluster (BGC) Review Exports

This directory contains structured, deterministic review exports generated via `antismash-review` from the **antiSMASH v8.0.4** outputs for **SM-NMZ** and **C14-NMZ** (supporting **Results & Discussion Section 3**, **Figure 3**, **Figures 8–9**, and **Slides 9–12** of the explainer deck).

## Included Files
- `SM-NMZ-antismash-review.md` / `C14-NMZ-antismash-review.md`: Human-readable BGC review reports covering all 11 predicted chromosome regions per isolate, core/biosynthetic CDS architectures, NRPS/PKS domain organizations, and KnownClusterBlast / ClusterBlast reference matches.
- `SM-NMZ-regions.tsv` / `C14-NMZ-regions.tsv`: One-row-per-record summary tables listing region coordinates, rule-based product calls, boundary status, and feature/domain counts.
- `SM-NMZ-clusterblast.tsv` / `C14-NMZ-clusterblast.tsv`: Entity-level ClusterBlast and KnownClusterBlast (MIBiG) hit rankings and protein pairings.
- `SM-NMZ-domains.tsv` / `C14-NMZ-domains.tsv`: Entity-level `aSDomain` and Pfam hit coordinates, scores, and substrate-specificity predictions.
- `SM-NMZ-assemblylines.tsv` / `C14-NMZ-assemblylines.tsv`: Local NRPS/PKS module and monomer calls with conservative core-mass candidate annotations.

Full raw antiSMASH archives (`.gbk`, `.json`, `.zip`, `regions.js`) are omitted from Git version control due to file size (>200 MB combined) and are maintained in the local workspace (`antismash-serratia/antismash_out/`).
