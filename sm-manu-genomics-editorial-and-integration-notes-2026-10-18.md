# Editorial and integration notes for the paired genomics drafts

18 October 2026. This document contains author-facing guidance and revision provenance. It is separate from both manuscript drafts.

## Version purpose and source

- [Original-theme draft](sm-manu-genomics-original-themes-draft-2026-10-18.md): concise genomic methods and results with six selected source passages retained, apart from reference renumbering. Surface/matrix prose appears once in the biosynthesis section; the emulsion synthesis sentence follows the aromatic findings. Neither placement introduces an E24 result.
- [Placeholder-integrated draft](sm-manu-genomics-placeholder-integrated-draft-2026-10-18.md): the same manuscript structure, with one continuous treatment of each of the four assays. Square-bracketed words describe unavailable data. They are not observed values. There are no template instructions or competing alternatives inside this draft.
- Both follow the formatting of [the source manuscript](manuscript.md): `# Manuscript`, lettered Methods, numbered Results & Discussion, figures beside the relevant results, numbered references, and a final blockquote headed **Study-wide interpretation note**. The note acknowledges the existing chemistry and pigmentation observations.
- Source baseline: [commit f1de07b](https://github.com/WhyAdr/sm-manu/commit/f1de07bb47755c9277f5d067954b21eea0be63f9). The source manuscript and all original image files remain unchanged.

The original four-theme passages are retained in draft A at the author's request; preservation is not endorsement of every claim. Draft B supplies the evidence-calibrated integration treatment. Use one draft as the contribution to the collaborative paper, rather than combining both.

## Retained evidence and figure allocation

| Evidence | Placement in the drafts | Remaining work |
|---|---|---|
| Bakta Table 1 | Genome-feature results; original table and note reproduced exactly | None for this revision. Retain the annotation-inventory interpretation. |
| TYGS phylograms | Figure 1A and 1B beside the taxonomy results | Existing images and dDDH values are explicitly from earlier submissions. The author is rerunning TYGS with the final Dorado-polished assemblies. Replace both panels and associated values with the consolidated focal-pair analysis when it is available. |
| SwrW clinker comparison | Figure 2 beside SwrW/LC-HRMS findings | Original image retained. Extended comparator-by-comparator interpretation belongs in supplementary text. |
| HADEG bubble plot | Figure 4 beside hydrocarbon-associated metabolic results | Original image retained without curation or regeneration. Caption clarifies “Emulsan” and “Toluene_degradation.” Plastics rows remain background marker categories, not new polymer-degradation claims. |
| EPS/CPS neighborhoods | Figure 3 beside matrix-associated results | Generated focal-pair maps for capsule, EPS2, cellulose and the SM-NMZ *pgaDCBA* interval. PNG and SVG exports are in `figures/`. |
| Aromatic neighborhoods | Figure 5 beside aromatic findings | Generated shared *hpa/paa* comparisons and SM-NMZ hydroxybenzoate, protocatechuate and gentisate-associated maps. PNG and SVG exports are in `figures/`. |
| Putative LadA-like neighborhood | Figure 6 beside candidate-placement results | Generated focal-pair maps showing the conserved sulfur/methionine-associated core and distinct flanks. PNG and SVG exports are in `figures/`. |
| Pig comparison | Genomic/pigmentation finding retained in the main text | Detailed [comparative figure](Figure7_prodigiosin.jpeg) goes to supplementary material. |
| Other analyses | Detailed evidence reserved for supplementary material | Circular maps, antiSMASH overviews, DRAM and VF heatmaps, detailed LadA tree/broad synteny, and long orthogroup inventories. |

Figure numbers now follow the order of appearance within these abridged drafts. Original filenames remain unchanged. Renumber against the complete collaborative manuscript at final assembly. The final-assembly consolidated TYGS tree remains pending; the three neighborhood figure sets are now generated from the verified Bakta GenBank annotations.

## Qualifications for the source-preserving version

| Source passage | Retained wording needing attention | Scientific assessment |
|---|---|---|
| [Surface/matrix paragraph, line 107](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L107) | Predicted repeat chemistry, full polysaccharide inventory and the C14-NMZ *pga* comparison | SwrW/serratamolides are an informative lead. WecA/transport annotations do not establish a chemically distinct GlcNAc repeat. C14-NMZ has an isolated *pgaB* homolog; it lacks the contiguous SM-NMZ *pgaDCBA* locus. The original paragraph's absence claim should be read at locus level. |
| [Chemical-observation sentence, line 70](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L70) | LC-HRMS detection of serrawettin W1 and serratamolide C | Adopt the author's drafting assumption that the deck/PDF covers both isolates. Integrate sample/fraction mapping, conditions and the actual identification evidence when supplied. Do not imply newly verified authentic-standard matching or a gene-specific assay mechanism. |
| [Emulsion synthesis sentence, line 109](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L109) | “Polymer-supported emulsion” | A genomic hypothesis, not an E24 measurement. Its relevance depends on the assayed material. Shared locus presence does not explain isolate-performance differences. |
| [Shared aromatic paragraph, line 101](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L101) | “Complete neighborhood-level pathway architectures” | Organized *hpa/paa* loci are stronger evidence than isolated enzyme hits. Genomic organization does not demonstrate flux or conversion of unmodified petroleum hydrocarbons. |
| [SM-NMZ aromatic paragraph, line 103](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L103) | “Coherent” PobA/Pca and gentisate routes; *pobA* name | Immediate *pcaC* is unresolved; downstream gentisate assignments need reconciliation. `NNLMDO_011765` is a hydroxybenzoate-hydroxylase candidate without an explicit *pobA* gene name. Locus context distinguishes it from other *pobA*-labelled matches. The toluene category does not establish a complete toluene pathway. |
| [PPD paragraph, line 94](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L94) | Prodigiosin grouped with bio-emulsifier loci and the application link | Retain as source wording only in draft A. The *pig* finding directly supports pigmentation; no matched evidence assigns a PPD or emulsification effect to that pigment. A pour-point change alone does not select a mechanism or demonstrate degradation. |

## Assay integration

The source manuscript contains no numerical NMZ results for surface tension, E24, aromatic-substrate conversion or pour point; E24 is not named there. This does not establish that the experiments were not performed. Draft B retains explicit missing-data fields until the coauthor's dataset is available.

| Theme | Fill from the coauthor's data | Interpretation to retain |
|---|---|---|
| Surface tension | Material, interface, conditions/method, SM-NMZ and C14-NMZ values, matched control, replicate definition/n and uncertainty | SwrW plus reported serratamolides identifies a plausible amphiphile contribution. If the measurement is oil–water interfacial tension, rename the endpoint. Shared *swrW* presence alone does not explain performance differences. |
| E24 | Material, oil/hydrocarbon, mixing, settling time, control, isolate results and uncertainty | E24 is emulsion-layer height divided by total liquid-column height after 24 h, multiplied by 100. A cell-associated capsule annotation does not establish that the polymer is present in a cell-free extract. Retain the SM-specific *pga* interpretation only if it informs the actual assay. |
| Aromatic conversion | Exact substrate, incubation, appropriate controls, conversion and product/recovery/carbon evidence, replication/uncertainty | Interpret the locus corresponding to the named substrate. Whole-oil or total-petroleum-hydrocarbon loss does not establish conversion through *hpa/paa*. Distinguish disappearance, transformation and mineralization. |
| Pour point | Material, oil, dose, method, thermal history, control and isolate results, replication/uncertainty | SwrW/serratamolides and matrix loci are candidate context. Add wax modification, polymer action or degradation only if directly supported. Report one isolate if that is all the dataset covers. |

If an assay is absent from the final paper, remove its corresponding result paragraph. If no matching aromatic-substrate assay is included, retain the genomic aromatic paragraph and omit the following placeholder assay paragraph. A concise genomic-only alternative is:

> Both isolates carry organized *hpa* and *paa* loci associated with oxygenated-aromatic metabolism. Additional hydroxybenzoate/protocatechuate and gentisate-associated candidates distinguish SM-NMZ, although some downstream assignments remain unresolved. The SM-NMZ hit displayed under HADEG “Toluene_degradation” represents a hydroxybenzoate-hydroxylase candidate rather than a complete toluene route.

When inserting this alternative, cite Prieto et al. (1996), Teufel et al. (2010) and Romero-Silva et al. (2013), already listed in both draft bibliographies. Assay controls and uncertainty fields should be replaced with real results, never filled by assumption.

## Supplementary methods and references

- Preserve command-level reproducibility, read/assembly quality, the link between assemblies and annotations, and the comparator accession list in the supplementary package. The package remains to be assembled.
- Keep the 10,252 sequence groups separate from the 10,438 PoFF groups; each analysis has 2,140 groups represented across all 14 proteomes. Their totals and denominators are not interchangeable.
- Feng et al. is corrected in both draft bibliographies to *PNAS* 104(13):5602–5607, DOI [10.1073/pnas.0609650104](https://doi.org/10.1073/pnas.0609650104).
- CANT-HYD is corrected to Khot, Zorz, Gittins et al. (2022), *Frontiers in Microbiology* 12:764058, DOI [10.3389/fmicb.2021.764058](https://doi.org/10.3389/fmicb.2021.764058).
- When listing the individual assemblers in supplementary methods, cite Plassembler as Bouras, Sheppard, Mallawaarachchi and Vreugde (2023), *Bioinformatics* 39(7):btad409, DOI [10.1093/bioinformatics/btad409](https://doi.org/10.1093/bioinformatics/btad409). The source's btad382 DOI belongs to an unrelated article.
- The DNA Features Viewer figures are complete. The final TYGS rerun, compound-specific functional validation and outstanding assay datasets are not supplied by these sequence visualizations. The explanatory PowerPoint remains deferred.

## Neighborhood figure provenance and regeneration

The figures use the final-size SM-NMZ and C14-NMZ Bakta annotation files. The copies in `serratia-hydrocarbon-faa` are byte-identical to the corresponding `bakta-serratia-genomes/*_bakta` GenBank files. Input SHA-256 values and chromosome lengths are recorded in the [structured neighborhood data](figures/neighborhoods/neighborhoods.json). All regions were parsed using the genbank-feature-parser skill's canonical `read_genbank` and `build_neighborhood` APIs; its native DNA Features Viewer renderer was also exercised. The composite figures use DNA Features Viewer for every gene arrow, with a shared physical scale within each lettered panel. The figures are gene maps, not protein-alignment ribbons or inferred operons.

| Figure | Raster preview | Editable vector |
|---|---|---|
| EPS/CPS and matrix loci | [PNG](figures/Figure3_EPS-CPS-neighborhoods.png) | [SVG](figures/Figure3_EPS-CPS-neighborhoods.svg) |
| Aromatic loci | [PNG](figures/Figure5_Aromatic-neighborhoods.png) | [SVG](figures/Figure5_Aromatic-neighborhoods.svg) |
| LadA-like neighborhoods | [PNG](figures/Figure6_LadA-like-neighborhoods.png) | [SVG](figures/Figure6_LadA-like-neighborhoods.svg) |

The [plotted feature table](figures/neighborhoods/plotted-features.tsv) records every displayed CDS's locus tag, genomic/local coordinates, strand, raw gene/product qualifiers, label basis, annotation class and candidate status. The [selection configuration](figures/neighborhoods/selection.json) defines reproducible region boundaries. Anonymous CDSs use source-product abbreviations or their locus-tag suffixes; their full descriptions remain in the table. No functional gene names were added to the input annotations. The orange LadA-like labels explicitly overlay the unresolved candidate designation on source `ssuD` annotations.

The PNAG comparison uses corresponding DUF805/HicB-like/cybB/alaC flanks. C14-NMZ lacks the intervening contiguous *pgaDCBA* cluster in that interval; its separate `OJMJKD_020200` *pgaB* homolog is not shown as though it occupied that interval. The raw *bcsE* and *galU* labels are retained even when repeated, rather than silently reannotated. Additional SM-NMZ aromatic regions retain their incomplete/uncertain-pathway qualifications.

Run the [generator](scripts/generate_genomic_neighborhood_figures.py) from the repository root to redraw the checked-in structured data:

```powershell
python scripts/generate_genomic_neighborhood_figures.py
```

To rebuild the structured data from complete GenBank inputs, supply a directory containing `SM-NMZ.gbff` and `C14-NMZ.gbff`:

```powershell
python scripts/generate_genomic_neighborhood_figures.py --refresh-data --genbank-dir PATH
```

The default redraw requires DNA Features Viewer and Matplotlib; data refresh additionally requires the installed genbank-parser skill/package. Software versions are recorded in the structured data. [Artifact hashes](figures/neighborhoods/artifact-manifest.json) cover all three figures and their supporting tables. The manuscript Methods and References now cite [Zulkower and Rosser (2020)](https://doi.org/10.1093/bioinformatics/btaa213).
