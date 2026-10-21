# NMZ Serratia genomics explainer

Updated 21 October 2026. The PowerPoint contains **23 main slides**, including the cover, followed by **8 optional technical backups**. It is an expanded teaching session with no fixed time limit. The glossary is a separate handout. The established output filenames retain their original creation date.

- [PowerPoint](NMZ-Serratia-genomics-explainer-2026-10-20.pptx): editable slide text and tables, embedded source figures, and explanatory speaker notes with references.
- [Slide PDF preview](NMZ-Serratia-genomics-explainer-2026-10-20.pdf): the checked slide renders in presentation order.
- [Glossary PDF](NMZ-Serratia-genomics-glossary-2026-10-20.pdf) and [editable glossary](glossary.md).
- [Speaker notes](speaker-notes.md) and [content outline](outline-and-glossary.md).

The slides use the final-assembly TYGS analysis and the existing SwrW, HADEG and focal gene-neighborhood figures. Genomic candidates, reported chemical assignments and endpoint measurements are distinct. Following the author's drafting instruction, the chemistry presentation covers both isolates. Numerical tension, E24, aromatic-conversion and pour-point data have not been supplied to the genomics author, so the deck explains how to interpret those assays without inventing results.

## Source evidence

The report identifies both queries as S. marcescens in one species cluster, unlike GTDB's separate species labels. Full exports, extracted tables and checksums are in [data/TYGS](../data/TYGS/README.md). The paper and speaker notes explain this difference.

The LadA tree extract retains the source topology and branch lengths, includes the focal pair and comparison sequences, and displays the UFBoot component of the original SH-aLRT/UFBoot internal labels. It is a view of a subtree from the full 34-sequence inference, not a new phylogenetic analysis or an enzyme-activity test. The source tree and inference report accompany the plot in `assets/`. Other figure crops retain their source data and are described in the notes.

## Rebuild

The presentation builder uses `@oai/artifact-tool` from the installed bundled Node runtime. Set `RUNTIME_NODE_MODULES` to that runtime's `node_modules`, then run `node explainer/build_explainer.mjs` from the repository root. The private build folder is `../tmp/explainer-expansion-2026-10-21/`. It contains the draft PPTX, slide PNGs, content/layout data and a source snapshot. The main deck uses Arial. Images retain their original proportions.

Run `python explainer/build_lada_subtree.py` with Biopython and Matplotlib to rebuild the scientific tree extract. Run `python explainer/build_glossary_and_preview.py` with ReportLab to typeset the glossary and assemble the slide PDF from the checked renders. The supplied runtime's direct PDF export has a missing bundled standard-font module, so the preview uses the rendered slide images.

`finalize_explainer.mjs` runs the presentation package/layout checks and a first-party import check before writing a new validated PPTX and receipt to unique paths in the private build directory. Copy the returned validated file unchanged to the established deliverable path when updating the deck. Set `PRESENTATIONS_SKILL_DIR`, `RUNTIME_PYTHON` and `RUNTIME_NODE_MODULES` to the installed skill/runtime paths. Earlier validation copies remain preserved. The teaching expansion includes read/assembly images, cluster and SwrW examples, taxonomy concepts/workflows, polymer definitions, focal capsule/cellulose panels, the hydroxybenzoate hit and LadA history. The external emulsan-reference comparison is omitted. No external uploads or cloud authoring services are required.

Run `python explainer/build_teaching_neighborhoods.py` with DNA Features Viewer and Matplotlib to reproduce the three teaching panels from the checked canonical neighborhood sidecar. Source image credits and checksums are in `assets/source-assets.json`.
