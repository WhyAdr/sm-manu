# Editorial and integration notes for the paired genomics drafts

18 October 2026; updated 20–21 October 2026 with TYGS results and 6 November 2026 with the 34-slide explainer revision and verification data archive. This document contains author-facing guidance and revision provenance. It is separate from both manuscript drafts.

## Version purpose and source

- [Original-theme draft](sm-manu-genomics-original-themes-draft-2026-10-18.md): concise genomic methods and results with six selected source passages retained, apart from reference renumbering. Surface/matrix prose appears once in the biosynthesis section; the emulsion synthesis sentence follows the aromatic findings. Neither placement introduces an E24 result.
- [Placeholder-integrated draft](sm-manu-genomics-placeholder-integrated-draft-2026-10-18.md): the same manuscript structure, with one continuous treatment of each of the four assays. Square-bracketed words describe unavailable data. They are not observed values. There are no template instructions or competing alternatives inside this draft.
- Both follow the formatting of [the source manuscript](master-manuscript.md): `# Manuscript`, lettered Methods, numbered Results & Discussion, figures beside the relevant results, numbered references, and a final blockquote headed **Study-wide interpretation note**. The note acknowledges the existing chemistry and pigmentation observations.
- Source baseline: [commit f1de07b](https://github.com/WhyAdr/sm-manu/commit/f1de07bb47755c9277f5d067954b21eea0be63f9). The original image files remain preserved. The current master and both concise drafts now incorporate the final-assembly TYGS results.

The original four-theme passages are retained in draft A at the author's request; preservation is not endorsement of every claim. Draft B supplies the evidence-calibrated integration treatment. Use one draft as the contribution to the collaborative paper, rather than combining both.

## Retained evidence and figure allocation

| Evidence | Placement in the drafts | Remaining work |
|---|---|---|
| Bakta Table 1 | Genome-feature results; original table and note reproduced exactly | None for this revision. Retain the annotation-inventory interpretation. |
| TYGS phylogram | Figure 1 beside taxonomy results; Figure 2 in the master | Final-assembly rerun integrated. Total query lengths match Bakta exactly. TYGS identifies both queries as S. marcescens in one species cluster, unlike the separate GTDB labels. See the archived report and extracted tables in `data/TYGS/`. |
| SwrW clinker comparison | Figure 2 beside SwrW/LC-HRMS findings | Original image retained. Extended comparator-by-comparator interpretation belongs in supplementary text. |
| HADEG bubble plot | Figure 4 beside hydrocarbon-associated metabolic results | Original image retained without curation or regeneration. Caption clarifies “Emulsan” and “Toluene_degradation.” Plastics rows remain background marker categories, not new polymer-degradation claims. |
| EPS/CPS neighborhoods | Figure 3 beside matrix-associated results | Generated focal-pair maps for capsule, EPS2, cellulose and the SM-NMZ *pgaDCBA* interval. PNG and SVG exports are in `figures/`. |
| Aromatic neighborhoods | Figure 5 beside aromatic findings | Generated shared *hpa/paa* comparisons and SM-NMZ hydroxybenzoate, protocatechuate and gentisate-associated maps. PNG and SVG exports are in `figures/`. |
| Putative LadA-like neighborhood | Figure 6 beside candidate-placement results | Generated focal-pair maps showing the conserved sulfur/methionine-associated core and distinct flanks. PNG and SVG exports are in `figures/`. |
| Pig comparison | Genomic/pigmentation finding retained in the main text | Detailed [comparative figure](Figure7_prodigiosin.jpeg) goes to supplementary material. |
| Other analyses | Detailed evidence reserved for supplementary material | Circular maps, antiSMASH overviews, DRAM and VF heatmaps, detailed LadA tree/broad synteny, and long orthogroup inventories. |

Figure numbers now follow the order of appearance within these abridged drafts. Original filenames remain unchanged. Renumber against the complete collaborative manuscript at final assembly. The final-assembly consolidated TYGS tree is now integrated; the three neighborhood figure sets are now generated from the verified Bakta GenBank annotations.

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
- The DNA Features Viewer figures and final TYGS rerun are complete and integrated. Compound-specific functional validation and outstanding assay datasets remain separate evidence needs. The [explanatory PowerPoint, PDF preview and glossary](explainer/README.md) are now available.

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

## Master manuscript integration

The complete original manuscript is now [master-manuscript.md](master-manuscript.md). Its full narrative and original figures are retained, with the three generated neighborhood maps inserted beside their corresponding discussions. Its figure sequence is independent of the two concise alternatives:

| Neighborhood map | Master manuscript | Concise drafts |
|---|---|---|
| Aromatic metabolism | Figure 6 | Figure 5 |
| EPS/CPS and matrix systems | Figure 7 | Figure 3 |
| Focal LadA-like neighborhoods | Figure 11 | Figure 6 |

In the master, the original SwrW/pig comparisons are Figures 8/9, the LadA tree is Figure 10, and the broader clinker comparison is Figure 12. Image filenames and image bytes remain unchanged. The master Methods now describes the DNA Features Viewer visualization, with its citation included in the rebuilt alphabetized bibliography. The previously verified Feng, CANT-HYD and Plassembler corrections are carried into the master bibliography. The TYGS rerun replaces the earlier panels and taxonomy interpretation in all three manuscripts. Assay-integration tasks remain as documented above.

Frozen-commit source links in this document deliberately retain `manuscript.md`: they refer to the historical source before the rename. The 18 October rename itself did not alter the concise drafts; the subsequent TYGS revision updates taxonomy in all three manuscripts.

## TYGS revision, 20 October 2026

The final-assembly analysis reports both queries as **S. marcescens**, with shared species cluster 6 and separate subspecies clusters 10/11. This is a material interpretive correction to the former claim of straightforward agreement between TYGS and GTDB. Nearest-reference affinities remain consistent, while the operational species labels differ for C14-NMZ. The new focal-pair dDDH(d4) is 74.2% (71.2–77.0%). The original type-strain d4 values remain unchanged at the reported precision.

SM's TYGS size is **total assembly length**, not just chromosome length: 4,970,517 + 3,581 = 4,974,098 bp. C14 is 5,050,553 bp. Both match the final Bakta totals. The exports do not include the uploaded sequence content, so length agreement plus the author's submission provenance should not be described as independently verified sequence identity. TYGS protein counts (4,569/4,628) and Bakta CDS counts (4,566/4,626) use different prediction pipelines and remain distinct.

The [archived results](data/TYGS/README.md) include the raw report/workbooks/trees, extracted comparison tables and checksums. Results were provided on 18 October; the supplied PDF was printed on 20 October. Existing four-theme source passages in draft A remain preserved. The PowerPoint treats the chemistry presentation as covering both isolates, following the author's stated working assumption, without adding authentic-standard evidence or missing assay values.

## Phylogram presentation revision, 21 October 2026

The wider genome-tree export (1,112 × 950 px) replaces the previous 656 × 950 px version in the master, both concise drafts and the presentation. Taxon labels, displayed branch lengths and support labels are unchanged. Publication-facing wording now uses “whole-genome distance phylogram” or “TYGS analysis.” Sequence-size reconciliation remarks remain in the provenance notes and have been removed from manuscript narrative, slides and speaker notes. The taxonomy backup instead presents the GTDB ANI/AF values beside the dDDH comparisons.

## Explainer expansion and antiSMASH teaching revision, 5–6 November 2026

The explainer sequence in `explainer/` has been expanded to **34 slides** (**25 main slides** and **9 optional technical backups `B1`–`B9`**), validated with zero geometry or layout defects across 16 native PowerPoint tables (`explicitTotalSlideCount: 34`, `finding_count: 0`, Arial policy enforced).

Key revisions implemented in commit `d8f8170`:
- **Sequence restructuring**: Moved **Genome resources and identity** and taxonomic comparisons (**Slides 5–7**) directly after **What each kind of evidence answers** (**Slide 4**), establishing isolate provenance and closed circular assembly properties (4.971 Mb SM-NMZ + 3.581 kb plasmid; 5.051 Mb C14-NMZ) before biosynthetic mining.
- **Dedicated antiSMASH v8.0.4 teaching block** (**Slides 8–10**):
  - **Slide 9 (*Genome-wide BGC mining with antiSMASH*)**: side-by-side presentation of the 11-region chromosome overviews (`Figure3_SM-NMZ-antismash-overview.jpeg` and `Figure3_C14-NMZ-antismash-overview.jpeg`), explaining ordinal cluster coordinates and shared vs. isolate-specific regions.
  - **Slide 10 (*Reading antiSMASH: specific vs. partial BGC hits*)**: structured comparative table contrasting specific multi-gene matches (Region 5 *pig*, 16 proteins at 87–100% identity), rule calls with weak hits requiring curation (Region 11 *swrW* vs. single-protein 47% identity "ririwpeptide"), partial siderophore/metallophore families (Regions 1 & 9), and focal Region 10 NRPS divergence (SM-NMZ 3-module Gap1-like cassette vs. C14-NMZ 1-module D-Val NRPS).
- **Surfactant nomenclature alignment**: explicitly displayed **`Serrawettin W1 (= serratamolide A) and serratamolide C`** across Slides 11, 12, and 31 (B6).
- **LadA phylogenetic subtree polish** (**Slide 22**): full biological taxon/protein labels (`Ca. M. alkanivorans NtaA/DmoA FMN monooxygenase (A0ABS9YXJ5)`, `G. thermoleovorans B23 LadA-alpha (BAM76377.1)`, `G. thermodenitrificans NG80-2 LadA (A4IU28)`), tightened x-axis (`xlim(-0.02, 1.48)`), and suppressed redundant root support.
- **Evidence Scoreboard** (**Slide 25**): 4-column integration matrix (`System / locus` | `Genomic candidate` | `Chemistry / phenotype in hand` | `Wet-lab assay slot`) across all five functional themes.
- **Conserved metabolic background (DRAM)** (**Slide 34 / B9**): paired DRAM panels demonstrating 90/98 (91.8%) all-genome and 95/98 (96.9%) *Serratia*-wide trait invariance.
- **Constructive callouts**: bottom takeaways reframed as collaborative action bridges to wet-lab assays, and legacy `"About N minutes."` timing prefixes removed from speaker notes.

## Repository data and audit consolidation, 6 November 2026

To provide complete provenance for remote reviewers without requiring external path access:
- **`data/GTDB-Tk/`**: archived `NMZ.bac120.summary.tsv` and `NMZ.bac120.ani_summary.tsv` with explanatory `README.md`.
- **`data/LadA/`**: archived `LadA_smartgap.treefile` and `LadA_smartgap.iqtree` (IQ-TREE 3 Q.PFAM+R3, 1,000 UFBoot, 34 sequences) with explanatory `README.md`.
- **`notes/`**: archived primary literature/nomenclature audit (`sm-manu-primary-source-validation-2026-10-18.md`) and the 34-slide explainer revision plan (`sm-manu-explainer-revision-plan-2026-11-05.md`).
- **`.gitignore`**: added to exclude temporary MIBiG scratch files (`BGC0000760.gbk`, `BGC0000760.svg`) and draft Word files (`SM-C14-NMZ-WGS-manuscript.docx`).

