# LadA Flavin-Dependent Monooxygenase Phylogenetic Outputs

This directory archives the primary phylogenetic tree and analysis log files for the LadA-like monooxygenase validation analysis.

## Dataset & Curation
- **Sequences**: 34 total protein sequences, including:
  - Canonical LadA from *Geobacillus thermodenitrificans* NG80-2 (`sp|A4IU28|LADA_GEOTN`)
  - LadA-alpha (`BAM76377.1`), LadA-beta (`BAM76372.1`), and LadB (`BAM76371.1`) from *Geobacillus thermoleovorans* B23
  - Focal candidates: **SM-NMZ** (`NNLMDO_015255`) and **C14-NMZ** (`OJMJKD_015520`)
  - 19 functional and diverse oxidoreductase controls (including group C flavoprotein monooxygenases, luciferase-family enzymes, alkanesulfonate monooxygenases SsuD, and related flavoproteins)
  - Distant flavoprotein monooxygenase outgroup: *Candidatus Mycolicibacterium alkanivorans* NtaA/DmoA FMN monooxygenase (`tr|A0ABS9YXJ5|A0ABS9YXJ5_9MYCO`)

## Alignment & Model Selection
- **Multiple Sequence Alignment**: MAFFT v7 (L-INS-i mode: `--localpair --maxiterate 1000`)
- **Alignment Trimming**: ClipKIT v2.1.1 (smart-gap mode: `-m smart-gap`), retaining 448 alignment sites.
- **Phylogenetic Reconstruction**: IQ-TREE v3.0.1
  - **Best-fit Model**: Selected by ModelFinder according to BIC: `Q.PFAM+R3` (general empirical matrix for Pfam families with FreeRate heterogeneity of 3 categories).
  - **Branch Support**: 1,000 ultrafast bootstrap replicates (UFBoot2) and SH-aLRT test (1,000 replicates).

## Included Files
1. `LadA_smartgap.treefile`: Maximum-likelihood consensus tree in Newick format with SH-aLRT/UFBoot branch support values.
2. `LadA_smartgap.iqtree`: Full IQ-TREE report detailing model parameters, rate categories, log-likelihood, and ASCII tree topology.
