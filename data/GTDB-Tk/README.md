# GTDB-Tk Taxonomic Classification Output

This directory contains the primary taxonomic summary outputs from the GTDB-Tk classification workflow for isolates **SM-NMZ** and **C14-NMZ**.

## Workflow & Parameters
- **Tool**: GTDB-Tk v2.7.2 (`classify_wf`)
- **Reference Database**: GTDB Release 09-RS220 / r232
- **Command / Pipeline**: Standard `classify_wf` utilizing the bacterial marker set (`bac120`).
- **Placement Note**: Neither query isolate required `pplacer` phylogenetic placement because both isolates were decisively matched to existing species clusters during the preliminary ANI screening (`ani_screen`). Consequently, placement-dependent rank metrics (such as placement confidence or topology weights) are omitted.

## Included Files
1. `NMZ.bac120.summary.tsv`: Complete taxonomy summary table detailing the classification, fastani reference match, closest genome reference, ANI, and alignment fraction.
   - **SM-NMZ**: Classified as *Serratia marcescens* (closest reference: `GCF_017299535.1`, ANI: 98.86%, AF: 0.947).
   - **C14-NMZ**: Classified as *Serratia nematodiphila* (closest reference: `GCF_000738675.1`, ANI: 98.22%, AF: 0.932; match to *S. marcescens* type radius is below the species inclusion threshold of 96.86% at 96.82%).
2. `NMZ.bac120.ani_summary.tsv`: Detailed FastANI pairwise screening results against reference and representative genomes.
