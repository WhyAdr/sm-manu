# Implementation Plan: NMZ *Serratia* Genomics Explainer — 8-Slide antiSMASH Visual Walkthrough & Review Polish (2026-11-07)

## 1. Objective & Scope

Expand the **antiSMASH v8.0.4 Biosynthetic Gene Cluster (BGC)** teaching section of the NMZ *Serratia* genomics explainer presentation (`explainer/`) from 2 slides to an **8-slide visual walkthrough (`Slides 9–16`)** using high-DPI (`2x` Retina) screenshots captured directly from the local antiSMASH HTML reports (`SM-NMZ-antismash/index.html` and `C14-NMZ-antismash/index.html`), and incorporate the 5 polish items from the second independent deck review:

1. **8-Slide antiSMASH Visual Walkthrough (`Slides 9–16`, replacing old Slides 9–10)**:
   - **Slide 9**: *Genome-wide BGC mining with antiSMASH (11 regions per chromosome)* — Symmetric **SM-NMZ** vs. **C14-NMZ** region comparison (`SM-only` Regions 2 & 7 vs. `C14-only` Regions 3 & 7, plus the Region 10 difference), ordinal chromosome numbering rule, and the 3 similarity metrics (`KnownClusterBlast`, `MIBiG comparison`, `ClusterBlast`).
   - **Slide 10**: *Orienting in antiSMASH: Region 11 (`swrW`) full-window view* — Uses `assets/antismash-sm-r1c11-full.png` (`2x` Retina full-window capture) to orient wet-lab colleagues to the 43.9-kb region bar, `NRPS/PKS domains` (`Show module domains` ON), `Condensation_Starter` (`1–298 AA`, `HHLIADG` motif), `PCP (976–1042 AA)`, `Gene details` (`NNLMDO_021205`), and `NRPS/PKS substrates` (`Ser`, `100%` Stachelhaus code `DVWHVSLVDK`).
   - **Slide 11**: *Zooming into Region 11: core `SwrW` domains vs. flanking window hits* — Pairs `assets/antismash-sm-r1c11-domains-crop.png` with `assets/antismash-sm-r1c11-clusterblast-crop.png` to explain why `NNLMDO_021205` (`C_Starter–A[Ser]–PCP–TE`) is the sole `3,936 nt` core gene while `KR` (`fabG`), `ER` (`adhP`/`yahK`), and `AmT` (`tyrB`) are flanking/boundary housekeeping enzymes inside the ~20-kb window, and shows the `100%` identity / `100%` coverage `ClusterBlast` match across complete *S. marcescens* chromosomes.
   - **Slide 12**: *Why Region 11's `0.69` MIBiG score ("ririwpeptide") misleads vs. Region 5 (`pig`, `0.93`)* — Pairs `assets/antismash-sm-r1c11-mibig-crop.png` (`0.69`: `id: 0.49, order: N/A, components: 0.67` on a single gene `NNLMDO_021205` vs. `plu3123` at `46.7%` identity, `45.9%` coverage) with `assets/antismash-sm-r1c5-pig-mibig-crop.png` (`0.93`: `id: 0.84, order: 1.00, components: 0.96` across 16 collinear `pigA`–`pigN`/`cueR`/`copA` genes at `86.7–100%` identity, `100%` coverage).
   - **Slide 13**: *Catecholate siderophore potential: Regions 1 and 9 in SM-NMZ & C14-NMZ* — Pairs `assets/antismash-sm-r1c1-metallophore-crop.png` (Region 1 `NRP-metallophore; NRPS`) and `assets/antismash-sm-r1c9-metallophore-crop.png` (Region 9 `NRPS`) showing why partial 5–6 protein matches (`entE`, `entF`/`entF2`, `mbtH`, `entS` at `47–78%` identity) to trichrysobactin/enterobactin/serratiochelin/viobactin support catecholate siderophore class potential rather than a named product.
   - **Slide 14**: *C14-NMZ Region 7 (`opine-like-metallophore`) vs. SM-NMZ Regions 2 & 7 (`NRPS-like` / `NRPS`)* — Pairs `assets/antismash-c14-r1c7-opine-crop.png` (**C14-NMZ** unique `CntM` + `CntL` opine-like metallophore locus with a `0.84` 6-protein yersinopine MIBiG match) with `assets/antismash-sm-r1c2-r1c7-domains-crop.png` (**SM-NMZ** unique Region 2 `A–PCP–TD` NRPS-like reductase `NNLMDO_002205` and Region 7 two-module NRPS `NNLMDO_010830`–`010835`).
   - **Slide 15**: *Same region number, different NRPS machinery: Region 10 in SM-NMZ vs. C14-NMZ* — Pairs `assets/antismash-sm-r1c10-domains-crop.png` (**SM-NMZ** 3-module *Gap1*-like NRPS + `CAL/ACP` + `malonyl-AT/ACP` + type-II `TE`, `97–100%` collinear with *S. marcescens* UENF-22GI *Gap1*) with `assets/antismash-c14-r1c10-domains-crop.png` (**C14-NMZ** single-module D-Val NRPS `OJMJKD_018290` [`C–A[Val]–PCP–E–TIGR01720–C_DCL`] near a T6SS neighborhood), explaining why neither locus supports the library-only `Stephensiolide G/K` LC-HRMS annotations.
   - **Slide 16**: *Class-level RiPP, redox-cofactor (PQQ), beta-lactone, and terpene-precursor calls* — Pairs `assets/antismash-sm-r1c8-pqq-crop.png` (conserved Region 8 `pqqA`–`pqqF` operon) and `assets/antismash-c14-r1c3-ranthipeptide-crop.png` (**C14-NMZ** unique Region 3 `ranthipeptide` with `TIGR04085`/`PF04055` radical SAM + `PqqD` RRE) with a compact summary table covering all non-NRPS regions (shared Region 6 `azole-containing-RiPP`, shared `betalactone`, shared `terpene-precursor`).
2. **Five Additional Review Polish Items**:
   - **Slide 17 (*SwrW evidence in the NMZ study*, formerly Slide 11)**: Change `"The three evidence layers agree..."` → `"The three evidence layers are consistent..."` so it aligns cleanly with Slide 18's note that the chemical summary report does not map rows `1` and `2` to individual isolate codes.
   - **Slide 30 (*Host-interaction genes*, formerly Slide 24)**: Restore the explicit biosafety/pathogenicity boundary on the slide face (`"VFDB sequence matches provide comparative context and do not quantify pathogenicity or establish environmental biosafety."`).
   - **Slide 31 (*The genomics contribution: evidence scoreboard*, formerly Slide 25)**: Upgrade the 4th column to **`Assay slot & decisive test`**, pairing each wet-lab assay endpoint (`tension, E24, pour point`) with its decisive mechanistic test (`swrW deletion + LC-HRMS`, `DspB / cellulase sensitivity`, single-substrate aromatic growth, purified LadA enzyme assay).
   - **Slide 40 (*Backup B9: Conserved metabolic background (DRAM)*, formerly Slide 34)**: Add a clean **3-row native table** of the 3 DRAM traits that actually vary within *Serratia* (`Succinate dehydrogenase`, `GH43 arabinan CAZy`, `K08357 tetrathionate reductase`) below the side-by-side DRAM heatmaps so the slide is readable at any resolution.
   - **Slide 5 (*Genome resources and identity*)**: Soften `"Closed circular chromosomes ensure..."` → `"Closed circular chromosomes avoid contig breaks across our 35–44 kb BGC neighborhoods."`

---

## 2. Pre-Generated High-DPI Visual Assets (`explainer/assets/`)

All 12 antiSMASH v8.0.4 screenshot assets (`2x` Retina scale) have already been generated and verified in `explainer/assets/`:

| Asset Filename (`explainer/assets/`) | Dimensions (`px`) | Target Slide | Visual Content |
|---|---:|---:|---|
| `antismash-sm-r1c11-full.png` | `2960 × 1920` | **Slide 10** | Full-window view of **SM-NMZ** Region 11 (`swrW`): region map, `NRPS/PKS domains` (`Show module domains` ON), `Condensation_Starter` tooltip (`1–298 AA`, `HHLIADG`), `PCP (976–1042 AA)` badge, `Gene details` (`NNLMDO_021205`), and expanded `NRPS/PKS substrate predictions` (`Ser`, `100%` Stachelhaus `DVWHVSLVDK`). |
| `antismash-sm-r1c11-domains-crop.png` | `2160 × 560` | **Slide 11** | Cropped `NRPS/PKS domains` panel for **SM-NMZ** Region 11 with callouts for core `NNLMDO_021205` (`C_Starter–A[Ser]–PCP–TE`), `PCP (976–1042 AA)`, and flanking `fabG` (`KR`), `adhP`/`yahK` (`ER`), and boundary `tyrB` (`AmT`). |
| `antismash-sm-r1c11-clusterblast-crop.png` | `2160 × 920` | **Slide 11** | Cropped `ClusterBlast` panel for **SM-NMZ** Region 11 showing `100%` identity / `100%` coverage across complete *S. marcescens* genomes (`BVG90_RS18855` tooltip). |
| `antismash-sm-r1c11-mibig-crop.png` | `2160 × 960` | **Slide 12** | Cropped `MIBiG comparison` (`Protocluster to Region`) for **SM-NMZ** Region 11 showing the single connecting line to `BGC0002286.3` (`ririwpeptide`) and the nudged hover breakdown (`0.69: id: 0.49, order: N/A, components: 0.67`). |
| `antismash-sm-r1c5-pig-mibig-crop.png` | `2160 × 960` | **Slide 12** | Cropped `MIBiG comparison` (`Protocluster to Region`) for **SM-NMZ** Region 5 (`pig`) showing 16 collinear matched lines to `BGC0000259.3` (`prodigiosin`) and hover breakdown (`0.93: id: 0.84, order: 1.00, components: 0.96`). |
| `antismash-sm-r1c1-metallophore-crop.png` | `2160 × 1000` | **Slide 13** | Cropped `MIBiG comparison` for **SM-NMZ** Region 1 (`NRP-metallophore; NRPS`) showing catecholate siderophore core match (`entE`, `entF`, `mbtH`, `entS`). |
| `antismash-sm-r1c9-metallophore-crop.png` | `2160 × 1000` | **Slide 13** | Cropped `MIBiG comparison` for **SM-NMZ** Region 9 (`NRPS`) showing partial 5–6 protein catecholate core match. |
| `antismash-c14-r1c7-opine-crop.png` | `2160 × 1480` | **Slide 14** | Cropped region + `MIBiG comparison` for **C14-NMZ** unique Region 7 (`opine-like-metallophore`) showing the 6-gene `yersinopine` (`BGC0002490.2`, `0.84`) synteny alignment (`CntM`, `CntL`, efflux). |
| `antismash-sm-r1c2-r1c7-domains-crop.png` | `2160 × 1864` | **Slide 14** | Stitched vertical composite of **SM-NMZ** unique Region 2 (`NRPS-like`, `NNLMDO_002205` `A–PCP–TD`) and Region 7 (`NRPS`, 2-module `NNLMDO_010830`–`010835`). |
| `antismash-sm-r1c10-domains-crop.png` | `2160 × 1220` | **Slide 15** | Cropped region + `NRPS/PKS domains` (`Show module domains` ON) for **SM-NMZ** Region 10 (*Gap1*-like 3-module NRPS + `CAL/ACP` + `malonyl-AT/ACP` + `TE` + `AbH`). |
| `antismash-c14-r1c10-domains-crop.png` | `2160 × 840` | **Slide 15** | Cropped region + `NRPS/PKS domains` (`Show module domains` ON) for **C14-NMZ** Region 10 (single-module D-Val NRPS `OJMJKD_018290`: `C–A[Val]–PCP–E–TIGR01720–C_DCL`). |
| `antismash-sm-r1c8-pqq-crop.png` | `2160 × 1480` | **Slide 16** | Cropped region + `MIBiG comparison` for conserved Region 8 (`redox-cofactor`: `pqqA`–`pqqF` PQQ biosynthesis locus). |
| `antismash-c14-r1c3-ranthipeptide-crop.png` | `2160 × 1100` | **Slide 16** | Cropped region + `TIGRFAM domains` for **C14-NMZ** unique Region 3 (`ranthipeptide`: radical SAM / SPASM + RRE architecture). |

*(Note: `antismash-sm-r1c2-domains-crop.png` and `antismash-sm-r1c7-domains-crop.png` are also present individually in `explainer/assets/` so the builder can either place them stacked or use `antismash-sm-r1c2-r1c7-domains-crop.png`.)*

---

## 3. Updated Slide Counts & File Inventory (40 Slides Total)

- **Main Teaching Sequence**: **31 slides** (`MAIN_COUNT = 31`; expands the antiSMASH walkthrough from 2 slides to 8 slides at **Slides 9–16**, shifting old Slides 11–25 to **Slides 17–31**).
- **Optional Technical Backups**: **9 backups (`B1`–`B9`)** at **Slides 32–40**.
- **Total Slide Count**: **40 slides** (`explicitTotalSlideCount: 40` in `explainer/finalize_explainer.mjs`).

| File Path (relative to `manuscript/`) | Action | Purpose |
|---|---|---|
| `explainer/build_explainer.mjs` | Edit & Run | Set `MAIN_COUNT = 31`, replace the 2-slide antiSMASH block with the 8-slide visual walkthrough (`Slides 9–16`), apply the 5 review fixes (`Slides 5, 17, 30, 31, 40`), and rebuild the raw PPTX. |
| `explainer/finalize_explainer.mjs` | Edit & Run | Update `explicitTotalSlideCount: 40` and `requiredNativeTableOwnerSlides` to match the 40-slide table ownership, then validate geometry and package hygiene. |
| `explainer/build_glossary_and_preview.py` | Edit & Run | Rebuild `NMZ-Serratia-genomics-explainer-2026-10-20.pdf` (40 pages) and `NMZ-Serratia-genomics-glossary-2026-10-20.pdf`. |
| `explainer/outline-and-glossary.md` | Edit | Update outline table to reflect the 31 main slides (`1`–`31`) and 9 backups (`B1`–`B9`). |
| `explainer/glossary.md` | Edit | Ensure `ProtoToRegion_RiQ`, `Condensation_Starter`, `Stachelhaus code`, `yersinopine (CntM/CntL)`, and `ranthipeptide` entries match Slides 9–16. |
| `explainer/README.md` | Edit | Update slide counts (`31 main slides`, `9 optional technical backups`, `40 total slides`). |

---

## 4. Complete Slide-by-Slide Map & Table Ownership (40 Slides)

| New Slide # | Label | Prev Slide # (34-slide deck) | Title | Native Table? | Summary of Changes |
|---:|---|---:|---|---|---|
| **1** | `1` | 1 | NMZ Serratia genomics | No | Unchanged. |
| **2** | `2` | 2 | DNA, gene predictions and activity | **Yes** | Unchanged. |
| **3** | `3` | 3 | Reads, assembly and genome annotation | No | Unchanged. |
| **4** | `4` | 4 | What each kind of evidence answers | **Yes** | Unchanged. |
| **5** | `5` | 5 | Genome resources and identity | **Yes** | Soften bottom callout: `"Closed circular chromosomes avoid contig breaks across our 35–44 kb BGC neighborhoods."` |
| **6** | `6` | 6 | ANI and digital DNA–DNA hybridization | **Yes** | Unchanged. |
| **7** | `7` | 7 | GTDB-Tk and TYGS workflows | No | Unchanged. |
| **8** | `8` | 8 | Genes, neighborhoods, clusters and operons | **Yes** | Unchanged. |
| **9** | `9` | 9 | **Genome-wide BGC mining with antiSMASH** | No | **Upgraded**: Overview JPEGs + 3 similarity metrics legend + symmetric **SM-only** (Reg 2 `NRPS-like`, Reg 7 `NRPS`) vs. **C14-only** (Reg 3 `ranthipeptide`, Reg 7 `opine-like-metallophore`) + Reg 10 contrast. |
| **10** | `10` | *NEW* | **Orienting in antiSMASH: Region 11 (swrW) full view** | No | **New Slide**: Full-window `antismash-sm-r1c11-full.png` with 3 numbered orientation points (top region bar, bottom-left `NRPS/PKS domains` with `Show module domains` ON + `Condensation_Starter`/`PCP` callouts, right `Gene details` + `Ser` Stachelhaus prediction). |
| **11** | `11` | *NEW* | **Region 11: core SwrW domains vs. flanking window hits** | No | **New Slide**: Side-by-side `antismash-sm-r1c11-domains-crop.png` (explaining core `NNLMDO_021205` vs. flanking `fabG` `KR`, `adhP` `ER`, boundary `tyrB` `AmT`) and `antismash-sm-r1c11-clusterblast-crop.png` (`100%` id / `100%` cov across complete *S. marcescens* chromosomes). |
| **12** | `12` | *10* | **Why Region 11's 0.69 MIBiG score misleads vs. Region 5 (pig, 0.93)** | No | **Upgraded Visual Comparison**: Side-by-side `antismash-sm-r1c11-mibig-crop.png` (`0.69` single-gene `"ririwpeptide"` false friend at `46.7%` id, `45.9%` cov) vs. `antismash-sm-r1c5-pig-mibig-crop.png` (`0.93` 16-gene collinear `prodigiosin` match at `86.7–100%` id, `100%` cov). |
| **13** | `13` | *NEW* | **Catecholate siderophore potential: Regions 1 and 9** | No | **New Slide**: Side-by-side `antismash-sm-r1c1-metallophore-crop.png` and `antismash-sm-r1c9-metallophore-crop.png` showing partial 5–6 protein matches (`entE`, `entF`, `mbtH`, `entS` at `47–78%` id) supporting catecholate class potential rather than named trichrysobactin/viobactin. |
| **14** | `14` | *NEW* | **C14 Region 7 (opine metallophore) vs. SM Regions 2 & 7 (NRPS)** | No | **New Slide**: Side-by-side `antismash-c14-r1c7-opine-crop.png` (**C14-NMZ** unique `CntM`+`CntL` locus with 6-protein `0.84` yersinopine MIBiG match) vs. `antismash-sm-r1c2-r1c7-domains-crop.png` (**SM-NMZ** unique Reg 2 `A–PCP–TD` and Reg 7 2-module NRPS). |
| **15** | `15` | *NEW* | **Same region number, different NRPS machinery: Region 10** | No | **New Slide**: Side-by-side `antismash-sm-r1c10-domains-crop.png` (**SM-NMZ** 3-module *Gap1*-like NRPS + `CAL` + `AT` + `TE`) vs. `antismash-c14-r1c10-domains-crop.png` (**C14-NMZ** 1-module D-Val NRPS `OJMJKD_018290`), explaining why neither supports `Stephensiolide G/K`. |
| **16** | `16` | *NEW* | **Class-level RiPP, PQQ, beta-lactone and terpene calls** | **Yes** | **New Slide**: Side-by-side `antismash-sm-r1c8-pqq-crop.png` (shared Reg 8 `pqqA`–`pqqF`) and `antismash-c14-r1c3-ranthipeptide-crop.png` (**C14-NMZ** Reg 3 `ranthipeptide`) above a compact 5-row native table summarizing all non-NRPS BGC regions. |
| **17** | `17` | 11 | SwrW evidence in the NMZ study | **Yes** | Change `"The three evidence layers agree..."` → `"The three evidence layers are consistent..."` |
| **18** | `18` | 12 | SwrW and reported serratamolides | No | Unchanged (shifted from 12). |
| **19** | `19` | 13 | Extracellular matrices and surface activity | No | Unchanged (shifted from 13). |
| **20** | `20` | 14 | EPS, CPS and matrix polysaccharides | **Yes** | Unchanged (shifted from 14). |
| **21** | `21` | 15 | Capsule loci and the HADEG markers | No | Unchanged (shifted from 15). |
| **22** | `22` | 16 | Cellulose-associated loci in both isolates | No | Unchanged (shifted from 16). |
| **23** | `23` | 17 | Aromatic metabolism depends on the substrate | No | Unchanged (shifted from 17). |
| **24** | `24` | 18 | The HADEG Toluene_degradation hit | No | Unchanged (shifted from 18). |
| **25** | `25` | 19 | LadA and the alkane-oxidation hypothesis | No | Unchanged (shifted from 19). |
| **26** | `26` | 20 | LadA evidence across the literature | **Yes** | Unchanged (shifted from 20). |
| **27** | `27` | 21 | Initial alkane oxidation | **Yes** | Unchanged (shifted from 21). |
| **28** | `28` | 22 | The LadA-like comparison | No | Unchanged (shifted from 22). |
| **29** | `29` | 23 | Matching assays to genomic candidates | **Yes** | Unchanged (shifted from 23). |
| **30** | `30` | 24 | Host-interaction genes | **Yes** | **Upgraded**: Restore explicit safety/pathogenicity caveat on slide face (`"VFDB sequence matches provide comparative context and do not quantify pathogenicity or establish environmental biosafety."`). |
| **31** | `31` | 25 | **The genomics contribution: evidence scoreboard** | **Yes** | **Upgraded**: 4th column (`Assay slot & decisive test`) pairs each wet-lab assay endpoint with its decisive experimental intervention (`ΔswrW + LC-HRMS`, `DspB / cellulase`, single-substrate growth, purified enzyme assay). |
| **32** | `B1` | 26 (B1) | Workflow and tools by purpose | **Yes** | Backup B1. |
| **33** | `B2` | 27 (B2) | The TYGS genome phylogram | No | Backup B2. |
| **34** | `B3` | 28 (B3) | Taxonomic comparisons | **Yes** | Backup B3. |
| **35** | `B4` | 29 (B4) | Reading the SwrW neighborhood | No | Backup B4. |
| **36** | `B5` | 30 (B5) | Reading HADEG marker categories | No | Backup B5. |
| **37** | `B6` | 31 (B6) | Chemical assignments and peak areas | **Yes** | Backup B6. |
| **38** | `B7` | 32 (B7) | Additional SM aromatic candidates | No | Backup B7. |
| **39** | `B8` | 33 (B8) | LadA-like genomic neighborhoods | No | Backup B8. |
| **40** | `B9` | 34 (B9) | **Conserved metabolic background (DRAM)** | **Yes** | **Upgraded Backup B9**: Adds a readable 3-row native table of the 3 varying *Serratia* traits (`Succinate dehydrogenase`, `GH43 arabinan CAZy`, `K08357 tetrathionate reductase`) below the shortened DRAM heatmaps. |

> **Exact `requiredNativeTableOwnerSlides` for `explainer/finalize_explainer.mjs`**:
> Under this 40-slide numbering (`31 main + 9 backups`), native tables occur on slides:
> ```js
> const requiredNativeTableOwnerSlides=[2,4,5,6,8,16,17,20,26,27,29,30,31,32,34,37,40];
> ```
> And `explicitTotalSlideCount` in `explainer/finalize_explainer.mjs` is `40`.

---

## 5. Exact Code Specifications for `explainer/build_explainer.mjs`

### 5.1. Update `MAIN_COUNT` (top of `explainer/build_explainer.mjs`)
```js
const MAIN_COUNT = 31;
```

### 5.2. Slide 5 (*Genome resources and identity*) — Soften Closed-Assembly Callout
Update the two bottom text lines on Slide 5:
```js
text(s,'Closed circular chromosomes avoid contig breaks across our 35–44 kb BGC neighborhoods.',64,545,1152,40,26,C.teal,true);
text(s,'TYGS groups both in S. marcescens cluster 6; Bakta and clinker plots retain C14-NMZ\'s GTDB label (S. nematodiphila).',64,602,1152,36,22,C.muted);
```

### 5.3. Slides 9–16 — The 8-Slide antiSMASH Visual Walkthrough
Replace the old 2-slide antiSMASH block (`Slides 9–10`) in `explainer/build_explainer.mjs` with the following 8 slides:

```js
// Slide 9: Genome-wide BGC mining with antiSMASH
{
 const s=slide('Genome-wide BGC mining with antiSMASH',
  'antiSMASH v8.0.4 scans each closed chromosome using rule-based profile HMMs for biosynthetic gene clusters (BGCs). Both SM-NMZ and C14-NMZ carry 11 chromosomal BGC regions, all internal to the chromosome (contig_edge=False). Region numbers are assigned sequentially from the chromosomal origin (dnaA), so a shared region number does not imply orthology. Nine region calls are shared across both genomes, while two regions per isolate are unique: SM-NMZ uniquely carries Region 2 (NRPS-like A–PCP–TD reductase) and Region 7 (a 2-module NRPS), whereas C14-NMZ uniquely carries Region 3 (ranthipeptide) and Region 7 (a yersinopine-like opine metallophore). In addition, Region 10 encodes completely different NRPS architectures in the two isolates. When evaluating any region, we distinguish three comparison tabs: KnownClusterBlast and MIBiG comparison compare against curated reference BGCs in MIBiG, whereas ClusterBlast searches general GenBank genome assemblies for syntenic homologs. Source: manuscript Section 3 and data/antiSMASH/antiSMASH-region-comparison.md.');
 text(s,'SM-NMZ · 11 chromosomal BGC regions (4 NRPS + 1 NRPS-like)',64,136,545,32,23,C.teal,true);
 text(s,'C14-NMZ · 11 chromosomal BGC regions (3 NRPS + ranthipeptide + opine)',655,136,561,32,23,C.teal,true);
 await fitimg(s,'Figure3_SM-NMZ-antismash-overview.jpeg',64,174,545,325,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in SM-NMZ');
 await fitimg(s,'Figure3_C14-NMZ-antismash-overview.jpeg',655,174,561,325,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in C14-NMZ');
 text(s,'Shared core (8 loci): prodigiosin (Reg 5), SwrW (Reg 11), PQQ (Reg 8), catecholate siderophores (Reg 1 & 9), RiPP/terpene/β-lactone.',64,518,1152,38,22,C.teal,true);
 text(s,'Symmetric differences: SM-only Reg 2 (NRPS-like) & Reg 7 (NRPS) · C14-only Reg 3 (ranthipeptide) & Reg 7 (opine) · divergent Reg 10 NRPSs.',64,564,1152,38,21,C.ink);
 text(s,'Three similarity lenses: MIBiG comparison / KnownClusterBlast (curated pathways) vs. ClusterBlast (general GenBank synteny).',64,610,1152,34,20,C.muted);
}

// Slide 10: Orienting in antiSMASH: Region 11 (swrW) full-window view
{
 const s=slide('Orienting in antiSMASH: Region 11 (swrW) full view',
  'Before comparing individual clusters, this slide shows how a single antiSMASH region page is organized using SM-NMZ Region 11 (the 43,936-nt serrawettin W1 neighborhood, 4,428,765–4,472,700 nt). At the top left, the dark-red arrow marks the sole core biosynthetic CDS (NNLMDO_021205, 3,936 nt), surrounded by the ~20-kb flanking window included by the NRPS rule. At the bottom left, toggling “Show module domains” ON in the NRPS/PKS domains tab reveals all four domains of the unimodular SwrW synthetase: an N-terminal Condensation_Starter domain (1–298 AA, active-site motif HHLIADG, which acylates the first L-Ser with a beta-hydroxy fatty acid), an AMP-binding adenylation domain (A), a peptidyl-carrier protein domain (PCP, 976–1042 AA, shown as an unlabeled blue oval until hovered), and a C-terminal Thioesterase (TE) domain. On the right, the Gene details and NRPS/PKS substrates panels report a 100% Stachelhaus code match (DVWHVSLVDK) to L-Serine. Source: SM-NMZ antiSMASH v8.0.4 report (#r1c11) and data/antiSMASH/SM-NMZ-domains.tsv.');
 await fitimg(s,'antismash-sm-r1c11-full.png',64,134,1152,445,'Full antiSMASH v8.0.4 view of SM-NMZ Region 11 showing SwrW domains, Condensation_Starter popup, PCP badge, and Ser Stachelhaus prediction');
 text(s,'1) Top track: 43.9-kb region window centered on the 3,936-nt core swrW NRPS (dark red, NNLMDO_021205).',64,590,1152,32,21,C.teal,true);
 text(s,'2) Bottom-left (“Show module domains” ON): C_Starter (1–298 AA, lipoinitiation) – A(Ser, 100% Stachelhaus) – PCP – TE.',64,624,1152,32,20,C.ink);
}

// Slide 11: Zooming into Region 11: core SwrW domains vs. flanking window hits
{
 const s=slide('Region 11: core SwrW domains vs. flanking window hits',
  'Zooming into the Region 11 detail panels answers two common questions when reading antiSMASH outputs. First, why does the NRPS/PKS domains panel list four genes (NNLMDO_021205, 021255, 021280 and 021300) when SwrW is a single-gene synthetase? Because antiSMASH scans the entire 43.9-kb region window for any distant pHMM domain hit: NNLMDO_021205 is the only core NRPS (C_Starter–A–PCP–TE), whereas NNLMDO_021255 is a flanking housekeeping 3-oxoacyl-ACP reductase (fabG, whose short-chain dehydrogenase fold triggers a weak KR hit, E = 7.1e-10), NNLMDO_021280 is a flanking zinc alcohol dehydrogenase (adhP/yahK, triggering a weak ER hit, E = 1.5e-11), and NNLMDO_021300 is a boundary aromatic aminotransferase (tyrB, triggering an AmT hit). Second, switching to the ClusterBlast tab confirms that the entire 43.9-kb neighborhood—including the core SwrW synthetase (100% identity, 100% coverage to Serratia marcescens BVG90_RS18855)—is collinear across complete S. marcescens chromosomes. Source: SM-NMZ antiSMASH report (#r1c11) and Bakta annotations.');
 text(s,'NRPS/PKS domains: core SwrW vs. 3 flanking housekeeping enzymes',64,136,560,30,21,C.teal,true);
 text(s,'ClusterBlast: 100% identity & synteny across S. marcescens genomes',648,136,568,30,21,C.teal,true);
 await fitimg(s,'antismash-sm-r1c11-domains-crop.png',64,172,560,210,'Cropped NRPS/PKS domains panel of SM-NMZ Region 11 distinguishing core SwrW from flanking fabG, adhP and tyrB');
 await fitimg(s,'antismash-sm-r1c11-clusterblast-crop.png',648,172,568,365,'Cropped ClusterBlast panel of SM-NMZ Region 11 showing 100% identity to Serratia marcescens swrW');
 text(s,'Why 4 rows appear on the left: antiSMASH flags any SDR/dehydrogenase (fabG, adhP) or aminotransferase (tyrB) in the 20-kb flanking window.',64,405,560,120,19.5,C.ink);
 text(s,'Only NNLMDO_021205 (SM) and OJMJKD_021655 (C14) form the unimodular C_Starter–A(Ser)–PCP–TE serrawettin W1 synthetase.',64,556,1152,36,23,C.teal,true);
 text(s,'ClusterBlast confirms 100% coverage and neighborhood collinearity with reference S. marcescens chromosomes.',64,602,1152,34,21,C.muted);
}

// Slide 12: Why Region 11's 0.69 MIBiG score misleads vs. Region 5 (pig, 0.93)
{
 const s=slide('Why Region 11’s 0.69 MIBiG score misleads vs. Region 5 (pig)',
  'Comparing the MIBiG comparison (Protocluster to Region) panels for Region 11 and Region 5 illustrates the central BGC lesson of our manuscript: a moderate composite similarity score does not identify a pathway. In Region 11 (left), the top MIBiG row is BGC0002286.3 (“ririwpeptide A/B/C” from Photorhabdus laumondii) with a similarity score of 0.69 (0.688 in JSON: id = 0.49, order = N/A, components = 0.67). Only a single vertical line connects the two clusters because a single core NRPS gene (NNLMDO_021205) aligns partially to plu3123 at 46.7% identity and 45.9% coverage—and five other unrelated lipopeptides (icosalide, xenotetrapeptide, gamexpeptide, xenematide, rhizomide) score 0.67–0.68 for the exact same reason (generic C–A–PCP–TE domain homology). By contrast, in Region 5 (right), the prodigiosin reference BGC0000259.3 scores 0.93 (id = 0.84, order = 1.00, components = 0.96) with 16 parallel connecting lines across pigA–pigN, cueR and copA at 86.7–100% identity and 100% coverage. Source: SM_antismash.json (ProtoToRegion_RiQ) and manuscript Section 3.');
 text(s,'Region 11 (swrW): 0.69 score from 1 generic NRPS gene hit (46.7% id)',64,136,560,30,21,C.gold,true);
 text(s,'Region 5 (pig): 0.93 score across 16 collinear genes (86.7–100% id)',648,136,568,30,21,C.teal,true);
 await fitimg(s,'antismash-sm-r1c11-mibig-crop.png',64,172,560,365,'MIBiG comparison for SM-NMZ Region 11 showing single-gene 0.69 match to ririwpeptide');
 await fitimg(s,'antismash-sm-r1c5-pig-mibig-crop.png',648,172,568,365,'MIBiG comparison for SM-NMZ Region 5 showing 16-gene 0.93 match to prodigiosin');
 text(s,'Rule of thumb: inspect matched gene count, gene order (synteny) and domain architecture—never rely on the top MIBiG compound name alone.',64,556,1152,38,22.5,C.teal,true);
 text(s,'Curated call: Region 11 is SwrW (serrawettin W1 / serratamolide synthetase); Region 5 is the complete pigA–pigN prodigiosin pathway.',64,602,1152,34,21,C.muted);
}

// Slide 13: Catecholate siderophore potential: Regions 1 and 9 in SM-NMZ & C14-NMZ
{
 const s=slide('Catecholate siderophore potential: Regions 1 and 9',
  'Both SM-NMZ and C14-NMZ carry two conserved catecholate siderophore-associated regions: Region 1 (called as NRP-metallophore; NRPS, 48.3 kb) and Region 9 (called as NRPS, 44.0 kb). In both regions, the core genes encode classic catecholate siderophore assembly and transport components—2,3-dihydroxybenzoate-AMP ligase (entE), catecholate NRPS modules (entF / entF2), an MbtH-like NRPS chaperone (mbtH), and an enterobactin/siderophore exporter (entS). In the MIBiG comparison tables (shown here for SM-NMZ), these conserved catecholate building blocks produce partial 5- to 6-protein matches (47–78% identity) against multiple reference clusters (pyreudione, enterobactin, trichrysobactin, serratiochelin and viobactin). Because only the shared catecholate core genes match—rather than an entire species-specific tailoring pathway—the manuscript reports Regions 1 and 9 as catecholate siderophore biosynthetic potential rather than assigning a single named siderophore product. Source: manuscript Section 3 and data/antiSMASH/SM-NMZ.tsv.');
 text(s,'Region 1 (NRP-metallophore / NRPS): entE, entF, mbtH, entS core',64,136,560,30,21,C.teal,true);
 text(s,'Region 9 (NRPS): 2nd catecholate NRPS locus (partial 5–6 gene matches)',648,136,568,30,21,C.teal,true);
 await fitimg(s,'antismash-sm-r1c1-metallophore-crop.png',64,172,560,365,'MIBiG comparison for SM-NMZ Region 1 showing catecholate siderophore core match');
 await fitimg(s,'antismash-sm-r1c9-metallophore-crop.png',648,172,568,365,'MIBiG comparison for SM-NMZ Region 9 showing partial catecholate NRPS match');
 text(s,'Both chromosomes encode two conserved catecholate siderophore assembly/export loci (entE, entF/entF2, mbtH, entS).',64,556,1152,36,23,C.teal,true);
 text(s,'Partial 5–6 protein MIBiG hits (47–78% identity) support catecholate class potential without over-claiming a named product.',64,602,1152,34,21,C.muted);
}

// Slide 14: C14-NMZ Region 7 (opine-like-metallophore) vs. SM-NMZ Regions 2 & 7 (NRPS)
{
 const s=slide('C14 Region 7 (opine metallophore) vs. SM Regions 2 & 7 (NRPS)',
  'This slide shows the symmetric accessory BGC differences between the two isolates outside Region 10. On the left, C14-NMZ uniquely carries Region 7 (opine-like-metallophore, 22.1 kb), which encodes nicotianamine-synthase-like and opine-dehydrogenase-like metallophore enzymes (CntM and CntL) flanked by exporters. Its MIBiG comparison shows a collinear 6-protein match (score 0.84, 64–86% identity, with one hit at ~47% coverage) to the Yersinia pestis yersinopine cluster (BGC0002490.2), supporting yersinopine-like metallophore potential in C14-NMZ. On the right, SM-NMZ uniquely carries two NRPS-family regions absent from C14-NMZ: Region 2 (NRPS-like, 43.0 kb), driven by NNLMDO_002205 with an A–PCP–TD (terminal reductase) domain architecture, and Region 7 (NRPS, 48.0 kb), encoding a two-module NRPS pair (NNLMDO_010830 C–A–PCP–TE and NNLMDO_010835 C–A–PCP) alongside a short-chain KR and alpha/beta-hydrolase (AbH). Reporting both sets of unique loci gives a balanced, symmetric view of the two chromosomes. Source: manuscript Section 3 and data/antiSMASH/.');
 text(s,'C14-NMZ Unique Region 7: opine-like metallophore (CntM + CntL)',64,136,560,30,21,C.teal,true);
 text(s,'SM-NMZ Unique Regions 2 (NRPS-like A–PCP–TD) & 7 (2-module NRPS)',648,136,568,30,21,C.gold,true);
 await fitimg(s,'antismash-c14-r1c7-opine-crop.png',64,172,560,368,'C14-NMZ Region 7 opine-like-metallophore map and 6-protein yersinopine MIBiG alignment');
 await fitimg(s,'antismash-sm-r1c2-r1c7-domains-crop.png',648,172,568,368,'SM-NMZ unique Region 2 (NRPS-like A–PCP–TD) and Region 7 (two-module NRPS) domain architectures');
 text(s,'Symmetric focal divergence: SM-NMZ has 4 NRPS + 1 NRPS-like regions; C14-NMZ has 3 NRPS + 1 opine-metallophore + 1 ranthipeptide.',64,556,1152,36,22.5,C.teal,true);
 text(s,'All three isolate-specific loci are retained as uncharacterized genomic candidates rather than assigned speculative compound names.',64,602,1152,34,21,C.muted);
}

// Slide 15: Same region number, different NRPS machinery: Region 10 in SM-NMZ vs. C14-NMZ
{
 const s=slide('Same region number, different NRPS machinery: Region 10',
  'Region 10 is the sharpest biosynthetic contrast between the two focal isolates and demonstrates why ordinal region numbers must be compared at the domain level. In SM-NMZ (left, 51.3 kb), Region 10 is a complex multi-gene NRPS/acyl-loading cassette: it encodes a standalone alpha/beta-hydrolase (AbH, NNLMDO_014990), a standalone type-II thioesterase (TE, NNLMDO_015030), a free-standing adenylation protein (A[Thr], NNLMDO_015035), a two-module NRPS (NNLMDO_015060: C–A[Val]–PCP–C–A[Ser]–PCP), a hybrid co-enzyme A ligase / NRPS module (NNLMDO_015065: CAL–ACP–C–A[Leu]–PCP), and a malonyl-CoA acyltransferase/carrier protein (NNLMDO_015080: PKS_AT–ACP). ClusterBlast shows 97–100% identity across ~30 collinear proteins to the Serratia marcescens UENF-22GI Gap1 locus. In C14-NMZ (right, 45.8 kb), Region 10 is an unrelated single-module D-Val NRPS (OJMJKD_018290: C–A[Val]–PCP–E–TIGR01720–C_DCL) located near a T6SS neighborhood. Neither locus encodes the multidomain stephensiolide synthetase, explaining why library-only “Stephensiolide G/K” LC-HRMS hits are treated with caution. Source: manuscript Section 3 and data/antiSMASH/.');
 text(s,'SM-NMZ Region 10: 3-module Gap1-like NRPS + CAL/ACP + AT/ACP + TE',64,136,560,30,20.5,C.teal,true);
 text(s,'C14-NMZ Region 10: single-module D-Val NRPS (C–A–PCP–E–C_DCL)',648,136,568,30,20.5,C.gold,true);
 await fitimg(s,'antismash-sm-r1c10-domains-crop.png',64,172,560,368,'SM-NMZ Region 10 NRPS/PKS domains showing the Gap1-like multi-protein NRPS/CAL/AT/TE architecture');
 await fitimg(s,'antismash-c14-r1c10-domains-crop.png',648,172,568,368,'C14-NMZ Region 10 NRPS/PKS domains showing the single-module D-Val epimerization NRPS architecture');
 text(s,'SM-NMZ Region 10 matches the S. marcescens UENF-22GI Gap1 cassette (97–100% id); C14-NMZ Region 10 is a 1-module D-Val NRPS.',64,556,1152,36,22.5,C.teal,true);
 text(s,'Neither architecture matches a canonical stephensiolide BGC—providing a clear structural check on untargeted LC-HRMS library hits.',64,602,1152,34,21,C.muted);
}

// Slide 16: Class-level RiPP, redox-cofactor (PQQ), beta-lactone and terpene-precursor calls
{
 const s=slide('Class-level RiPP, PQQ, beta-lactone and terpene calls',
  'Rounding out the 11-region antiSMASH inventory, this slide covers the five non-NRPS region types across SM-NMZ and C14-NMZ. Top left shows the shared Region 8 redox-cofactor locus (22.2 kb), which encodes the conserved pyrroloquinoline quinone (PQQ) biosynthesis operon (pqqA–pqqF; matching canonical PQQ reference clusters in KnownClusterBlast, while MIBiG Protocluster-to-Region shows only low-score flanking hits). Top right shows C14-NMZ unique Region 3 (ranthipeptide, 21.4 kb), detected by its radical SAM / SPASM domain protein (TIGR04085 / PF04055) and PqqD-like RiPP recognition element (RRE). The summary table below lists all five non-NRPS calls—including the shared Region 6 azole-containing-RiPP (YcaO + PF04055), the shared betalactone locus (SM Reg 3 / C14 Reg 2, HMGL-like + AMP-binding), and the shared Region 4 terpene-precursor locus (ispG / LytB-like). In our manuscript, PQQ is reported as a conserved redox cofactor pathway, while the RiPP, beta-lactone and terpene-precursor regions are reported strictly as class-level rule detections. Source: manuscript Section 3 and data/antiSMASH/antiSMASH-region-comparison.md.');
 text(s,'Shared Region 8 (redox-cofactor): conserved pqqA–pqqF PQQ operon',64,132,560,28,20,C.teal,true);
 text(s,'C14-NMZ Unique Region 3 (ranthipeptide): rSAM/SPASM + RRE locus',648,132,568,28,20,C.gold,true);
 await fitimg(s,'antismash-sm-r1c8-pqq-crop.png',64,164,560,218,'SM-NMZ Region 8 redox-cofactor PQQ locus');
 await fitimg(s,'antismash-c14-r1c3-ranthipeptide-crop.png',648,164,568,218,'C14-NMZ Region 3 ranthipeptide locus and TIGRFAM domains');
 table(s,[
  ['Region (SM / C14)','antiSMASH Rule Call','Core Rule Signature','Manuscript Interpretation'],
  ['Reg 8 / Reg 8','redox-cofactor','pqqA–pqqF operon (PqqD RRE + PqqE rSAM + PqqC)','Conserved PQQ redox-cofactor biosynthesis'],
  ['— / Reg 3 (C14 only)','ranthipeptide','Radical SAM / SPASM (TIGR04085) + PqqD RRE','Class-level RiPP call unique to C14-NMZ'],
  ['Reg 6 / Reg 6','azole-containing-RiPP','YcaO cyclodehydratase + PF04055 radical SAM','Conserved class-level RiPP call (no MIBiG hit)'],
  ['Reg 3 / Reg 2 & Reg 4 / Reg 4','betalactone & terpene-precursor','HMGL-like + AMP-binding (β-lactone); ispG (terpene)','Conserved primary/secondary class rule calls']
 ],{y:394,h:236,widths:[220,250,362,320],size:18.5});
}
```

### 5.4. Slide 17 (*SwrW evidence in the NMZ study*, formerly Slide 11) — Align Wording with Slide 18
Update the bottom teal callout on Slide 17 so it uses `"are consistent"` instead of `"agree"`:
```js
text(s,'The three evidence layers are consistent; targeted assays test whether SwrW drives crude-oil activity.',64,552,1152,38,24,C.teal,true);
```

### 5.5. Slide 30 (*Host-interaction genes*, formerly Slide 24) — Restore Explicit Safety/Pathogenicity Caveat on Slide Face
Update the bottom two callout lines on Slide 30:
```js
text(s,'VFDB sequence matches provide comparative context and do not quantify pathogenicity or establish environmental biosafety.',64,548,1152,40,22.5,C.gold,true);
text(s,'Deployment readiness requires dedicated antimicrobial susceptibility, virulence-expression and regulatory biosafety testing.',64,598,1152,36,20.5,C.muted);
```

### 5.6. Slide 31 (*The genomics contribution: evidence scoreboard*, formerly Slide 25) — Add Decisive Tests to Column 4
Update the 4-column table on Slide 31 so Column 4 names both the wet-lab assay slot and the decisive mechanistic test:
```js
{
 const s=slide('The genomics contribution: evidence scoreboard',
  'Lead the collaborative manuscript with the conserved swrW locus paired with the LC-HRMS serratamolide A (= serrawettin W1) and serratamolide C detections, the 14-gene pig cluster paired with red/pink colony pigmentation, and the extracellular-matrix repertoire featuring the SM-NMZ pgaDCBA difference. Connect the shared hpa/paa and SM-specific hydroxybenzoate/pca/gentisate loci to oxygenated-aromatic substrates, and present the LadA-like flavin monooxygenase as a bounded comparative candidate. The fourth column pairs each wet-lab assay slot with the decisive experimental test needed to move from genomic candidate to causal mechanism. Source: revised master and concise manuscripts, TYGS report, LC-HRMS-SM reports, and focal gene-neighborhood sidecars.');
 table(s,[
  ['System / locus','Genomic candidate','Chemistry / phenotype in hand','Assay slot & decisive test'],
  ['Biosurfactant (swrW)','Conserved 1-module NRPS (98.9% id)','LC-HRMS: serratamolide A (W1) & C','Tension, E24, pour point · ΔswrW + isolate LC-HRMS'],
  ['Pigment (pigA–pigN)','Conserved 14-gene cluster (87–100% id)','Red/pink colony pigmentation','Phenotypic confirmation complete (pigment extract)'],
  ['Biofilm / matrix','Shared CPS/EPS2/bcs + SM pgaDCBA','— (polymer chemistry unmeasured)','E24 stability · DspB (PNAG) & cellulase sensitivity'],
  ['Oxygenated aromatics','Shared hpa/paa + SM pobA/pca/gtdA','—','Single-substrate growth (4-HBA, PCA, phenylacetate)'],
  ['Alkane / monooxygenase','Fad β-oxidation + LadA-like (ssuD)','— (initiator unresolved)','Alkane GC-MS · purified enzyme FMNH2 assay']
 ],{y:142,h:415,widths:[235,305,285,327],size:20.5});
 text(s,'Next step: plug in the wet-lab assay tables and prioritize decisive tests for our joint paper.',64,585,1152,55,26,C.teal,true);
}
```

### 5.7. Slide 40 (*Backup B9: Conserved metabolic background (DRAM)*, formerly Slide 34) — Add Readable 3-Row Table of Varying Traits
Update Backup B9 (Slide 40) so the two DRAM overview heatmaps sit above a crisp 3-row native table showing the only 3 traits that vary within the 13-*Serratia* panel:
```js
{
 const s=slide('Conserved metabolic background (DRAM)',
  'Optional backup. DRAM profiled 98 curated metabolic and respiratory traits across the 14-genome panel (13 Serratia genomes plus the Prodigiosinella aquatilis PA-LS101 outgroup). Across all 14 genomes, 90 of 98 traits (91.8%) were invariant; within the 13 Serratia genomes, 95 of 98 traits (96.9%) were invariant, with 98.6% mean pairwise agreement. Both SM-NMZ and C14-NMZ scored 100% for glycolysis, the Entner-Doudoroff pathway, the pentose phosphate pathway, the TCA cycle, Complex I, fumarate reductase, cytochrome bd/o oxidases and the F-type ATPase. Because the full 98-column DRAM heatmaps are dense at slide scale, the table below isolates the only 3 traits that vary across the 13 Serratia genomes. This high core metabolic conservation explains why the main manuscript focuses on accessory biosurfactant, matrix and specialized aromatic loci. Source: manuscript Section 3 and NMZ-DRAM outputs.',true);
 await fitimg(s,'Figure3_DRAM.jpeg',64,132,545,250,'DRAM heatmap Panel A: central carbon metabolism and electron transport chain');
 await fitimg(s,'Figure3_DRAM2.jpeg',635,132,580,250,'DRAM heatmap Panel B: auxiliary CAZy, nitrogen, sulfur and reductase categories');
 table(s,[
  ['DRAM Trait (only 3/98 vary within Serratia)','SM-NMZ','C14-NMZ','Variation Across 13 Serratia Genomes'],
  ['Succinate dehydrogenase (ETC Complex II)','50%','75%','Ranges 50–100% module completeness across panel'],
  ['CAZy GH43 arabinan cleavage call','Absent','Absent','Present only in S. marcescens KS10 & S. nematodiphila DSM 21420'],
  ['Tetrathionate reductase marker (K08357)','Present','Present','Absent only in S. marcescens ATCC 13880 (present in 12/13)']
 ],{y:396,h:198,widths:[350,145,145,512],size:18.5});
 text(s,'95 of 98 DRAM traits (96.9%) are invariant across the 13 Serratia genomes; core metabolism is conserved.',64,606,1152,34,22,C.teal,true);
}
```

---

## 6. Step-by-Step Execution Checklist for the Implementing Agent (Flash / Sonnet / Codex)

1. **Step 1 — Verify Pre-Generated Assets**:
   - Confirm all 12 `antismash-*.png` files are present in `explainer/assets/`.
2. **Step 2 — Update `explainer/build_explainer.mjs` (31 Main + 9 Backups = 40 Slides)**:
   - Set `const MAIN_COUNT = 31;`.
   - Apply the Slide 5 callout tweak, replace the 2-slide antiSMASH block with the 8-slide visual walkthrough (`Slides 9–16`), apply the wording/caveat/scoreboard upgrades on Slides 17, 30, and 31, and upgrade Backup B9 (`Slide 40`) with the 3-row native table.
   - Run `node explainer/build_explainer.mjs` (with `RUNTIME_NODE_MODULES` set).
3. **Step 3 — Update `explainer/finalize_explainer.mjs` & Validate PPTX**:
   - Set `explicitTotalSlideCount: 40` and:
     ```js
     const requiredNativeTableOwnerSlides=[2,4,5,6,8,16,17,20,26,27,29,30,31,32,34,37,40];
     ```
   - Run `node explainer/finalize_explainer.mjs` (with `PRESENTATIONS_SKILL_DIR` and `RUNTIME_PYTHON` set).
   - Confirm `"slides": 40`, `"layoutFindings": 0`, and `"importPassed": true`. Adjust any box height or font size by 1 pt if needed until `"layoutFindings": 0`.
   - Copy the validated `.pptx` to `explainer/NMZ-Serratia-genomics-explainer-2026-10-20.pptx`.
4. **Step 4 — Update Companion Markdown & Rebuild PDFs**:
   - Update `explainer/outline-and-glossary.md`, `explainer/glossary.md`, and `explainer/README.md` to reflect the 31 main slides (`1`–`31`) and 9 backups (`B1`–`B9`).
   - Run `python explainer/build_glossary_and_preview.py` to regenerate the 40-page `NMZ-Serratia-genomics-explainer-2026-10-20.pdf` and `NMZ-Serratia-genomics-glossary-2026-10-20.pdf`.
   - Visually inspect the rendered slide PNGs (`slide-09.png` through `slide-16.png`, `slide-17.png`, `slide-30.png`, `slide-31.png`, and `slide-40.png`).

