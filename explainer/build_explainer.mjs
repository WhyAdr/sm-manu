import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

// Use the installed bundled runtime. No network services or new packages required.
const runtime = process.env.RUNTIME_NODE_MODULES;
if (!runtime) throw new Error('Set RUNTIME_NODE_MODULES to the bundled node_modules directory.');
const { Presentation, PresentationFile } = await import(pathToFileURL(path.join(runtime,'@oai/artifact-tool/dist/artifact_tool.mjs')).href);
const root=path.resolve(import.meta.dirname,'..');
const output=path.resolve(import.meta.dirname);
const build=path.resolve(root,'../tmp/explainer-revision-2026-11-05');
await fs.mkdir(build,{recursive:true});
const P=Presentation.create({slideSize:{width:1280,height:720}});
const C={ink:'#183642',teal:'#136C74',muted:'#526770',line:'#D5DFE1',pale:'#EFF5F4',white:'#FFFFFF',amber:'#A76022',gold:'#A76022'};
const font='Arial';
const audit=[];
const MAIN_COUNT=35;
let backupNumber=0;
function text(s,copy,x,y,w,h,size=28,color=C.ink,bold=false){
 const q=s.shapes.add({geometry:'textbox',name:copy.slice(0,65),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=copy;
 q.text.style={typeface:font,fontSize:size,color,bold,wrap:'square',autoFit:'none',verticalAlignment:'top',insets:0};
 return q;
}
function slide(title,notes,backup=false){
 const s=P.slides.add(); s.background.fill=C.white;
 text(s,title,64,44,1152,76,44,C.ink,true);
 text(s,backup?`B${++backupNumber}`:`${P.slides.items.length}`,1120,670,96,26,18,C.muted);
 s.speakerNotes.text=notes;
 audit.push({number:P.slides.items.length,title,backup,notes});
 return s;
}
function table(s,values,{x=64,y=152,w=1152,h=390,widths=null,size=26}={}){
 const t=s.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width:w,height:h,values,
  ...(widths?{columnWidths:widths}:{})});
 t.borders.assign({fill:C.line,width:0.7,style:'solid'});
 for(let r=0;r<values.length;r++)for(let c=0;c<values[0].length;c++){
  const cell=t.getCell(r,c);
  cell.fill=r===0?C.teal:(r%2===0?C.pale:C.white);
  cell.text.style={typeface:font,fontSize:size,color:r===0?C.white:C.ink,bold:r===0,verticalAlignment:'middle',insets:12,wrap:'square',autoFit:'none'};
 }
 return t;
}
function resolveRelative(relative){
 const p1=path.resolve(root,relative);
 if(fsSync.existsSync(p1)) return p1;
 const p2=path.resolve(root,'explainer/assets',relative);
 if(fsSync.existsSync(p2)) return p2;
 return p1;
}

async function img(s,relative,x,y,w,h,alt,crop=null){
 const resolved=resolveRelative(relative);
 const bytes=await fs.readFile(resolved);
 return s.images.add({blob:new Uint8Array(bytes),contentType:/\.svg$/i.test(resolved)?'image/svg+xml':/\.jpe?g$/i.test(resolved)?'image/jpeg':'image/png',
  alt,fit:'contain',position:{left:x,top:y,width:w,height:h},...(crop?{crop}:{}),geometry:'rect'});
}

// New teaching images retain their source aspect ratios, including selected crops.
const sharpPackage=JSON.parse(await fs.readFile(path.join(runtime,'sharp/package.json'),'utf8'));
const sharp=(await import(pathToFileURL(path.join(runtime,'sharp',sharpPackage.main)).href)).default;
async function fitimg(s,relative,x,y,w,h,alt,crop=null){
 const resolved=resolveRelative(relative);
 const m=await sharp(await fs.readFile(resolved)).metadata();
 const ar=(m.width*(1-(crop?.left||0)-(crop?.right||0)))/(m.height*(1-(crop?.top||0)-(crop?.bottom||0)));
 const ww=Math.min(w,h*ar),hh=ww/ar;
 return img(s,relative,x+(w-ww)/2,y+(h-hh)/2,ww,hh,alt,crop);
}

const src={
 tygs:'Source: data/TYGS/SM-C14-TYGS-Report.pdf, pp. 1–2 and 7; strain-dataset.tsv; pairwise-comparisons.tsv. Job 04c9ebd7-bb0c-440e-bcba-4a11ef017a82, results 18 October 2026.',
 genome:'Source: final Bakta v1.12.0/database v6.0 summary, JSON and FASTA for SM-NMZ and C14-NMZ. Genome properties are reported in manuscript Table 1.',
 swrw:'Sources: focal antiSMASH Region 11, original SwrW clinker figure, and manuscript biosynthesis results. Shanks et al. (2012), https://doi.org/10.1371/journal.pone.0036398, provides reference-strain genetic/chemical evidence, not an NMZ perturbation experiment.',
 loci:'Source: figures/neighborhoods/neighborhoods.json and plotted-features.tsv, generated from the final-size Bakta annotations. DNA Features Viewer: https://doi.org/10.1093/bioinformatics/btaa213.',
 chem:'Source: LC-HRMS-SM/hasil.pdf and hasil.pptx. The analysis is treated as covering both focal isolates. The tables give putative library-based assignments and do not map rows to isolates. For W1 nomenclature see https://doi.org/10.3389/fchem.2021.633870.',
 lad:'Source: LadA-analysis/07_phylogeny/LadA_smartgap.treefile and .iqtree. Internal labels are SH-aLRT/UFBoot pairs, with UFBoot as the second value. Dataset: 34 sequences, 448 retained positions, Q.PFAM+R3, 1,000 UFBoot replicates. Feng et al. (2007): https://doi.org/10.1073/pnas.0609650104. Boonmak et al. (2014): https://doi.org/10.1007/s00792-014-0636-y. Mireles et al. (2025): https://doi.org/10.1371/journal.pone.0332702.'
};

// Expanded teaching sequence, including the cover.
{
 const s=slide('NMZ Serratia genomics',
  'SM-NMZ came from slaughterhouse effluent. C14-NMZ came from the Calotropis gigantea rhizosphere in Baluran National Park, East Java. This talk explains what the genomic analyses add to the collaborative study. The leading findings concern SwrW-associated serratamolides, pigment-associated genes and extracellular-matrix loci. Aromatic metabolism and a putative LadA-like protein add comparative context. Keep any final oil-performance claim tied to the experimental team\'s actual material and results. '+src.genome);
 // A quiet cover with a genuine source genome map, rather than an invented culture image.
 s.shapes.items[0].text='';
 text(s,'NMZ Serratia\ngenomics',64,135,650,170,62,C.ink,true);
 text(s,'An explainer for the research group',68,330,620,45,30,C.teal);
 text(s,'SM-NMZ   Slaughterhouse effluent\nC14-NMZ   Calotropis rhizosphere',68,421,655,98,27);
 text(s,'6 November 2026',68,595,600,32,22,C.muted);
 await img(s,'Figure1_SM-NMZ.png',738,154,475,475,'Actual Bakta chromosome feature map for SM-NMZ');
}
{
 const s=slide('DNA, gene predictions and activity',
  'A read is a recorded DNA fragment. Assembly combines overlapping evidence into reconstructed sequences. Annotation predicts where genes occur and what their products may do. The genome is a parts list. It does not say which parts are active in a particular experiment. A related protein can use a different substrate, and a present gene can remain unexpressed. The experimental sample might contain cells, a supernatant or an extracted fraction, each with different biological content. An activity assay measures the effect of the material actually tested. The project has no expression measurement reported in these genomic analyses. '+src.genome);
 table(s,[['Stage','What it supplies'],['Sequencing','DNA fragments called reads'],['Assembly','Reconstructed chromosome and other replicons'],['Annotation','Predicted genes and possible functions'],['Experiment','An observed effect under stated conditions']],{h:365,widths:[290,862],size:28});
 text(s,'Gene predictions give us candidates to compare with lab assays.',64,565,1120,55,31,C.teal,true);
}

{
 const s=slide('Reads, assembly and genome annotation',
  'The left image is an external FASTQ-format example, not NMZ read data and not an ONT signal trace. The nucleotide lines give base calls; the quality string expresses confidence in those calls. In ONT sequencing, basecalling converts electrical signal to read sequences. The middle image is the de novo half of an EMBL-EBI assembly teaching diagram: overlapping read evidence is reconstructed into longer contigs. It is an illustration of an intermediate draft, not a claim that our final chromosomes remain fragmented. Quality filtering and polishing lie between these simplified stages. The right panel is the actual C14-NMZ Bakta circular chromosome plot. Its centre label is Serratia nematodiphila, the GTDB-Tk assignment supplied during annotation. Slide 5 compares it with the TYGS result. Annotation locates features and predicts products on the assembled sequence; a circular drawing alone does not validate closure or accuracy. Image credits: EMBL-EBI Training, FASTQ format, https://www.ebi.ac.uk/training/online/courses/functional-genomics-ii-common-technologies-and-data-analysis-methods/rna-sequencing/performing-a-rna-seq-experiment/laboratory-performance/ ; assembly diagram, https://www.ebi.ac.uk/training/online/courses/investigating-antimicrobial-resistance/analysing-genomic-data-from-pathogens/assembly/ . Both course pages specify CC BY 4.0; crops selected for teaching. '+src.genome);
 text(s,'Basecalled reads',64,151,330,40,29,C.teal,true);
 text(s,'→',414,151,40,45,35);
 text(s,'Draft assembly',460,151,330,40,29,C.teal,true);
 text(s,'→',808,151,40,45,35);
 text(s,'Annotated genome',856,151,350,40,29,C.teal,true);
 await fitimg(s,'explainer/assets/EBI-FASTQ-example.png',64,235,330,200,'External EMBL-EBI FASTQ record: basecalled sequence and quality string',{left:.037,top:.225,right:.315,bottom:.47});
 await fitimg(s,'explainer/assets/EBI-assembly-types.png',460,210,330,315,'External EMBL-EBI de novo assembly illustration: reads, overlapping evidence and contig',{left:.505,top:0,right:0,bottom:0});
 await fitimg(s,'Figure1_C14-NMZ.png',856,210,350,350,'Actual C14-NMZ Bakta circular chromosome annotation plot');
 text(s,'DNA bases + quality',64,494,330,62,26);
 text(s,'Overlaps → contigs',460,544,360,42,26);
 text(s,'Features + predictions',856,564,350,42,26);
 text(s,'EMBL-EBI examples (left, centre) · C14 Bakta map (right): GTDB S. nematodiphila (slide 5)',64,624,1152,32,23,C.muted);
}

{
 const s=slide('What each kind of evidence answers',
  'Use swrW as the example. Protein similarity locates a plausible biosynthetic candidate. Gene context can show whether associated machinery is organized coherently. LC-HRMS supplies chemical evidence at its actual identification confidence. A tension measurement would show an interfacial effect for a specified material. A controlled genetic disruption or purified-compound experiment can test a particular contribution. These sources answer different questions. Several annotation programs can reuse the same reference information, so apparent agreement is not automatically independent confirmation. Reference-strain causality should remain separate from what was measured in NMZ. '+src.swrw);
 table(s,[['Evidence','Question it addresses'],['Related gene or protein','Is there a plausible candidate?'],['Several linked genes','Does the proposed machinery fit together?'],['Chemical analysis','Which molecular assignment has support?'],['Activity assay','What effect occurred in this experiment?'],['Controlled perturbation','Does this factor contribute to that effect?']],{h:435,widths:[398,754],size:27});
}

{
 const s=slide('Genome resources and identity',
  'A megabase is one million base pairs. Autocycler consensus assembly, dnaapler reorientation and Dorado polishing yielded two closed circular chromosomes. The displayed 35–44 kb biosynthetic neighborhoods can therefore be compared end to end without contig breaks. Closure does not validate predicted cluster boundaries or biochemical function. GTDB r232 assigns C14-NMZ to S. nematodiphila, the name shown in the Bakta plot and the pig clinker comparison. TYGS places both isolates in S. marcescens species cluster 6, with separate subspecies clusters. C14 has 98.22% ANI to the nematodiphila representative. Its 96.82% match to the marcescens representative falls below that representative\'s 96.86% radius. '+src.genome+' '+src.tygs);
 table(s,[['Feature','SM-NMZ','C14-NMZ'],['Chromosome (closed circular)','4.971 Mb','5.051 Mb'],['Additional replicon','3.581-kb circular plasmid','None recovered'],['Bakta CDSs','4,566','4,626'],['GTDB r232 label','S. marcescens','S. nematodiphila'],['TYGS species / subspecies cluster','6 / 11','6 / 10']],{y:145,h:370,widths:[440,340,372],size:25});
 text(s,'Closed circular chromosomes avoid contig breaks across our 35–44 kb BGC neighborhoods.',64,545,1152,40,26,C.teal,true);
 text(s,'TYGS groups both in S. marcescens cluster 6; Bakta and clinker plots retain C14-NMZ\'s GTDB label (S. nematodiphila).',64,602,1152,36,22,C.muted);
}
{
 const s=slide('ANI and digital DNA–DNA hybridization',
  'ANI is average nucleotide identity in the genome regions that a method aligns. It is not the percentage of the whole genome that is identical, nor a confidence score for a species name. Alignment fraction describes how much sequence aligns under the particular method. dDDH is a computational estimate of DNA–DNA hybridization relatedness, calibrated to the historical experimental measure. The conventional roughly 95–96 percent ANI and 70 percent dDDH boundaries are broad species guides; they are not universally interchangeable. GTDB uses a species-specific representative radius and an AF rule. TYGS uses type-strain comparisons and dDDH clustering. The NMZ direct dDDH result uses d4; d5 distances are separately used for the tree. Sources: Goris et al. 2007, https://doi.org/10.1099/ijs.0.64483-0 ; Meier-Kolthoff and Göker 2019, https://doi.org/10.1038/s41467-019-10210-3 ; https://ecogenomics.github.io/GTDBTk/commands/classify_wf.html ; '+src.tygs);
 table(s,[['Measure','What is compared','How it is interpreted'],['ANI + aligned fraction','DNA sequence identity in aligned regions','Identity together with alignment coverage'],['dDDH','Sequence-based estimate of DNA–DNA relatedness','Estimate and confidence interval']],{y:165,h:260,widths:[265,445,442],size:27});
 text(s,'ANI = average nucleotide identity; AF = aligned fraction',64,432,1152,32,24,C.muted);
 text(s,'Broad species guides: ANI ≈95–96%; dDDH ≈70%',64,465,1152,50,32,C.teal,true);
 text(s,'GTDB applies a representative-specific ANI radius.',64,542,1152,42,28);
 text(s,'NMZ pair: dDDH(d4) 74.2% (71.2–77.0%)',64,607,1152,42,28);
}
{
 const s=slide('GTDB-Tk and TYGS workflows',
  'GTDB is a reference taxonomy/database; GTDB-Tk is the local classification workflow. A genome FASTA enters an ANI/AF comparison against species representatives. Genomes meeting the representative-specific ANI radius and AF criterion may be classified by the ANI screen, as both NMZ queries were. Other genomes proceed through marker-gene identification, alignment and reference-tree placement; that branch was not used for the focal classifications. The documented project run was GTDB-Tk 2.7.2 with GTDB r232; current documentation may describe a newer tool release. TYGS is a web server using genome input, nearby type-strain selection, GBDP distances, dDDH estimates and a genome phylogram. Type strains anchor names; a GTDB representative need not be the nomenclatural type. Different references and operational boundaries explain why species labels can differ without an assembly being wrong. The actual C14 outputs are retained: GTDB S. nematodiphila, TYGS S. marcescens. C14 ANI to the marcescens representative is 96.82 percent, below its 96.86 percent radius; its nematodiphila representative match is 98.22 percent, AF 0.932. Sources: https://ecogenomics.github.io/GTDBTk/commands/classify_wf.html ; https://doi.org/10.1038/s41467-019-10210-3 ; TYGS public website screenshot captured 21 October 2026, https://tygs.dsmz.de/ . '+src.tygs);
 text(s,'TYGS · web service',64,145,540,43,30,C.teal,true);
 await fitimg(s,'explainer/assets/TYGS-submission-page.png',64,202,540,268,'Public TYGS website showing its query input interface; no job submitted');
 text(s,'Genome FASTA → type-strain comparisons\nGBDP → dDDH + genome phylogram',64,489,548,98,25);
 text(s,'GTDB-Tk · local pipeline',666,145,550,43,30,C.teal,true);
 text(s,'GTDB = Genome Taxonomy Database',666,190,550,34,23,C.muted);
 text(s,'Genome FASTA + GTDB references\n↓\nANI + aligned fraction\n↓\nRepresentative-specific species boundary\n↓\nClassification summary',666,235,550,280,26);
 text(s,'NMZ queries were classified by ANI screening.',666,526,550,76,26,C.teal,true);
 text(s,'C14: GTDB S. nematodiphila; TYGS S. marcescens',64,624,1152,36,26,C.muted);
}

{
 const s=slide('Genes, neighborhoods, clusters and operons',
  'Read a gene arrow as an annotated DNA feature: its position and direction are information, rather than a measurement of expression. A neighborhood means nearby genes. A biosynthetic cluster is a set of nearby genes implicated in making a molecule, with stronger evidence when machinery and known biology fit together. An operon is a transcriptional unit; mere proximity is insufficient to establish one. The pig comparison shows an organized multi-gene pigment-associated region. Its C14-NMZ label follows GTDB, as explained on slide 5. Its flanking genes are not all automatically part of the pigment pathway. swrW provides a useful contrast: one approximately 3.94-kb gene encodes a single Ser-selective C–A–PCP–TE NRPS module. A single module can be used iteratively, and a large predicted region is not necessarily a large experimentally delimited operon. The red/pink culture phenotype supports a pigment-associated finding without adding a chemical confirmation of prodigiosin. Sources: original Figure7_prodigiosin.jpeg; focal antiSMASH annotations; https://docs.antismash.secondarymetabolites.org/understanding_output/regions/ ; '+src.swrw);
 table(s,[['Term','Meaning'],['Gene','DNA sequence encoding a product'],['Neighborhood','Nearby genes: physical context'],['Biosynthetic cluster','Nearby genes implicated in making a molecule'],['Operon','Genes transcribed together as a unit']],{y:139,h:270,widths:[340,812],size:26});
 await fitimg(s,'Figure7_prodigiosin.jpeg',64,427,1152,165,'Top two focal-isolate rows of the original pig-associated clinker comparison',{left:0,top:0,right:0,bottom:.79});
 text(s,'pig: a multi-gene example. SwrW: a multifunctional enzyme encoded by one gene.',64,608,1152,58,27,C.teal,true);
}

// Slide 9: Genome-wide BGC mining with antiSMASH
{
 const s=slide('Genome-wide BGC mining with antiSMASH',
  'antiSMASH v8.0.4 scans each closed chromosome using rule-based profile HMMs for biosynthetic gene clusters (BGCs). Both SM-NMZ and C14-NMZ carry 11 chromosomal BGC regions, all internal to the chromosome (contig_edge=False). Region numbers are assigned sequentially from the chromosomal origin (dnaA), so a shared region number does not imply orthology. Nine region calls are shared across both genomes, while two regions per isolate are unique: SM-NMZ uniquely carries Region 2 (NRPS-like A–PCP–TD reductase) and Region 7 (a 2-module NRPS), whereas C14-NMZ uniquely carries Region 3 (ranthipeptide) and Region 7 (a yersinopine-like opine metallophore). In addition, Region 10 encodes completely different NRPS architectures in the two isolates. When evaluating any region, we distinguish three comparison tabs: KnownClusterBlast and MIBiG comparison compare against curated reference BGCs in MIBiG, whereas ClusterBlast searches general GenBank genome assemblies for syntenic homologs. Source: manuscript Section 3 and data/antiSMASH/antiSMASH-region-comparison.md.');
  text(s,'SM-NMZ · 11 BGC regions (4 NRPS + 1 NRPS-like)',64,136,545,28,18,C.teal,true);
  text(s,'C14-NMZ · 11 BGC regions (3 NRPS + RiPP + opine)',655,136,561,28,18,C.teal,true);
  await fitimg(s,'Figure3_SM-NMZ-antismash-overview.jpeg',64,172,545,326,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in SM-NMZ');
  await fitimg(s,'Figure3_C14-NMZ-antismash-overview.jpeg',655,172,561,326,'antiSMASH v8.0.4 overview of the 11 chromosomal BGC regions in C14-NMZ');
  text(s,'Shared: prodigiosin (Reg 5), SwrW (Reg 11), PQQ (Reg 8), siderophores (Reg 1 & 9), RiPP/terpene/β-lactone.',64,516,1152,32,18.5,C.teal,true);
  text(s,'Differences: SM-only Reg 2 & 7 (NRPS) · C14-only Reg 3 (ranthipeptide) & 7 (opine) · divergent Reg 10 NRPSs.',64,558,1152,32,19,C.ink);
  text(s,'Three similarity lenses: 1) Overview badge (% ref genes hit) · 2) MIBiG score (composite geometric mean) · 3) ClusterBlast (full synteny).',64,600,1152,32,18,C.muted);
}

// Slide 10: Orienting in antiSMASH: Region 11 (swrW) full-window view
{
 const s=slide('Orienting in antiSMASH: Region 11 (swrW) full view',
  'Before comparing individual clusters, this slide shows how a single antiSMASH region page is organized using SM-NMZ Region 11 (the 43,936-nt serrawettin W1 neighborhood, 4,428,765–4,472,700 nt). At the top left, the dark-red arrow marks the sole core biosynthetic CDS (NNLMDO_021205, 3,936 nt), surrounded by the ~20-kb flanking window included by the NRPS rule. At the bottom left, toggling “Show module domains” ON in the NRPS/PKS domains tab reveals all four domains of the unimodular SwrW synthetase: an N-terminal Condensation_Starter domain (1–298 AA, active-site motif HHLIADG, which acylates the first L-Ser with a beta-hydroxy fatty acid), an AMP-binding adenylation domain (A), a peptidyl-carrier protein domain (PCP, 976–1042 AA, shown as an unlabeled blue oval until hovered), and a C-terminal Thioesterase (TE) domain. On the right, the Gene details and NRPS/PKS substrates panels report a 100% Stachelhaus code match (DVWHVSLVDK) to L-Serine. Source: SM-NMZ antiSMASH v8.0.4 report (#r1c11) and data/antiSMASH/SM-NMZ-domains.tsv.');
 await fitimg(s,'explainer/assets/antismash-sm-r1c11-full.png',64,130,1152,430,'Full antiSMASH v8.0.4 view of SM-NMZ Region 11 showing SwrW domains, Condensation_Starter popup, PCP badge, and Ser Stachelhaus prediction');
 text(s,'1) Top: 43.9-kb rule-defined window (20 kb flank + 3,936 nt core swrW + 20 kb flank; not an operon boundary).',64,566,1152,24,17.5,C.teal,true);
 text(s,'2) Bottom-left (“Show module domains” ON): C_Starter (1–298 AA, HHLIADG) – A – PCP (976–1042 AA) – TE module domains.',64,592,1152,24,17,C.ink);
 text(s,'3) Right panel: Gene details & Ser substrate prediction (DVWHVSLVDK 100% Stachelhaus code match to L-Serine).',64,618,1152,24,17,C.ink);
 text(s,'* Overlays added for clarity; all values verified against antiSMASH JSON/TSV outputs.',64,644,1152,22,14,C.muted);
}

// Slide 11: Zooming into Region 11: core SwrW domains vs. flanking window hits
{
  const s=slide('Region 11: core SwrW vs. flanking window hits',
  'Zooming into the Region 11 detail panels answers two common questions when reading antiSMASH outputs. First, why does the NRPS/PKS domains panel list four genes (NNLMDO_021205, 021255, 021280 and 021300) when SwrW is a single-gene synthetase? Because antiSMASH scans the entire 43.9-kb region window (including 20-kb upstream and downstream padding) for any distant pHMM domain hit: NNLMDO_021205 is the only core NRPS (C_Starter–A–PCP–TE), whereas NNLMDO_021255 is a flanking housekeeping 3-oxoacyl-ACP reductase (fabG, whose short-chain dehydrogenase fold triggers a weak KR hit, E = 7.1e-10), NNLMDO_021280 is a flanking zinc alcohol dehydrogenase (adhP/yahK, triggering a weak ER hit, E = 1.5e-11), and NNLMDO_021300 is a boundary aromatic aminotransferase (tyrB, triggering an AmT hit). Second, switching to the ClusterBlast tab confirms that the entire 43.9-kb neighborhood—including the core SwrW synthetase (100% identity, 100% coverage to Serratia marcescens BVG90_RS18855)—is collinear across complete S. marcescens chromosomes. Source: SM-NMZ antiSMASH report (#r1c11) and Bakta annotations.');
  text(s,'NRPS/PKS domains: core SwrW vs. 3 flanking enzymes',64,136,560,28,17.5,C.teal,true);
  text(s,'ClusterBlast: 100% identity & synteny in S. marcescens',648,136,568,28,17.5,C.teal,true);
 await fitimg(s,'explainer/assets/antismash-sm-r1c11-domains-crop.png',64,170,560,205,'Cropped NRPS/PKS domains panel of SM-NMZ Region 11 distinguishing core SwrW from flanking fabG, adhP and tyrB');
 await fitimg(s,'explainer/assets/antismash-sm-r1c11-clusterblast-crop.png',648,170,568,365,'Cropped ClusterBlast panel of SM-NMZ Region 11 showing 100% identity to Serratia marcescens swrW');
 text(s,'Why 4 rows appear on the left: antiSMASH scans the 20-kb flanking window, flagging housekeeping SDR/dehydrogenases (fabG, adhP) and an aminotransferase (tyrB).',64,385,560,130,18.5,C.ink);
  text(s,'Only NNLMDO_021205 (SM) and OJMJKD_021655 (C14) encode the C_Starter–A(Ser)–PCP–TE SwrW synthetase.',64,545,1152,32,19,C.teal,true);
  text(s,'ClusterBlast confirms 100% coverage and neighborhood collinearity with reference S. marcescens chromosomes.',64,582,1152,28,18,C.muted);
  text(s,'* Overlays added for clarity; domain E-values & ClusterBlast verified against antiSMASH outputs.',64,614,1152,22,14.5,C.muted);
}

// Slide 12: Why Region 11's 0.69 MIBiG score misleads vs. Region 5 (pig, 0.93)
{
  const s=slide('Region 11 (0.69) vs. Region 5 (0.93) MIBiG scores',
  'Comparing the MIBiG comparison (Protocluster to Region) panels for Region 11 and Region 5 illustrates the central BGC lesson of our manuscript: a single-gene reference inflates both overview badges and composite similarity scores. In Region 11 (left), the top MIBiG row is BGC0002286.3 (“ririwpeptide A/B/C”) with a score of 0.69 (id = 0.49, order = N/A, components = 0.67). In antiSMASH source code, the composite score is the geometric mean of identity, order, and components. Because ririwpeptide is a single-gene reference, the code defaults order to 1.0 (even though the tooltip displays N/A), computing (0.49 × 1.0 × 0.67)^(1/3) = 0.69 instead of the true two-component geometric mean sqrt(0.49 × 0.67) = 0.57. Furthermore, on the overview page, KnownClusterBlast computes similarity as 100 × (hit genes ÷ reference genes); with 1 hit out of 1 gene, it scores 100% and triggers the green "High" badge (>75%). Meanwhile, the actual protein alignment is only 46.7% identity and 45.9% coverage across generic C–A–PCP–TE domains. By contrast, in Region 5 (right), prodigiosin (BGC0000259.3) scores 0.93 from 16 collinear genes with order = 1.00 at 86.7–100% identity and 100% coverage. Source: SM_antismash.json (ProtoToRegion_RiQ), antiSMASH v8 source code, and manuscript Section 3.');
  text(s,'Region 11 (swrW): 0.69 score from 1 generic NRPS hit (46.7% id)',64,136,560,26,17.5,C.gold,true);
  text(s,'Region 5 (pig): 0.93 score from 16 collinear genes (87–100% id)',648,136,568,26,17.5,C.teal,true);
 await fitimg(s,'explainer/assets/antismash-sm-r1c11-mibig-crop.png',64,168,560,220,'MIBiG comparison for SM-NMZ Region 11 showing single-gene 0.69 match to ririwpeptide');
 await fitimg(s,'explainer/assets/antismash-sm-r1c5-pig-mibig-crop.png',648,168,568,220,'MIBiG comparison for SM-NMZ Region 5 showing 16-gene 0.93 match to prodigiosin');
 table(s,[
  ['Similarity Lens','Region 11 (swrW vs. ririwpeptide)','Region 5 (pig vs. prodigiosin)','What the Number Actually Measures'],
  ['1) Overview badge','High (green badge)','High (green badge)','Hits ÷ ref genes: 1/1 (100%) vs. 16/16 (100%); 1 gene inflates badge'],
  ['2) MIBiG score','0.69 (id 0.49, order N/A, comp 0.67)','0.93 (id 0.84, order 1.00, comp 0.96)','Geometric mean: single-gene ref pads order to 1.0 (true 2-term is 0.57)'],
  ['3) Protein alignment','46.7% id / 45.9% cov (1 generic NRPS)','86.7–100% id / 100% cov (16 genes)','Generic C–A–PCP–TE homology vs. complete collinear pathway synteny']
 ],{x:64,y:398,w:1152,h:180,widths:[180,295,295,382],size:15.5});
 text(s,'* Overlays added for clarity; single-gene reference arithmetic verified against antiSMASH v8 source code.',64,586,1152,22,14.5,C.muted);
 text(s,'Takeaway: Always inspect gene count and alignment depth—a single-gene hit inflates both overview and MIBiG scores.',64,612,1152,30,17.5,C.teal,true);
}

// Slide 13: Catecholate siderophore potential: Regions 1 and 9 in SM-NMZ & C14-NMZ
{
 const s=slide('Catecholate siderophore potential: Regions 1 and 9',
  'Both SM-NMZ and C14-NMZ carry two conserved catecholate siderophore-associated regions: Region 1 (called as NRP-metallophore; NRPS, 48.3 kb) and Region 9 (called as NRPS, 44.0 kb). In both regions, the core genes encode classic catecholate siderophore assembly and transport components—2,3-dihydroxybenzoate-AMP ligase (entE), catecholate NRPS modules (entF / entF2), an MbtH-like NRPS chaperone (mbtH), and an enterobactin/siderophore exporter (entS). In the MIBiG comparison tables (shown here for SM-NMZ), these conserved catecholate building blocks produce partial 5- to 6-protein matches (47–78% identity) against multiple reference clusters (pyreudione, enterobactin, trichrysobactin, serratiochelin and viobactin). Because only the shared catecholate core genes match—rather than an entire species-specific tailoring pathway—the manuscript reports Regions 1 and 9 as catecholate siderophore biosynthetic potential rather than assigning a single named siderophore product. Source: manuscript Section 3 and data/antiSMASH/SM-NMZ.tsv.');
  text(s,'Region 1 (NRP-metallophore): entE, entF, mbtH, entS',64,136,560,28,17.5,C.teal,true);
  text(s,'Region 9 (NRPS): 2nd catecholate locus (5–6 gene hits)',648,136,568,28,17.5,C.teal,true);
 await fitimg(s,'explainer/assets/antismash-sm-r1c1-metallophore-crop.png',64,172,560,365,'MIBiG comparison for SM-NMZ Region 1 showing catecholate siderophore core match');
 await fitimg(s,'explainer/assets/antismash-sm-r1c9-metallophore-crop.png',648,172,568,365,'MIBiG comparison for SM-NMZ Region 9 showing partial catecholate NRPS match');
  text(s,'Both chromosomes carry two conserved catecholate siderophore loci (entE, entF/entF2, mbtH, entS).',64,552,1152,34,19,C.teal,true);
  text(s,'Partial 5–6 protein MIBiG hits (47–78% identity) support catecholate class potential without naming a product.',64,590,1152,30,18,C.muted);
  text(s,'* Overlays added for clarity; all values verified against antiSMASH JSON/TSV outputs.',64,624,1152,22,14.5,C.muted);
}

// Slide 14: C14-NMZ Region 7 (opine-like-metallophore) vs. SM-NMZ Regions 2 & 7 (NRPS)
{
  const s=slide('C14 Region 7 (opine) vs. SM Regions 2 & 7 (NRPS)',
  'This slide shows the symmetric accessory BGC differences between the two isolates outside Region 10. On the left, C14-NMZ uniquely carries Region 7 (opine-like-metallophore, 22.1 kb), which encodes nicotianamine-synthase-like and opine-dehydrogenase-like metallophore enzymes (CntM and CntL) flanked by exporters. Its MIBiG comparison shows a collinear 6-protein match (score 0.84, 64–86% identity, with one hit at ~47% coverage) to the Yersinia pestis yersinopine cluster (BGC0002490.2), supporting yersinopine-like metallophore potential in C14-NMZ. On the right, SM-NMZ uniquely carries two NRPS-family regions absent from C14-NMZ: Region 2 (NRPS-like, 43.0 kb), driven by NNLMDO_002205 with an A–PCP–TD (terminal reductase) domain architecture, and Region 7 (NRPS, 48.0 kb), encoding a two-module NRPS pair (NNLMDO_010830 C–A–PCP–TE and NNLMDO_010835 C–A–PCP) alongside a short-chain KR and alpha/beta-hydrolase (AbH). Reporting both sets of unique loci gives a balanced, symmetric view of the two chromosomes. Source: manuscript Section 3 and data/antiSMASH/.');
  text(s,'C14-NMZ Region 7: opine-like metallophore (CntM + CntL)',64,136,560,28,17.5,C.teal,true);
  text(s,'SM-NMZ Region 2 (NRPS-like) & Region 7 (2-module NRPS)',648,136,568,28,17.5,C.gold,true);
 await fitimg(s,'explainer/assets/antismash-c14-r1c7-opine-crop.png',64,172,560,368,'C14-NMZ Region 7 opine-like-metallophore map and 6-protein yersinopine MIBiG alignment');
 await fitimg(s,'explainer/assets/antismash-sm-r1c2-r1c7-domains-crop.png',648,172,568,368,'SM-NMZ unique Region 2 (NRPS-like A–PCP–TD) and Region 7 (two-module NRPS) domain architectures');
  text(s,'Symmetric divergence: SM-NMZ has 4 NRPS + 1 NRPS-like regions; C14-NMZ has 3 NRPS + opine + ranthipeptide.',64,552,1152,34,19,C.teal,true);
  text(s,'All three isolate-specific loci stay as uncharacterized genomic candidates, without speculative compound names.',64,590,1152,30,18,C.muted);
  text(s,'* Overlays added for clarity; all values verified against antiSMASH JSON/TSV outputs.',64,624,1152,22,14.5,C.muted);
}

// Slide 15: Same region number, different NRPS machinery: Region 10 in SM-NMZ vs. C14-NMZ
{
  const s=slide('Different NRPS machinery at Region 10',
  'Region 10 is the sharpest biosynthetic contrast between the two focal isolates and demonstrates why ordinal region numbers must be compared at the domain level. In SM-NMZ (left, 51.3 kb), Region 10 is a complex multi-gene NRPS/acyl-loading cassette: it encodes a standalone alpha/beta-hydrolase (AbH, NNLMDO_014990), a standalone type-II thioesterase (TE, NNLMDO_015030), a free-standing adenylation protein (A[Thr], NNLMDO_015035), a two-module NRPS (NNLMDO_015060: C–A[Val]–PCP–C–A[Ser]–PCP), a hybrid co-enzyme A ligase / NRPS module (NNLMDO_015065: CAL–ACP–C–A[Leu]–PCP), and a malonyl-CoA acyltransferase/carrier protein (NNLMDO_015080: PKS_AT–ACP). ClusterBlast shows 97–100% identity across ~30 collinear proteins to the Serratia marcescens UENF-22GI Gap1 locus. In C14-NMZ (right, 45.8 kb), Region 10 is an unrelated single-module D-Val NRPS (OJMJKD_018290: C–A[Val]–PCP–E–TIGR01720–C_DCL) located near a T6SS neighborhood. Neither locus encodes the multidomain stephensiolide synthetase, explaining why library-only “Stephensiolide G/K” LC-HRMS hits are treated with caution. Source: manuscript Section 3 and data/antiSMASH/.');
  text(s,'SM-NMZ Region 10: Gap1-like 3-module NRPS cassette',64,136,560,28,17.5,C.teal,true);
  text(s,'C14-NMZ Region 10: single-module D-Val NRPS',648,136,568,28,17.5,C.gold,true);
 await fitimg(s,'explainer/assets/antismash-sm-r1c10-domains-crop.png',64,172,560,368,'SM-NMZ Region 10 NRPS/PKS domains showing the Gap1-like multi-protein NRPS/CAL/AT/TE architecture');
 await fitimg(s,'explainer/assets/antismash-c14-r1c10-domains-crop.png',648,172,568,368,'C14-NMZ Region 10 NRPS/PKS domains showing the single-module D-Val epimerization NRPS architecture');
  text(s,'SM-NMZ matches the UENF-22GI Gap1 cassette (97–100% id); C14-NMZ is a 1-module D-Val NRPS.',64,552,1152,34,19,C.teal,true);
  text(s,'Neither architecture matches a canonical stephensiolide BGC—a structural check on LC-HRMS library hits.',64,590,1152,30,18,C.muted);
  text(s,'* Overlays added for clarity; all values verified against antiSMASH JSON/TSV outputs.',64,624,1152,22,14.5,C.muted);
}

// Slide 16: Class-level RiPP, redox-cofactor (PQQ), beta-lactone and terpene-precursor calls
{
 const s=slide('Class-level RiPP, PQQ, beta-lactone and terpene calls',
  'Rounding out the 11-region antiSMASH inventory, this slide covers the five non-NRPS region types across SM-NMZ and C14-NMZ. Top left shows the shared Region 8 redox-cofactor locus (22.2 kb), which encodes the conserved pyrroloquinoline quinone (PQQ) biosynthesis operon (pqqA–pqqF; matching canonical PQQ reference clusters in KnownClusterBlast, while MIBiG Protocluster-to-Region shows only low-score flanking hits). Top right shows C14-NMZ unique Region 3 (ranthipeptide, 21.4 kb), detected by its radical SAM / SPASM domain protein (TIGR04085 / PF04055) and PqqD-like RiPP recognition element (RRE). The summary table below lists all five non-NRPS calls—including the shared Region 6 azole-containing-RiPP (YcaO + PF04055), the shared betalactone locus (SM Reg 3 / C14 Reg 2, HMGL-like + AMP-binding), and the shared Region 4 terpene-precursor locus (ispG / LytB-like). In our manuscript, PQQ is reported as a conserved redox cofactor pathway, while the RiPP, beta-lactone and terpene-precursor regions are reported strictly as class-level rule detections. Source: manuscript Section 3 and data/antiSMASH/antiSMASH-region-comparison.md.');
  text(s,'Shared Region 8: conserved pqqA–pqqF PQQ operon',64,136,560,28,17.5,C.teal,true);
  text(s,'C14-NMZ Region 3 (ranthipeptide): rSAM/SPASM + RRE',648,136,568,28,17.5,C.gold,true);
 await fitimg(s,'explainer/assets/antismash-sm-r1c8-pqq-crop.png',64,172,560,205,'SM-NMZ Region 8 redox-cofactor PQQ locus');
 await fitimg(s,'explainer/assets/antismash-c14-r1c3-ranthipeptide-crop.png',648,172,568,205,'C14-NMZ Region 3 ranthipeptide locus and TIGRFAM domains');
 table(s,[
  ['Region (SM / C14)','antiSMASH Rule Call','Core Rule Signature','Manuscript Interpretation'],
  ['Reg 8 / Reg 8','redox-cofactor','pqqA–pqqF operon (PqqD RRE + PqqE rSAM + PqqC)','Conserved PQQ redox-cofactor biosynthesis'],
  ['— / Reg 3 (C14 only)','ranthipeptide','Radical SAM / SPASM (TIGR04085) + PqqD RRE','Class-level RiPP call unique to C14-NMZ'],
  ['Reg 6 / Reg 6','azole-containing-RiPP','YcaO cyclodehydratase + PF04055 radical SAM','Conserved class-level RiPP call (no MIBiG hit)'],
  ['Reg 3 / Reg 2 & Reg 4 / Reg 4','betalactone & terpene-precursor','HMGL-like + AMP-binding (β-lactone); ispG (terpene)','Conserved primary/secondary class rule calls']
 ],{y:388,h:225,widths:[220,250,362,320],size:17.5});
 text(s,'* Overlays added for clarity; all values verified against antiSMASH JSON/TSV outputs.',64,624,1152,22,14.5,C.muted);
}
{
 const s=slide('SwrW evidence in the NMZ study',
  'Walk through the original evidence table with one concrete example. The related SwrW proteins and their C–A–PCP–TE domains support a family-level biosynthetic candidate. Conserved local organization gives context and does not prove co-transcription or which neighboring genes are required. The reported LC-HRMS assignments add chemical evidence at the actual analytical confidence documented by the chemistry team. Tension and E24 measurements would answer what the tested material does, while controlled interventions or purified-compound comparisons could test a contribution to that effect. No such NMZ causal experiment is reported here, and no missing endpoint value is inferred. Shanks et al. performed relevant genetic and purified-compound experiments in their reference strains; that evidence establishes precedent, not a result in NMZ. '+src.swrw+' '+src.chem);
 table(s,[['Observation or test','What it supports'],['SwrW sequence, domains and context','A plausible biosynthetic candidate'],['Putative LC-HRMS assignments','Serrawettin W1 (= serratamolide A) and serratamolide C'],['Tension or E24 assay','Effect of the particular material tested'],['Controlled intervention / purified compound','A test of contribution to that effect']],{y:158,h:385,widths:[550,602],size:27});
 text(s,'The three evidence layers are consistent; targeted assays test whether SwrW drives crude-oil activity.',64,552,1152,38,24,C.teal,true);
 text(s,'Pair the chemistry with activity measured on the same test material.',64,606,1152,35,22,C.muted);
}

{
 const s=slide('SwrW and reported serratamolides',
  'The image is a crop of the original clinker figure showing only the focal pair. The orange arrows mark swrW. Arrow direction follows gene orientation; ribbons connect protein matches. Their presence does not demonstrate transcription. The focal SwrW proteins share 98.9% amino-acid identity and carry a Ser-selective C–A–PCP–TE architecture. Characterized SwrW uses one module to make a cyclic dimeric depsipeptide, so one module does not imply a one-amino-acid product. The architecture supports family-level biosynthetic potential and does not select an exact congener. Both compounds were assigned in samples 1 and 2 in the glycopeptide and DCM columns. The chemistry source provides no sample-to-isolate key. Serrawettin W1 is the alias for serratamolide A. Serratamolide C is a distinct congener. A chemical assignment and a contribution to measured activity remain separate claims. '+src.swrw+' '+src.chem);
 text(s,'Genomic evidence',64,145,550,35,26,C.teal,true);
 text(s,'Both isolates carry a conserved swrW candidate.',64,191,1130,45,31);
 await img(s,'Figure6_serrawettin.jpeg',64,255,1152,200,'Focal SM-NMZ and C14-NMZ rows from the original SwrW clinker comparison',{left:0,top:0,right:0.21,bottom:0.778});
 text(s,'Putative LC-HRMS assignments · samples 1 and 2',64,484,1140,38,26,C.teal,true);
 text(s,'Serrawettin W1 (= serratamolide A) and serratamolide C',64,535,1130,45,31);
 text(s,'The report does not map rows to isolates. Separately, pig fits the red/pink cultures.',64,606,1152,37,25,C.muted);
 s.speakerNotes.append(' The conserved 14-gene pig architecture and reported red/pink cultures add a separate pigment-associated finding. They do not establish an emulsification or pour-point mechanism. Source: manuscript pig comparison and Figure7_prodigiosin.jpeg.');
}
{
 const s=slide('Serratamolide A: the ring behind the LC-HRMS hit',
  'This slide unpacks what the chemistry report actually claims. Serratamolide A is the same compound as serrawettin W1. It is a cyclic depsipeptide: two 3-hydroxydecanoyl-serine units close a 14-membered ring through two amide bonds and two ester (lactone) bonds, leaving the serine hydroxymethyl groups free. The drawn structure has the formula C26H46N2O8 and a monoisotopic mass of 514.3254 Da (RDKit, computed from the SMILES O=C1C(CO)NC(=O)CC(CCCCCCC)OC(=O)C(CO)NC(=O)CC(CCCCCCC)O1; stereochemistry omitted). The calculated singly charged ions are [M+H]+ 515.3327, [M+Na]+ 537.3146 and [M+K]+ 553.2886. The chemistry report states that workflow 1 searched H+, Na+, K+, e- and NH4+ adducts, workflow 2 searched H+, Na+ and e-, observed m/z had to be within 10 ppm, signals present in blanks were removed, and a fragmentation match below 5 mDa was preferred. A mass and fragment match supports a formula and a structural family. It does not by itself separate isomers or prove which congener is present without a standard. Congeners of this family are generally described as differing in acyl-chain length or saturation, and each extra CH2 adds 14.0157 Da. The report lists serratamolides A to E plus library-only stephensiolide G and K hits at much lower percent area. The report does not provide structures for B to E, so none is drawn here. The manuscript currently names serrawettin W1 (= serratamolide A) and serratamolide C as the detections. Source: LC-HRMS-SM/hasil.pdf pp. 2-3, 5-7 and 15-17; masses computed with RDKit. '+src.chem);
 text(s,'Serratamolide A (= serrawettin W1): C26H46N2O8',64,136,600,26,17.5,C.teal,true);
 text(s,'What the mass spectrometer reports',690,136,526,26,17.5,C.teal,true);
 await fitimg(s,'explainer/assets/serratamolide-A-structure.png',64,166,600,300,'Skeletal structure of serratamolide A: a 14-membered cyclic depsipeptide of two 3-hydroxydecanoyl-serine units');
 table(s,[['Ion (calculated)','m/z'],['[M+H]+','515.3327'],['[M+Na]+','537.3146'],['[M+K]+ (workflow 1 only)','553.2886'],['+1 CH2 in an acyl chain','+14.0157']],{x:690,y:166,w:526,h:240,widths:[326,200],size:16.5});
 text(s,'Two 3-hydroxydecanoyl-Ser units close the ring through two amides and two esters.',64,476,600,50,17,C.ink);
 text(s,'Chain-length congeners shift m/z in CH2 steps, so a library hit needs fragments or a standard.',690,420,526,50,17,C.ink);
 text(s,'A mass fits a formula; fragments and standards test the structure.',64,546,1152,34,19,C.teal,true);
 text(s,'The report lists serratamolides A-E plus library-only stephensiolides; B-E structures were not checked here.',64,586,1152,30,18,C.muted);
 text(s,'Structure drawn with RDKit from SMILES; stereochemistry omitted.',64,626,1152,22,14.5,C.muted);
}
{
 const s=slide('Extracellular matrices and surface activity',
  'EPS means extracellular polymeric substances, which can include polysaccharides and other material. A capsule remains associated with the cell, while the composition of released material depends on growth and extraction. Both isolates have capsule, EPS2 and cellulose-associated loci. The displayed DNA Features Viewer panel shows the important focal difference: a contiguous pgaDCBA locus in SM, compared with corresponding C14 flanks lacking that intervening locus. C14 still has a separate pgaB homolog elsewhere. The pga system is associated with PNAG, a matrix polysaccharide, but no polymer chemistry or amount is measured here. Large polymers can influence emulsion stability, while small amphiphiles can affect interfaces. Their relative roles depend on which material the assay uses. The HADEG Emulsan category contains generic capsule markers. '+src.loci+' PNAG reference: https://doi.org/10.1128/JB.186.9.2724-2734.2004.');
 text(s,'Both isolates: capsule/EPS and cellulose candidates',64,145,1150,44,30);
 await img(s,'figures/Figure3_EPS-CPS-neighborhoods.png',64,213,1152,335,'Panel D: SM pgaDCBA and the corresponding C14 flanks, equal kb scale',{left:0,top:0.699,right:0,bottom:0.086});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,548,1140,26,21,C.muted);
 text(s,'SM-NMZ adds a contiguous pgaDCBA locus associated with PNAG.',64,577,1150,40,29,C.teal,true);
 text(s,'Compare biofilm or emulsion stability if the isolates differ in those assays.',64,627,1140,32,24,C.muted);
}

{
 const s=slide('EPS, CPS and matrix polysaccharides',
  'EPS is used here for extracellular polymeric substances: a broad matrix that may contain polysaccharides, proteins, extracellular DNA and other components. Some papers use EPS more narrowly for exopolysaccharides; define the usage rather than treating every EPS label as a chemical identity. CPS means capsular polysaccharide, emphasizing a cell-associated layer. PNAG is a specific beta-1,6-linked N-acetylglucosamine polymer, often partly deacetylated, associated with pga machinery in characterized systems. Cellulose is a distinct beta-1,4-linked glucose polymer. The NMZ pga and bcs annotations support candidates; they do not determine polymer amount, exact modification or the chemistry of the assayed preparation. HADEG uses wzb/wzc capsule-associated markers under the Emulsan category, but these regulatory/export-associated homologs do not identify a particular polymer product. Sources: Wang et al. 2004, https://doi.org/10.1128/JB.186.9.2724-2734.2004 ; Flemming and Wingender 2010, https://doi.org/10.1038/nrmicro2415 ; Omadjela et al. 2013, https://doi.org/10.1073/pnas.1314063110 ; '+src.loci);
 text(s,'Polysaccharides are long chains of sugar units.',64,139,1152,37,27);
 table(s,[['Term','What it means'],['EPS','Extracellular polymeric substances: the matrix'],['CPS','Capsular polysaccharide: associated with the cell'],['PNAG','β-(1→6)-linked N-acetylglucosamine polymer'],['Cellulose','β-(1→4)-linked glucose polymer']],{y:201,h:300,widths:[260,892],size:27});
 text(s,'Small lipopeptides and matrix polymers can affect emulsions differently.',64,537,1152,70,28,C.teal,true);
 text(s,'Record whether each assay used whole broth, supernatant or an extract.',64,621,1152,37,25,C.muted);
}
{
 const s=slide('Capsule loci and the HADEG markers',
  'Both focal capsule-associated regions contain export, protein-tyrosine-phosphatase and Wzc kinase annotations within a larger polysaccharide-associated neighborhood. The short PTP label abbreviates the phosphatase source product; the source CDSs are NNLMDO_007300 and OJMJKD_007450. Wzc annotations are NNLMDO_007305 and OJMJKD_007455. These correspond to the generic wzb/wzc marker interpretation used for the HADEG Emulsan category. The figure labels selected source gene qualifiers and marker products, while retaining every CDS arrow and the same physical scale across the two tracks. Shared regulatory/export machinery is used across polysaccharide systems; the two-marker call does not determine a polymer repeat structure or establish a particular emulsifying product in NMZ. No polymer-chemistry measurement is added. Sources: focal HADEG marker tables, Bakta products, and the canonical gbparse neighborhood sidecar. '+src.loci);
 await fitimg(s,'explainer/assets/Capsule-loci.png',64,168,1152,355,'Focal capsule-associated neighborhoods; all CDS shown, selected annotations labeled, equal kb scale');
 text(s,'Wzb-like PTP and Wzc are capsule-associated phosphatase and kinase candidates.',64,549,1152,43,28,C.teal,true);
 text(s,'The HADEG “Emulsan” hits sit in capsule-associated neighborhoods.',64,613,1152,50,26,C.muted);
}
{
 const s=slide('Cellulose-associated loci in both isolates',
  'The cellulose-associated regions are shown at equal physical scale from the focal Bakta annotations. All nine source CDS calls per isolate are preserved, including two bcsE-labeled calls. The plotted genomic ranges are SM 105,072–119,146 and C14 101,469–115,528 bp. Both show the same bcs gene order. In characterized bacterial cellulose systems BcsA supplies the catalytic synthase activity, BcsB is its partner, and additional proteins support assembly, processing and export. The source annotation classes determine these arrow colors; they are not activity or expression measurements. The pga-associated PNAG candidate shown earlier concerns a chemically different polymer. Sources: the canonical gbparse manuscript sidecar and its provenance manifest; Omadjela et al. 2013, https://doi.org/10.1073/pnas.1314063110 ; Römling and Galperin 2015, https://doi.org/10.1016/j.tim.2015.05.005 ; '+src.loci);
 await fitimg(s,'explainer/assets/Cellulose-loci.png',64,163,1152,350,'DNA Features Viewer cellulose-associated bcs loci in SM-NMZ and C14-NMZ, equal kb scale');
 text(s,'BcsA: synthesis · BcsB: partner · BcsC: export-associated',64,546,1152,44,28,C.teal,true);
 text(s,'Scale: kb. Conserved gene order supports shared biosynthetic potential.',64,611,1152,53,25,C.muted);
}

{
 const s=slide('Aromatic metabolism depends on the substrate',
  'Aromatic refers to ring chemistry. A hydrocarbon contains only carbon and hydrogen. Phenylacetate and hydroxyphenylacetate contain oxygen, so these aromatic substrates are not hydrocarbons. The shared hpa locus shown here and the paa locus support organized candidate routes for those particular compounds. SM additionally has hydroxybenzoate/protocatechuate and gentisate-associated candidates, with some downstream assignments still unresolved. These differences suggest experiments with specified substrates. They do not establish a faster rate or petroleum-wide degradation. The HADEG Toluene_degradation hit corresponds to a hydroxybenzoate-hydroxylase candidate in a pcaK neighborhood, rather than a complete toluene pathway. '+src.loci+' Prieto et al. (1996): https://doi.org/10.1128/jb.178.1.111-120.1996. Teufel et al. (2010): https://doi.org/10.1073/pnas.1005399107. Romero-Silva et al. (2013): https://doi.org/10.1371/journal.pone.0056038.');
 text(s,'Both isolates: organized hpa and paa loci',64,145,1140,43,31);
 await img(s,'figures/Figure5_Aromatic-neighborhoods.png',64,206,1152,330,'Panel A: shared hydroxyphenylacetate-associated hpa neighborhoods',{left:0,top:0.061,right:0,bottom:0.702});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,536,1140,26,21,C.muted);
 text(s,'SM adds hydroxybenzoate/pca and gentisate candidates.',64,563,1140,42,29,C.teal,true);
 text(s,'Match conversion assays to the oxygenated aromatic substrate and its route.',64,620,1140,38,25,C.muted);
}

{
 const s=slide('The HADEG Toluene_degradation hit',
  'The SM HADEG category includes one AeCZGII_pobA hit, NNLMDO_011765, with a p-hydroxybenzoate hydroxylase product annotation. The neighboring pcaK gene, NNLMDO_011770, is a transporter and is not itself the HADEG hit. The native local arrangement is bglB, the hydroxylase candidate, pcaK and dsdA. The illustrated reference pathway is the experimentally characterized Pseudomonas mendocina KR1 route, simplified by omitting the p-hydroxybenzaldehyde intermediate between p-cresol and 4-hydroxybenzoate. TmoABCDEF initiates toluene oxidation; other enzymes process p-cresol; PobA acts later on 4-hydroxybenzoate. Thus a PobA homolog can correctly be associated with a downstream step in a toluene pathway, but cannot establish upstream toluene conversion by itself. The NMZ neighborhood does not show those initiation genes. This is a local, annotation-based comparison and not proof of genome-wide absence. The separate pca-associated machinery is partly resolved; do not call a complete route while pcaC remains unresolved. Primary sources: Whited and Gibson 1991, https://doi.org/10.1128/jb.173.9.3010-3016.1991 and https://doi.org/10.1128/jb.173.9.3017-3020.1991 ; Ramos-González et al. 2002, https://doi.org/10.1128/JB.184.24.7062-7067.2002 ; focal HADEG table and '+src.loci);
 text(s,'A characterized reference route · P. mendocina KR1',64,145,1152,40,28,C.teal,true);
 text(s,'toluene → p-cresol → 4-HBA → protocatechuate',64,211,1152,62,34);
 text(s,'Initial activation and processing precede the PobA step.',64,291,1152,45,28);
 await fitimg(s,'explainer/assets/Hydroxybenzoate-neighborhood.png',64,360,1152,208,'Exact SM bglB–4-hydroxybenzoate-hydroxylase–pcaK–dsdA neighborhood for the HADEG hit');
 text(s,'SM NNLMDO_011765 and pcaK point to a downstream aromatic-acid step.',64,573,1152,40,28,C.teal,true);
 text(s,'4-HBA = 4-hydroxybenzoate. *Label abbreviates the source product.',64,628,1152,28,23,C.muted);
}

{
 const s=slide('Aromatic hydrocarbons: no BTEX activation system',
  'This slide addresses a frequent misconception in environmental microbiology and MEOR biotechnology: initiating the degradation of inert, non-functionalized petroleum hydrocarbons requires completely different enzymatic machinery than assimilating pre-oxygenated aromatic nutrients. Upper peripheral monoaromatic activation pathways—such as toluene monooxygenases (tmoABCDEF), toluene dioxygenases (todABC1C2DE), xylene monooxygenases (xylAM), or polycyclic aromatic dioxygenases (nah, ndo, bph)—were not found as complete systems in either SM-NMZ or C14-NMZ (manuscript Section 4). Consequently, the genomes do not support initiation of pristine petroleum BTEX degradation, although no degradation assay has been reported. Likewise, neither genome contains a convincing classical membrane alkane hydroxylase (alkB, CYP153, almA); the annotated alkB is a K03919 DNA oxidative demethylase. The automated HADEG categorization flags the SM pobA hit under "Toluene_degradation" solely due to homology with downstream PobA enzymes in characterized strains like P. mendocina KR1, not because Serratia degrades toluene. Source: manuscript Section 4 and HADEG analysis.');
 text(s,'No complete upper-activation system was found; initiation of pristine petroleum solvents is not supported.',64,116,1152,30,18.5,C.muted);
 table(s,[
  ['Hydrocarbon Class','Target Petroleum Substrates','Required Upper Activation Enzymes','Status in SM-NMZ & C14-NMZ','Biological / MEOR Reality'],
  ['BTEX monoaromatics','Benzene, toluene, ethylbenzene, xylenes','Ring mono/dioxygenases (todABC1C2DE, tmoABCDEF, xylAM)','No complete system in either genome','Genomes do not support BTEX activation (activity untested)'],
  ['Polycyclic aromatics (PAH)','Naphthalene, phenanthrene, biphenyl','Ring-hydroxylating dioxygenases (nah, ndo, bph, nid, phd)','No complete system in either genome','Genomes do not support PAH ring hydroxylation (activity untested)'],
  ['Aliphatic petroleum alkanes','Medium/long-chain n-alkanes (C5–C16+)','Membrane alkane hydroxylases (alkB, CYP153, almA)','No convincing hydroxylase in either genome','Annotated alkB is DNA oxidative demethylase (K03919), not alkane hydroxylase']
 ],{x:64,y:156,w:1152,h:345,widths:[210,240,250,210,242],size:16.5});
 text(s,'Petroleum hydrocarbon initiation needs upper oxygenases that were not found in either isolate.',64,540,1152,34,20,C.teal,true);
 text(s,'The HADEG “Toluene_degradation” marker reflects downstream PobA homology, not toluene oxidation.',64,584,1152,32,18,C.muted);
}

{
 const s=slide('Aromatic scavenging: shared vs. SM-only cleavage',
  'While upper petroleum hydrocarbon activation is absent, both genomes possess complete central ring-cleavage pathways for pre-oxygenated aromatics derived from plant lignin, aromatic amino acids (phenylalanine, tyrosine), and organic waste. Both SM-NMZ and C14-NMZ share two tightly organized, conserved catabolic cassettes: the 12-gene hpa cassette (4-hydroxyphenylacetate homoprotocatechuate meta-cleavage) and the 14-gene paa block (phenylacetyl-CoA epoxidation). In addition, SM-NMZ uniquely carries the pobA–pcaK 4-hydroxybenzoate entry module alongside the pcaIJFBDGH protocatechuate beta-ketoadipate operon, as well as a complete gentisate-processing cassette (maiA–fumaryl hydrolase–gtdA). These downstream pathways are most consistent with use of pre-functionalized aromatic nutrients from plant, amino-acid or fermentation chemistry; growth on these substrates has not been tested. Source: manuscript Section 4 and Figure 6.');
 text(s,'Central ring-cleavage pathways assimilate pre-oxygenated plant, amino acid, and waste aromatics.',64,116,1152,30,18.5,C.muted);
 table(s,[
  ['Central Cleavage Pathway','Target Substrate & Natural Source','Key Enzyme Machinery','Isolate Distribution','Biological & Ecological Role'],
  ['Homoprotocatechuate meta-cleavage','4-Hydroxyphenylacetate (plant lignin, tyrosine catabolism)','Complete 12-gene hpa cassette (hpaR, hpaX, hpaBC, hpaD–I)','CONSERVED in both (NNLMDO_002625–80; OJMJKD_002635–90)','Extradiol meta-cleavage yielding pyruvate and succinate semialdehyde'],
  ['Phenylacetyl-CoA epoxidation','Phenylacetate (phenylalanine catabolism, organic waste)','Complete 14-gene paa block (paaK, paaABCDE, downstream ring processors)','CONSERVED in both (NNLMDO_014780–845; OJMJKD_015005–70)','CoA-linked ring epoxidation, then beta-oxidation-like steps'],
  ['Protocatechuate ortho-cleavage','4-Hydroxybenzoate (plant phenolics, lignin fragments)','pobA–pcaK entry module + pcaIJFBDGH β-ketoadipate operon','SM-NMZ ONLY (NNLMDO_011765–70, 014970–5005)','Intradiol ortho-cleavage pathway expanding aromatic nutrition in SM-NMZ'],
  ['Gentisate pathway','Gentisate / 2,5-dihydroxybenzoate (plant secondary metabolites)','maiA–fumaryl-intermediate hydrolase–gtdA cassette','SM-NMZ ONLY (NNLMDO_016045–65)','Alternative ring-cleavage branch feeding directly into fumarate & pyruvate']
 ],{x:64,y:156,w:1152,h:345,widths:[210,240,250,210,242],size:16.5});
 text(s,'Shared core: hpa and paa cassettes are conserved; SM-NMZ adds pobA/pca and gentisate branches.',64,540,1152,34,20,C.teal,true);
 text(s,'Reading: these loci fit oxygenated plant and amino-acid aromatics; crude-oil activity remains untested.',64,584,1152,32,18,C.muted);
}
{
 const s=slide('LadA and the alkane-oxidation hypothesis',
  'LadA is the name given to a soluble flavin-dependent protein originally reported to initiate long-chain n-alkane oxidation in Geobacillus thermodenitrificans NG80-2. Explain the proposed terminal oxidation as an alkane becoming a primary alcohol, before downstream aldehyde and fatty-acid processing. The label long-chain covers study-specific substrate ranges rather than one universal boundary. It motivated a search because a plausible initial oxidation step would help interpret hydrocarbon-metabolism hypotheses in this project, while downstream fatty-acid machinery alone cannot identify that step. Sequence similarity and placement with canonical LadA are reasonable candidate-discovery evidence, not a measurement of the NMZ substrate. The next slide explains why the original functional assignment now requires caution. Source: Feng et al. 2007, https://doi.org/10.1073/pnas.0609650104 ; Mireles et al. 2025, https://doi.org/10.1371/journal.pone.0332702 ; '+src.lad);
 text(s,'Historically proposed role',64,157,1152,42,29,C.teal,true);
 text(s,'Long-chain alkane → primary alcohol',64,232,1152,66,40);
 text(s,'LadA was reported as a soluble, flavin-dependent candidate for this first step.',64,337,1152,91,32);
 text(s,'Why search here?',64,467,1152,40,29,C.teal,true);
 text(s,'To identify a plausible initiating enzyme alongside downstream carbon metabolism.',64,529,1152,100,31);
}
{
 const s=slide('LadA evidence across the literature',
  'Feng et al. 2007 reported in-vivo and in-vitro evidence for canonical NG80-2 LadA. Boonmak et al. 2014 examined B23 homologs and reported alkane depletion in a heterologous bacterial host; distinguish that evidence from a purified-enzyme assay, and do not present its non-significant 30-degree growth comparison as successful complementation. Mireles et al. 2025 tested canonical LadA, an optimized variant and four homologs and could not detect direct long-chain n-alkane hydroxylation under their in-vitro conditions despite extensive troubleshooting. They leave a possible role in the broader pathway open while questioning the first hydroxylation step. This history explains both why a homolog search was motivated and why the NMZ proteins remain candidates. It does not establish a substrate for every member of the family. Sources: https://doi.org/10.1073/pnas.0609650104 ; https://doi.org/10.1007/s00792-014-0636-y ; https://doi.org/10.1371/journal.pone.0332702 .');
 table(s,[['Study','Evidence reported','Interpretation'],['Feng et al. 2007','Canonical LadA: in-vivo and in-vitro support','Initial long-chain oxidation proposed'],['Boonmak et al. 2014','B23 homologs: alkane depletion in a heterologous host','Cell-based evidence; not purified enzyme'],['Mireles et al. 2025','No direct hydroxylation detected for tested proteins','First-step assignment questioned']],{y:165,h:370,widths:[235,478,439],size:26});
 text(s,'The literature gives us a candidate family and a substrate question to test.',64,580,1152,67,30,C.teal,true);
}

{
 const s=slide('Initial alkane oxidation',
  'This is a simplified aerobic terminal-oxidation route. It does not describe all possible alkane pathways. Initial oxidation converts an alkane to an alcohol and requires appropriate initiation machinery. Downstream alcohol/aldehyde processing and fatty-acid metabolism cannot establish that initial reaction. The annotations named alkB in these genomes are DNA-repair demethylases, a different protein from membrane alkane hydroxylase AlkB. The reported searches did not resolve a convincing initiation system. This negative result is bounded by the methods, reference coverage and thresholds used. If controlled experiments show a chemical transformation, report that observation while keeping the initiating enzyme unresolved. An emulsion or lower pour point alone does not show alkane oxidation. Source: focal annotation products, HADEG tables and manuscript search results. '+src.lad);
 table(s,[['Simplified step','Genomic interpretation'],['Alkane to alcohol','Initiating system unresolved'],['Alcohol to aldehyde','Downstream processing candidates'],['Aldehyde to fatty acid','Downstream processing candidates'],['Fatty acid to cellular metabolism','Beta-oxidation and assimilation context']],{y:162,h:360,widths:[512,640],size:28});
 text(s,'Both genomes encode β-oxidation. Alkane initiation remains unresolved.',64,572,1150,70,29,C.teal,true);
}
{
 const s=slide('The LadA-like comparison',
  'This is an extracted subtree from the actual 34-sequence analysis, with original branch lengths. It includes the focal pair, canonical LadA A4IU28, LadA-alpha BAM76377.1 and the NtaA/DmoA family FMN-dependent monooxygenase from Candidatus Mycolicibacterium alkanivorans (A0ABS9YXJ5), the comparison tip outside the focal LadA-associated group. The subtree preserves the source topology and does not establish the root of the full tree. We display the second component of each source internal label, the UFBoot value. The focal pair has 100% support and the larger grouping containing the canonical references has 99%. The reference pair itself has 68%, showing why a broad supported grouping should not be overread. Support describes grouping stability under the analysis, not the chance that a protein oxidizes an alkane. The source annotations call both candidates ssuD, and their neighborhood has sulfur/methionine-associated context. Earlier work reported activity and heterologous complementation. Mireles et al. did not detect direct long-chain alkane hydroxylation for tested LadA proteins under their conditions. That result does not determine every untested homolog\'s substrate. Our focal candidates remain functionally unresolved. '+src.lad+' '+src.loci);
 await fitimg(s,'explainer/assets/LadA-subtree.png',64,136,1152,360,'Source-derived LadA comparison subtree with branch lengths, UFBoot labels 100, 99 and 68, and comparison sequence');
 text(s,'Node labels show UFBoot support (%).',64,501,1140,26,21,C.muted);
 text(s,'UFBoot support: 100% for the focal pair, 99% for the LadA-associated clade.',64,534,1150,45,28,C.teal,true);
 text(s,'The conserved ssuD and metNPQ context adds a sulfur-related substrate hypothesis.',64,591,1150,67,27);
}
{
 const s=slide('Pan-proteome: core, shared and unique groups',
  'ProteinOrtho clustered 66,241 proteins from the 14 proteomes (SM-NMZ, C14-NMZ, 11 comparative Serratia genomes and the outgroup Prodigiosinella aquatilis PA-LS101) into 10,252 sequence-based groups (standard run; DIAMOND, coverage 70, identity 25, singletons reported). 2,140 groups (20.9%) are represented in all 14 genomes, 4,016 groups (39.2%) contain a protein from only one genome, and the remaining 4,096 groups (40.0%, obtained by subtraction) occur in 2 to 13 genomes. These are group counts, and a group can hold several paralogs from one genome. A universal group is a candidate for conserved basic biology, while a single-genome group may be a truly unique gene, a divergent gene that fell below the coverage and identity cutoffs, or an annotation difference. The LadA-like K20938 group is a useful example of an intermediate category: it contains one protein from each of ten genomes and none from PA-LS101, SR-SY163, SSU-5b or SSU-YD25, and synteny then splits those ten proteins into two distinct locus families. This analysis does not show isolate-specific traits by itself, and a 14-genome panel chosen around a focal pair cannot measure how open the Serratia pan-genome is. The focal differences on earlier slides (pgaDCBA, Region 2, 3, 7 and 10 NRPS and opine loci) come from antiSMASH and neighborhood analyses, and per-isolate group counts are not shown here. Source: LadA-analysis/LadA-proteinortho-logs.txt (standard run: 4,016 single-genome groups, 39.16%) and manuscript Section 5. Lechner et al. (2011): https://doi.org/10.1186/1471-2105-12-124.');
 const seg=(label,x,w,fill)=>{
  const q=s.shapes.add({geometry:'rect',name:label,position:{left:x,top:146,width:w,height:64},fill,line:{fill:'none',width:0}});
  q.text=label;
  q.text.style={typeface:font,fontSize:21,color:C.white,bold:true,wrap:'square',autoFit:'none',verticalAlignment:'middle',insets:12};
 };
 seg('2,140 core',64,240,C.teal);
 seg('4,096 shared by 2-13 genomes',304,460,C.muted);
 seg('4,016 genome-specific',764,452,C.gold);
 table(s,[
  ['Group type','Groups','Share','How to read it'],
  ['Core (all 14 genomes)','2,140','20.9%','Present in every genome, including the outgroup; typically basic cell functions'],
  ['Shared (2-13 genomes)','4,096','40.0%','Accessory; example: the LadA-like K20938 group, found in 10 of 14 genomes'],
  ['Genome-specific (1 genome)','4,016','39.2%','Unique genes, divergent genes below the cutoffs, or annotation differences'],
  ['All groups','10,252','100%','66,241 proteins; standard ProteinOrtho run (no synteny filter)']
 ],{x:64,y:236,w:1152,h:262,widths:[290,110,100,652],size:16.5});
 text(s,'Groups, not genes: 2,140 are universal, while 4,016 occur in a single proteome.',64,534,1152,34,19,C.teal,true);
 text(s,'Sequence clusters show relatedness, not function; this panel cannot measure pan-genome openness.',64,580,1152,32,18,C.muted);
}
{
 const s=slide('Matching assays to genomic candidates',
  'No numerical results for these four endpoints were supplied to the genomics author. This table is an interpretation framework. Tension requires the actual interface and units, usually mN/m. E24 is emulsion-layer height over total liquid-column height after 24 hours, multiplied by 100, under a specified oil and mixing protocol. Pour point is a temperature endpoint under a stated method and thermal history. Conversion needs the exact substrate and controls for recovery, adsorption or redistribution, preferably with products or carbon accounting. A shared swrW locus cannot explain an isolate difference by itself. Regulation, abundance and mixture composition are testable explanations rather than results. A published serrawettin effect in another strain supplies precedent only. Source: manuscript four-theme passages and integration notes. Zhang et al. (2021), another strain: https://doi.org/10.1007/s00449-021-02625-4.');
 table(s,[['Endpoint, if measured','Relevant interpretation','Evidence to pair with it'],['Surface/interfacial tension','Amphiphile contribution','Material, interface, mN/m, control'],['E24 emulsification index','Amphiphile and/or matrix contribution','Oil, 24-h protocol, layer heights'],['Aromatic conversion','Route matching the exact substrate','Substrate, products and recovery controls'],['Pour point','Low-temperature oil-flow performance','Oil, dose, method and temperature']],{h:385,widths:[325,405,422],size:25});
 text(s,'Pair each assay value with the material tested and its control.',64,587,1140,52,29,C.teal,true);
}
{
 const s=slide('Host-interaction genes',
  'VFDB similarity finds reference-associated homologs under a stated search procedure. ShlA and ShlB are associated with hemolysin machinery, Has with heme acquisition, and T6SS with interbacterial competition in characterized systems. Multiple database labels may describe the same genomic locus, so a hit count is not a virulence score. These findings matter if deployment is proposed, but cannot establish pathogenicity or safety of the focal isolates. Shanks et al. also links serratamolide to hemolytic activity in a reference strain. A biosurfactant label is therefore a functional description, with no automatic safety implication. Do not claim NMZ hemolysis without a relevant assay. Source: focal VFDB profiling and manuscript comparative section. Shanks et al. (2012): https://doi.org/10.1371/journal.pone.0036398. Murdoch et al. (2011): https://doi.org/10.1128/JB.05671-11.');
 table(s,[['Reference-associated system','Biological role in characterized systems'],['ShlA–ShlB','Hemolysin machinery'],['Has','Heme acquisition'],['Type VI secretion system','Bacterial competition']],{h:300,widths:[480,672],size:29});
 text(s,'VFDB sequence matches provide comparative context and do not quantify pathogenicity or establish environmental biosafety.',64,548,1152,40,22.5,C.gold,true);
 text(s,'Deployment readiness requires dedicated antimicrobial susceptibility, virulence-expression and regulatory biosafety testing.',64,598,1152,36,20.5,C.muted);
}
{
 const s=slide('The genomics contribution: evidence scoreboard',
  'Lead the collaborative manuscript with the conserved swrW locus paired with the LC-HRMS serratamolide A (= serrawettin W1) and serratamolide C detections, the 14-gene pig cluster paired with red/pink colony pigmentation, and the extracellular-matrix repertoire featuring the SM-NMZ pgaDCBA difference. Connect the shared hpa/paa and SM-specific hydroxybenzoate/pca/gentisate loci to oxygenated-aromatic substrates, and present the LadA-like flavin monooxygenase as a bounded comparative candidate. The fourth column pairs each wet-lab assay slot with the decisive experimental test needed to move from genomic candidate to causal mechanism. Source: revised master and concise manuscripts, TYGS report, LC-HRMS-SM reports, and focal gene-neighborhood sidecars.');
 table(s,[
  ['System / locus','Genomic candidate','Chemistry / phenotype in hand','Assay slot & decisive test'],
  ['Biosurfactant (swrW)','Conserved 1-module NRPS (98.9% id)','LC-HRMS: serratamolide A (W1) & C','Tension, E24, pour point · ΔswrW + isolate LC-HRMS'],
  ['Pigment (pigA–pigN)','Conserved 14-gene cluster (87–100% id)','Red/pink colony pigmentation','Phenotypic confirmation complete (pigment extract)'],
  ['Biofilm / matrix','Shared CPS/EPS2/bcs + SM pgaDCBA','— (polymer chemistry unmeasured)','E24 stability · DspB (PNAG) & cellulase sensitivity'],
  ['Oxygenated aromatics','Shared hpa/paa + SM pobA/pca/gtdA','—','Single-substrate growth (4-HBA, PCA, phenylacetate)'],
  ['Alkane / monooxygenase','Fad β-oxidation + LadA-like (ssuD)','— (initiator unresolved)','Alkane GC-MS · purified enzyme FMNH2 assay']
 ],{y:142,h:415,widths:[235,305,285,327],size:20.5});
 text(s,'Next step: plug in the wet-lab assay tables and prioritize decisive tests for our joint paper.',64,585,1152,55,26,C.teal,true);
}
// Optional technical backups follow the main narrative.
{
 const s=slide('Workflow and tools by purpose',
  'Optional backup. Explain the biological question before each software name. Consensus assembly, polishing, feature prediction and functional interpretation are different operations. A tool can reuse another database\'s evidence. Sources: manuscript Methods and corrected bibliography. Bakta https://doi.org/10.1099/mgen.0.000685; CANT-HYD https://doi.org/10.3389/fmicb.2021.764058; Plassembler https://doi.org/10.1093/bioinformatics/btad409.',true);
 table(s,[['Question','Tools and evidence'],['Which read evidence enters assembly?','NanoPlot, Chopper, Filtlong'],['How are sequences reconstructed?','Autocycler/assemblers, dnaapler, Dorado'],['Where are genes and what are candidates?','Bakta, antiSMASH, DRAM, CANT-HYD, HADEG'],['How are genomes and proteins related?','TYGS, GTDB-Tk, ProteinOrtho/PoFF, IQ-TREE'],['How are local arrangements compared?','clinker and DNA Features Viewer']],{h:425,widths:[515,637],size:26});
}
{
 const s=slide('The TYGS genome phylogram',
  'Optional backup. This is the entire supplied genome-tree view. The original export is preserved in data/TYGS. Red decimals show branch lengths and blue integers show support above 60%. Colored metadata squares encode clustering and other properties. They are not activity measurements. The same species-cluster color covers both user strains and the marcescens/nematodiphila type references, while subspecies-cluster colors distinguish the two focal neighborhoods. The server midpoint-roots the tree. It is not an experimentally determined ancestor tree. '+src.tygs,true);
 await img(s,'figures/Figure_TYGS-genome-phylogram.png',287,123,706,500,'TYGS whole-genome distance phylogram with complete reference and cluster metadata',{left:0.025,top:0.035,right:0.07,bottom:0.215});
 text(s,'Blue labels: pseudo-bootstrap support (%) from 100 replicates.',64,636,1152,28,23,C.muted);
}
{
 const s=slide('Taxonomic comparisons',
  'Optional backup. dDDH uses the recommended d4 formula, separate from d5 tree distances. The focal-pair confidence interval is 71.2–77.0%. SM versus KCTC 42172 is 95.7% (94.2–96.8%). Both queries cross the broad species threshold against both named-species references. The server reports one species cluster and labels both S. marcescens, while GTDB gives C14 a nematodiphila label. GTDB ANI/AF values are SM 98.86%/0.947 to GCF_017299535.1 and C14 98.22%/0.932 to GCF_000738675.1. C14\'s 96.82% match to the marcescens representative is below its 96.86% radius. '+src.tygs+' '+src.genome,true);
 table(s,[['dDDH(d4), %','SM-NMZ','C14-NMZ'],['S. marcescens ATCC 13880','90.7','73.7'],['S. nematodiphila DSM 21420','74.7','85.5'],['Direct focal comparison','74.2 (71.2–77.0)','Same comparison']],{h:275,widths:[560,296,296],size:27});
 text(s,'GTDB ANI screening',64,478,1140,42,30,C.teal,true);
 text(s,'SM   98.86% ANI (AF 0.947)\nC14   98.22% ANI (AF 0.932)',64,539,1120,94,29);
}
{
 const s=slide('Reading the SwrW neighborhood',
  'Optional backup. This is the original full clinker comparison, with the focal pair at the top. Arrows show gene size and direction, while colored ribbons connect protein matches under the alignment settings. Colors group matched homologs. Proximity alone does not prove a shared transcription unit. Reversing a display to align genes is not evidence of a biological inversion. SwrW\'s C domain participates in bond formation/acyl loading in context, A activates a substrate, PCP carries an intermediate, and TE is associated with release chemistry. These labels alone do not identify every reaction or congener. The raw antiSMASH ririwpeptide best-match label requires curated interpretation. '+src.swrw+' antiSMASH documentation: https://docs.antismash.secondarymetabolites.org/modules/clusterblast/.',true);
 await img(s,'Figure6_serrawettin.jpeg',64,135,900,510,'Full original SwrW clinker comparison across the reference panel');
 text(s,'Arrows\nGene length and direction\n\nRibbons\nProtein matches',995,189,215,269,24);
}
{
 const s=slide('Reading HADEG marker categories',
  'Optional backup. This is the original uncurated HADEG plot as requested. Bubble size reports qualifying marker-category hits and cannot be read as flux, complete pathways or active enzyme copies. The Emulsan row contains wzb/wzc capsule-related markers, without identification of a specific polymer product. The SM Toluene_degradation call maps to a hydroxybenzoate-hydroxylase candidate. Both focal genomes have two ssuD-category auxiliary hits. A zero means no qualifying call in this analysis. It is not proof of biological absence. The detailed DRAM and VFDB plots likewise have their own denominators and filters. Source: original HADEG plot and focal result tables, with annotation-context checks in the manuscript.',true);
 await img(s,'Figure5_Bubbles-Subpathways-HADEG.png',64,134,540,510,'Original HADEG bubble plot, unchanged');
 text(s,'Emulsan\nGeneric capsule markers',665,161,540,100,29,C.teal,true);
 text(s,'Toluene_degradation\nHydroxybenzoate-hydroxylase candidate',665,299,540,139,29,C.teal,true);
 text(s,'Bubble counts describe markers.\nThey do not measure pathway activity.',665,498,540,125,28);
}
{
 const s=slide('Chemical assignments and peak areas',
  'Optional backup. The supplied chemistry presentation describes COCONUT-based workflows, with a second workflow adding Waters libraries, blank filtering and mass/fragment criteria. The reported chemistry includes serrawettin W1 (= serratamolide A) and serratamolide C. Both workflows list A and C in samples 1 and 2 in the glycopeptide and DCM columns (report pp. 5–6 and 15–16). Those IDs do not establish isolate identity. The displayed percent areas describe relative detector response under the specified denominator, not molar concentration, purity, yield or between-isolate production. Do not assign the fraction rows to an isolate without the source mapping. Authentic-standard evidence and a formal analytical confidence level should be reported only when documented. A molecular feature can support a chemical assignment without establishing which component caused an observed physical effect. '+src.chem,true);
 table(s,[['Observation','What it can support'],['Exact mass and adduct','A candidate molecular composition'],['Fragmentation and reference match','Additional structural evidence'],['Authentic standard, when documented','A stronger identity comparison'],['Relative peak area','Detector signal under a stated denominator']],{h:355,widths:[510,642],size:28});
 text(s,'Serrawettin W1 (= serratamolide A) and serratamolide C fit the SwrW candidate.',64,565,1140,77,29,C.teal,true);
}
{
 const s=slide('Additional SM aromatic candidates',
  'Optional backup. These source-derived panels show the SM hydroxybenzoate-hydroxylase/pcaK neighborhood and the protocatechuate-associated region. HBH is a product-based abbreviation for the candidate at NNLMDO_011765, which does not have an explicit pobA gene qualifier. This matters because another pobA-labelled annotation can refer to a different hydroxylase. Immediate pcaC remains unresolved, and downstream gentisate annotations need reconciliation before calling a complete functional route. The complete figure also contains the shared hpa/paa loci and the SM gentisate-associated region. Source: the full aromatic figure and its plotted feature table. '+src.loci+' Romero-Silva et al.: https://doi.org/10.1371/journal.pone.0056038.',true);
 await img(s,'figures/Figure5_Aromatic-neighborhoods.png',64,139,1152,370,'Panels C and D: SM hydroxybenzoate hydroxylase/pcaK and protocatechuate-associated regions',{left:0,top:0.528,right:0,bottom:0.217});
 text(s,'Scale in kb within each panel. Panels use different physical scales.',64,512,1140,27,21,C.muted);
 text(s,'Additional candidates broaden the substrate hypotheses.',64,552,1140,43,30,C.teal,true);
 text(s,'Some downstream steps remain unresolved.',64,610,1140,35,26,C.muted);
}
{
 const s=slide('LadA-like genomic neighborhoods',
  'Optional backup. Both focal proteins carry a source ssuD gene qualifier. The orange LadA-like label overlays the unresolved sequence-comparison designation and does not silently replace the annotation. The shared core includes a second ssuD-associated gene, ydhS and metNPQ, which contributes sulfur/methionine-associated genomic context. These are gene arrangements, with equal physical scale across tracks. They are not alignment ribbons or operon assignments. Genomic context can help formulate substrate hypotheses but cannot prove a particular sulfur or alkane reaction. The surrounding flanks differ between isolates. '+src.loci+' '+src.lad,true);
 await img(s,'figures/Figure6_LadA-like-neighborhoods.png',64,137,1152,405,'Focal LadA-like gene maps with equal kb scale and sulfur/methionine context',{left:0,top:0.12,right:0,bottom:0.20});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,545,1140,26,21,C.muted);
 text(s,'Source gene qualifier: ssuD. Candidate substrate remains unresolved.',64,580,1140,65,29,C.teal,true);
}


{
 const s=slide('Conserved metabolic background (DRAM)',
  'Optional backup. DRAM profiled 98 curated metabolic and respiratory traits across the 14-genome panel (13 Serratia genomes plus the Prodigiosinella aquatilis PA-LS101 outgroup). Across all 14 genomes, 90 of 98 traits (91.8%) were invariant; within the 13 Serratia genomes, 95 of 98 traits (96.9%) were invariant, with 98.6% mean pairwise agreement. Both SM-NMZ and C14-NMZ scored 100% for glycolysis, the Entner-Doudoroff pathway, the pentose phosphate pathway, the TCA cycle, Complex I, fumarate reductase, cytochrome bd/o oxidases and the F-type ATPase. Because the full 98-column DRAM heatmaps are dense at slide scale, the table below isolates the only 3 traits that vary across the 13 Serratia genomes. This high core metabolic conservation explains why the main manuscript focuses on accessory biosurfactant, matrix and specialized aromatic loci. Source: manuscript Section 3 and NMZ-DRAM outputs.',true);
 await fitimg(s,'Figure3_DRAM.jpeg',64,132,545,250,'DRAM heatmap Panel A: central carbon metabolism and electron transport chain');
 await fitimg(s,'Figure3_DRAM2.jpeg',635,132,580,250,'DRAM heatmap Panel B: auxiliary CAZy, nitrogen, sulfur and reductase categories');
 table(s,[
  ['DRAM Trait (only 3/98 vary within Serratia)','SM-NMZ','C14-NMZ','Variation Across 13 Serratia Genomes'],
  ['Succinate dehydrogenase (ETC Complex II)','50%','75%','Ranges 50–100% module completeness across panel'],
  ['CAZy GH43 arabinan cleavage call','Absent','Absent','Present only in S. marcescens KS10 & S. nematodiphila DSM 21420'],
  ['Tetrathionate reductase marker (K08357)','Present','Present','Absent only in S. marcescens ATCC 13880 (present in 12/13)']
 ],{y:396,h:198,widths:[350,145,145,512],size:18.5});
 text(s,'95 of 98 DRAM traits (96.9%) are invariant across the 13 Serratia genomes; core metabolism is conserved.',64,606,1152,34,22,C.teal,true);
}

if (audit.filter(a=>!a.backup).length!==MAIN_COUNT) throw new Error('Main slide count mismatch');
for (let i=0;i<audit.length;i++) audit[i].notes=P.slides.items[i].speakerNotes.text;
await fs.writeFile(path.join(build,'slide-content.json'),JSON.stringify(audit,null,2));
await fs.writeFile(path.join(output,'speaker-notes.md'),`# NMZ Serratia explainer: speaker notes\n\n${MAIN_COUNT} main slides followed by ${audit.length - MAIN_COUNT} optional backups. Teaching session; no fixed time limit.\n\n`+audit.map(a=>`## ${a.backup?'B'+(a.number-MAIN_COUNT):a.number}. ${a.title}\n\n${a.notes}\n`).join('\n'));
for(const [i,s] of P.slides.items.entries()){
 const stem=`slide-${String(i+1).padStart(2,'0')}`;
 await fs.writeFile(path.join(build,stem+'.png'),new Uint8Array(await (await P.export({slide:s,format:'png',scale:1.5})).arrayBuffer()));
 await fs.writeFile(path.join(build,stem+'.layout.json'),await (await s.export({format:'layout'})).text());
 console.log('Rendered',stem);
}
await fs.writeFile(path.join(build,'montage.webp'),new Uint8Array(await (await P.export({format:'webp',montage:true,scale:0.3})).arrayBuffer()));
await (await PresentationFile.exportPptx(P)).save(path.join(build,'candidate.pptx'));
const python = process.env.RUNTIME_PYTHON || 'python';
try {
  execFileSync(python, [
    path.join(output, 'inject_alt_text.py'),
    path.join(build, 'candidate.pptx'),
    path.join(build, 'candidate.pptx.inspect.ndjson')
  ], { stdio: 'inherit' });
} catch (e) {
  console.warn('Alt text injection warning:', e.message);
}
await fs.writeFile(path.join(build,'presentation.json'),JSON.stringify(P.toProto()));
console.log('Exported draft PPTX and source snapshot. The PDF preview uses the checked slide renders.');
