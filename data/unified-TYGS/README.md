# Unified final-assembly TYGS analysis

Job: `04c9ebd7-bb0c-440e-bcba-4a11ef017a82`. Results provided 18 October 2026; supplied PDF printed 20 October 2026. The original exports came from the author's `unified-TYGS` folder. The original PNG/SVG, PDF, workbooks and distance matrices are preserved byte for byte. `provenance.json` records checksums and Bakta FASTA sequence lengths/hashes.

`pairwise-comparisons.tsv` and `strain-dataset.tsv` transcribe the workbook cells without changing source labels. They were extracted directly from OOXML because the supplied workbook's style definitions are incompatible with openpyxl. Source spelling and encoding anomalies remain unchanged in the raw exports.

## Results used in the manuscripts

| dDDH comparison | Recommended d4, % | Confidence interval, % |
|---|---:|---|
| SM–KCTC 42172 | 95.7 | 94.2–96.8 |
| SM–ATCC 13880 | 90.7 | 88.4–92.5 |
| C14–DSM 21420 | 85.5 | 82.8–87.8 |
| SM–DSM 21420 | 74.7 | 71.7–77.5 |
| C14–SM | 74.2 | 71.2–77.0 |
| C14–KCTC 42172 | 73.9 | 70.9–76.7 |
| C14–ATCC 13880 | 73.7 | 70.7–76.6 |

The report identifies both queries as **Serratia marcescens**. Both share species cluster 6. C14-NMZ and S. nematodiphila DSM 21420 occupy subspecies cluster 10; SM-NMZ, S. marcescens ATCC 13880 and the historical S. marcescens subsp. sakuensis KCTC 42172 reference occupy cluster 11. Cluster numbers are run-specific operational groups. They are not formal nomenclatural acts. This differs from the GTDB r232 species label for C14, while preserving its closest-reference affinity to DSM 21420.

| Query | TYGS and Bakta total, bp | Bakta replicons, bp | TYGS proteins | Bakta CDSs |
|---|---:|---|---:|---:|
| SM-NMZ | 4,974,098 | 4,970,517 + 3,581 | 4,569 | 4,566 |
| C14-NMZ | 5,050,553 | 5,050,553 | 4,628 | 4,626 |

Lengths now agree exactly. The exports do not contain the submitted sequence content, so they establish length parity, with final-assembly provenance supplied by the author, rather than an independent sequence-content equivalence test. Protein counts reflect different prediction pipelines and must not replace the Bakta annotation table.

The genome tree uses **GBDP distance formula d5**, trimming distances and FastME 2.1.6.1 with SPR postprocessing and midpoint rooting. The report states 100 pseudo-bootstrap replicates and mean support 85.9%. In the supplied view red labels are branch distances, blue labels are support values above 60%, and the right-hand columns encode metadata. The recommended **dDDH formula d4** is a separate calculation from the d5 tree distances.

The main manuscript asset in `../../figures/Figure_TYGS-unified-genome-phylogram.svg` is an exact copy of the supplied vector export. The older separate trees remain as historical assets but no longer appear in the three current manuscripts.

Nomenclature checked 20 October 2026: [LPSN S. marcescens](https://lpsn.dsmz.de/species/serratia-marcescens) and [LPSN S. nematodiphila](https://lpsn.dsmz.de/species/serratia-nematodiphila) remain correct species names. The former lists subsp. sakuensis as a synonym. Preserve exported labels when reproducing the tree, with this qualification in its caption.
