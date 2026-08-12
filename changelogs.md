# Project Changelogs: Serratia Research Manuscript

This document maintains a chronological record of all project milestones, manuscript authoring progress, bioinformatics analyses, figure curation, citation audits, and workspace memory updates for the research manuscript on *Serratia* sp. **SM-NMZ** and *Serratia* sp. **C14-NMZ**.

---

## Workspace & Project Summary
- **Primary Draft File**: [manuscript.md](file:///d:/W/serratia-research/manuscript/manuscript.md)
- **Workspace Memory**: [.agents/AGENTS.md](file:///d:/W/serratia-research/.agents/AGENTS.md)
- **Git Repository**: `d:\W\serratia-research\manuscript` (branch `master`)
- **Key Focus**: Whole Genome Sequencing, consensus assembly, functional annotation, hydrocarbonoclastic (MEOR / alkane degradation), biosurfactant / pour point depressant (PPD), and comparative phylogenomic analysis across a 14-genome dataset.

---

## Chronological Progress & Milestones

### Milestone 1: Materials & Methods Authoring (Sections A–E)
* **Date / Phase**: Phase 1
* **Git Commit**: `a5eceb7` (*Initial draft of Materials and Methods (Genomics)*)
* **Key Achievements**:
  - Authored **Section A (Whole Genome Sequencing)**: PromethION long-read sequencing protocols, GeneAid gDNA extraction, SQK-RBK114.24 library prep, R10.4.1 flow cell, and MinKNOW basecalling (`dna_r10.4.1_e8.2_400bps_sup@v5.0.0`).
  - Authored **Section B (De Novo Assembly and Genome Annotation)**: NanoPlot QC, Chopper/Filtlong read filtering, Autocycler ensemble assembly integrating 7 assemblers (Flye, Canu, Hifiasm, Raven, Plassembler, Myloasm, metaMDBG), `dnaapler` circular chromosome reorientation, Dorado polish, Bakta annotation, and CANT-HYD HMM hydrocarbon profiling.
  - Authored **Section C (Taxonomic Identity Confirmation, BGC Analysis, & Characterization)**: TYGS whole-genome species identification, GTDB-Tk `classify_wf`, LPSN/GTDB nomenclature, antiSMASH 7.0 secondary metabolite BGC mining, DRAM functional distillation, and VFDB (`VF_classifier`) virulence factor analysis.
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
    - **Figure 3**: DRAM metabolic distillation covering **Figure 3A** (`Figure3_DRAM.jpeg`: central carbon metabolism & ETC Complexes I–V) and **Figure 3B** (`Figure3_DRAM2.jpeg`: CAZy, nitrogen, sulfur, arsenate reduction, and methanogenesis pathways).
    - **Figure S1 (Supplementary)**: VFDB virulence factor heatmap (`Figure4_vf_heatmap.jpg`) detailing 12 categories across the environmental comparative panel.
    - **Figure 5**: HADEG hydrocarbon degradation subpathway bubble plot (`Figure5_Bubbles-Subpathways-HADEG.png`) across 4 compound classes (**A_Alkanes**, **C_Aromatics**, **D_Biosurfactants**, **E_Plastics**).
    - **Figure 6**: Serrawettin BGC synteny (`Figure6_serrawettin.jpeg`) detailing the central *swrW* NRPS gene and flanking operons (*msrP-pyrG*, *IrgBA-tyrB*).
    - **Figure 7**: Prodigiosin BGC synteny (`Figure7_prodigiosin.jpeg`) detailing the 14-gene *pigA*–*pigN* cluster and conserved flanking boundaries (*dacB-copZ*, *cueR-allSAR*).
    - **Figure 8**: LadA candidate ML validation phylogram (`Figure8_LadA-validation-phylotree.svg`, IQ-TREE 3 `Q.PFAM+R3`) confirming clustering of SM-NMZ (`NNLMDO_015255`) and C14-NMZ (`OJMJKD_015520`) with canonical LadA.
    - **Figure 9**: Curated *ladA* locus micro-synteny (`Figure9_LadA-cluster-curated.jpeg`) illustrating the core *ssuD* / *ladA* pair, sulfur/methionine uptake transport (*metQPN*), and alkane-associated machinery (*atoC*, *alkB*, *dhbA*).
  - Verified 100% citation consistency using automated verification scripts across all modifications.

---

## Commit History Summary (`git log --oneline`)
```text
260319f (HEAD -> master) Add publication-ready figure captions and both DRAM panels (3A & 3B) to Results and Discussion
1d2bad7 Embed live Markdown image tags for Figures 1-9 and Figure S1 in Results and Discussion
bcffe2e Add Results and Discussion section framework (Sections 1-5, Table 1, Figures 1-9, Figure S1)
01ae8b7 Add inline citations [1]-[35] and References section to Materials and Methods
a5eceb7 Initial draft of Materials and Methods (Genomics)
```

---

## Current Status & Next Steps
- [x] Materials & Methods drafted and fully cited `[1]`–`[35]`.
- [x] References section strictly alphabetized with verified DOIs.
- [x] Workspace memory `.agents/AGENTS.md` established and updated.
- [x] Results & Discussion framework inserted with Table 1 (14 metrics).
- [x] Figures 1–9 and Supplementary Figure S1 embedded with publication-ready captions.
- [x] Full changelog recorded in `changelogs.md`.
- [ ] **Next Step**: Populate Table 1 data values and draft the descriptive prose for Results & Discussion Sections 1–5.
