# NMZ *Serratia* genomics: glossary

Companion to the research-group explainer, revised 6 November 2026.

| Term | Plain-language meaning and study relevance |
|---|---|
| Isolate; strain | An organism recovered from a sample or culture; a distinguishable lineage. An isolate name is not itself a species identification. |
| Genotype; phenotype | Genetic constitution; an observed trait under stated conditions. Finding a candidate gene does not by itself predict the size of an effect. |
| Read; basecalling | A sequence fragment recorded by a sequencing instrument; conversion of nanopore electrical signal into DNA bases. A basecalled read is sequence data, not the raw electrical signal. |
| Assembly; contig; polishing | Reconstructing longer genomic sequences from reads; one continuous assembled sequence; refining a sequence using read evidence. |
| Closed circular assembly; contig break | A replicon reconstructed as a circular sequence with its ends joined; a boundary between separate assembled sequences. Closure lets a selected neighborhood be followed without a contig break, but does not independently certify every base or prove a gene's activity or product. |
| Chromosome; plasmid; replicon | A main genomic DNA molecule; an additional replicating DNA element; the general term for a replication unit. Plasmid identity requires supporting evidence. |
| bp, kb, Mb | Base pairs, thousand base pairs, million base pairs. They measure sequence length. |
| Annotation; CDS; predicted proteome | Inferred genome features or functions; a protein-coding sequence; the protein set predicted from annotation. The focal FAA files also contain ten short ORFs per isolate. |
| GC content | Percentage of DNA bases that are G or C. It is descriptive, not a degradation-performance score. |
| Gene; protein | The DNA sequence and its encoded product. Write the gene as italic *swrW* and the protein as SwrW in manuscript prose. |
| Homolog | A sequence related through shared ancestry. Homology alone does not guarantee the same substrate or function. |
| Pathway; substrate | A set of chemical steps; the molecule an enzyme or pathway acts on. Substrate identity matters when connecting genomic candidates to an assay. |
| Biosynthetic gene cluster (BGC) | A group of nearby genes that may work together to make a specialized molecule. A predicted BGC region can contain several candidate genes; a count of predicted regions is not a count of demonstrated products. |
| antiSMASH; region | antiSMASH is software that identifies and classifies candidate BGCs using sequence and domain rules. Its region numbers mark positions within an input sequence; matching numbers in different genomes do not establish that the regions are equivalent. |
| MIBiG; cluster match | MIBiG is a database of experimentally characterized BGC references. A similarity hit is evidence of resemblance; its coverage, identity and number of matching genes affect how specifically it supports a pathway hypothesis. A database label alone does not identify the product. |
| Biosurfactant; bioemulsifier; amphiphile | A biologically produced substance that can affect surface or interface properties; a substance that promotes or stabilizes an emulsion; a molecule with water-compatible and water-avoiding portions. These activities overlap in some molecules but are not interchangeable assay results. |
| Serrawettin W1; serratamolide A; serratamolide C; congener | Serrawettin W1 is also called serratamolide A. Serratamolide C is a related but chemically distinct congener. The LC-HRMS source reports putative assignments; the names should not be counted as independent discoveries when they are aliases. |
| LC-HRMS rows/samples 1 and 2 | Chemical-analysis entries, not isolate identifiers. In the source workflows labelled glycopeptide and DCM, the reported putative assignments include serrawettin W1 (= serratamolide A) and serratamolide C. “Glycopeptide” is the workflow label, not a chemical-class assignment for these compounds. The current both-isolates coverage is a drafting assumption; the source provides no isolate key. |
| EPS; CPS; capsule; biofilm | EPS here means extracellular polymeric substances: a matrix that may include polysaccharides, proteins and DNA. CPS means capsular polysaccharide associated with the cell. A biofilm is organized microbial growth often associated with a matrix. These terms do not identify one chemical product. |
| PNAG | Poly-β-1,6-N-acetylglucosamine, a matrix/adhesion polysaccharide associated with the *pga* system. A lone *pgaB* annotation does not establish a complete local *pga* system. |
| Cellulose; *bcs* | A β-1,4-linked glucose polymer; genes associated with bacterial cellulose synthesis, processing and export. Focal *bcs* loci are genomic candidates, not cellulose production measurements. |
| Gene cluster; operon | Nearby genes implicated in a shared function; genes transcribed together as a unit. A predicted region or conserved neighborhood is not automatically an experimentally established operon. |
| Hydrocarbon; aromatic compound | A molecule containing only carbon and hydrogen; a compound with aromatic ring chemistry. Oxygenated aromatics can be aromatic without being hydrocarbons. |
| Alkane; oxidation; monooxygenase | A saturated hydrocarbon; a chemical oxidation step; an enzyme that incorporates one oxygen atom into a substrate in the relevant reaction. An enzyme-family label does not identify the tested substrate. |
| Phylogeny; branch support | Inferred sequence relationships; support for a grouping under the analysis. A node with 99% support is not 99% certainty of biochemical activity. |
| Gene neighborhood; synteny | Local gene arrangement; conserved gene organization in the comparative usage here. Proximity does not prove co-regulation or a shared substrate. |
| LC-HRMS; MS/MS | Liquid chromatography–high-resolution mass spectrometry; fragmentation of selected ions to help distinguish structures. Exact mass alone can fit multiple compounds; report assignments at the confidence supported by the analytical evidence. |
| Tentative annotation; confirmed identity | A candidate chemical label; an identification supported by appropriate reference and standard evidence. Genomics can support plausibility without upgrading analytical confidence. |
| Peak-area percentage | Relative detector response under a stated analysis and denominator. It is not automatically concentration, purity, mass fraction or yield. |
| Surface tension; interfacial tension | Physical properties at a liquid–gas or two-phase interface. Report the actual interface and measurement method. |
| Emulsification index; E24 | A protocol-dependent estimate of emulsion formation or stability, often the emulsion-layer height divided by total liquid-column height after 24 hours. It is not the same as tension reduction. |
| Pour point; PPD | A low-temperature flow endpoint under a defined test; pour-point depressant. A lower pour point does not by itself establish chemical degradation. |
| Transformation; mineralization | Chemical conversion of a substrate; conversion to inorganic end products. Apparent disappearance alone establishes neither. |
| Virulence-associated homolog | A match to a protein implicated in a pathogenic process in a reference context. It does not measure the focal isolate's pathogenicity or establish safety. |

## Technical glossary: optional reading

| Term | Meaning and limitation |
|---|---|
| ONT; WGS; FASTQ; FASTA | Oxford Nanopore Technologies; whole-genome sequencing; sequence plus per-base quality values; sequence without those quality fields. |
| Q score; N50; sequencing depth | A logarithmic quality estimate; the length at or above which half the assembled bases occur in sequences that long or longer; mapped read representation per position. None alone proves assembly accuracy. |
| ANI; AF; dDDH | Average nucleotide identity across aligned genome regions; fraction of sequence aligned under the method; computational estimate of DNA-DNA hybridization relatedness. ANI is not identity across every base of the whole genome. Species guides depend on the method and reference set. |
| GTDB; GTDB-Tk; TYGS | Genome Taxonomy Database; its classification toolkit; Type (Strain) Genome Server, a web service using type-strain comparisons, GBDP distances, dDDH and a phylogram. They are systems that use relatedness evidence, not names of equivalent metrics. |
| ANI screening; species radius | Classification against reference genomes using ANI and aligned fraction; the representative-specific identity boundary used by GTDB. The focal queries were classified by screening, without marker-tree placement. |
| GBDP | Genome BLAST Distance Phylogeny: genome-comparison methods used by TYGS. The d4 formula for focal dDDH estimates is distinct from the d5 distances used for the tree. |
| Type strain; representative; LPSN | Strain anchoring a species name; database comparison genome; nomenclature resource. A representative need not be the type strain. |
| Ortholog; paralog; orthogroup | Homologs related through speciation; through duplication; an inferred group under a method's rules. Conserved function is not guaranteed. |
| ProteinOrtho; PoFF | Protein grouping method; its gene-order extension. Keep sequence-based and gene-order outputs distinct. |
| Identity; alignment coverage; E value | Exact residue matches over an alignment; fraction of a specified sequence covered; expected chance matches in the search space. State the denominator and threshold. |
| HMM; Pfam | Statistical profile used to identify a protein family; a protein-family resource. A profile match supports a family assignment, not necessarily a particular substrate or activity. |
| NRPS; C–A–PCP–TE | Nonribosomal peptide synthetase; condensation, adenylation, carrier and thioesterase domains. Modules can be used iteratively; domain labels alone do not determine the complete product. |
| Condensation_Starter | Specialized N-terminal condensation domain (C_Starter) in NRPS enzymes (e.g. SwrW residues 1-298 with the conserved HHLIADG motif) that attaches a fatty-acyl chain directly to the first amino acid without requiring an upstream carrier protein. |
| Stachelhaus code | The 10 conserved amino acid residues lining the substrate-binding pocket of an NRPS adenylation (A) domain that predict which amino acid is activated. In SwrW, the DVWHVSLVDK motif confers 100% specificity for L-serine. |
| ProtoToRegion_RiQ | antiSMASH metric comparing an identified protocluster to a reference BGC in MIBiG. Combines sequence identity, gene synteny/order, and component overlap into a 0.00-1.00 score; a single matching gene can yield an inflated score if order is non-applicable. |
| yersinopine (CntM/CntL) | An opine-like metallophore / nicotianamine-related metal chelator synthesized by CntM (nicotianamine synthase) and CntL (dehydrogenase) enzymes, detected uniquely in C14-NMZ Region 7 with a 0.84 MIBiG match (BGC0002490.2). |
| ranthipeptide | Radical non-alpha-thioether peptide, a class of RiPP natural products characterized by radical SAM enzyme-mediated crosslinks. Present uniquely in C14-NMZ Region 3 with TIGR04085 / PF04055 radical SAM and PqqD precursor/recognition architecture. |
| *pig*; *swrW* | The *pig* locus is associated with prodigiosin biosynthesis; *swrW* encodes the large SwrW nonribosomal peptide synthetase associated with serrawettin W1/serratamolides. The focal locus and reported chemistry support a candidate relationship, not a gene-specific causal test. |
| Gap1-like NRPS; stephensiolide | Gap1-like describes a comparative NRPS similarity/architecture. The focal SM and C14 Region 10 NRPS architectures differ from one another; that comparison alone does not assign a putative LC-HRMS stephensiolide label to either locus. |
| *hpa*; *paa*; *pob/pca* | Labels for hydroxyphenylacetate-, phenylacetate- and hydroxybenzoate/protocatechuate-associated machinery in this interpretation. Use locus and pathway evidence rather than gene names alone. |
| 4-HBA; PobA; PcaK | 4-hydroxybenzoate; a hydroxylase acting on it in characterized systems; an aromatic-acid transporter. A downstream PobA-like hit does not establish upstream steps of a complete toluene route. |
| *wzb/wzc*; HADEG “Emulsan” category | Generic capsule-associated phosphatase/kinase markers. Their database category does not determine the chemical structure or activity of a polymer produced by NMZ. |
| LadA; FMN; LLM | A monooxygenase-associated family name; flavin mononucleotide cofactor; luciferase-like monooxygenase terminology. Here LLM refers to an enzyme family; a LadA-like hit does not by itself establish alkane hydroxylation. |
| A0ABS9YXJ5 | Identifier for the comparison sequence labeled “Candidatus Mycolicibacterium alkanivorans NtaA/DmoA FMN monooxygenase” in the LadA-like tree. It is an outgroup comparison, not an experimental result from NMZ. |
| AlkB naming ambiguity | DNA-repair AlkB and membrane alkane-hydroxylase AlkB are different proteins. The focal annotations concern the former. |
| Adduct; mass error; authentic standard | An ion associated with another species such as H⁺ or Na⁺; measured versus expected mass difference; a reference compound measured for comparison. |
| ShlA–ShlB; Has; T6SS; VFDB | Hemolysin/secretion-activation pair; heme-acquisition system; type VI secretion system, often involved in competition; Virulence Factor Database. Multiple labels may match the same locus. |
| Causality; controls; replicate | Evidence that changing a factor changes an outcome; comparisons addressing alternative explanations; independently repeated units whose biological or technical level must be defined. |
