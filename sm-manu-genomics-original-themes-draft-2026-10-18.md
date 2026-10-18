# Concise genomics draft A: original four-theme prose retained

Working version, 18 October 2026. Alternative to the [placeholder-integrated draft](sm-manu-genomics-placeholder-integrated-draft-2026-10-18.md). Based on the [source manuscript at f1de07b](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md).

This version combines the concise genomic backbone with the original selected prose for surface tension, emulsification, aromatic metabolism and pour-point context. Those six passages retain their source wording; only their numerical citation labels are remapped to the self-contained alphabetized bibliography below. Shared surface/matrix prose appears once. Interpretations requiring revision are identified in the author notes, outside the preserved passages. This source-preserving alternative remains a working draft.

The leading findings are SwrW/LC-HRMS-reported serratamolides, the *pig* locus/pigmentation observation, and EPS/CPS-associated systems. Aromatic metabolism and the putative LadA-like neighborhood provide complementary comparative context. Final-assembly TYGS results and the four endpoint-assay datasets remain pending for integration.

## Materials and methods

### Whole-genome sequencing and genomic analysis

Genomic DNA from single-colony cultures of SM-NMZ and C14-NMZ was extracted with the GeneAid Presto Mini gDNA Bacteria Kit and assessed using an Implen NP80 NanoPhotometer. Approximately 200 ng was used for library preparation with the Oxford Nanopore Rapid Barcoding Kit 24 V14 (SQK-RBK114.24). Libraries were sequenced on PromethION for approximately 28 h using the `dna_r10.4.1_e8.2_400bps_sup@v5.0.0` basecalling model, followed by demultiplexing and trimming.

NanoPlot assessed read quality [8]. Chopper retained reads with quality scores ≥10 and lengths ≥500 bp [7]; Filtlong retained the highest-ranked reads representing 90% of remaining bases [36]. Autocycler combined draft assemblies from seven assemblers and seven subsamples [37]. The reported workflow used dnaapler for reorientation [3], Dorado for polishing [25], and Bakta v1.12.0 with database v6.0 for annotation [30].

Genome relatedness was assessed with TYGS dDDH [21] and GTDB-Tk v2.7.2 ANI screening against GTDB r232 [6]. Biosynthetic and metabolic candidates were examined using antiSMASH v8.0.4 [1], DRAM [31], CANT-HYD [17], HADEG [28] and VFDB-based profiling [20], with local gene organization assessed using curated annotations and clinker [12]. The comparative panel comprised 14 proteomes: the focal pair, 11 additional *Serratia* genomes and *Prodigiosinella aquatilis* PA-LS101 as an outgroup. ProteinOrtho v6.3.6/DIAMOND v2.2.5 generated sequence groups and a separate PoFF gene-order analysis [4,18]. Candidate monooxygenases were retrieved by BLASTp (E ≤ 1e-5; query coverage ≥50%) [5] and compared with canonical LadA, B23 LadA-type proteins and related oxidoreductases using MAFFT L-INS-i [16], ClipKIT smart-gap trimming [33], and IQ-TREE 3 under the ModelFinder-selected Q.PFAM+R3 model, with 1,000 UFBoot replicates [14,15,38].

## Results and discussion

### Genome resource and taxonomic identity

The annotated SM-NMZ assembly comprised a 4,970,517-bp chromosome and a 3,581-bp circular element labelled as a plasmid; C14-NMZ comprised a 5,050,553-bp chromosome, with no additional plasmid replicon recovered. Both assemblies had 59.8% GC content. Bakta predicted 4,566 and 4,626 CDSs, respectively (Table 1).

GTDB-Tk assigned SM-NMZ to *Serratia marcescens* (98.86% ANI, AF 0.947 to GCF_017299535.1) and C14-NMZ to *S. nematodiphila* (98.22%, AF 0.932 to GCF_000738675.1). C14's 96.82% ANI to the *S. marcescens* representative was below that representative's 96.86% circumscription radius. Earlier TYGS comparisons supported the respective affinities, with dDDH values of 90.7% to ATCC 13880 and 85.5% to DSM 21420. Both isolates also exceeded 70% dDDH against the alternate species reference, reflecting overlapping operational species boundaries. These TYGS values refer to the previous submissions; analysis of the final Dorado-polished assemblies and a consolidated phylogram are pending.

Table 1. Comparative genomic and proteomic annotation features of isolates SM-NMZ and C14-NMZ.

| Genomic / Annotation Metric | SM-NMZ | C14-NMZ |
| :--- | :---: | :---: |
| Genome Size (Mbp) | 4.974 | 5.051 |
| Total Gene / Feature Count | 4,794 | 4,850 |
| G + C Content (%) | 59.8 | 59.8 |
| Coding Sequences (CDS) | 4,566 | 4,626 |
| rRNA Genes | 22 | 22 |
| tRNA / tmRNA Genes | 91 + 1 (92) | 91 + 1 (92) |
| Genes Assigned to UniRef | 4,542 | 4,613 |
| Genes Assigned to RefSeq | 3,682 | 4,205 |
| Genes Assigned to COGs | 3,456 | 3,496 |
| Genes Assigned to KEGG / KO | 1,470 | 1,513 |
| Hypothetical Proteins (No Function Prediction) | 127 | 100 |
| Pseudogenes | 9 | 5 |
| Regulatory ncRNAs (Bakta `ncRNA-region`) | 60 | 56 |
| Additional Replicon (Plasmid) | 1 circular plasmid (~3,581 bp) | None (0) |

*Table 1 note.* Values are derived from the paired Bakta v1.12.0 summary and TSV outputs. Total feature count includes all Bakta feature rows; UniRef, RefSeq, COG, and KEGG/KO values count CDS rows carrying the corresponding database cross-reference; tRNA and tmRNA values are shown separately and as a combined total; and regulatory ncRNAs correspond to Bakta `ncRNA-region` features.

### Biosynthetic lead findings

antiSMASH detected 11 chromosomal biosynthetic regions in each isolate. The focal SwrW proteins shared 98.9% amino-acid identity and contained a Ser-selective C–A–PCP–TE module, supporting serrawettin W1/serratamolide-family biosynthetic potential [32]. The existing clinker comparison illustrates conservation around *swrW* (Figure 6).

Both genomes also retain the conserved *pig* biosynthetic locus, consistent with the observed red/pink culture phenotype [13]. Pigmentation provides a separate genotype–phenotype observation; it does not identify the material responsible for surface activity, emulsification or pour-point effects.

### Surface-tension and extracellular-matrix context — original prose

The biosurfactant and polymer rows describe complementary layers of surface activity. HADEG’s single `pswP`-like marker in each isolate is accompanied in the GenBank records by a dedicated, nearly identical single-module serrawettin W1/serratamolide synthetase (`OJMJKD_021505`, 3,939 bp; `NNLMDO_021205`, 3,936 bp) and phosphopantetheinyl-transferase candidates, making serrawettin W1 the strongest low-molecular-weight amphiphile signal in the two genomes [32]. Serrawettin W1 has experimentally demonstrated surface-tension reduction, emulsion activity, and enhancement of hydrocarbon bioavailability in another *S. marcescens* strain [39]. By contrast, the HADEG “Emulsan” row consists only of generic `wzb`/`wzc` markers. GenBank context identifies these genes as part of *Serratia* group-1 capsule loci, not the characterized 27-kb, 20-ORF *Acinetobacter* RAG-1 `wee` system [24]. Each isolate also contains a distinct second EPS2 locus between `narG` and `narK`: the capsule loci use a `galU–galF-like–wza–wzb–wzc` scaffold and WcaJ initiation, whereas EPS2 uses WecA, Wza, Wzc, Wzx, Wzy, and glycosyltransferases to initiate a chemically distinct GlcNAc-containing repeat. Distal Wzi homologs, separate proximal O-antigen regions, and complete cellulose (`bcs`) loci further expand the envelope-polysaccharide repertoire; SM-NMZ additionally carries the complete `pgaDCBA` PNAG biofilm-polysaccharide locus, which is absent from C14-NMZ. PNAG synthesized by `pgaABCD` is an established intercellular adhesin and biofilm-matrix component [35], while extracellular polymeric matrices more generally promote cellular cohesion and structured microbial aggregates [11]. These loci therefore support capsule/EPS/cellulose/PNAG matrix potential, whereas serrawettin is the clearer candidate for interfacial spreading.

The independent LC-HRMS detection of serrawettin W1 and serratamolide C under the tested conditions is consistent with the antiSMASH hit interpretation.

### Emulsification context — original prose

The combined profile is more consistent with aromatic-carbon turnover and polymer-supported emulsion or biofilm stabilization than with unqualified broad-spectrum alkane degradation or classical emulsan production.

### Oxygenated-aromatic metabolism — original prose

The GenBank records resolve the largest shared aromatic bubbles as coherent loci. C14-NMZ (`OJMJKD_002635–OJMJKD_002690`) and SM-NMZ (`NNLMDO_002625–NNLMDO_002680`) each contain an almost perfectly syntenic 12-gene `hpa` cassette comprising pathway regulation, the HpaX permease, HpaBC hydroxylation, HpaD extradiol cleavage, and downstream HpaE–I processing. This organization matches the characterized bacterial 4-hydroxyphenylacetate pathway, which converts 4-hydroxyphenylacetate through homoprotocatechuate to central metabolic intermediates [27]. Both genomes also carry tightly organized 14-gene `paa` blocks—`OJMJKD_015005–OJMJKD_015070` in C14-NMZ and `NNLMDO_014780–NNLMDO_014845` in SM-NMZ—with PaaK-mediated activation, the PaaABCDE multicomponent epoxidation system, ring processing, and CoA-linked assimilation; these steps correspond to the experimentally resolved phenylacetyl-CoA pathway [34]. The HADEG 4-hydroxyphenylacetate, homoprotocatechuate, and phenylacetate rows therefore correspond to complete neighborhood-level pathway architectures, and are more informative than isolated aromatic-enzyme hits. Their substrate space is most consistent with oxygenated aromatic compounds derived from plant, amino-acid, or fermentation chemistry that can enter mixed hydrocarbon environments.

The SM-NMZ-specific aromatic bubbles are also supported by linked GenBank neighborhoods. The `pcaI–pcaJ–pcaF–pcaB–pcaD–pcaG–pcaH` branch at `NNLMDO_014970–NNLMDO_015005`, together with the separate `pobA–pcaK` entry module at `NNLMDO_011765–NNLMDO_011770`, provides a coherent 4-hydroxybenzoate-to-protocatechuate pathway matching the established PobA/Pca beta-ketoadipate route [29]. The `maiA–fumaryl-intermediate hydrolase–gtdA` cassette at `NNLMDO_016045–NNLMDO_016065` likewise supports gentisate processing [29]. The `pobA` hit is therefore best read as 4-hydroxybenzoate hydroxylation, despite its HADEG placement in the “toluene degradation” row. In C14-NMZ, the corresponding `pcaF` is embedded within the `paa` locus and occurs without the upstream `pcaGHBDIJ` branch; neither isolate carries a complete canonical `catABC` catechol pathway or a complete `ben`, `tod/tmo`, `xyl`, `nah/ndo`, or `bph` upper-aromatic system.

### Unresolved alkane initiation and pour-point context

The reported analyses did not resolve a convincing canonical alkane-initiation system. The alkB-named proteins are DNA oxidative demethylases, rather than membrane alkane hydroxylases. Fatty-acid activation and beta-oxidation genes identify downstream assimilation options without establishing the initial attack on an alkane.

The focal monooxygenases `NNLMDO_015255` and `OJMJKD_015520` formed a 100%-UFBoot pair within a 99%-supported grouping containing canonical LadA and LadA-alpha references. Their conserved *ssuD–ydhS–focal–metNPQ* neighborhood provides sulfur/methionine-associated context, without identifying their substrate. Earlier studies reported purified-enzyme activity for canonical LadA and heterologous complementation by LadA-type genes [2,10]; a biochemical reassessment did not detect long-chain alkane hydroxylation by tested LadA proteins under its conditions [22]. The focal proteins therefore remain candidates with unresolved substrate specificity.

The distribution of hydrocarbon-degradation marker genes (HADEG) and the syntenic conservation of candidate biosurfactant/bio-emulsifier loci (serrawettin, prodigiosin) are examined in relation to PPD, alkane mobilization, and surface-tension reduction. This application context is supported by experimental reports that microbial biosurfactants can reduce the pour point of waxy crude oil [9], although such performance cannot be inferred from genomic markers alone.

### Study-wide interpretation

Shared ShlA–ShlB, Has and T6SS-associated homologs provide application-relevant genomic context [26,19,23]. Their presence and reference-hit counts do not quantify pathogenicity or establish isolate safety. Across the study, genomic analyses identify mechanistic candidates, while chemical and activity measurements establish observations for the tested materials and conditions. Attribution to individual genes, metabolites or polymers depends on the corresponding functional evidence. Surface-tension reduction, emulsion stability, substrate transformation and pour-point reduction are distinct experimental endpoints.

## Retained figures and pending assets

Figure numbers retain their source-manuscript identifiers during drafting; renumber once the collaborative paper's final layout is settled.

![Figure 5. Original HADEG marker-category bubble plot](Figure5_Bubbles-Subpathways-HADEG.png)

**Figure 5. HADEG marker-category profiles across the comparative genome panel.** Bubble sizes show the displayed marker-hit counts across 14 proteomes; raw HADEG category names are retained. These categories summarize marker matches, rather than measured activity or independently established complete pathways. For the focal isolates, “Emulsan” represents generic *wzb/wzc* capsule-associated markers; the SM-NMZ hit in “Toluene_degradation” is interpreted from its locus context as a hydroxybenzoate-hydroxylase candidate. These labels do not establish emulsan production or a complete toluene-degradation route. Plastics-related rows remain background database annotations and are not developed as claims of polymer degradation.

![Figure 6. Retained SwrW clinker neighborhood comparison](Figure6_serrawettin.jpeg)

**Figure 6. Conservation of the SwrW-associated genomic neighborhood.** Existing clinker comparison of SM-NMZ, C14-NMZ and seven comparative genomes (scale bar, 2.5 kb). The orange arrow marks the SwrW-associated non-ribosomal peptide synthetase; connecting shaded links indicate pairwise amino-acid sequence identity. The main discussion emphasizes the focal pair; the extended comparator descriptions belong in supplementary text. Reported LC-HRMS serratamolides provide separate chemical evidence and are not measurements represented by the gene-order links.

| Asset | Status and allocation |
|---|---|
| Bakta Table 1 | Original table and explanatory note retained above. |
| Consolidated TYGS phylogram | **[PENDING: final Dorado-polished-assembly TYGS rerun and one tree containing both isolates.]** Replace the earlier-run values and tree together. |
| EPS/CPS neighborhood views | **[PENDING: DNA Features Viewer maps of the focal pair.]** Show capsule/EPS systems and the SM-NMZ *pgaDCBA* difference; distinguish isolated homologs from a contiguous locus. |
| Aromatic-locus neighborhood views | **[PENDING: DNA Features Viewer comparison of the focal pair.]** Prioritize shared *hpa/paa* and informative SM-NMZ additions; identify unresolved assignments. |
| Putative LadA-like neighborhood | **[PENDING: DNA Features Viewer comparison of the focal pair.]** Retain the sulfur/methionine-associated context and candidate designation. |
| Existing pigment comparison | Preserve the *pig*/phenotype finding in the main text; place the detailed [comparative figure](Figure7_prodigiosin.jpeg) in supplementary material. |
| Other existing analyses | Move circular genome maps, antiSMASH overviews, DRAM heatmaps, the VF heatmap, detailed LadA phylogeny/broad synteny, and long orthogroup inventories to supplementary material. |

## Author integration notes (outside manuscript prose)

- The LC-HRMS deck/PDF is assumed to cover both isolates, following the author's instruction. Match sample, fraction and condition details and the reported identification evidence when incorporating the chemistry methods/results. No additional authentic-standard confirmation is asserted here.
- No NMZ numerical surface-tension, E24, aromatic-conversion or pour-point results are supplied in the source manuscript. E24 is not named there. Their absence from the available text does not establish that the experiments were not performed.
- The TYGS rerun is already underway. Keep current species interpretations provisional and current TYGS numbers explicitly associated with the earlier submissions until the final outputs arrive.
- Assemble the proposed supplements; they are not new completed deliverables in this revision. Preserve command-level reproducibility, read/assembly quality, assembly-to-annotation provenance and the comparator accession list. In the assembly methods, correct Plassembler to Bouras, Sheppard, Mallawaarachchi and Vreugde (2023), *Bioinformatics* 39(7):btad409, [DOI 10.1093/bioinformatics/btad409](https://doi.org/10.1093/bioinformatics/btad409).
- In supplementary orthology results, keep the 10,252 sequence groups separate from the 10,438 PoFF groups; each analysis has 2,140 groups represented across all 14 proteomes. Do not combine their denominators.
- The original HADEG and SwrW images are retained unchanged. New neighborhood graphics and a consolidated TYGS tree are pending. The explanatory PowerPoint remains a separate, deferred task.

### Qualifications attached to the preserved passages

| Preserved theme | Source passage | Qualification for author review |
|---|---|---|
| Surface tension and matrix systems | [Source line 107](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L107), with the chemical-observation sentence from [line 70](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L70) | The SwrW/serratamolide connection is informative. The long polysaccharide inventory can be condensed once the matched assays are available. Initiation/transport annotations do not establish repeat-unit chemistry; the WecA/GlcNAc statement is stronger than the supplied sequence evidence. C14-NMZ has a *pgaB* homolog, but lacks the contiguous SM-NMZ *pgaDCBA* locus. |
| Emulsification | Synthesis sentence from [source line 109](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L109); shared matrix paragraph above | The source provides genomic context, not an E24 result. “Polymer-supported emulsion” remains a hypothesis until linked to the assayed material. Shared gene presence does not explain performance differences. |
| Aromatic metabolism | [Source lines 101–103](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L101) | Retain the organized *hpa/paa* finding. Qualify “complete” or “coherent” SM-NMZ routes: immediate *pcaC* is unresolved, and downstream gentisate assignments need reconciliation. The locus at `NNLMDO_011765` is a hydroxybenzoate-hydroxylase candidate without an explicit *pobA* gene name; its context distinguishes it from other *pobA*-labelled matches. The raw HADEG toluene row does not establish a toluene route. |
| Pour point | [Source line 94](https://github.com/WhyAdr/sm-manu/blob/f1de07bb47755c9277f5d067954b21eea0be63f9/manuscript.md#L94) | Keep this as application rationale only until matched PPD measurements are supplied. The original grouping of prodigiosin with bio-emulsifier loci is too broad; the *pig* finding directly supports the pigment observation. Pour-point reduction by itself does not identify a surfactant, wax-modification or degradation mechanism. |

The [alternative draft](sm-manu-genomics-placeholder-integrated-draft-2026-10-18.md) demonstrates the concise, evidence-calibrated integration once the coauthor's assay details are available. The source-preserving passages above are not a recommendation to retain every current interpretation unchanged.

## References

1. Blin, K., Shaw, S., Vader, L., Szenei, J., Reitz, Z. L., Augustijn, H. E., ... & Weber, T. (2025). antiSMASH 8.0: extended gene cluster detection capabilities and analyses of chemistry, enzymology, and regulation. *Nucleic Acids Research*, 53(W1), W32–W38. https://doi.org/10.1093/nar/gkaf334

2. Boonmak, C., Takahashi, Y., & Morikawa, M. (2014). Cloning and expression of three ladA-type alkane monooxygenase genes from an extremely thermophilic alkane-degrading bacterium *Geobacillus thermoleovorans* B23. *Extremophiles*, 18(3), 515–523. https://doi.org/10.1007/s00792-014-0636-y

3. Bouras, G., Grigson, S. R., Papudeshi, B., Mallawaarachchi, V., & Roach, M. J. (2024). dnaapler: A tool to reorient circular microbial genomes. *Journal of Open Source Software*, 9(93), 5968. https://doi.org/10.21105/joss.05968

4. Buchfink, B., Reuter, K., & Drost, H. G. (2021). Sensitive protein alignments at tree-of-life scale using DIAMOND. *Nature Methods*, 18(4), 366–368. https://doi.org/10.1038/s41592-021-01101-x

5. Camacho, C., Coulouris, G., Avagyan, V., Ma, N., Papadopoulos, J., Bealer, K., & Madden, T. L. (2009). BLAST+: architecture and applications. *BMC Bioinformatics*, 10, 421. https://doi.org/10.1186/1471-2105-10-421

6. Chaumeil, P.-A., Mussig, A. J., Hugenholtz, P., & Parks, D. H. (2022). GTDB-Tk v2: memory friendly classification with the Genome Taxonomy Database. *Bioinformatics*, 38(23), 5315–5316. https://doi.org/10.1093/bioinformatics/btac672

7. De Coster, W., & Rademakers, R. (2023). NanoPack2: population-scale evaluation of long-read sequencing data. *Bioinformatics*, 39(5), btad311. https://doi.org/10.1093/bioinformatics/btad311

8. De Coster, W., D'Hert, S., Schultz, D. T., Cruts, M., & Van Broeckhoven, C. (2018). NanoPack: visualizing and processing long-read sequencing data. *Bioinformatics*, 34(15), 2666–2669. https://doi.org/10.1093/bioinformatics/bty149

9. El-Sheshtawy, H. S., & Khidr, T. T. (2016). Some biosurfactants used as pour point depressant for waxy Egyptian crude oil. *Petroleum Science and Technology*, 34(16), 1475–1482. https://doi.org/10.1080/10916466.2016.1204317

10. Feng, L., Wang, W., Cheng, J., Ren, Y., Zhao, G., Gao, C., ... & Wang, L. (2007). Genome and proteome of long-chain alkane degrading *Geobacillus thermodenitrificans* NG80-2 isolated from a deep-subsurface oil reservoir. *Proceedings of the National Academy of Sciences*, 104(13), 5602–5607. https://doi.org/10.1073/pnas.0609650104

11. Flemming, H.-C., & Wingender, J. (2010). The biofilm matrix. *Nature Reviews Microbiology*, 8(9), 623–633. https://doi.org/10.1038/nrmicro2415

12. Gilchrist, C. L. M., & Chooi, Y. H. (2021). clinker & clustermap.js: automatic generation of gene cluster comparison figures. *Bioinformatics*, 37(16), 2473–2475. https://doi.org/10.1093/bioinformatics/btab007

13. Harris, A. K. P., Williamson, N. R., Slater, H., Cox, A., Abbasi, S., Foulds, I., ... & Salmond, G. P. C. (2004). The *Serratia* gene cluster encoding biosynthesis of the red antibiotic, prodigiosin, shows species- and strain-dependent genome context variation. *Microbiology*, 150(11), 3547–3560. https://doi.org/10.1099/mic.0.27222-0

14. Hoang, D. T., Chernomor, O., von Haeseler, A., Minh, B. Q., & Vinh, L. S. (2018). UFBoot2: improving the ultrafast bootstrap approximation. *Molecular Biology and Evolution*, 35(2), 518–522. https://doi.org/10.1093/molbev/msx281

15. Kalyaanamoorthy, S., Minh, B. Q., Wong, T. K. F., von Haeseler, A., & Jermiin, L. S. (2017). ModelFinder: fast model selection for accurate phylogenetic estimates. *Nature Methods*, 14(6), 587–589. https://doi.org/10.1038/nmeth.4285

16. Katoh, K., & Standley, D. M. (2013). MAFFT multiple sequence alignment software version 7: improvements in performance and usability. *Molecular Biology and Evolution*, 30(4), 772–780. https://doi.org/10.1093/molbev/mst010

17. Khot, V., Zorz, J., Gittins, D. A., et al. (2022). CANT-HYD: A curated database of phylogeny-derived hidden Markov models for annotation of marker genes involved in hydrocarbon degradation. *Frontiers in Microbiology*, 12, 764058. https://doi.org/10.3389/fmicb.2021.764058

18. Lechner, M., Findeiß, S., Steiner, L., Marz, M., Stadler, P. F., & Prohaska, S. J. (2011). Proteinortho: detection of (co-)orthologs in large-scale analysis. *BMC Bioinformatics*, 12, 124. https://doi.org/10.1186/1471-2105-12-124

19. Létoffé, S., Ghigo, J. M., & Wandersman, C. (1994). Iron acquisition from heme and hemoglobin by a *Serratia marcescens* extracellular protein. *Proceedings of the National Academy of Sciences*, 91(21), 9876–9880. https://doi.org/10.1073/pnas.91.21.9876

20. Liu, B., Zheng, D., Zhou, S., Chen, L., & Yang, J. (2022). VFDB 2022: a general classification scheme for bacterial virulence factors. *Nucleic Acids Research*, 50(D1), D912–D917. https://doi.org/10.1093/nar/gkab1107

21. Meier-Kolthoff, J. P., & Göker, M. (2019). TYGS is an automated high-throughput platform for state-of-the-art genome-based taxonomy. *Nature Communications*, 10(1), 2182. https://doi.org/10.1038/s41467-019-10210-3

22. Mireles, R., Matthews, A., Teufel, R., & Noda-García, L. (2025). Can flavoprotein monooxygenases functionalize long-chain *n*-alkanes? *PLOS ONE*, 20(9), e0332702. https://doi.org/10.1371/journal.pone.0332702

23. Murdoch, S. L., Trunk, K., English, G., Fritsch, M. J., Pourkarimi, E., & Coulthurst, S. J. (2011). The opportunistic pathogen *Serratia marcescens* utilizes type VI secretion to target bacterial competitors. *Journal of Bacteriology*, 193(21), 6057–6069. https://doi.org/10.1128/JB.05671-11

24. Nakar, D., & Gutnick, D. L. (2003). Involvement of a protein tyrosine kinase in production of the polymeric bioemulsifier emulsan from the oil-degrading strain *Acinetobacter lwoffii* RAG-1. *Journal of Bacteriology*, 185(3), 1001–1009. https://doi.org/10.1128/JB.185.3.1001-1009.2003

25. Oxford Nanopore Technologies. Dorado [Software]. https://github.com/nanoporetech/dorado

26. Pramanik, A., Könninger, U., Selvam, A., & Braun, V. (2014). Secretion and activation of the *Serratia marcescens* hemolysin by structurally defined ShlB mutants. *International Journal of Medical Microbiology*, 304(3–4), 351–359. https://doi.org/10.1016/j.ijmm.2013.11.021

27. Prieto, M. A., Díaz, E., & García, J. L. (1996). Molecular characterization of the 4-hydroxyphenylacetate catabolic pathway of *Escherichia coli* W: engineering a mobile aromatic degradative cluster. *Journal of Bacteriology*, 178(1), 111–120. https://doi.org/10.1128/jb.178.1.111-120.1996

28. Rojas-Vargas, J. A., Castelán-Sánchez, H. G., & Pardo-López, L. (2023). HADEG: a curated hydrocarbon aerobic degradation enzymes and genes database. *Computational Biology and Chemistry*, 107, 107966. https://doi.org/10.1016/j.compbiolchem.2023.107966

29. Romero-Silva, M. J., Méndez, V., Agulló, L., & Seeger, M. (2013). Genomic and functional analyses of the gentisate and protocatechuate ring-cleavage pathways and related 3-hydroxybenzoate and 4-hydroxybenzoate peripheral pathways in *Burkholderia xenovorans* LB400. *PLOS ONE*, 8(2), e56038. https://doi.org/10.1371/journal.pone.0056038

30. Schwengers, O., Jelonek, L., Dieckmann, M. A., Beyvers, S., Blom, J., & Goesmann, A. (2021). Bakta: rapid and standardized annotation of bacterial genomes via a comprehensive and consistent annotation framework. *Microbial Genomics*, 7(11), 000685. https://doi.org/10.1099/mgen.0.000685

31. Shaffer, M., Borton, M. A., McGivern, B. B., Zayed, A. A., La Rosa, S. L., ... & Wrighton, K. C. (2020). DRAM for distilling microbial metabolism to automate the curation of microbiome function. *Nucleic Acids Research*, 48(16), 8883–8900. https://doi.org/10.1093/nar/gkaa621

32. Shanks, R. M. Q., Stella, N. A., Lahr, R. M., Wang, S., Veverka, T. I., Kowalski, R. P., & Liu, X. (2012). Serratamolide is a hemolytic factor produced by *Serratia marcescens*. *PLOS ONE*, 7(5), e36398. https://doi.org/10.1371/journal.pone.0036398

33. Steenwyk, J. L., Buida, T. J., III, Li, Y., Shen, X.-X., & Rokas, A. (2020). ClipKIT: a multiple sequence alignment trimming software for accurate phylogenomic inference. *PLOS Biology*, 18(12), e3001007. https://doi.org/10.1371/journal.pbio.3001007

34. Teufel, R., Mascaraque, V., Ismail, W., Voss, M., Perera, J., Eisenreich, W., Haehnel, W., & Fuchs, G. (2010). Bacterial phenylalanine and phenylacetate catabolic pathway revealed. *Proceedings of the National Academy of Sciences*, 107(32), 14390–14395. https://doi.org/10.1073/pnas.1005399107

35. Wang, X., Preston, J. F., III, & Romeo, T. (2004). The *pgaABCD* locus of *Escherichia coli* promotes the synthesis of a polysaccharide adhesin required for biofilm formation. *Journal of Bacteriology*, 186(9), 2724–2734. https://doi.org/10.1128/JB.186.9.2724-2734.2004

36. Wick, R. R. Filtlong: quality filtering tool for long reads [Software]. https://github.com/rrwick/Filtlong

37. Wick, R. R., Howden, B. P., & Stinear, T. P. (2025). Autocycler: long-read consensus assembly for bacterial genomes. *Bioinformatics*, 41(9), btaf474. https://doi.org/10.1093/bioinformatics/btaf474

38. Wong, T. K. F., Ly-Trong, N., Ren, H., Demotte, P., Banos, H., Roger, A. J., Susko, E., Bielow, C., De Maio, N., Goldman, N., Hahn, M. W., dos Reis, M., Vinh, L. S., Huttley, G., Lanfear, R., & Minh, B. Q. (2026). IQ-TREE 3: Phylogenomic inference software using complex evolutionary models. *Molecular Biology and Evolution*, msag117. https://doi.org/10.1093/molbev/msag117

39. Zhang, K., Tao, W., Lin, J., Wang, W., & Li, S. (2021). Production of the biosurfactant serrawettin W1 by *Serratia marcescens* S-1 improves hydrocarbon degradation. *Bioprocess and Biosystems Engineering*, 44(12), 2541–2552. https://doi.org/10.1007/s00449-021-02625-4
