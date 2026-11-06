# Bakta v1.12.0 Genome Annotation Summaries & Feature Tables

This directory archives the primary tabular and summary outputs from **Bakta v1.12.0** (full database v6.0) for **SM-NMZ** and **C14-NMZ**, supporting **Table 1** and all locus-level discussions across the manuscript and explainer deck.

## Included Files
- `SM-NMZ.txt` / `C14-NMZ.txt`: Genome-wide summary metrics (sequence length, GC content, coding density, CDS/RNA/ncRNA/CRISPR/pseudogene counts, and replicon breakdown) corresponding directly to **Table 1**.
- `SM-NMZ.tsv` / `C14-NMZ.tsv`: Complete feature-by-feature annotation tables (`NNLMDO_*` for **SM-NMZ**; `OJMJKD_*` for **C14-NMZ**) with genomic coordinates, strand, gene symbol, product description, and database cross-references (`RefSeq`, `UniParc`, `UniRef100`/`90`/`50`, `PFAM`, `GO`, `EC`, `COG`).
- `SM-NMZ.hypotheticals.tsv` / `C14-NMZ.hypotheticals.tsv`: Physicochemical properties, PFAM domains, and signal/transmembrane predictions for annotated hypothetical proteins.

Full raw sequence and annotation flatfiles (`.gbff`, `.embl`, `.json`, `.fna`, `.faa`) are omitted from Git version control due to size and are archived in the local workspace (`bakta-serratia-genomes/`).
