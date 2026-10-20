# NMZ Serratia genomics explainer

20 October 2026. The PowerPoint contains **12 main slides**, including the cover, followed by **8 optional technical backups**. Main-talk timing is approximately 18–20 minutes. The glossary is a separate handout.

- [PowerPoint](NMZ-Serratia-genomics-explainer-2026-10-20.pptx): editable slide text and tables, embedded source figures, and explanatory speaker notes with references.
- [Slide PDF preview](NMZ-Serratia-genomics-explainer-2026-10-20.pdf): the checked slide renders in presentation order.
- [Glossary PDF](NMZ-Serratia-genomics-glossary-2026-10-20.pdf) and [editable glossary](glossary.md).
- [Speaker notes](speaker-notes.md) and [content outline](outline-and-glossary.md).

The slides use the unified final-assembly TYGS analysis and the existing SwrW, HADEG and focal gene-neighborhood figures. Genomic candidates, reported chemical assignments and endpoint measurements are distinct. Following the author's drafting instruction, the chemistry presentation covers both isolates. Numerical tension, E24, aromatic-conversion and pour-point data have not been supplied to the genomics author, so the deck explains how to interpret those assays without inventing results.

## Source evidence

The final TYGS query sizes match Bakta totals exactly. The unified report identifies both queries as S. marcescens in one species cluster, unlike GTDB's separate species labels. Full exports, extracted tables and checksums are in [data/unified-TYGS](../data/unified-TYGS/README.md). The paper and speaker notes explain this difference.

The LadA tree extract retains the source topology and branch lengths, includes the focal pair and comparison sequences, and displays the UFBoot component of the original SH-aLRT/UFBoot internal labels. It is a view of a subtree from the full 34-sequence inference, not a new phylogenetic analysis or an enzyme-activity test. The source tree and inference report accompany the plot in `assets/`. Other figure crops retain their source data and are described in the notes.

## Rebuild

The presentation builder uses `@oai/artifact-tool` from the installed bundled Node runtime. Set `RUNTIME_NODE_MODULES` to that runtime's `node_modules`, then run `node explainer/build_explainer.mjs` from the repository root. The private build folder is `../tmp/explainer-2026-10-20/`. It contains the draft PPTX, slide PNGs, content/layout data and a source snapshot. The main deck uses Arial. Images retain their original proportions.

Run `python explainer/build_lada_subtree.py` with Biopython and Matplotlib to rebuild the scientific tree extract. Run `python explainer/build_glossary_and_preview.py` with ReportLab to typeset the glossary and assemble the slide PDF from the checked renders. The supplied runtime's direct PDF export has a missing bundled standard-font module, so the preview uses the rendered slide images.

`finalize_explainer.mjs` runs the presentation package/layout checks and a first-party import check before writing a new final PPTX. Set `PRESENTATIONS_SKILL_DIR`, `RUNTIME_PYTHON` and `RUNTIME_NODE_MODULES` to the installed skill/runtime paths. It preserves an existing final file; choose a new filename in the finalizer for a later revision. No external uploads or cloud authoring services are required.
