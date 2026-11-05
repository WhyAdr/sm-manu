# Implementation Plan: NMZ *Serratia* Genomics Explainer Revision (2026-11-05)

## 1. Objective & Scope
Revise and expand the NMZ *Serratia* genomics explainer presentation (`manuscript/explainer/`) so that it:
1. Flows logically from **Genome Resources & Taxonomy** into a dedicated **antiSMASH / Biosynthetic Gene Cluster (BGC) & Biosurfactant** teaching block.
2. Explains how to read **antiSMASH v8.0.4** outputs across two new main teaching slides—contrasting the 11-region chromosome inventory, specific multi-gene matches (`pig` 16-protein 87–100% MIBiG match; conserved `swrW`), false-friend single-protein hits (`"ririwpeptide"` at 47% identity), and focal-pair Region 10 differences (**SM-NMZ** *Gap1*-like NRPS cassette vs. **C14-NMZ** single-module D-Val NRPS, explaining why `Stephensiolide G/K` library hits in the LC-HRMS report require caution).
3. Clearly states **closed circular chromosome** assemblies on the Genome Resources slide and explains why assembly closure guarantees intact 35–44 kb BGC neighborhoods.
4. Resolves visual/terminology questions for wet-lab colleagues:
   - On-slide callout for the baked-in Bakta/clinker taxonomy label (`Serratia nematodiphila C14-NMZ` from GTDB vs. TYGS *S. marcescens* species cluster 6).
   - Explicit synonymy **`serrawettin W1 (= serratamolide A)`** paired with **`serratamolide C`** across LC-HRMS rows `1` and `2` (covering both isolates).
   - Full organism and protein label for the outgroup sequence in the LadA subtree (`Ca. M. alkanivorans  NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)`) with a tightened X-axis so the tree fills the canvas cleanly.
5. Upgrades the closing slide into a **4-column Evidence Scoreboard** (`System / Locus` | `Genomic Candidate` | `Chemistry / Phenotype in Hand` | `Wet-Lab Assay Slot`).
6. Adds **Backup B9 (*DRAM conserved metabolic background*)** showing the 98-trait DRAM summary (90/98 invariant across all 14 genomes; 95/98 [96.9%] invariant across the 13 *Serratia* genomes) and `Figure3_DRAM.jpeg` / `Figure3_DRAM2.jpeg`.
7. Removes leftover `"About N minutes."` prefixes from all speaker notes and reframes bottom slide callouts from defensive caveats into constructive, collaborative takeaways.

---

## 2. Updated Slide Counts & File Inventory

- **Main Teaching Sequence**: **25 slides** (up from 23; adds 2 new antiSMASH teaching slides at **Slides 9 and 10**).
- **Optional Technical Backups**: **9 backups (`B1`–`B9`)** (up from 8; adds **Backup B9** on DRAM at **Slide 34**).
- **Total Slide Count**: **34 slides** (`explicitTotalSlideCount: 34` in `finalize_explainer.mjs`).

| File Path | Action | Purpose |
|---|---|---|
| `manuscript/explainer/build_lada_subtree.py` | Edit & Run | Replace `Comparison A0ABS9YXJ5` with full organism/protein label, tighten `xlim` so branches fill the plot area, and regenerate `assets/LadA-subtree.png` and `.svg`. |
| `manuscript/explainer/build_explainer.mjs` | Edit & Run | Implement the 25-main + 9-backup slide sequence (`MAIN_COUNT = 25`), strip `"About N minutes."` from notes, add new slides, upgrade closing scoreboard, and reframe bottom takeaways. |
| `manuscript/explainer/finalize_explainer.mjs` | Edit & Run | Update `explicitTotalSlideCount: 34` and `requiredNativeTableOwnerSlides` to match the 34-slide table layout, then run package/geometry validation. |
| `manuscript/explainer/build_glossary_and_preview.py` | Edit & Run | Update slide loop if needed, rebuild `NMZ-Serratia-genomics-explainer-2026-10-20.pdf` (34 pages) and `NMZ-Serratia-genomics-glossary-2026-10-20.pdf`. |
| `manuscript/explainer/outline-and-glossary.md` | Edit | Update outline table to reflect the 25 main slides and 9 backups (`B1`–`B9`). |
| `manuscript/explainer/glossary.md` | Edit | Ensure antiSMASH/MIBiG, *Gap1*/stephensiolide, `serrawettin W1 (= serratamolide A)`, and `A0ABS9YXJ5` entries align with the new slides. |
| `manuscript/explainer/README.md` | Edit | Update slide counts (`25 main slides`, `9 optional technical backups`) and summary notes. |

> **Preservation Rule**: Keep the established deliverable filenames (`NMZ-Serratia-genomics-explainer-2026-10-20.pptx`, `NMZ-Serratia-genomics-explainer-2026-10-20.pdf`, `NMZ-Serratia-genomics-glossary-2026-10-20.pdf`) unchanged. Do not modify any manuscript `.md` files or raw data files.

---

## 3. Complete Slide-by-Slide Map & Table Ownership (34 Slides)

| New Slide # | Label | Old Slide # | Title | Native Table? | Summary of Changes |
|---:|---|---:|---|---|---|
| **1** | `1` | 1 | NMZ Serratia genomics | No | Strip `"About 1 minute."` from speaker notes. |
| **2** | `2` | 2 | DNA, gene predictions and activity | **Yes** | Reframe bottom takeaway; strip `"About 1½ minutes."` from notes. |
| **3** | `3` | 3 | Reads, assembly and genome annotation | No | Add bottom callout explaining that the C14-NMZ Bakta circle displays the GTDB label (*S. nematodiphila*), contrasted with TYGS on Slide 5. |
| **4** | `4` | 4 | What each kind of evidence answers | **Yes** | Strip `"About 1½ minutes."` from notes. |
| **5** | `5` | *7* | **Genome resources and identity** | **Yes** | Moved up from Slide 7. State **`4.971 Mb (closed circular)`** and **`5.051 Mb (closed circular)`** in table; add note on why closed assemblies guarantee intact BGC neighborhoods and why Bakta/clinker images show the GTDB label. |
| **6** | `6` | *8* | **ANI and digital DNA–DNA hybridization** | **Yes** | Moved up from Slide 8. |
| **7** | `7` | *9* | **GTDB-Tk and TYGS workflows** | No | Moved up from Slide 9. |
| **8** | `8` | *5* | **Genes, neighborhoods, clusters and operons** | **Yes** | Moved to start the BGC block (was Slide 5). Contrasts multi-gene `pig` with single-gene `swrW`. |
| **9** | `9` | *NEW* | **Genome-wide BGC mining with antiSMASH** | No | **New Slide**: Embeds `Figure3_SM-NMZ-antismash-overview.jpeg` and `Figure3_C14-NMZ-antismash-overview.jpeg` side by side; explains the 11 chromosomal BGC regions per isolate, why region numbers are ordinal chromosome positions, and highlights shared vs. isolate-specific regions (e.g., C14 Region 3 ranthipeptide & Region 7 opine-like metallophore; Region 10 difference). |
| **10** | `10` | *NEW* | **Reading antiSMASH: specific vs. partial BGC hits** | **Yes** | **New Slide**: 4-row comparison table teaching how to evaluate antiSMASH/MIBiG matches: (1) **Region 5 `pig`** (16 proteins, 87–100% identity → specific prodigiosin backbone), (2) **Region 11 `swrW`** (raw `"ririwpeptide"` MIBiG hit is only 1 protein at 47% identity/45.9% coverage → curate as SwrW serrawettin W1 synthetase), (3) **Regions 1 & 9 siderophores** (5–6 proteins, 47–78% identity → metallophore class potential, not named trichrysobactin/viobactin), (4) **Region 10 focal difference** (SM *Gap1*-like 3-module NRPS vs. C14 single-module D-Val NRPS → neither supports canonical stephensiolide assignment). |
| **11** | `11` | *6* | **SwrW evidence in the NMZ study** | **Yes** | Was Slide 6. Table updated with `serratamolide A (= serrawettin W1) & serratamolide C`; constructive bottom takeaway. |
| **12** | `12` | *10* | **SwrW and reported serratamolides** | No | Was Slide 10. Explicitly states `LC-HRMS (rows 1 & 2, both isolates): serrawettin W1 (= serratamolide A) & serratamolide C`; strips `"About 2 minutes."` |
| **13** | `13` | 11 | Extracellular matrices and surface activity | No | Was Slide 11. Constructive takeaway on `pgaDCBA` focal difference; strips `"About 2 minutes."` |
| **14** | `14` | 12 | EPS, CPS and matrix polysaccharides | **Yes** | Was Slide 12. Constructive takeaway comparing small lipopeptides vs. matrix polymers. |
| **15** | `15` | 13 | Capsule loci and the HADEG markers | No | Was Slide 13. Constructive takeaway on `wzb`/`wzc` group-1 capsule regulators. |
| **16** | `16` | 14 | Cellulose-associated loci in both isolates | No | Was Slide 14. |
| **17** | `17` | 15 | Aromatic metabolism depends on the substrate | No | Was Slide 15. Constructive takeaway; strips `"About 2 minutes."` |
| **18** | `18` | 16 | The HADEG Toluene_degradation hit | **Yes** *(No, image+text)* | Was Slide 16 (no table). Constructive takeaway on `NNLMDO_011765`. |
| **19** | `19` | 17 | LadA and the alkane-oxidation hypothesis | No | Was Slide 17. |
| **20** | `20` | 18 | LadA evidence across the literature | **Yes** | Was Slide 18. Constructive takeaway. |
| **21** | `21` | 19 | Initial alkane oxidation | **Yes** | Was Slide 19. Constructive takeaway; strips `"About 1½ minutes."` |
| **22** | `22` | 20 | The LadA-like comparison | No | Was Slide 20. Uses updated `LadA-subtree.png` with full `Ca. M. alkanivorans NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)` label and tightened X-axis; strips `"About 2 minutes."` |
| **23** | `23` | 21 | Matching assays to genomic candidates | **Yes** | Was Slide 21. Constructive takeaway; strips `"About 2 minutes."` |
| **24** | `24` | 22 | Host-interaction genes | **Yes** | Was Slide 22. Constructive takeaway; strips `"About 1 minute."` |
| **25** | `25` | 23 | **The genomics contribution: evidence scoreboard** | **Yes** | Was Slide 23. Upgraded to a **4-column Evidence Scoreboard** (`System / Locus`, `Genomic Candidate`, `Chemistry / Phenotype in Hand`, `Wet-Lab Assay Slot`); strips `"About 1 minute, then discussion."` |
| **26** | `B1` | 24 (B1) | Workflow and tools by purpose | **Yes** | Backup B1. |
| **27** | `B2` | 25 (B2) | The TYGS genome phylogram | No | Backup B2. |
| **28** | `B3` | 26 (B3) | Taxonomic comparisons | **Yes** | Backup B3. |
| **29** | `B4` | 27 (B4) | Reading the SwrW neighborhood | No | Backup B4. |
| **30** | `B5` | 28 (B5) | Reading HADEG marker categories | No | Backup B5. |
| **31** | `B6` | 29 (B6) | Chemical assignments and peak areas | **Yes** | Backup B6. Updated bottom takeaway with `serratamolide A (= serrawettin W1)`. |
| **32** | `B7` | 30 (B7) | Additional SM aromatic candidates | No | Backup B7. |
| **33** | `B8` | 31 (B8) | LadA-like genomic neighborhoods | No | Backup B8. |
| **34** | `B9` | *NEW* | **Conserved metabolic background (DRAM)** | No | **New Backup B9**: Shows `Figure3_DRAM.jpeg` and `Figure3_DRAM2.jpeg` side by side with key stats (90/98 traits [91.8%] invariant across all 14 genomes; 95/98 [96.9%] invariant across the 13 *Serratia* genomes; complete glycolysis, ED, PPP, TCA, fumarate reductase; only SDH, GH43 arabinan, and K08357 tetrathionate vary within *Serratia*). |

> **Exact `requiredNativeTableOwnerSlides` for `finalize_explainer.mjs`**:
> Under this 34-slide numbering, native tables occur on slides:
> ```js
> const requiredNativeTableOwnerSlides=[2,4,5,6,8,10,11,14,20,21,23,24,25,26,28,31];
> ```
> And `explicitTotalSlideCount` in `finalize_explainer.mjs` is `34`.

---

## 4. Detailed Specifications for Each Change

### 4.1. Closed Circular Assemblies & Bakta Taxonomy Callout (Slides 3 & 5)

1. **Slide 3 (*Reads, assembly and genome annotation*)**:
   - Replace the bottom muted caption (`y=624`) with:
     `Left/centre: EMBL-EBI teaching examples · Right: C14-NMZ Bakta plot (shows GTDB S. nematodiphila label; see Slide 5)`
   - In Slide 3 speaker notes, add:
     `The center text of the C14-NMZ Bakta plot displays Serratia nematodiphila from the GTDB-Tk assignment supplied during annotation; Slide 5 explains how that compares with the TYGS species-cluster result.`

2. **Slide 5 (*Genome resources and identity*, moved from Slide 7)**:
   - Update the table values to explicitly include **`closed circular`**:
     ```js
     table(s,[
       ['Feature','SM-NMZ','C14-NMZ'],
       ['Chromosome (closed circular)','4.971 Mb','5.051 Mb'],
       ['Additional replicon','3.581-kb circular plasmid','None recovered'],
       ['Bakta CDSs','4,566','4,626'],
       ['GTDB r232 / TYGS cluster','S. marcescens / cluster 6 (sub 11)','S. nematodiphila / cluster 6 (sub 10)']
     ],{h:350,widths:[400,376,376],size:25});
     ```
   - Update bottom callouts:
     - Teal (`y=545`, `size=27`): `Closed circular chromosomes ensure our 35–44 kb BGC neighborhoods are complete and unbroken.`
     - Muted (`y=605`, `size=23`): `TYGS groups both in S. marcescens cluster 6; Bakta and clinker plots retain C14-NMZ's GTDB label (S. nematodiphila).`
   - Update speaker notes for Slide 5 to remove `"About 2 minutes."` and add:
     `Both chromosomes were reconstructed as closed circular replicons by Autocycler consensus assembly, dnaapler reorientation and Dorado polishing. Having closed genomes rather than fragmented short-read contigs means multi-gene biosynthetic clusters and 43.9-kb synteny windows can be compared end-to-end without contig breaks.`

---

### 4.2. New Main Slides on Reading antiSMASH (Slides 9 & 10)

Insert these two slides in `build_explainer.mjs` immediately after Slide 8 (*Genes, neighborhoods, clusters and operons*) and before Slide 11 (*SwrW evidence in the NMZ study*):

#### **Slide 9: `Genome-wide BGC mining with antiSMASH`**
- **Visuals**: Place `Figure3_SM-NMZ-antismash-overview.jpeg` (left) and `Figure3_C14-NMZ-antismash-overview.jpeg` (right) side by side using `fitimg`:
  ```js
  text(s,'SM-NMZ · 11 chromosomal BGC regions',64,142,540,36,26,C.teal,true);
  text(s,'C14-NMZ · 11 chromosomal BGC regions',666,142,550,36,26,C.teal,true);
  await fitimg(s,'Figure3_SM-NMZ-antismash-overview.jpeg',64,188,540,320,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in SM-NMZ');
  await fitimg(s,'Figure3_C14-NMZ-antismash-overview.jpeg',666,188,550,320,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in C14-NMZ');
  text(s,'Shared core: prodigiosin (Reg 5), SwrW NRPS (Reg 11), PQQ (Reg 8), siderophore/RiPP classes.',64,538,1152,42,26,C.teal,true);
  text(s,'Focal differences: C14 ranthipeptide (Reg 3) & opine metallophore (Reg 7); distinct Reg 10 NRPSs.',64,594,1152,40,24,C.muted);
  ```
- **Speaker Notes**:
  `antiSMASH v8.0.4 scans each closed chromosome for biosynthetic gene clusters (BGCs) using domain rules. Both SM-NMZ and C14-NMZ carry 11 chromosomal regions, all internal to the chromosome (contig_edge=False). Because region numbers are assigned sequentially along each chromosome, matching region numbers do not automatically mean identical pathways. Both isolates share the Region 5 prodigiosin cluster, the Region 11 SwrW aminolipid synthetase, the Region 8 PQQ redox-cofactor cassette, and class-level siderophore, RiPP, beta-lactone and terpene-precursor calls. Key differences between the two genomes occur at Region 3 (NRPS-like in SM vs. ranthipeptide in C14), Region 7 (NRPS in SM vs. a yersinopine-like opine metallophore in C14), and Region 10 (two distinct NRPS architectures). Source: manuscript Section 3 and antiSMASH v8.0.4 outputs.`

#### **Slide 10: `Reading antiSMASH: specific vs. partial BGC hits`**
- **Native Table** (4 data rows, contrasting high-confidence vs. partial/misleading database labels):
  ```js
  table(s,[
    ['Region / Call','Database match details','Scientific interpretation for our paper'],
    ['Region 5: prodigiosin (pig)','16 proteins at 87–100% MIBiG identity','Specific 14-gene pathway; matches red/pink phenotype'],
    ['Region 11: NRPS (swrW)','Raw MIBiG hit: “ririwpeptide” (1 gene, 47% id)','Ignore weak label; curated C–A–PCP–TE is SwrW (W1)'],
    ['Regions 1, 7 & 9: metallophores','5–6 proteins at 47–86% MIBiG identity','Siderophore/metallophore potential, not named products'],
    ['Region 10: focal NRPS difference','SM: Gap1-like 3-module · C14: 1-module D-Val','Distinct uncharacterized NRPSs; not canonical stephensiolide']
  ],{y:148,h:380,widths:[315,395,442],size:23});
  text(s,'Only high-coverage, multi-feature matches (pig, swrW) anchor named metabolite claims.',64,556,1152,40,27,C.teal,true);
  text(s,'Explains why LC-HRMS library hits like “stephensiolide” are not assigned to Region 10.',64,608,1152,36,24,C.muted);
  ```
- **Speaker Notes**:
  `This table shows why antiSMASH KnownClusterBlast/MIBiG labels must be checked before naming a compound in the manuscript. Region 5 matches 16 proteins of the prodigiosin reference at 87–100% identity with near-full-length coverage, supporting a specific pathway call that aligns with the red/pink cultures. By contrast, in Region 11 the automatic top MIBiG label is “ririwpeptide A/B/C,” but that match covers only one protein at 47% identity and 45.9% coverage. Inspecting the actual CDS and its Ser-selective C–A–PCP–TE domain organization identifies it as SwrW, the serrawettin W1/serratamolide synthetase. Similarly, the partial 5- to 6-protein matches to trichrysobactin, viobactin or yersinopine in Regions 1, 7 and 9 support siderophore/metallophore class potential rather than those exact named compounds. Finally, Region 10 differs sharply between the isolates: SM-NMZ carries a 3-module Gap1-like NRPS/acyl-loading locus (matching Serratia marcescens UENF-22GI Gap1 across ~30 proteins at 97–100% identity), whereas C14-NMZ carries a single-module D-Val NRPS near a T6SS neighborhood. Neither architecture matches a canonical stephensiolide synthetase, which is important context when reviewing library-only stephensiolide hits in the untargeted LC-HRMS screening tables. Source: manuscript Section 3, Matteoli et al. (2018), Shanks et al. (2012), Harris et al. (2004).`

---

### 4.3. Tightening the LadA Subtree X-Axis & Full Outgroup Label (`build_lada_subtree.py` & Slide 22)

In `manuscript/explainer/build_lada_subtree.py`:
- The maximum root-to-tip distance in the extracted clade is `~0.983` substitutions/site (the `A0ABS9YXJ5` tip is at `0.7048`, and `BAM76377.1` is at `0.2786 + 0.2004 + 0.1192 + 0.5230 = 1.121` from the clade root). Previously, `ax.set_xlim(-0.03, 1.7)` left a large blank margin on the right while ticks ran out to `1.6`.
- Update `manuscript/explainer/build_lada_subtree.py` so the labels are informative and the x-axis is tightened to fit the tree + labels snugly without wasted whitespace:
  ```python
  labels=dict(zip(names,[
      'SM-NMZ  NNLMDO_015255 (focal candidate)',
      'C14-NMZ  OJMJKD_015520 (focal candidate)',
      'G. thermoleovorans B23  LadA-alpha (BAM76377.1)',
      'G. thermodenitrificans NG80-2  Canonical LadA (A4IU28)',
      'Ca. M. alkanivorans  NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)'
  ]))
  ```
- Adjust figure width/limits (`figsize=(12, 3.9)`, `ax.set_xlim(-0.02, 1.48)`, `fontsize=11.5` for tip labels) so the tree occupies more of the horizontal span while keeping the full `Ca. M. alkanivorans  NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)` text completely inside the axes box.

---

### 4.4. Upgrading the Closing Slide (Slide 25, formerly Slide 23) to the 4-Column Evidence Scoreboard

Replace the 2-column table on the final main slide (`The genomics contribution to the paper`) with a 4-column scoreboard that maps every major genomic finding to its current chemical/phenotypic evidence and its corresponding wet-lab assay slot:

```js
{
 const s=slide('The genomics contribution: evidence scoreboard',
  'Lead the collaborative manuscript with the conserved swrW locus paired with the LC-HRMS serratamolide A (= serrawettin W1) and serratamolide C detections, the 14-gene pig cluster paired with red/pink colony pigmentation, and the extracellular-matrix repertoire featuring the SM-NMZ pgaDCBA difference. Connect the shared hpa/paa and SM-specific hydroxybenzoate/pca/gentisate loci to oxygenated-aromatic substrates, and present the LadA-like flavin monooxygenase as a bounded comparative candidate. Once the wet-lab team supplies the final numerical tables for surface tension, E24, substrate conversion and pour point, each assay plugs directly into its matching row below. Source: revised master and concise manuscripts, TYGS report, LC-HRMS-SM reports, and focal gene-neighborhood sidecars.');
 table(s,[
  ['System / locus','Genomic candidate','Chemistry / phenotype in hand','Wet-lab assay slot'],
  ['Biosurfactant (swrW)','Conserved 1-module NRPS (98.9% id)','LC-HRMS: serratamolide A (W1) & C','Surface tension, E24 & pour point'],
  ['Pigment (pigA–pigN)','Conserved 14-gene cluster (87–100% id)','Red/pink colony pigmentation','Phenotypic confirmation complete'],
  ['Biofilm / matrix','Shared CPS/EPS2/bcs + SM pgaDCBA','— (polymer chemistry unmeasured)','E24 stability & biofilm/emulsion role'],
  ['Oxygenated aromatics','Shared hpa/paa + SM pobA/pca/gtdA','—','Aromatic substrate conversion'],
  ['Alkane / monooxygenase','Fad β-oxidation + LadA-like (ssuD)','— (initiator unresolved)','Alkane / crude-oil transformation']
 ],{y:142,h:415,widths:[245,320,305,282],size:22});
 text(s,'Next step: plug in the wet-lab assay tables to finalize our joint Results & Discussion.',64,585,1152,55,28,C.teal,true);
}
```

---

### 4.5. Adding Backup B9: Conserved Metabolic Background (DRAM) (Slide 34)

Append a 9th backup slide (`B9`, Slide 34) at the end of `build_explainer.mjs`:

```js
{
 const s=slide('Conserved metabolic background (DRAM)',
  'Optional backup. DRAM profiled 98 curated metabolic and respiratory traits across the 14-genome panel (13 Serratia genomes plus the Prodigiosinella aquatilis PA-LS101 outgroup). Across all 14 genomes, 90 of 98 traits (91.8%) were invariant; within the 13 Serratia genomes, 95 of 98 traits (96.9%) were invariant, with 98.6% mean pairwise agreement. Both SM-NMZ and C14-NMZ scored 100% for glycolysis, the Entner-Doudoroff pathway, the pentose phosphate pathway, the TCA cycle, Complex I, fumarate reductase, cytochrome bd/o oxidases and the F-type ATPase. Within Serratia, only succinate-dehydrogenase completeness (75% in C14-NMZ vs. 50% in SM-NMZ), the GH43 arabinan CAZy call and the K08357 tetrathionate-reduction marker varied. This high core metabolic conservation explains why the main manuscript focuses on accessory biosurfactant, matrix and specialized aromatic loci. Source: manuscript Section 3 and NMZ-DRAM outputs.',true);
 await fitimg(s,'Figure3_DRAM.jpeg',64,138,545,415,'DRAM heatmap Panel A: central carbon metabolism and electron transport chain');
 await fitimg(s,'Figure3_DRAM2.jpeg',635,138,580,415,'DRAM heatmap Panel B: auxiliary CAZy, nitrogen, sulfur and reductase categories');
 text(s,'95 of 98 DRAM traits (96.9%) are invariant across the 13 Serratia genomes.',64,568,1152,40,28,C.teal,true);
 text(s,'Core carbon and respiratory pathways are conserved; key differences live in accessory loci.',64,618,1152,36,24,C.muted);
}
```

---

### 4.6. Speaker Notes Cleanup & Constructive Takeaway Reframing

1. **Remove all `"About N minutes."` prefixes** from `build_explainer.mjs` speaker notes (formerly on Slides 1, 2, 4, 7, 10, 11, 15, 19, 20, 21, 22, 23) so every slide note starts directly with substantive explanation.
2. **Apply the constructive bottom takeaways** across all slides (as detailed in Section 3.5 of the earlier draft and integrated into the slide specifications above):
   - **Slide 2**: `Genomic predictions identify the candidate genes and pathways to connect with our lab assays.`
   - **Slide 11 (was 6)**: `Genomics (swrW) + LC-HRMS (serratamolide A/C) anchor the biosurfactant story.` / `Wet-lab tension, E24 and pour-point assays show the functional performance of the extracts.`
   - **Slide 12 (was 10)**: `LC-HRMS (rows 1 & 2, both isolates): serrawettin W1 (= serratamolide A) & serratamolide C` / `The conserved 14-gene pig cluster likewise matches the red/pink culture phenotype.`
   - **Slide 13 (was 11)**: `Both isolates share capsule and cellulose loci; SM-NMZ adds the contiguous pgaDCBA (PNAG) cluster.` / `Provides a concrete genomic hypothesis if SM-NMZ and C14-NMZ differ in biofilm or emulsion stability.`
   - **Slide 14 (was 12)**: `Distinguishing small lipopeptides (SwrW) from matrix polymers (PNAG, cellulose, CPS) clarifies how fractions work.` / `Whole-broth vs. solvent-extract assays will reflect different combinations of these components.`
   - **Slide 15 (was 13)**: `PTP: tyrosine phosphatase · Wzc: tyrosine kinase (conserved group-1 capsule regulators)` / `Resolving the HADEG “Emulsan” hit into a native Serratia capsule locus keeps our paper's terminology accurate.`
   - **Slide 17 (was 15)**: `Shared hpa/paa pathways + SM-specific hydroxybenzoate/pca/gentisate loci show strong oxygenated-aromatic capacity.` / `Pairs directly with plant-derived or oxygenated aromatic substrates in mixed hydrocarbon settings.`
   - **Slide 18 (was 16)**: `SM NNLMDO_011765 encodes a 4-hydroxybenzoate hydroxylase candidate alongside pcaK.` / `Explains the HADEG “Toluene_degradation” bubble as a downstream aromatic-acid step rather than upper toluene oxidation.`
   - **Slide 20 (was 18)**: `Citing both classical LadA reports and the 2025 reassessment makes our monooxygenase discussion literature-proof.`
   - **Slide 21 (was 19)**: `Both genomes have strong downstream fatty-acid (β-oxidation) assimilation, while the initial alkane oxidation step remains open.`
   - **Slide 22 (was 20)**: `100% UFBoot pairing within the 99%-supported LadA-associated clade identifies a conserved group-C flavin monooxygenase.` / `Its conserved ssuD–ydhS–metNPQ neighborhood highlights a dual sulfur/alkane-family research lead.`
   - **Slide 23 (was 21)**: `Ready to plug in the experimental team's tension, E24, conversion and pour-point numbers.`
   - **Slide 24 (was 22)**: `ShlA–ShlB, Has and T6SS homologs explain iron acquisition and niche competition; framed as comparative context.`
   - **Slide 31 (B6, was 29)**: `LC-HRMS serratamolide A (= serrawettin W1) and C detections pair directly with the conserved swrW locus.`

---

## 5. Step-by-Step Execution Checklist for the Implementing Agent (Codex / Claude)

1. **Step 1 — Regenerate LadA Subtree (`build_lada_subtree.py`)**:
   - Update `labels`, set `ax.set_xlim(-0.02, 1.48)`, and run `python manuscript/explainer/build_lada_subtree.py`.
   - Visually inspect `manuscript/explainer/assets/LadA-subtree.png` to ensure the full `Ca. M. alkanivorans  NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)` label is crisp and unclipped, and the tree branches fill the horizontal space cleanly.
2. **Step 2 — Update `build_explainer.mjs` (25 Main + 9 Backups = 34 Slides)**:
   - Set `const MAIN_COUNT = 25;`.
   - Reorder the Taxonomy slides to Slides 5–7, add the two new antiSMASH slides at Slides 9–10, update Slide 25 to the 4-column Evidence Scoreboard, add Backup B9 (DRAM) at Slide 34, strip `"About N minutes."` from all speaker notes, and apply the constructive bottom takeaways.
   - Run `node manuscript/explainer/build_explainer.mjs` (with `RUNTIME_NODE_MODULES` set).
3. **Step 3 — Update `finalize_explainer.mjs` & Validate PPTX**:
   - Set `explicitTotalSlideCount: 34` and `const requiredNativeTableOwnerSlides=[2,4,5,6,8,10,11,14,20,21,23,24,25,26,28,31];`.
   - Run `node manuscript/explainer/finalize_explainer.mjs` (with `PRESENTATIONS_SKILL_DIR` and `RUNTIME_PYTHON` set).
   - Confirm `"slides": 34`, `"layoutFindings": 0`, and `"importPassed": true`. If any text box triggers a layout finding (e.g., line-wrap height overflow), adjust `fontSize` by 1–2 pt or increase box `height` slightly and re-run until `"layoutFindings": 0`.
   - Copy the validated `.pptx` to `manuscript/explainer/NMZ-Serratia-genomics-explainer-2026-10-20.pptx`.
4. **Step 4 — Update Companion Markdown & Rebuild PDFs**:
   - Update `manuscript/explainer/outline-and-glossary.md`, `manuscript/explainer/glossary.md`, and `manuscript/explainer/README.md` to reflect the 25 main slides and 9 backups.
   - Run `python manuscript/explainer/build_glossary_and_preview.py` to regenerate the 34-page `NMZ-Serratia-genomics-explainer-2026-10-20.pdf` and `NMZ-Serratia-genomics-glossary-2026-10-20.pdf`.
   - Inspect the rendered PNGs (`slide-01.png` to `slide-34.png`) in `tmp/explainer-expansion-2026-10-21/`.
