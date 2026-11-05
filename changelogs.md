# Project Changelogs: Serratia Research Manuscript

This document maintains a chronological record of all project milestones, manuscript authoring progress, bioinformatics analyses, figure curation, citation audits, and workspace memory updates for the research manuscript on *Serratia* sp. **SM-NMZ** and *Serratia* sp. **C14-NMZ**.

---

## Workspace & Project Summary
- **Primary Draft File**: [master-manuscript.md](master-manuscript.md)
- **Workspace Memory**: [.agents/AGENTS.md](file:///d:/W/serratia-research/.agents/AGENTS.md)
- **Git Repository**: `d:\W\serratia-research\manuscript` (branch `main`, remote: `https://github.com/WhyAdr/sm-manu`)
- **Key Focus**: Whole Genome Sequencing, consensus assembly, functional annotation, hydrocarbonoclastic (MEOR / alkane degradation), biosurfactant / pour point depressant (PPD), and comparative phylogenomic analysis across a 14-genome dataset.

---

## Chronological Progress & Milestones

### Explainer revision with antiSMASH teaching block and evidence scoreboard

* **Date**: 5–6 November 2026
* **Git Commit**: `d8f8170` (*Revise genomics explainer with antiSMASH and evidence scoreboard*)
* **Key Achievements**:
  - Expanded and restructured the explainer presentation (`manuscript/explainer/`) to **34 slides** (**25 main slides** and **9 optional technical backups `B1`–`B9`**), validated with zero geometry or layout defects across 16 native PowerPoint tables (`explicitTotalSlideCount: 34`, `finding_count: 0`, Arial policy enforced).
  - Synchronized all companion files ([speaker-notes.md](file:///d:/W/serratia-research/manuscript/explainer/speaker-notes.md), [outline-and-glossary.md](file:///d:/W/serratia-research/manuscript/explainer/outline-and-glossary.md), [glossary.md](file:///d:/W/serratia-research/manuscript/explainer/glossary.md), [README.md](file:///d:/W/serratia-research/manuscript/explainer/README.md)) and rebuilt the 34-page preview ([NMZ-Serratia-genomics-explainer-2026-10-20.pdf](file:///d:/W/serratia-research/manuscript/explainer/NMZ-Serratia-genomics-explainer-2026-10-20.pdf)) and standalone glossary PDF ([NMZ-Serratia-genomics-glossary-2026-10-20.pdf](file:///d:/W/serratia-research/manuscript/explainer/NMZ-Serratia-genomics-glossary-2026-10-20.pdf)).
  - Re-paced narrative flow: moved **Genome resources and identity** and taxonomic comparisons (**Slides 5–7**) immediately after **What each kind of evidence answers** (**Slide 4**), establishing isolate provenance and closed circular assembly properties (4.971 Mb SM-NMZ + 3.581 kb plasmid; 5.051 Mb C14-NMZ) before biosynthetic mining. Added callouts explaining that Bakta/clinker images show GTDB's *S. nematodiphila* label for C14-NMZ whereas TYGS places both in *S. marcescens* species cluster 6.
  - Authored a dedicated **antiSMASH v8.0.4 BGC teaching block** (**Slides 8–10**):
    - **Slide 9 (*Genome-wide BGC mining with antiSMASH*)**: side-by-side presentation of the 11-region chromosome overviews (`Figure3_SM-NMZ-antismash-overview.jpeg` and `Figure3_C14-NMZ-antismash-overview.jpeg`), explaining ordinal cluster coordinates and shared vs. isolate-specific regions.
    - **Slide 10 (*Reading antiSMASH: specific vs. partial BGC hits*)**: structured comparative table contrasting specific multi-gene matches (Region 5 *pig*, 16 proteins at 87–100% identity), rule calls with weak hits requiring curation (Region 11 *swrW* vs. single-protein 47% identity "ririwpeptide"), partial siderophore/metallophore families (Regions 1 & 9), and focal Region 10 NRPS divergence (SM-NMZ 3-module Gap1-like cassette vs. C14-NMZ 1-module D-Val NRPS).
  - Explicitly aligned surfactant nomenclature on slide faces (**Slides 11, 12, and 31 [B6]**): displayed **`Serrawettin W1 (= serratamolide A) and serratamolide C`** so non-specialist readers recognize synonymy.
  - Refined LadA phylogenetic subtree visualization (**Slide 22**): updated `build_lada_subtree.py` with full biological organism/protein labels (`Ca. M. alkanivorans NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)`, `G. thermoleovorans B23 LadA-alpha (BAM76377.1)`, `G. thermodenitrificans NG80-2 LadA (A4IU28)`), tightened axis limits (`xlim(-0.02, 1.48)`), and suppressed redundant root branch-support labels.
  - Upgraded the closing summary to a **4-column Evidence Scoreboard** (**Slide 25**): organized across all five functional themes (`System / locus` | `Genomic candidate` | `Chemistry / phenotype in hand` | `Wet-lab assay slot`) with a collaborative prompt to integrate co-author endpoints.
  - Added **Backup B9 (*Conserved metabolic background (DRAM)*)** (**Slide 34**): paired DRAM panels (`Figure3_DRAM.jpeg` & `Figure3_DRAM2.jpeg`) demonstrating 90/98 (91.8%) all-genome and 95/98 (96.9%) *Serratia*-wide trait invariance.
  - Reframed slide bottom callouts as constructive, action-oriented bridges to wet-lab assays, and stripped leftover `"About N minutes."` timing prefixes from all speaker notes.

---

### Explainer expansion with visual concepts and evidence examples

* **Date**: 21–22 October 2026
* **Git Commit**: `7d245d3` (*Expand genomics explainer with visual concepts and evidence examples*)
* **Key Achievements**:
  - Expanded the teaching sequence from 20 slides (`12 main + 8 backups`) to **31 slides** (**23 main + 8 backups**).
  - Added dedicated visual concepts and evidence examples to explain sequencing reads, assembly mechanics, gene prediction fundamentals, and genomic evidence boundaries to non-specialist collaborators.

---

### Phylogram export and publication wording revision

* **Date**: 21 October 2026
* Replaced the genome phylogram in the master, both concise drafts and the PowerPoint with the author's wider 1,112 × 950 px export. The displayed taxon, support and branch-length labels are unchanged.
* Standardized manuscript and presentation wording to “TYGS analysis” and “whole-genome distance phylogram.” Renamed the published evidence directory to `data/TYGS` and the figure to `Figure_TYGS-genome-phylogram`.
* Removed sequence-length reconciliation remarks from manuscript narrative, slides and speaker notes. The taxonomy backup now presents GTDB ANI/AF values alongside the dDDH comparisons. Refreshed the presentation and PDF preview, retaining 12 main slides and 8 backups.

---

### final-assembly TYGS integration and research-group explainer

* **Date**: 20 October 2026
* Replaced the separate TYGS trees with the consolidated final-assembly phylogram in the master and both concise manuscripts. Archived the report, workbooks, distance matrices and tree exports with checksums and extracted TSV tables.
* Verified exact TYGS/Bakta total-length parity: SM-NMZ 4,974,098 bp, including its 3,581-bp plasmid; C14-NMZ 5,050,553 bp. Kept TYGS protein predictions distinct from Bakta CDS counts.
* Added the direct focal-pair dDDH(d4) of 74.2% (71.2–77.0%). Explicitly reported TYGS's identification of both queries as S. marcescens in one species cluster alongside GTDB's separate species assignments. Subspecies-cluster IDs remain operational labels.
* Preserved the Bakta table, bibliography, all non-taxonomy Results prose and existing scientific figures, including both agreed assay-theme treatments.
* Created the explainer in `explainer/`: 12 main slides with 8 optional technical backups, explanatory speaker notes and primary references, a slide PDF preview, and a three-page glossary. Scientific figure crops and a source-derived LadA subtree teach interpretation without inventing unavailable assay results.

---

### Milestone 1: Materials & Methods Authoring (Sections A–E)
* **Date / Phase**: Phase 1
* **Git Commit**: `a5eceb7` (*Initial draft of Materials and Methods (Genomics)*)
* **Key Achievements**:
  - Authored **Section A (Whole Genome Sequencing)**: PromethION long-read sequencing protocols, GeneAid gDNA extraction, SQK-RBK114.24 library prep, R10.4.1 flow cell, and MinKNOW basecalling (`dna_r10.4.1_e8.2_400bps_sup@v5.0.0`).
  - Authored **Section B (De Novo Assembly and Genome Annotation)**: NanoPlot QC, Chopper/Filtlong read filtering, Autocycler ensemble assembly integrating 7 assemblers (Flye, Canu, Hifiasm, Raven, Plassembler, Myloasm, metaMDBG), `dnaapler` circular chromosome reorientation, Dorado polish, Bakta annotation, and CANT-HYD HMM hydrocarbon profiling.
  - Authored **Section C (Taxonomic Identity Confirmation, BGC Analysis, & Characterization)**: TYGS whole-genome species identification, GTDB-Tk `classify_wf`, LPSN/GTDB nomenclature, antiSMASH secondary metabolite BGC mining, DRAM functional distillation, and VFDB (`VF_classifier`) virulence factor analysis.
  - Authored **Section D (Profiling of Hydrocarbonoclastic and Biosurfactant Production Potential)**: HADEG pipeline integration and custom Biopython scripts (`genbank-parser`, `antiSMASH-review`).
  - Authored **Section E (Comparative Proteome Orthology and LadA Monooxygenase Phylogeny)**: ProteinOrtho (v6.3.6) DIAMOND-based orthology clustering (PoFF mode), BLASTp identification of LadA family enzymes ($ladA\alpha$, $ladA\beta$, $ladB$ from *G. thermoleovorans* B23, canonical LadA from *G. thermodenitrificans* NG80-2, and 19 functional controls), MAFFT L-INS-i alignment, ClipKIT smart-gap trimming, IQ-TREE 3 maximum-likelihood tree (`Q.PFAM+R3` model, 1,000 UFBoot2), iTOL annotation, and `clinker` gene cluster synteny.
  - Linked author's public GitHub repositories: `WhyAdr/genbank-parser`, `WhyAdr/antiSMASH-review`, `WhyAdr/ProkaryONT`, `WhyAdr/Serratia_genomes`.

---

### Milestone 2: References Compilation & Automated Citation Audit
* **Date / Phase**: Phase 2
* **Git Commit**: `01ae8b7` (*Add inline citations [1]-[35] and References section to Materials and Methods*)
* **Key Achievements**:
  - Compiled and strictly alphabetized 35 primary literature and software citations matching all tools and databases described in Sections B–E.
  - Corrected key software publication metadata:
    - **Autocycler**: Wick et al. (2025) *Bioinformatics* (`10.1093/bioinformatics/btaf474`) — replaced outdated Trycycler citation.
    - **Myloasm**: Shaw, Marin, & Li (2026) *Nature Biotechnology* (`10.1038/s41587-026-03053-z`).
    - **HADEG**: Rojas-Vargas et al. (2023) *Computational Biology and Chemistry* (`10.1016/j.compbiolchem.2023.107966`).
    - **ModelFinder**: Kalyaanamoorthy et al. (2017) *Nature Methods* (`10.1038/nmeth.4285`).
    - **Raven**: Vaser & Šikić (2021) *Nature Computational Science* (`10.1038/s43588-021-00073-4`).
    - **Software Repositories**: Dorado polish (ONT GitHub) and Filtlong (Ryan Wick GitHub).
    - Removed internal dependencies (Prodigal for Bakta).
  - Developed and executed automated verification scripts (`build_refs.py`, `verify_citations.ps1`) to ensure 100% precision between numbered bracket inline citations `[1]`–`[35]` and the alphabetized References list.

---

### Milestone 3: Workspace Memory System Initialization
* **Date / Phase**: Phase 3
* **Target File**: [.agents/AGENTS.md](file:///d:/W/serratia-research/.agents/AGENTS.md)
* **Key Achievements**:
  - Established project-scoped memory rules in `.agents/AGENTS.md`.
  - Documented isolate context (SM-NMZ and C14-NMZ across the 14-genome dataset).
  - Documented citation gotchas, phylogenetic parameters, custom Biopython repositories, and scripted verification rules to persist across all future interactions.

---

### Milestone 4: Results & Discussion Section Framework (`RnD-framework`)
* **Date / Phase**: Phase 4
* **Git Commit**: `bcffe2e` (*Add Results and Discussion section framework (Sections 1-5, Table 1, Figures 1-9, Figure S1)*)
* **Key Achievements**:
  - Formulated a 5-section Results & Discussion framework mirroring Materials & Methods:
    - **Section 1**: Genomic and Proteomic Feature Characteristics (skipped read QC/assembly mechanics to focus directly on genome biology; added Table 1 with 14 metrics including `Additional Replicon (Plasmid)`: 1 circular ~3.5 kb plasmid for SM-NMZ, 0 for C14-NMZ).
    - **Section 2**: Taxonomic Identity Confirmation (auto-built TYGS and GTDB-Tk species phylograms).
    - **Section 3**: Secondary Metabolite BGCs, Metabolic Profiles, and Environmental Safety (DRAM heatmaps; VFDB virulence profile evaluated strictly against environmental/MEOR comparative isolates).
    - **Section 4**: Hydrocarbonoclastic Potential and Biosurfactant / Pour Point Depressant (PPD) Production (framed around PPD activity, alkane mobilization, and surface-tension reduction; MEOR as long-term prospect).
    - **Section 5**: LadA Flavin-Dependent Monooxygenase Phylogeny and Pan-Proteome Orthology (reordered: LadA phylogeny and clinker synteny *first*, followed by ProteinOrtho pan-proteome *second*).
  - Flagged VFDB heatmap (`Figure4_vf_heatmap.jpg`) for Supplementary Material (**Figure S1**) due to extreme vertical dimension.
  - Eliminated standalone Figure 10 placeholder (syntenically represented by Figure 9).

---

### Milestone 5: Live Figure Embedding & Publication-Ready Legends
* **Date / Phase**: Phase 5
* **Git Commits**:
  - `1d2bad7` (*Embed live Markdown image tags for Figures 1-9 and Figure S1 in Results and Discussion*)
  - `260319f` (*Add publication-ready figure captions and both DRAM panels (3A & 3B) to Results and Discussion*)
* **Key Achievements**:
  - Conducted raw image/vector file inspections (`.png`, `.jpeg`, `.svg`, `.jpg`) in the `manuscript/` directory to visually verify coordinates, gene tags, operon boundaries, and color scales.
  - Integrated live native Markdown image embeds with full publication-grade figure legends:
    - **Figure 1**: Bakta circular maps (`Figure1_SM-NMZ.png` [Panel A: 5.0 Mbp + ~3.5 kb plasmid] & `Figure1_C14-NMZ.png` [Panel B: 5.1 Mbp chromosome]).
    - **Figure 2**: Auto-constructed TYGS GBDP/FastME phylograms (`Figure2_SM-genome-phylogram.png` [Panel A] & `Figure2_C14-genome-phylogram.png` [Panel B]).
    - **Figure 3**: antiSMASH overview maps (`Figure3_SM-NMZ-antismash-overview.jpeg` and `Figure3_C14-NMZ-antismash-overview.jpeg`) showing 11 predicted BGC regions per chromosome.
    - **Figure 4**: DRAM metabolic distillation covering **Figure 4A** (`Figure3_DRAM.jpeg`: central carbon metabolism and respiratory categories) and **Figure 4B** (`Figure3_DRAM2.jpeg`: auxiliary metabolic and reductase categories).
    - **Figure S1 (Supplementary)**: VFDB virulence factor heatmap (`Figure4_vf_heatmap.jpg`) detailing 12 categories across the environmental comparative panel.
    - **Figure 5**: HADEG hydrocarbon degradation subpathway bubble plot (`Figure5_Bubbles-Subpathways-HADEG.png`) across 4 compound classes (**A_Alkanes**, **C_Aromatics**, **D_Biosurfactants**, **E_Plastics**).
    - **Figure 6**: Serrawettin BGC synteny (`Figure6_serrawettin.jpeg`) detailing the central *swrW* NRPS gene and flanking operons (*msrP-pyrG*, *IrgBA-tyrB*).
    - **Figure 7**: Prodigiosin BGC synteny (`Figure7_prodigiosin.jpeg`) detailing the 14-gene *pigA*–*pigN* cluster and conserved flanking boundaries (*dacB-copZ*, *cueR-allSAR*).
    - **Figure 8**: LadA candidate ML validation phylogram (`Figure8_LadA-validation-phylotree.svg`, IQ-TREE 3 `Q.PFAM+R3`) confirming clustering of SM-NMZ (`NNLMDO_015255`) and C14-NMZ (`OJMJKD_015520`) with canonical LadA.
    - **Figure 9**: Curated *ladA* locus micro-synteny (`Figure9_LadA-cluster-curated.jpeg`) illustrating the core *ssuD* / *ladA* pair, sulfur/methionine uptake transport (*metQPN*), and alkane-associated machinery (*atoC*, *alkB*, *dhbA*).
  - Verified 100% citation consistency using automated verification scripts across all modifications.

---

### Milestone 6: Quantitative Table 1 and Evidence-Calibrated Manuscript Pass
* **Date / Phase**: Phase 6
* **Git Commit**: `b99f82e` (*Complete manuscript evidence and caption pass*)
* **Status**: Committed.
* **Key Achievements**:
  - Populated Table 1 from the paired Bakta v1.12.0 summary and TSV outputs for SM-NMZ and C14-NMZ, including genome size, feature counts, annotation cross-references, RNA features, hypothetical proteins, pseudogenes, and plasmid status.
  - Converted Materials & Methods, Results & Discussion, and Sections 1–5 into explicit Markdown heading levels.
  - Restricted the GTDB-Tk discussion to ANI screening because this run did not require pplacer placement; placement-dependent rank metrics are omitted.
  - Added an explicit instruction to report LadA-tree branch-support values and to treat phylogenetic placement as sequence-level evidence rather than biochemical proof.
  - Recast VFDB, HADEG, and LadA captions and planning language as evidence-calibrated genomic interpretations, while incorporating the supplied red-culture and LC-HRMS evidence for serrawettin/prodigiosin-associated metabolite production.
  - Updated Figures 6–7 and their planning captions to record the red-culture phenotype and LC-HRMS detections of serrawettin W1 and serratamolide C, removed the redundant gray-band sentence, and retained the colored-linkage explanation as pairwise amino-acid sequence identity.
  - Follow-up caption refinement: Figure 6 now attributes the confirmation sentence specifically to LC-HRMS profiling, while Figure 7 uses the red/pink-pigmented culture phenotype for prodigiosin-associated confirmation.
  - Recorded the previously omitted changelog-creation commit, `8eef114`, in the commit history summary below.

---

### Milestone 7: Section 1 Descriptive Prose Authoring
* **Date / Phase**: Phase 7
* **Git Commit**: `0f985c9` (*Author Section 1 Genomic and Proteomic Feature Characteristics and streamline isolate nomenclature*)
* **Status**: Completed.
* **Key Achievements**:
  - Authored Section 1 with the paired Bakta genome and proteome metrics, direct isolate nomenclature, and environmental source context.

### Milestone 8: Section 2 Descriptive Prose Authoring and Taxonomic Identification
* **Date / Phase**: Phase 8
* **Git Commit**: `f085fe9` (*Author Section 2 Taxonomic Identity and Whole-Genome Comparisons with TYGS and GTDB-Tk metrics*)
* **Status**: Completed.
* **Key Achievements**:
  - Authored Section 2 with the TYGS dDDH confidence intervals and GTDB-Tk ANI screening values for both isolates.
  - Recorded that placement-dependent rank metrics were omitted because the GTDB-Tk run did not require pplacer placement.

### Milestone 9: Section 3 Descriptive Prose Authoring and Figure Layout Update
* **Date / Phase**: Phase 9
* **Git Commit**: `435f4ae` (*Author Section 3 with antiSMASH BGC overview (Figure 3), DRAM (Figure 4), and VFDB (Figure S1)*)
* **Status**: Completed.
* **Key Achievements**:
  - Added the antiSMASH overview maps as Figure 3, shifted the DRAM panels to Figure 4, and retained the VFDB heatmap as Supplementary Figure S1.

### Milestone 10: Evidence-Calibrated Refinement of Sections 1–3
* **Date / Phase**: Phase 10
* **Git Commit**: `a56a6fc` (*Refine Sections 1-3 evidence interpretation and figure planning*)
* **Status**: Completed.
* **Key Achievements**:
  - Refined Sections 1–3 to distinguish measured assembly, annotation, dDDH/ANI, BGC, DRAM, and VFDB evidence from claims about function, ecology, pathogenicity, or safety.
  - Corrected the local antiSMASH version to v8.0.4, removed placement-dependent rank-metric discussion, and synchronized the Figure 3 antiSMASH / Figure 4 DRAM mapping across planning files and workspace guidance.
  - Preserved the independent red/pink culture phenotype and LC-HRMS detections of serrawettin W1 and serratamolide C, and retained the branch-support and sequence-versus-biochemistry guardrail for Section 5.
  - The two Figure 3 antiSMASH JPEGs were included in `a56a6fc` and are tracked in the repository.

### Milestone 11: Full antiSMASH Cluster Audit and Section 3 Discussion Refinement
* **Date / Phase**: 2026-08-12
* **Git Commit**: `e3b55b2` (*Audit antiSMASH clusters and refine Section 3*)
* **Status**: Completed.
* **Key Achievements**:
  - Audited all 11 antiSMASH chromosome regions in both SM-NMZ and C14-NMZ using aggregate records and ClusterBlast/known-cluster evidence, confirming that the region numbers are ordinal and all region records are internal to the chromosome.
  - Reframed partial trichrysobactin, viobactin, and yersinopine matches as siderophore/metallophore potential rather than named-product identifications; retained the azole-containing RiPP and ranthipeptide calls as rule-supported genomic potential without mature-product evidence.
  - Corrected the weak SM-NMZ “ririwpeptide” match to a Serrawettin W1-associated Region 11 NRPS interpretation using the source product annotation, Ser-selective C–A–PCP–TE architecture, and independent LC-HRMS evidence.
  - Distinguished the conserved prodigiosin *pig* locus from lower-specificity cluster classes and separated the Gap1-like SM-NMZ Region 10 locus from the C14-NMZ D-Val Region 10/T6SS context.
  - Added reference [36] for the UENF-22GI Gap1 precedent and preserved explicit genotype–metabolite and sequence–function limitations.

---

### 18 October 2026: Master manuscript rename and neighborhood figure integration

- Renamed the original manuscript to `master-manuscript.md` and embedded the generated aromatic, EPS/CPS and focal LadA-like maps beside their findings as Figures 6, 7 and 11. Existing main figures now run consecutively from 1 to 12; all original figure assets and the full manuscript narrative are retained.
- Added the DNA Features Viewer method/reference, alphabetized and remapped the bibliography, and carried over the verified Feng, CANT-HYD and Plassembler reference corrections. Updated current links; historical source-commit links retain their original paths.

## Commit History Summary (`git log --oneline`)
```text
d8f8170 Revise genomics explainer with antiSMASH and evidence scoreboard
7d245d3 Expand genomics explainer with visual concepts and evidence examples
26bab8b Replace phylogram export and remove editorial presentation wording
1afd415 Integrate unified TYGS results and add genomics explainer
b191290 Rename master manuscript and integrate neighborhood maps
921146f Add focal-pair genomic neighborhood figures
679dade Restore manuscript structure in paired genomics drafts
c3cabc2 Add paired concise genomics manuscript drafts
f1de07b Expand manuscript discussions and citations
8f07c3e Add comparative BGC architecture discussion
259ee93 Draft hydrocarbonoclastic potential discussion
200fa55 Consolidate genomic validation acknowledgement
6d6a4e3 Refine VF_classifier discussion
df10fa8 Expand DRAM discussion context
63ae791 Polish Section 3 evidence wording
3577f1d Finalize antiSMASH audit changelog entry
e3b55b2 Audit antiSMASH clusters and refine Section 3
a56a6fc Refine Sections 1-3 evidence interpretation and figure planning
435f4ae Author Section 3 with antiSMASH BGC overview (Figure 3), DRAM (Figure 4), and VFDB (Figure S1)
f085fe9 Author Section 2 Taxonomic Identity and Whole-Genome Comparisons with TYGS and GTDB-Tk metrics
0f985c9 Author Section 1 Genomic and Proteomic Feature Characteristics and streamline isolate nomenclature
b99f82e Complete manuscript evidence and caption pass
8eef114 Create changelogs.md documenting historical milestones, commits, and figure curations
260319f Add publication-ready figure captions and both DRAM panels (3A & 3B) to Results and Discussion
1d2bad7 Embed live Markdown image tags for Figures 1-9 and Figure S1 in Results and Discussion
bcffe2e Add Results and Discussion section framework (Sections 1-5, Table 1, Figures 1-9, Figure S1)
01ae8b7 Add inline citations [1]-[35] and References section to Materials and Methods
a5eceb7 Initial draft of Materials and Methods (Genomics)
```

---

## Current Status & Next Steps
- [x] Materials & Methods drafted and fully cited `[1]`–`[36]`.
- [x] References section strictly alphabetized with verified DOIs.
- [x] Workspace memory `.agents/AGENTS.md` established and updated.
- [x] Results & Discussion framework inserted with Table 1 (14 metrics).
- [x] Table 1 populated from the paired Bakta outputs.
- [x] Results & Discussion and Sections 1–5 converted to Markdown headings.
- [x] Figures 1–12 and Supplementary Figure S1 embedded with publication-ready captions.
- [x] Sections 1–5 narrative prose fully authored and evidence-calibrated in `master-manuscript.md` and concise drafts.
- [x] All 22 chromosome-localized antiSMASH regions audited and Section 3 interpretations refined with evidence-calibrated named-product limits.
- [x] Evidence-calibrated wording added to captions and planning artifacts; branch-support reporting and sequence-versus-biochemistry limits documented.
- [x] Full explainer deck expanded and revised to 34 slides (`25 main + 9 backups`) with companion notes, glossary, and evidence scoreboard.
- [x] Supporting verification data and notes consolidated in repository (`data/TYGS/`, `data/GTDB-Tk/`, `data/LadA/`, `notes/`).
- [ ] **Next Step**: Peer review audit and wet-lab co-author assay endpoint integration.
