# NMZ *Serratia* genomics explainer

Updated 6 November 2026. The teaching sequence has **25 main slides** and **9 optional technical backups** (34 slides total). It is designed as an expanded session for colleagues with limited genomics experience; the glossary is also available as a separate handout. Established output filenames retain their original creation date.

- [PowerPoint](NMZ-Serratia-genomics-explainer-2026-10-20.pptx): editable slide text and tables, source figures, and explanatory speaker notes with references.
- [Slide PDF preview](NMZ-Serratia-genomics-explainer-2026-10-20.pdf): slides in presentation order.
- [Glossary PDF](NMZ-Serratia-genomics-glossary-2026-10-20.pdf) and [editable glossary](glossary.md).
- [Speaker notes](speaker-notes.md) and [content outline](outline-and-glossary.md).

The expanded sequence covers read-to-annotation concepts, genome identity methods, antiSMASH interpretation, the SwrW and pigment findings, matrix-associated loci, aromatic metabolism and the LadA-like candidate. Genomic candidates, reported putative chemical assignments and measured endpoints are treated as separate evidence. The chemistry source's workflows labelled glycopeptide and DCM list putative serratamolide assignments in rows/samples 1 and 2, without an isolate key; “glycopeptide” is a source workflow label, not a chemical-class assignment. Treating those entries as covering both focal isolates remains the author's working assumption for this draft. Numerical surface-tension, E24, aromatic-conversion and pour-point results were not supplied to the genomics author, so the explainer does not invent them.

## Source evidence

The TYGS report identifies both queries in *S. marcescens* species cluster 6, unlike GTDB's separate species labels. Full exports, extracted tables and checksums are in [data/TYGS](../data/TYGS/README.md). The paper and speaker notes explain this method-specific difference.

The LadA tree extract retains the source topology and branch lengths, includes the focal pair and comparison sequences, and displays the UFBoot component of the original SH-aLRT/UFBoot internal labels. It is a view of a subtree from the full 34-sequence inference, not a new phylogenetic analysis or an enzyme-activity test. The source tree and inference report accompany the plot in `assets/`. Other figure crops retain their source data and are described in the notes.

The selected 35–44 kb gene-neighborhood windows are contained within assembled replicons without crossing contig breaks. Circular closure supports end-to-end comparison of those windows; it does not establish gene expression, product formation or sequence accuracy.

## Rebuild

The presentation builder uses `@oai/artifact-tool` from the installed bundled Node runtime. Set `RUNTIME_NODE_MODULES` to that runtime's `node_modules`, then run `node explainer/build_explainer.mjs` from the repository root. The private build folder is `../tmp/explainer-revision-2026-11-05/`. It contains the draft PPTX, slide PNGs, content/layout data and a source snapshot. The main deck uses Arial. Images retain their original proportions.

Run `python explainer/build_lada_subtree.py` with Biopython and Matplotlib to rebuild the scientific tree extract. Run `python explainer/build_glossary_and_preview.py` with ReportLab to typeset the glossary and assemble the slide PDF from rendered slides. The slide and glossary PDFs are staged in `../tmp/explainer-revision-2026-11-05/` for review and copying to the established deliverable filenames. The supplied runtime's direct PDF export has a missing bundled standard-font module, so the preview uses the rendered slide images.

`finalize_explainer.mjs` runs the presentation package/layout checks and a first-party import check before writing a new validated PPTX and receipt to unique paths in the private build directory. Copy the returned validated file unchanged to the established deliverable path when updating the deck. Set `PRESENTATIONS_SKILL_DIR`, `RUNTIME_PYTHON` and `RUNTIME_NODE_MODULES` to the installed skill/runtime paths. Earlier validation copies remain preserved. The teaching expansion includes read/assembly images, antiSMASH examples, SwrW and gene-cluster examples, taxonomy concepts/workflows, polymer definitions, focal capsule/cellulose panels, the hydroxybenzoate hit, LadA history and a DRAM backup. The external emulsan-reference comparison is omitted. No external uploads or cloud authoring services are required.

Run `python explainer/build_teaching_neighborhoods.py` with DNA Features Viewer and Matplotlib to reproduce the three teaching panels from the checked canonical neighborhood sidecar. Source image credits and checksums are in `assets/source-assets.json`.
