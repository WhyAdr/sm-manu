# Scrutiny & Refined Implementation Plan: Publication-Ready Figure Captions

This implementation plan provides a rigorous, visual-inspection-verified critique and enhancement of all figure legends in [manuscript.md](file:///d:/W/serratia-research/manuscript/manuscript.md). Every detail has been checked against the rendered figure files in the `manuscript/` directory, including the antiSMASH overview maps and both DRAM panels (**Figure 4A** & **Figure 4B**).

---

## 1. Visual Verification & Scrutiny of Figure Files

| Figure | Source File(s) | Key Visual Details Verified from Raw Images |
| :--- | :--- | :--- |
| **Figure 1** | `Figure1_SM-NMZ.png`<br>`Figure1_C14-NMZ.png` | Center text identifies SM-NMZ as *S. marcescens* (2 sequences: chromosome + plasmid, 5.0 Mbp) and C14-NMZ as *S. nematodiphila* (1 chromosome, 5.1 Mbp). Concentric rings: (1) Outermost scale in Mbp with `oriC` origin; (2 & 3) Forward and reverse strand CDS (gray), tRNA (light green), rRNA (coral), ncRNA (orange), ncRNA reg (blue), CRISPR (purple); (4) GC content (+ green, − red); (5) GC skew (+ orange, − blue). |
| **Figure 2** | `Figure2_SM-genome-phylogram.png`<br>`Figure2_C14-genome-phylogram.png` | TYGS GBDP/FastME phylograms showing bootstrap support percentages (64–100%). SM-NMZ clusters with *S. marcescens* subsp. *sakuensis* KCTC 42172 / ATCC 13880; C14-NMZ clusters with *S. nematodiphila* DSM 21420. Outgroups: *Dryocola clanedunensis*, *Klebsiella trevisanii*, *Enterobacter pasteurii*. Right columns display species/subspecies clusters, G+C delta statistics, genome size, protein count, and user strain indicator (+). |
| **Figure 3A & 3B** | `Figure3_SM-NMZ-antismash-overview.jpeg`<br>`Figure3_C14-NMZ-antismash-overview.jpeg` | antiSMASH v8.0.4 overview maps showing 11 detected BGC regions on each chromosome, including NRPS/NRPS-like loci, NRP-metallophores, the *pig* locus associated with prodigiosin biosynthesis, beta-lactones, terpene precursors, RiPPs, redox cofactors, and an opine-like metallophore. The map describes biosynthetic potential; product identity and production are supported independently by the reported culture phenotype and LC-HRMS results. |
| **Figure 4A & 4B** | `Figure3_DRAM.jpeg`<br>`Figure3_DRAM2.jpeg` | **(A) Central Metabolism & ETC**: DRAM heatmap displaying annotated module completeness (0.0 pale yellow to 1.0 dark blue) across the 14-genome panel for central-carbon modules and electron-transport categories.<br>**(B) Auxiliary & Specialized Pathways**: CAZy carbohydrate degradation, nitrate-to-nitrite reduction, tetrathionate reduction, arsenate-reduction modules, photosynthesis controls, and methanogenesis/methanotrophy categories. Scores represent annotation-derived genomic potential rather than measured pathway activity. |
| **Figure S1** | `Figure4_vf_heatmap.jpg` | Virulence Factor Database (VFDB / `VF_classifier`) heatmap comparing sequence identity (0–100%, white to dark blue) across the supplied nine-genome matrix. Grouped by 12 broad categories and 94 specific mechanisms. The Section 3 discussion will emphasize the coherent ShlA–ShlB, HasA/heme-acquisition, and T6SS clusters; conserved motility, AcrAB, and stress-fitness homologs; and the contrasting SM-NMZ versus C14-NMZ capsule/siderophore-reference profiles. Raw matrix density and reference-specific cross-labels will be interpreted as comparative homology patterns rather than unique locus counts. |
| **Figure 5** | `Figure5_Bubbles-Subpathways-HADEG.png` | Curated HADEG marker-gene bubble plot across 14 genomes. Categorized into 4 compound classes: **A_Alkanes** (dark blue: hydrocarbon uptake, alkane auxiliary genes, terminal/biterminal oxidation, Finnerty pathway), **C_Aromatics** (yellow: phenylacetate, homoprotocatechuate, protocatechuate, catechol ortho/meta, benzoate, gallate, gentisate), **D_Biosurfactants** (orange: emulsan, serrawettin), and **E_Plastics** (red: P3HV/PHA/PHBV, PU). Bubble diameter indicates gene hit counts (1 to 6); the plot represents genomic marker distribution rather than demonstrated pathway activity. |
| **Figure 6** | `Figure6_serrawettin.jpeg` | `clinker` gene synteny (2.5 kb scale) across 9 representative genomes showing the serrawettin-associated non-ribosomal peptide synthetase (*swrW*, orange arrow), flanked by conserved operon members (*msrP-msrQ-aroQ-accBC*, *lld-Smc-MFS*, *yhdT-panF-prmA*, *dusB-fis*, *lpxOP-pyrG* upstream; *IrgBA-lysR-nhaP*, *transporter-gstA-lipocalin-fabG-SSB1-uvrA-adhP-maa-tyrB* downstream). The red culture phenotype and LC-HRMS profiling detected serrawettin W1 and serratamolide C; connecting colored linkages represent pairwise amino-acid sequence identity. |
| **Figure 7** | `Figure7_prodigiosin.jpeg` | `clinker` synteny diagram (2.5 kb scale) across 9 genomes illustrating the 14-gene prodigiosin-associated *pig* arrangement (*pigA*–*pigN*, colored block arrows), flanked by upstream regulatory/transport genes (*dacB*, *ybak*, *traB*, *copZ*) and downstream loci (*cueR*, *ybbJ*, *hflC*, *cfa*, *cnoX*, *allSAR*, *GCL*). The red culture phenotype and LC-HRMS profiling, with serrawettin W1 and serratamolide C detected, provide experimental confirmation of the serrawettin- and prodigiosin-associated metabolite phenotype under the tested conditions. |
| **Figure 8** | `Figure8_LadA-validation-phylotree.svg` | Radial maximum-likelihood phylogram inferred from 34 sequences and 448 retained positions under `Q.PFAM+R3`. SM-NMZ `NNLMDO_015255` and C14-NMZ `OJMJKD_015520` form a 100%-UFBoot pair within a 99%-supported clade containing canonical LadA `A4IU28` and LadA-alpha `BAM76377.1`. |
| **Figure 9** | `Figure9_LadA-cluster-curated.jpeg` | `clinker` micro-synteny alignment (2.5 kb scale) resolving ten K20938-centered regions into an eight-isolate LadA-alpha-like/SsuD Family I and a two-isolate SPL NtaA/Sfn Family II. C14-NMZ and SM-NMZ share the Family-I core but carry distinct subtype-specific redox, transport, and regulatory extensions. |

---

## 2. Refined, Publication-Ready Figure Captions for `manuscript.md`

### Figure 1
```markdown
![Figure 1A. Circular genomic map of Serratia sp. SM-NMZ](Figure1_SM-NMZ.png)
![Figure 1B. Circular genomic map of Serratia sp. C14-NMZ](Figure1_C14-NMZ.png)
**Figure 1. Circular genomic feature maps of *Serratia* isolates.**
Bakta-annotated circular representations of **(A)** *Serratia* sp. SM-NMZ (5.0 Mbp, comprising the circular chromosome and a ~3.5 kb circular plasmid) and **(B)** *Serratia* sp. C14-NMZ (5.1 Mbp circular chromosome). Concentric rings from outside to inside display: (1) Genomic coordinate markers (Mbp) with `oriC` origin of replication; (2) Forward-strand coding sequences (CDS, gray); (3) Reverse-strand CDS (gray), with highlighted structural and non-coding RNA features including tRNA (light green), rRNA (coral), ncRNA (orange), regulatory ncRNA (blue), and CRISPR arrays (purple); (4) GC content plot (+ deviation in green, − in red); and (5) GC skew plot (+ skew in light orange, − skew in blue).
```

### Figure 2
```markdown
![Figure 2A. Whole-genome phylogram of Serratia sp. SM-NMZ](Figure2_SM-genome-phylogram.png)
![Figure 2B. Whole-genome phylogram of Serratia sp. C14-NMZ](Figure2_C14-genome-phylogram.png)
**Figure 2. Whole-genome comparative phylograms for isolates SM-NMZ and C14-NMZ.**
Phylograms auto-constructed by the Type (Strain) Genome Server (TYGS) using the Genome BLAST Distance Phylogeny (GBDP) approach and FastME, with branch support based on 100 pseudo-bootstrap replicates, show **(A)** *Serratia* sp. SM-NMZ within the *Serratia marcescens* species/subspecies cluster alongside type strain ATCC 13880^T^ and subsp. *sakuensis* KCTC 42172^T^ and **(B)** *Serratia* sp. C14-NMZ near *Serratia nematodiphila* DSM 21420^T^. Right-hand columns denote species/subspecies cluster groupings, % G+C delta statistics, genome size, protein count, and user strain designation (+).
```

### Figure 3 (Panels A and B)
```markdown
![Figure 3A. antiSMASH BGC overview of SM-NMZ](Figure3_SM-NMZ-antismash-overview.jpeg)
![Figure 3B. antiSMASH BGC overview of C14-NMZ](Figure3_C14-NMZ-antismash-overview.jpeg)
**Figure 3. Genome-wide secondary-metabolite biosynthetic gene-cluster architecture.**
antiSMASH v8.0.4 overview maps of the circular chromosomes of **(A)** SM-NMZ and **(B)** C14-NMZ, with 11 detected BGC regions in each isolate. Predicted categories include NRPS/NRPS-like loci, NRP-metallophores, the Region 5 *pig* locus associated with prodigiosin biosynthesis, beta-lactones, terpene precursors, azole-containing RiPPs, ranthipeptides, redox cofactors, and an opine-like metallophore. Color-coded bars distinguish core biosynthetic genes, additional biosynthetic genes, transport-related machinery, and regulatory elements. Product identity and production are supported by the independent phenotype and LC-HRMS results described in the text and are not inferred from the overview maps alone.
```

### Figure 4 (Panels A and B)
```markdown
![Figure 4A. Central metabolism and electron transport chain complexes](Figure3_DRAM.jpeg)
![Figure 4B. Auxiliary metabolic pathways and specialized reductases](Figure3_DRAM2.jpeg)
**Figure 4. DRAM module-completeness profiles across the comparative genome panel.**
Heatmaps generated by DRAM across 13 *Serratia* genomes and the *Prodigiosinella aquatilis* PA-LS101 outgroup; the color scale reports the percentage of annotated module components, from 0.0 (pale yellow) to 1.0 (dark blue). **(A)** Central-carbon and respiratory categories, including glycolysis, Entner-Doudoroff, pentose phosphate, citrate/TCA, glyoxylate-shunt, reductive acetyl-CoA, and electron-transport modules. **(B)** Auxiliary categories covering CAZy carbohydrate-degradation functions, nitrate-to-nitrite reduction, tetrathionate reduction, arsenate-reduction modules, photosynthesis controls, and methanogenesis/methanotrophy categories. Scores summarize annotation evidence and should not be read as direct measurements of pathway activity or physiological completion.
```

### Figure S1 (Supplementary Material)
```markdown
![Figure S1. Comparative virulence factor heatmap (VFDB / VF_classifier)](Figure4_vf_heatmap.jpg)
**Figure S1. Comparative virulence-factor landscape of *Serratia* isolates (VFDB / VF_classifier).**
Hierarchically clustered sequence-identity heatmap (0–100%, light to dark blue) of the supplied 215-row `VF_classifier`/VFDB matrix across nine genomes. Rows are grouped by broad category and specific mechanism, including T6SS-associated proteins, flagellar apparatus, ShlA–ShlB proteins, HasA-related iron-acquisition factors, enterobactin-like genes, and other siderophore-reference homologs. The profile contextualizes conserved or divergent sequence matches associated with environmental persistence, motility, iron acquisition, secretion, and competition. (*Designated as Supplementary Figure S1 due to vertical dimension*).
```

#### VF discussion expansion plan

1. Place SM-NMZ and C14-NMZ within the nine-genome `VF_classifier` comparison using non-zero-cell density and nearest-profile relationships, while stating that reference redundancy and taxonomic distance preclude interpreting those counts as virulence burden.
2. Describe the strongest coherent shared clusters—ShlA–ShlB, the seven-component Has system, and the multi-component T6SS block—and distinguish them from reference-redundant T6SS subtype labels.
3. Compare the focal isolates directly: SM-NMZ has closer sequence identity to canonical *Serratia* ShlA–ShlB and Has references, whereas C14-NMZ has broader capsule- and named-siderophore-reference footprints; isolate-specific singleton labels require locus-level validation.
4. Close with a data-focused synthesis of the shared core and isolate-level contrasts; rely on the manuscript's centralized study-wide interpretation note for the general validation boundary.

### Figure 5
```markdown
![Figure 5. HADEG subpathway bubble plot](Figure5_Bubbles-Subpathways-HADEG.png)
**Figure 5. Genomic repertoire of hydrocarbon-degradation and biosurfactant marker genes (HADEG).**
Bubble plot illustrating the distribution and hit counts of curated aerobic hydrocarbon-degradation marker genes across the 14-genome dataset, representing genomic potential rather than demonstrated pathway activity. Subpathways on the Y-axis are grouped into four major classes: **A_Alkanes** (dark blue circles: hydrocarbon uptake, alkane terminal/biterminal oxidation, and auxiliary alkane-degradation genes), **C_Aromatics** (yellow circles: phenylacetate, homoprotocatechuate, protocatechuate ortho-cleavage, catechol ortho/meta-cleavage, benzoate, and gentisate degradation), **D_Biosurfactants** (orange circles: serrawettin and emulsan biosynthetic loci), and **E_Plastics** (red circles: PU and PHA/PHBV degradation). Bubble diameters correspond to normalized gene-copy hit numbers (1 to 6).
```

### Figure 6

#### Comparative architecture discussion plan

1. Establish the nearly collinear SM-NMZ/C14-NMZ `msrPQ–aroQ–accBC` to `swrW–lrgBA–lysR–nhaP` architecture and the high identity of their focal synthetases.
2. Contrast this focal architecture with the conserved *Serratia* backbone in SM-S217, SM-SMTT, SM-ZPG19, and SNEM-G5.M166, including small downstream cassette substitutions around `fabG–SSB1`.
3. Describe the stepwise loss of collinearity in SPL-PAMC2277 and SSU-YD25 at the synthetase position and flanks, and the unrelated PA-LS101 NRPS/PKS neighborhood.

```markdown
![Figure 6. Serrawettin BGC synteny](Figure6_serrawettin.jpeg)
**Figure 6. Genomic synteny and neighborhood architecture of a serrawettin-associated locus.**
Comparative gene-cluster alignment constructed with `clinker` (scale bar = 2.5 kb) detailing the serrawettin-associated non-ribosomal peptide synthetase (*swrW*, orange block arrow) across SM-NMZ, C14-NMZ, and seven comparative genomes. Flanking conserved genomic architecture highlights upstream cell division/metabolism genes (*msrP*, *aroQ*, *lld*, *Smc*, *MFS*, *yhdT*, *panF*, *dusB*, *fis*, *lpxOP*, *pyrG*) and downstream transport/stress-response genes (*lrgBA*, *lysR*, *nhaP*, *gstA*, *lipocalin*, *fabG*, *SSB1*, *uvrA*, *adhP*, *tyrB*). LC-HRMS profiling detected serrawettin W1 and serratamolide C under the tested conditions; connecting colored linkages represent pairwise amino-acid sequence identity.
```

### Figure 7

#### Comparative architecture discussion plan

1. Describe the continuous, co-oriented `pigN–pigA` core and identical boundary architecture in SM-NMZ and C14-NMZ.
2. Separate conservation of the biosynthetic core from two downstream-flank states: `CFA synthase–cnoX–yqjQ–tesA–ybbA` in the focal isolates/SM-ZPG19 versus `allS–allR–GCL`-associated genes in SM-S217, SM-SMTT, SNEM-G5.M166, and SSU-YD25.
3. Highlight the stronger boundary replacement in SPL-PAMC2277 and PA-LS101, where the `pig` block remains recognizable but the surrounding genes change sharply.

```markdown
![Figure 7. Prodigiosin BGC synteny](Figure7_prodigiosin.jpeg)
**Figure 7. Syntenic organization of the 14-gene prodigiosin (*pig*) locus.**
Gene-cluster comparison map generated using `clinker` (scale bar = 2.5 kb) illustrating the *pigA*–*pigN* arrangement associated with prodigiosin biosynthesis across SM-NMZ, C14-NMZ, and reference *Serratia* genomes. Arrows represent open reading frames with direction of transcription: *pigA*–*pigE* (proline incorporation and MAP condensation, light green), *pigF*–*pigH* (MBC biosynthesis, orange), *pigI*–*pigN* (condensing and tailoring enzymes, pink/red). Flanking boundaries show conserved upstream (*dacB*, *ybak*, *traB*, *copZ*) and downstream (*cueR*, *ybbJ*, *hflC*, *cfa*, *allSAR*) loci. The red/pink-pigmented culture phenotype provides experimental confirmation of the prodigiosin-associated metabolite phenotype under the tested conditions alongside the conserved *pig* arrangement.
```

### Figure 8

#### Section 5 phylogeny discussion plan

1. Report the 34-sequence, 448-position maximum-likelihood analysis and the exact UFBoot values for the SM-NMZ/C14-NMZ focal pair (100%), the canonical `A4IU28`/B23 LadA-alpha reference pair (68%), and the combined focal/reference clade (99%).
2. Interpret the tree as strong focal orthology and placement within a LadA-associated sequence clade, while using the neighborhood analysis to resolve physiological context.

```markdown
![Figure 8. Maximum-likelihood phylogenetic tree of LadA-family monooxygenases](Figure8_LadA-validation-phylotree.svg)
**Figure 8. Maximum-likelihood phylogram placing candidate LadA-family flavin-dependent monooxygenases.**
Radial unrooted phylogenetic tree inferred with IQ-TREE 3 under the `Q.PFAM+R3` substitution model (determined by ModelFinder via BIC) from a MAFFT L-INS-i alignment trimmed with ClipKIT smart-gap. The 34-sequence, 448-position dataset included six candidates from each focal isolate and LadA/LadB, SsuD, DszA, NtaA, bacterial luciferase, and other LLM/group-C flavin monooxygenase references. From 1,000 UFBoot replicates, SM-NMZ `NNLMDO_015255` and C14-NMZ `OJMJKD_015520` form a 100%-supported pair within a 99%-supported clade containing canonical LadA `A4IU28` and LadA-alpha `BAM76377.1`.
```

### Figure 9

#### Section 5 synteny and orthology discussion plan

1. Resolve the ten displayed regions into the eight-isolate LadA-alpha-like/SsuD Family I and the two-isolate SPL NtaA/Sfn Family II.
2. Compare SM-NMZ subtype IB (`ssuD–ydhS–focal–metNPQ` plus aliphatic-sulfonate/regulatory genes) with C14-NMZ subtype IA (the same core plus the `glnG–yciW1–third ssuD–nik/ddp` extension), then trace the matching isolates and local exceptions.
3. Integrate the ProteinOrtho result: 10,252 sequence-based groups, 2,140 groups represented in all 14 proteomes, and one ten-member focal K20938 orthogroup absent from PA-LS101, SR-SY163, SSU-5b, and SSU-YD25. State that broad orthogroup membership does not collapse the two syntenically distinct monooxygenase families.

```markdown
![Figure 9. LadA-alpha-like and NtaA/Sfn-associated locus synteny](Figure9_LadA-cluster-curated.jpeg)
**Figure 9. Micro-synteny and genomic neighborhood of candidate LadA-alpha-like and NtaA/Sfn-associated loci.**
Curated `clinker` alignment (scale bar = 2.5 kb) of ten K20938-centered regions. The eight-isolate Family-I architecture contains a conserved `ssuD–ydhS–focal monooxygenase–metNPQ` core, with the C14-NMZ subtype carrying a `glnG–yciW1–additional ssuD–nik/ddp` extension and the SM-NMZ subtype carrying an aliphatic-sulfonate-binding/regulatory extension. The two *S. plymuthica* regions form Family II, in which divergent NtaA-like focal proteins occur in `sfnB–metQNP–ssuA` sulfur-acquisition neighborhoods. Connecting colored bands denote pairwise amino-acid sequence identity and show conserved gene order within, but not between, the two locus families.
```

---

## 3. Proposed Changes

### [MODIFY] [manuscript.md](file:///d:/W/serratia-research/manuscript/manuscript.md)
- Replace lines containing brief figure captions in `manuscript.md` with the fully scrutinized, publication-grade legends above, keeping the antiSMASH overview maps as Figure 3 and the DRAM panels (`Figure3_DRAM.jpeg` and `Figure3_DRAM2.jpeg`) as Figure 4A and Figure 4B.

---

## 4. Verification Plan

### Scripted Verification
- Re-run the citation check used for the manuscript (or an equivalent local script) after any reference edits to guarantee a 1:1 match between all 35 inline citations and the alphabetized reference list.
