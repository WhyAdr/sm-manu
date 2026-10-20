# Presentation outline and glossary: interpreting the NMZ Serratia genomes

Prepared 4 October 2026; independently audited and revised **18 October 2026**. Based on [sm-manu commit f1de07b](https://github.com/WhyAdr/sm-manu/commit/f1de07bb47755c9277f5d067954b21eea0be63f9), local analysis outputs and the primary-source validation recorded in the workspace audit. Updated for production on 20 October 2026 with the unified final-assembly TYGS analysis. The presentation outputs and glossary are in `manuscript/explainer/`. This file remains the content outline.

**Audience:** biology/wet-lab colleagues with limited genomics experience. **Format:** 12 main slides, approximately 18–20 minutes, followed by discussion. The glossary is a handout; technical backup slides are optional. Colleagues should leave able to explain what the genomes suggest, what the assays measure and which mechanism remains unresolved.

The produced deck retains the 12-slide main sequence below and uses eight optional backups: workflow, unified TYGS tree, taxonomy/length comparisons, SwrW figure reading, HADEG categories, chemical assignments, additional aromatic candidates, and focal LadA-like neighborhoods. The original five backup topics below remain content guidance rather than final slide numbers. The glossary is a three-page handout.

## Audit decisions about the previous outline

| Decision | Assessment and change |
|---|---|
| **Agree** | Retain the evidence distinctions, one biological point per slide, focused gene-neighborhood examples and separation of assays from predictions. |
| **Revise** | Reduce the 14-slide main sequence to 12. Move the software workflow, detailed taxonomy, NRPS domains and database troubleshooting to backup slides. The previous main slides introduced too many acronyms. |
| **Revise** | Present C14's actual GTDB assignment, verified tree support and documented PoFF run. Explain the final-assembly unified TYGS result and its species-label difference from GTDB; total-length parity is now resolved. |
| **Revise** | Follow the author's working assumption that the chemistry deck/PDF covers both isolates. Present reported serrawettin W1/serratamolide C assignments without inventing authentic-standard evidence or endpoint-assay data. Avoid teaching peak-area percentage as concentration. |
| **Reject** | Any slide implying a 99% tree support means 99% certainty of enzyme activity; a BGC label confirms a compound; oxygenated-aromatic pathways prove petroleum degradation; or emulsification/tension/pour point are interchangeable. |

For slide production, use short English labels, define each essential term once and keep detailed qualifications in spoken notes unless they change the conclusion. Label evidence explicitly as **sequence prediction**, **chemical annotation**, **measured effect** or **unresolved**; colour alone is insufficient. Keep proposed assays visibly conditional. Do not populate missing data with literature results from other strains.

## Main slides

### Slide 1. The genomics contribution to the NMZ study

**Slide copy**

- SM-NMZ: slaughterhouse-effluent isolate
- C14-NMZ: Calotropis gigantea rhizosphere isolate
- Genome analysis identifies candidates relevant to the measured laboratory phenotype

**Visual:** the two isolates and the agreed study aim, with actual culture photographs if available. Name the actual central endpoint when the group chooses it.

**Speaker notes:** “The genomic question is which encoded systems help interpret our experimental observations. The strongest candidates concern surface-active molecules, extracellular matrices and specific aromatic substrates. Initial alkane oxidation remains unresolved.” A pour-point effect or degradation percentage belongs here only if supplied and verified for the relevant material.

**Term:** isolate. **Evidence:** manuscript isolate records; endpoint to be supplied by the experimental team.

### Slide 2. DNA sequence, gene predictions and measured activity

**Slide copy**

- Sequencing records DNA fragments
- Assembly reconstructs genome sequences
- Annotation predicts genes and possible functions
- Experiments measure activity under particular conditions

**Visual:** a simple reads → genome → annotated gene diagram, alongside an independent assay result. Use separate labels for inference and measurement.

**Speaker notes:** A gene can be present without being expressed in the assay. A protein can resemble a database entry while acting on another substrate. The genome is a parts list; an activity assay tests what the system does in a defined setting. Expression data, if collected, measure another part of this relationship rather than automatically proving enzyme function.

**Terms:** read, assembly, annotation, gene, phenotype. **Evidence:** study workflow; no claim of expression measurements.

### Slide 3. What each kind of evidence answers

**Slide copy**

| Evidence | Question answered |
|---|---|
| Gene/protein similarity | Is there a related candidate? |
| Several linked pathway genes | Is the proposed machinery coherent? |
| Chemical analysis | Which compound assignment is supported? |
| Activity assay | What effect occurred under these conditions? |
| Controlled perturbation | Does this factor contribute to the effect? |

**Visual:** the table with one study example per row in spoken notes.

**Speaker notes:** Use *swrW* as the example. These evidence types complement one another; they do not automatically prove the same proposition. Two tools using related reference information are not necessarily independent confirmations. A knockout/complementation or appropriately controlled purified-fraction experiment can test a particular contribution, but its scope still depends on the controls.

**Terms:** homolog, pathway, causality. **Source:** [Shanks et al., 2012](https://doi.org/10.1371/journal.pone.0036398), as a reference-strain example rather than an NMZ experiment.

### Slide 4. Genome resources and identity

**Slide copy**

| Feature | SM-NMZ | C14-NMZ |
|---|---|---|
| Chromosome | 4.971 Mb | 5.051 Mb |
| Predicted CDSs | 4,566 | 4,626 |
| Additional circular element | 3.581 kb, annotated plasmid | None recovered |
| GTDB species assignment | S. marcescens | S. nematodiphila |

**Visible qualification:** “Final TYGS lengths match Bakta. TYGS groups both isolates as S. marcescens; GTDB separates their species labels.”

**Speaker notes:** Sizes and counts were checked in Bakta outputs. A circular drawing does not validate circularization or sequence accuracy. GTDB-Tk v2.7.2/r232 explicitly assigned both species through ANI screening, not a protein-tree placement. The unified TYGS queries total 4,974,098 and 5,050,553 bp, exactly matching Bakta. SM includes its plasmid. TYGS identifies both as S. marcescens in species cluster 6, with separate subspecies clusters 11/10. Its protein counts use a different prediction pipeline from Bakta. Detailed thresholds and nomenclature belong in backup B2 rather than the main talk.

**Terms:** chromosome, plasmid, CDS, Mb/kb. **Evidence:** focal Bakta JSON/summaries; GTDB classification table; TYGS strain datasets.

### Slide 5. A specific candidate for surface-active metabolites

**Slide copy**

- Both isolates carry a conserved swrW synthetase candidate
- Its catalytic architecture supports serrawettin/serratamolide biosynthetic potential
- LC-HRMS reports serrawettin W1 and serratamolide C for both isolates
- Exact analytical identification criteria and assay contributions remain to be linked

**Visual:** focused SwrW gene arrows from the two isolates, with a separate chemistry evidence label. The author's drafting assumption covers both isolates. Distinguish the reported chemical assignments from the genomic inference and from an assay mechanism.

**Speaker notes:** SwrW is a large enzyme that assembles a lipid-linked peptide using one catalytic module. In reference strains, genetics and purified-compound chemistry link it to serrawettin W1, also called serratamolide. That supports our candidate interpretation without identifying the exact fatty-acyl variant. The author has instructed us to treat the chemistry presentation as covering both isolates. Report its W1/serratamolide C assignments without adding an authentic-standard validation claim. Genomics does not independently select a congener. The reported 98.9% focal-protein identity belongs in notes, not as an activity score.

**Terms:** biosurfactant, congener, biosynthetic locus. **Sources:** focal antiSMASH Region 11 records; supplied chemistry deck/PDF; [Shanks et al., 2012](https://doi.org/10.1371/journal.pone.0036398).

### Slide 6. Surface activity and extracellular matrices

**Slide copy**

| Candidate system | Possible relevance |
|---|---|
| Serrawettin-associated machinery | Interfacial activity |
| Capsule/EPS and cellulose-associated loci | Matrix and attachment properties |
| SM's contiguous pga locus | PNAG-associated matrix potential |

**Visible qualification:** “Candidate functions; product composition and contributions require matched evidence.”

**Visual:** this table, paired with a small schematic distinguishing an interface from a cell-associated matrix. Avoid portraying all EPS as freely secreted emulsifiers.

**Speaker notes:** Small amphiphiles and large polymers can affect emulsions in different, sometimes overlapping ways. C14 has an isolated *pgaB*-like annotation, but not the same complete locus as SM. HADEG's “Emulsan” row contains generic capsule markers; it does not identify the chemically characterized *Acinetobacter* polymer. Surface-tension reduction and emulsion stability need separate measurements. The red/pink phenotype and *pig* locus are pigment context, not evidence that prodigiosin caused a surface effect.

**Terms:** EPS, capsule, cellulose, PNAG. **Sources:** focal annotation/locus records; [Wang et al., 2004](https://doi.org/10.1128/JB.186.9.2724-2734.2004); [Nakar and Gutnick, 2003](https://doi.org/10.1128/JB.185.3.1001-1009.2003).

### Slide 7. The aromatic substrates matter

**Slide copy**

| Candidate metabolism | Genomic finding |
|---|---|
| Hydroxyphenylacetate and phenylacetate | Organized hpa and paa loci in both isolates |
| Hydroxybenzoate/protocatechuate and gentisate | Additional SM candidates; some steps unresolved |

**Visible takeaway:** “Oxygenated-aromatic metabolism does not establish petroleum-hydrocarbon degradation.”

**Visual:** two representative labelled substrate structures or a compact substrate table. Distinguish oxygenated aromatics from an alkane and from an unsubstituted aromatic hydrocarbon.

**Speaker notes:** “Aromatic” describes ring chemistry, not an odour. Phenylacetate and hydroxyphenylacetate contain oxygen, so they are not hydrocarbons. These findings are relevant if the experimental substrate matches; otherwise they provide ecological context. Extra annotations support broader SM potential without demonstrating a higher degradation rate or complete activity. Do not relabel the HADEG *pobA* category as toluene degradation.

**Terms:** aromatic, hydrocarbon, substrate. **Sources:** locus records; [Prieto et al., 1996](https://doi.org/10.1128/jb.178.1.111-120.1996), [Teufel et al., 2010](https://doi.org/10.1073/pnas.1005399107).

### Slide 8. Initial alkane oxidation remains unresolved

**Slide copy**

“Alkane → alcohol → aldehyde → fatty acid → assimilation”

- The first oxidation requires appropriate initiation machinery
- Downstream processing candidates occur in both genomes
- The reported searches did not resolve a convincing initiation system

**Visual:** the terminal-oxidation sequence, marking the first arrow “unresolved in these analyses.” Label it a simplified aerobic terminal route; do not imply it covers every alkane pathway.

**Speaker notes:** Having machinery to process fatty acids does not establish the ability to start with an unmodified alkane. The genes named *alkB* here encode DNA-repair demethylases, a different protein from membrane alkane hydroxylase AlkB. A negative search is limited by its sensitivity and thresholds. If controlled experiments show transformation, report it while keeping the genetic first step unresolved. Emulsification alone does not demonstrate this reaction.

**Terms:** oxidation, monooxygenase, beta-oxidation. **Evidence:** focal annotations, HADEG tables and documented search scope; no universal absence claim.

### Slide 9. What the LadA comparison establishes

**Slide copy**

- The two focal proteins form a strongly supported sequence pair
- A broader supported grouping includes LadA references
- Nearby genes provide sulfur/methionine-associated context
- The catalytic substrate remains unresolved

**Visual:** corrected tree crop with the focal pair, canonical references, comparison sequences, visible support and scale; a small gene-neighborhood crop may accompany it. Keep exact tags in notes.

**Speaker notes:** Tips are sequences; branch lengths represent estimated change. Verified UFBoot values are 100% for the focal pair and 99% for the broader grouping. These measure grouping support, not probability of alkane activity. The reference pair itself has only 68% UFBoot. Use a corrected scientific tree extract labelled from the source smart-gap treefile, whose internal labels are SH-aLRT/UFBoot pairs. Show the second value as UFBoot, and retain branch lengths. A 2025 biochemical study failed to detect direct long-chain alkane hydroxylation for tested LadA proteins under its conditions; earlier in-vivo observations remain relevant. Neither result establishes our candidates' substrate. Neighborhood context also does not prove a sulfur reaction.

**Terms:** phylogeny, branch support, gene neighborhood. **Sources:** local `.iqtree`/`.treefile`; [Mireles et al., 2025](https://doi.org/10.1371/journal.pone.0332702).

### Slide 10. Connect each actual assay to the relevant candidate

**Slide copy**

| Endpoint, if measured | Candidate interpretation |
|---|---|
| Surface/interfacial tension | Amphiphile contribution |
| Emulsion stability | Amphiphile and/or matrix contribution |
| Pour point | Low-temperature oil-flow performance |
| Substrate loss with controls/products | Chemical transformation of that substrate |

**Visible label:** “Assay-matching framework; these rows are not a claim that all experiments were performed.”

**Visual:** add the coauthor's verified isolate/fraction result beside the relevant row. If unavailable, show “not reviewed” instead of a fabricated value or a zero.

**Speaker notes:** Describe units and controls: tension in mN/m, an emulsification index under its specified protocol, pour point in degrees under a stated method, substrate transformation with recovery controls/products or carbon accounting. Apparent loss can result from adsorption, extraction or emulsification. Peak-area percentages in the chemistry deck are relative detector signals, not metabolite concentrations. A shared *swrW* locus alone cannot explain stronger activity in one isolate; regulation and product mixtures are hypotheses until tested.

**Terms:** emulsification index, surface tension, pour point, peak area. **Sources:** actual study assays when supplied; external serrawettin precedent [Zhang et al., 2021](https://doi.org/10.1007/s00449-021-02625-4) must remain labelled as another strain.

### Slide 11. Application context and host-interaction genes

**Slide copy**

- Both genomes contain ShlA–ShlB, Has and T6SS-associated homologs
- These concern hemolysin machinery, heme acquisition and bacterial competition
- Reference-match counts do not quantify pathogenicity or establish safety

**Visual:** three named systems and their reference biological roles. Avoid a safety score or green/red strain ranking.

**Speaker notes:** These findings matter if environmental or petroleum deployment is proposed. T6SS reference labels can overlap on the same locus. SwrW-associated serratamolide also has hemolytic activity in a reference strain, so “biosurfactant” is a functional description rather than an assurance of harmlessness. Do not infer that either NMZ isolate demonstrated hemolysis without an assay. Keep this proportional to the manuscript's application claims.

**Terms:** hemolysin, heme acquisition, T6SS. **Sources:** focal VFDB results; [Shanks et al., 2012](https://doi.org/10.1371/journal.pone.0036398), [Murdoch et al., 2011](https://doi.org/10.1128/JB.05671-11).

### Slide 12. The genomics narrative for the paper

**Slide copy**

- Conserved surfactant-associated and matrix candidates
- Shared oxygenated-aromatic pathways, with extra SM candidates
- Initial alkane oxidation unresolved
- Experimental effects and compound identities interpreted at their actual evidence level

**Visual:** one compact table mapping these findings to the final paper's actual endpoints. Retain a focused main genomic figure; put inventories and technical comparisons in supplements.

**Speaker notes:** Close with three concrete group decisions: which experimental endpoint leads the paper; how chemical features map to isolates and fractions; which genomic figure best explains that result. Keep provenance and reference corrections in the author action list rather than filling the closing slide with workflow administration.

## Optional backup slides

### B1. Workflow and tools by purpose

| Purpose | Tools used | Output |
|---|---|---|
| Read assessment and selection | NanoPlot, Chopper, Filtlong | Retained sequence evidence |
| Reconstruction and refinement | Autocycler and source-listed assemblers; dnaapler; reported Dorado workflow | Final assemblies; raw-read and accession documentation retained separately |
| Gene prediction | Bakta v1.12.0, database v6.0 | Features and predicted proteins |
| Identity and nomenclature | TYGS; GTDB-Tk v2.7.2/r232; LPSN | Relatedness, classification and naming status |
| Metabolic/biosynthetic candidates | antiSMASH, DRAM, CANT-HYD, HADEG | Candidate regions and functions |
| Comparative context | VFDB, ProteinOrtho/DIAMOND, clinker | Homologs, groups and local organization |
| Protein relationships | MAFFT, ClipKIT, IQ-TREE 3 | Alignment, inferred tree and support |

Explain the biological question before naming its tool. Software agreement may reuse the same underlying reference evidence. Use the corrected CANT-HYD and Plassembler bibliography entries; historical LadA evidence must use the correct [Feng et al. DOI 10.1073/pnas.0609650104](https://doi.org/10.1073/pnas.0609650104), not the inherited manuscript DOI.

### B2. Detailed taxonomy and sequence provenance

Show the actual GTDB classification/representative/ANI/AF table. SM: 98.86%/0.947 to GCF_017299535.1, with a 96.86% radius. C14: 98.22%/0.932 to GCF_000738675.1, radius 95%. C14's 96.82% match to the SM representative is below that representative's radius. Do not replace these with a universal 95% rule.

Unified TYGS: SM–ATCC 13880, 90.7%; SM–DSM 21420, 74.7%; C14–DSM 21420, 85.5%; C14–ATCC 13880, 73.7%; direct C14–SM, 74.2% (71.2–77.0%). The report identifies both as S. marcescens in species cluster 6, but separate subspecies clusters 11/10. GTDB retains separate species labels. Explain the operational difference without proposing synonymy. LPSN treats sakuensis as a synonym within S. marcescens. Final TYGS total query lengths match Bakta exactly, with the SM plasmid included. Show TYGS protein counts separately from Bakta CDS counts.

**Sources:** original workbooks/GTDB files; [GTDB-Tk documentation](https://ecogenomics.github.io/GTDBTk/faq.html); [LPSN](https://lpsn.dsmz.de/subspecies/serratia-marcescens-sakuensis).

### B3. Reading biosynthetic and neighborhood evidence

Use the actual focal SwrW module: C, bond formation/acyl loading in the relevant context; A, substrate activation; PCP, intermediate carriage; TE, release-related chemistry. A Ser-selective single module does not mean a one-amino-acid final product: characterized SwrW makes a cyclic dimeric depsipeptide. Architecture alone does not specify a congener or release chemistry.

In a clinker view, arrows show genes/direction, lengths show genomic size and ribbons show protein matches. Nearby genes are not automatically an operon. A reversed display is not automatically a biological inversion. The antiSMASH raw ririwpeptide match is not the same as the curated SwrW interpretation; even all reference genes matching does not guarantee the compound. [Official guidance](https://docs.antismash.secondarymetabolites.org/modules/clusterblast/).

### B4. Reading comparative plots and protein groups

DRAM Panel A: module coverage; Panel B: binary annotation calls. VFDB heatmap: reference similarity under stated filters. HADEG bubbles: marker-category hit counts, not flux, pathway completeness or independent active enzyme copies. Zero means no qualifying call in that analysis, not necessarily biological absence. The focal HADEG auxiliary category has two ssuD hits.

The 14-proteome sequence-group result is 10,252 groups; the successful PoFF gene-order result is 10,438, both with 2,140 groups represented in every input. The focal ten-member group is unchanged. These describe a selected mixed-species panel, not a species-wide pan-genome, single-copy core or open/closed pan-genome. The tree has 12 candidates plus 22 comparison sequences; the 19-sequence panel includes canonical LadA. Some comparison entries are unreviewed/archived/replacements rather than validated enzyme controls.

### B5. Chemistry confidence and author actions

Show one correctly sample-labelled feature with retention time, measured mass/adduct, mass error, diagnostic fragments, blanks and reference evidence. Explain why a library candidate is different from identification with an authentic standard. Do not assign a formal confidence level without checking the underlying evidence. Use the author's assumption that the presentation covers both isolates, and retain the actual identification evidence and fraction labels when discussing a specific chemical feature.

The author action list is: final accessions/read and assembly QC; isolate/fraction/assay mapping; compound identification evidence; final group tables and comparator manifests; corrected figures and references. This belongs in discussion or handoff, not a dense main scientific slide.

## Core glossary: handout for colleagues

| Term | Plain-language meaning and study relevance |
|---|---|
| Isolate; strain | An organism recovered from a sample/culture; a distinguishable lineage. The isolate name is not itself a species identification. |
| Genotype; phenotype | Genetic constitution; an observed trait under stated conditions. Presence of a candidate gene does not predict its quantitative effect by itself. |
| Read; basecalling | A recorded sequence fragment; conversion of nanopore electrical signal into DNA bases. |
| Assembly; contig; polishing | Reconstructing longer sequences; a continuous assembled sequence; refining that reconstruction with read evidence. |
| Chromosome; plasmid; replicon | A main genomic DNA molecule; an additional replicating DNA element; the general term for a replication unit. Plasmid identity requires evidence. |
| bp, kb, Mb | Base pairs, thousand base pairs, million base pairs. They measure sequence length. |
| Annotation; CDS; predicted proteome | Inferred genome features/functions; a protein-coding sequence; the protein set predicted from annotation. Here FAA files also contain ten sORFs per isolate. |
| GC content | Percentage of DNA bases that are G or C. A descriptive property, not a degradation-performance score. |
| Gene; protein | The DNA sequence and its encoded product. Write the gene as italic *swrW* and the protein as SwrW in manuscript prose. |
| Homolog | A sequence related by shared ancestry. This does not guarantee the same substrate or function. |
| Pathway; substrate | A set of chemical steps; the molecule an enzyme or pathway acts on. Substrate identity matters when connecting genomics to an assay. |
| Biosynthetic gene cluster (BGC) | Nearby genes associated with making a specialized molecule. A software region may include several predictions; 11 regions do not mean 11 demonstrated compounds. |
| Biosurfactant; amphiphile | A biologically produced surface-active substance; a molecule with water-compatible and water-avoiding portions. Activity and molecular identity need distinct evidence. |
| Serrawettin W1; serratamolide; congener | W1 is also called serratamolide; congeners such as serratamolide C are related but chemically distinct variants. Do not count aliases as two independent discoveries. |
| EPS; capsule; biofilm | Extracellular polymeric substances; a cell-associated polymer layer; organized microbial growth often associated with a matrix. Their composition and physical effects vary. |
| PNAG | Poly-beta-1,6-N-acetylglucosamine, a matrix/adhesion polysaccharide associated with the *pga* system. A lone *pgaB* annotation does not establish the whole system. |
| Hydrocarbon; aromatic compound | A molecule containing only carbon and hydrogen; a compound with aromatic ring chemistry. Oxygenated aromatics can be aromatic without being hydrocarbons. |
| Alkane; oxidation; monooxygenase | A saturated hydrocarbon; a chemical oxidation step; an enzyme incorporating one oxygen atom into a substrate in the relevant reaction. An enzyme-family label does not identify the tested substrate. |
| Phylogeny; branch support | Inferred sequence relationships; support for a grouping under the analysis. A 99% supported node is not 99% certainty of biochemical activity. |
| Gene neighborhood; synteny | Local gene arrangement; conserved gene organization in the comparative usage here. Proximity does not prove co-regulation or a shared substrate. |
| LC-HRMS; MS/MS | Liquid chromatography–high-resolution mass spectrometry; fragmentation of selected ions to help distinguish structures. Exact mass alone may fit several compounds. |
| Tentative annotation; confirmed identity | A candidate chemical label; an identification supported by the appropriate reference/standard evidence. Genomics can support plausibility without upgrading analytical confidence. |
| Peak-area percentage | Relative detector response under an analysis/denominator. It is not automatically concentration, purity, mass fraction or yield. |
| Surface tension; interfacial tension | Physical properties at a liquid–gas or two-phase interface. Report the actual interface and measurement method. |
| Emulsification index | A protocol-dependent measure of emulsion formation/stability, often involving layer height after a defined time. It is not the same as tension reduction. |
| Pour point; PPD | A low-temperature flow endpoint under a defined test; pour-point depressant. A lower pour point does not by itself establish chemical degradation. |
| Transformation; mineralization | Chemical conversion of a substrate; conversion to inorganic end products. Apparent disappearance alone establishes neither. |
| Virulence-associated homolog | A match to a protein implicated in a pathogenic process in a reference context. It does not measure this isolate's pathogenicity or establish safety. |

## Technical glossary: optional reading

| Term | Meaning and limitation |
|---|---|
| ONT; WGS; FASTQ; FASTA | Oxford Nanopore Technologies; whole-genome sequencing; sequence plus per-base quality; sequence without those quality fields. |
| Q score; N50; sequencing depth | A logarithmic quality estimate; length above which half the bases occur in sequences that long or longer; mapped read representation per position. None alone proves assembly accuracy. |
| ANI; AF; dDDH | Average nucleotide identity across aligned genome regions; alignment fraction; computational DNA–DNA hybridization relatedness. These use operational boundaries and specified references. |
| Type strain; representative; LPSN | Strain anchoring a species name; database comparison genome; nomenclature resource. A representative need not be the type strain. |
| Ortholog; paralog; orthogroup | Homologs related through speciation; through duplication; an inferred group under a method's rules. Conserved function is not guaranteed. |
| ProteinOrtho; PoFF | Protein grouping method; its gene-order extension. Keep sequence and gene-order outputs distinct. |
| Identity; alignment coverage; E value | Exact residue matches over an alignment; fraction of a specified sequence covered; expected chance matches in the search space. State the denominator and threshold. |
| HMM; Pfam; MIBiG | Protein-family statistical profile; protein-family resource; characterized BGC reference database. Matching a model/reference is not an activity assay. |
| NRPS; C–A–PCP–TE | Nonribosomal peptide synthetase; condensation, adenylation, carrier and thioesterase domains. Modules can be used iteratively; domain labels alone do not determine the complete product. |
| hpa; paa; pob/pca | Labels for hydroxyphenylacetate, phenylacetate and hydroxybenzoate/protocatechuate-associated machinery in this interpretation. Use locus/product evidence rather than gene names alone. |
| LadA; FMN; LLM | A monooxygenase-associated family name; flavin mononucleotide cofactor; luciferase-like monooxygenase terminology. Here LLM refers to an enzyme family. |
| AlkB naming ambiguity | DNA-repair AlkB and membrane alkane hydroxylase AlkB are different proteins. The focal annotations concern the former. |
| Adduct; mass error; authentic standard | An ion associated with another species such as H+ or Na+; measured versus expected mass difference; a reference compound measured for comparison. |
| ShlA–ShlB; Has; T6SS; VFDB | Hemolysin/secretion-activation pair; heme-acquisition system; type VI secretion system, often involved in competition; Virulence Factor Database. Multiple labels may match the same locus. |
| Causality; controls; replicate | Evidence that changing a factor changes an outcome; comparisons addressing alternative explanations; independently repeated units whose biological/technical level must be defined. |

## Production and source notes

The genomic numbers above were checked in original local outputs; the biological interpretations remain bounded by annotation and reference evidence. Do not present the old figures without correcting legends, support labels and provenance. Sources listed beside slides belong in their final speaker notes, with additional image credits if external visuals are used. The [editorial integration notes](../sm-manu-genomics-editorial-and-integration-notes-2026-10-18.md) supplies the full decision record and figure allocation; the [integrated concise draft](../sm-manu-genomics-placeholder-integrated-draft-2026-10-18.md) supplies integration prose.
