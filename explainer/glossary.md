# NMZ Serratia genomics: glossary

Companion to the research-group explainer, 21 October 2026.

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
| EPS; CPS; capsule; biofilm | EPS here means extracellular polymeric substances: a matrix that may include polysaccharides, proteins and DNA. CPS means capsular polysaccharide, associated with the cell. Biofilm describes organized microbial growth often associated with a matrix. These terms do not identify one chemical product. |
| PNAG | Poly-beta-1,6-N-acetylglucosamine, a matrix/adhesion polysaccharide associated with the *pga* system. A lone *pgaB* annotation does not establish the whole system. |
| Cellulose; bcs | A beta-1,4-linked glucose polymer; genes associated with bacterial cellulose synthesis, processing and export. The focal bcs loci support candidates, without measuring cellulose production. |
| Gene cluster; operon | Nearby genes implicated in a shared function; genes transcribed together as a unit. A predicted region or conserved neighborhood is not automatically an experimentally established operon. |
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
| ANI; AF; dDDH | Average nucleotide identity across aligned genome regions; fraction of sequence aligned under the method; computational estimate of DNA-DNA hybridization relatedness. ANI is not identity across every base of the whole genome. Species boundaries depend on methods and references. |
| GTDB; GTDB-Tk; TYGS | Genome Taxonomy Database; its local classification toolkit; Type (Strain) Genome Server, a web service using type-strain comparisons, GBDP distances, dDDH and a phylogram. They are systems that use relatedness evidence, not names of equivalent metrics. |
| ANI screening; species radius | Classification against reference genomes using ANI and aligned fraction; the representative-specific identity boundary used by GTDB. The focal queries were classified by screening, without marker-tree placement. |
| GBDP | Genome BLAST Distance Phylogeny: genome-comparison methods used by TYGS. The d4 formula for the focal dDDH estimates is distinct from the d5 distances used for the tree. |
| Type strain; representative; LPSN | Strain anchoring a species name; database comparison genome; nomenclature resource. A representative need not be the type strain. |
| Ortholog; paralog; orthogroup | Homologs related through speciation; through duplication; an inferred group under a method's rules. Conserved function is not guaranteed. |
| ProteinOrtho; PoFF | Protein grouping method; its gene-order extension. Keep sequence and gene-order outputs distinct. |
| Identity; alignment coverage; E value | Exact residue matches over an alignment; fraction of a specified sequence covered; expected chance matches in the search space. State the denominator and threshold. |
| HMM; Pfam; MIBiG | Protein-family statistical profile; protein-family resource; characterized BGC reference database. Matching a model/reference is not an activity assay. |
| NRPS; C–A–PCP–TE | Nonribosomal peptide synthetase; condensation, adenylation, carrier and thioesterase domains. Modules can be used iteratively; domain labels alone do not determine the complete product. |
| hpa; paa; pob/pca | Labels for hydroxyphenylacetate, phenylacetate and hydroxybenzoate/protocatechuate-associated machinery in this interpretation. Use locus/product evidence rather than gene names alone. |
| 4-HBA; PobA; PcaK | 4-hydroxybenzoate; a hydroxylase acting on it in characterized systems; an aromatic-acid transporter. A downstream PobA-like hit does not establish the upstream steps of a complete toluene route. |
| wzb/wzc; HADEG Emulsan category | Generic capsule-associated phosphatase/kinase markers. Their database category does not determine the chemical structure or activity of a polymer produced by NMZ. |
| LadA; FMN; LLM | A monooxygenase-associated family name; flavin mononucleotide cofactor; luciferase-like monooxygenase terminology. Here LLM refers to an enzyme family. |
| AlkB naming ambiguity | DNA-repair AlkB and membrane alkane hydroxylase AlkB are different proteins. The focal annotations concern the former. |
| Adduct; mass error; authentic standard | An ion associated with another species such as H+ or Na+; measured versus expected mass difference; a reference compound measured for comparison. |
| ShlA–ShlB; Has; T6SS; VFDB | Hemolysin/secretion-activation pair; heme-acquisition system; type VI secretion system, often involved in competition; Virulence Factor Database. Multiple labels may match the same locus. |
| Causality; controls; replicate | Evidence that changing a factor changes an outcome; comparisons addressing alternative explanations; independently repeated units whose biological/technical level must be defined. |
