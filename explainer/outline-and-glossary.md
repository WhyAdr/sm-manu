# Presentation outline and glossary: NMZ *Serratia* genomics

Revised 6 November 2026 for biology and wet-lab colleagues with limited genomics experience. The teaching sequence contains **25 main slides** followed by **9 optional technical backups**. The outline follows the current slide order; the glossary is also available as a separate handout.

## Main teaching sequence

| Slide | Subject | Teaching point and visual |
|---|---|---|
| 1 | NMZ *Serratia* genomics | Introduce the two focal isolates, their collection contexts and the genomics contribution. |
| 2 | DNA, gene predictions and activity | Separate DNA sequence, predicted genes, chemical evidence, measured activity and causality. |
| 3 | Reads, assembly and genome annotation | Attributed teaching examples show reads becoming an assembly; the C14-NMZ Bakta circular plot illustrates annotation. These images are workflow examples, not NMZ raw reads. |
| 4 | What each kind of evidence answers | Use the SwrW example to distinguish sequence similarity, gene context, chemical assignment, phenotype and causal tests. |
| 5 | Genome resources and identity | Compare genome properties and the actual GTDB-Tk/TYGS naming difference for C14-NMZ. State that both chromosomes are closed and circular. Selected 35–44 kb comparison windows lie within assembled replicons without contig breaks; closure does not demonstrate product formation or sequence accuracy. |
| 6 | ANI and digital DNA–DNA hybridization | Explain ANI, aligned fraction and dDDH as relatedness measures, with broad species guides and their limits. |
| 7 | GTDB-Tk and TYGS workflows | Contrast the reference-based classification workflows and what each reports; no command-line tutorial. |
| 8 | Genes, neighborhoods, clusters and operons | Define each scale. Contrast the multi-gene *pig* region with the single large *swrW* gene; a neighborhood is not proof of an operon. |
| 9 | Genome-wide BGC mining with antiSMASH | Compare the 11 predicted chromosome regions per isolate. Region numbers are positional labels within each chromosome, not proof that same-numbered regions are equivalent. |
| 10 | Reading antiSMASH reference matches | Contrast the multi-feature prodigiosin match with the weak single-protein *swrW* “ririwpeptide” hit, and compare the different Region 10 NRPS architectures. Database names are hypotheses to inspect, not product identifications. |
| 11 | SwrW evidence in the NMZ study | Bring together the conserved focal *swrW* sequence/domain architecture and putative LC-HRMS assignments, keeping the strands of evidence distinct. |
| 12 | SwrW and reported serratamolides | Explain that the LC-HRMS source's workflows labelled glycopeptide and DCM list putative serratamolide assignments for rows/samples 1 and 2. The author’s current drafting assumption is that the source covers both focal isolates; the row/sample numbers are not isolate identifiers. |
| 13 | Extracellular matrices and surface activity | Show SM-NMZ *pgaDCBA* and the corresponding C14-NMZ interval; a separate C14 *pgaB* homolog is not a complete local *pga* locus. |
| 14 | EPS, CPS and matrix polysaccharides | Distinguish extracellular matrices, capsules, PNAG and cellulose from small amphiphilic molecules. |
| 15 | Capsule loci and the HADEG markers | Use the focal neighborhood maps to show why shared *wzb/wzc* markers do not identify a polymer’s chemical structure. |
| 16 | Cellulose-associated loci in both isolates | Compare the DNA Features Viewer *bcs* neighborhoods as genomic candidates, not cellulose production measurements. |
| 17 | Aromatic metabolism depends on the substrate | Relate shared *hpa/paa* and isolate-specific oxygenated-aromatic loci to the compounds their pathways could plausibly use. |
| 18 | The HADEG Toluene_degradation hit | Compare the SM hydroxylase/*pcaK* neighborhood with a characterized route; a downstream aromatic-acid step does not establish upper toluene oxidation. |
| 19 | LadA and the alkane-oxidation hypothesis | Introduce LadA and why related sequences motivated a homolog search; distinguish a candidate from a demonstrated alkane-initiating enzyme. |
| 20 | LadA evidence across the literature | Compare Feng (2007), Boonmak (2014) and Mireles (2025), separating reported biochemical, host-based and later assay evidence. |
| 21 | Initial alkane oxidation | Distinguish candidate initiating reactions from downstream assimilation, and the two unrelated meanings of AlkB. |
| 22 | The LadA-like comparison | Show the focal sequences within a source-derived subtree, with the full *Candidatus Mycolicibacterium alkanivorans* outgroup label and actual support values. A supported grouping does not establish substrate activity. |
| 23 | Matching assays to genomic candidates | Keep surface tension, E24, aromatic-substrate conversion and pour point as separate endpoints and connect each only to relevant candidate classes. |
| 24 | Host-interaction genes | Use reference-associated homologs as comparative context, not as a pathogenicity or safety score. |
| 25 | Evidence scoreboard | Pair the leading genomic candidates with reported chemistry/phenotype already in hand and identify the wet-lab assay slot that could test each connection. |

## Optional technical backups

| Label | Subject |
|---|---|
| B1 | Workflow and tools by purpose |
| B2 | The TYGS genome phylogram |
| B3 | Taxonomic comparisons |
| B4 | Reading the SwrW neighborhood |
| B5 | Reading HADEG marker categories |
| B6 | Chemical assignments and peak areas |
| B7 | Additional SM aromatic candidates |
| B8 | LadA-like genomic neighborhoods |
| B9 | Conserved metabolic background (DRAM) |

## Evidence and teaching boundaries

The read and assembly images are attributed teaching examples, not NMZ sequence data. Bakta and gene-neighborhood images are project outputs. Gene-map arrows and synteny links show annotated features and sequence similarities; proximity alone does not demonstrate co-transcription or expression.

The selected 35–44 kb comparison windows are contained within assembled replicons and do not cross contig breaks. Circular closure makes those end-to-end neighborhood comparisons possible, but does not independently verify every base, establish an operon, or show that a predicted product is synthesized.

antiSMASH detects candidate biosynthetic regions. Region numbers are assigned along each chromosome, so equal numbers across isolates do not imply homologous loci. Multi-protein, high-identity matches can support a more specific pathway hypothesis than a partial or single-protein match. The raw *swrW* match to “ririwpeptide” is weak; interpretation of *swrW* draws on the focal gene annotation, sequence/domain evidence and the separate chemical report. No antiSMASH label alone proves a compound.

The LC-HRMS source workflows labelled glycopeptide and DCM report putative assignments for rows/samples 1 and 2, including serrawettin W1 (= serratamolide A) and serratamolide C. “Glycopeptide” is the source workflow label, not a chemical-class assignment for these compounds. For this draft, those entries are treated as covering both focal isolates only under the author’s stated working assumption. The row/sample numbers are chemical-analysis entries, not isolate identifiers; the chemistry source provides no isolate key. Identification confidence should be checked against the chemistry source before final manuscript claims. No authentic-standard confirmation or per-isolate peak-area interpretation is added here.

ANI and dDDH are relatedness measures; GTDB-Tk and TYGS are analysis systems with different references and operational rules. The focal TYGS output places both queries in *S. marcescens* species cluster 6, while GTDB r232 assigns C14-NMZ to *S. nematodiphila*. Retain both results as method-specific classifications.

The HADEG toluene category is a useful example of a shared downstream enzyme annotation in a characterized pathway. It does not establish the upstream reactions needed for toluene degradation. Likewise, a LadA-like sequence motivates a comparative hypothesis but does not identify its substrate or prove alkane oxidation.

The capsule, *pga* and *bcs* panels show candidate matrix-associated loci, not chemical characterization or production measurements. The external emulsan-reference comparison is excluded from this revision. Surface-tension reduction, E24, substrate conversion and pour point remain distinct assay outcomes; no numerical wet-lab results were supplied for this genomics explainer.

## Companion material and sources

- [Speaker notes](speaker-notes.md) provide slide-specific explanations and references.
- [Glossary](glossary.md) defines core and optional technical terms.
- `assets/source-assets.json` records source URLs, licenses and checksums for new web visuals.
- `assets/teaching-neighborhood-provenance.json` identifies the manuscript data underlying the three teaching panels.

Use the notes for supporting detail and keep qualifications visible where they change the interpretation. The slide sequence favors explicit scientific terminology while defining unfamiliar terms beside the findings they explain.
