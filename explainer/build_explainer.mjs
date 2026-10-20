import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Use the installed bundled runtime. No network services or new packages required.
const runtime = process.env.RUNTIME_NODE_MODULES;
if (!runtime) throw new Error('Set RUNTIME_NODE_MODULES to the bundled node_modules directory.');
const { Presentation, PresentationFile } = await import(pathToFileURL(path.join(runtime,'@oai/artifact-tool/dist/artifact_tool.mjs')).href);
const root=path.resolve(import.meta.dirname,'..');
const output=path.resolve(import.meta.dirname);
const build=path.resolve(root,'../tmp/explainer-2026-10-20');
await fs.mkdir(build,{recursive:true});
const P=Presentation.create({slideSize:{width:1280,height:720}});
const C={ink:'#183642',teal:'#136C74',muted:'#526770',line:'#D5DFE1',pale:'#EFF5F4',white:'#FFFFFF',amber:'#A76022'};
const font='Arial';
const audit=[];
function text(s,copy,x,y,w,h,size=28,color=C.ink,bold=false){
 const q=s.shapes.add({geometry:'textbox',name:copy.slice(0,65),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 q.text=copy;
 q.text.style={typeface:font,fontSize:size,color,bold,wrap:'square',autoFit:'none',verticalAlignment:'top',insets:0};
 return q;
}
function slide(title,notes,backup=false){
 const s=P.slides.add(); s.background.fill=C.white;
 text(s,title,64,44,1152,76,44,C.ink,true);
 text(s,backup?`B${P.slides.items.length-12}`:`${P.slides.items.length}`,1120,670,96,26,18,C.muted);
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
async function img(s,relative,x,y,w,h,alt,crop=null){
 const bytes=await fs.readFile(path.resolve(root,relative));
 return s.images.add({blob:new Uint8Array(bytes),contentType:/\.svg$/i.test(relative)?'image/svg+xml':/\.jpe?g$/i.test(relative)?'image/jpeg':'image/png',
  alt,fit:'contain',position:{left:x,top:y,width:w,height:h},...(crop?{crop}:{}),geometry:'rect'});
}
const src={
 tygs:'Source: data/unified-TYGS/SM-C14-TYGS-Report.pdf, pp. 1–2 and 7; strain-dataset.tsv; pairwise-comparisons.tsv. Job 04c9ebd7-bb0c-440e-bcba-4a11ef017a82, results 18 October 2026.',
 genome:'Source: final Bakta v1.12.0/database v6.0 summary, JSON and FASTA for SM-NMZ and C14-NMZ. Genome properties match manuscript Table 1.',
 swrw:'Sources: focal antiSMASH Region 11, original SwrW clinker figure, and manuscript biosynthesis results. Shanks et al. (2012), https://doi.org/10.1371/journal.pone.0036398, provides reference-strain genetic/chemical evidence, not an NMZ perturbation experiment.',
 loci:'Source: figures/neighborhoods/neighborhoods.json and plotted-features.tsv, generated from the final-size Bakta annotations. DNA Features Viewer: https://doi.org/10.1093/bioinformatics/btaa213.',
 chem:'Source: author-supplied LC-HRMS-SM/hasil.pdf and hasil.pptx, especially screening/filter settings and serratamolide tables. Following the author\'s instruction, the presentation covers both focal isolates. No authentic-standard comparison, per-isolate peak-area mapping or endpoint values are added by inference.',
 lad:'Source: LadA-analysis/07_phylogeny/LadA_smartgap.treefile and .iqtree. Internal labels are SH-aLRT/UFBoot pairs, with UFBoot as the second value. Dataset: 34 sequences, 448 retained positions, Q.PFAM+R3, 1,000 UFBoot replicates. Feng et al. (2007): https://doi.org/10.1073/pnas.0609650104. Boonmak et al. (2014): https://doi.org/10.1007/s00792-014-0636-y. Mireles et al. (2025): https://doi.org/10.1371/journal.pone.0332702.'
};

// 12-slide main sequence, including the cover.
{
 const s=slide('NMZ Serratia genomics',
  'About 1 minute. SM-NMZ came from slaughterhouse effluent. C14-NMZ came from the Calotropis gigantea rhizosphere in Baluran National Park, East Java. This talk explains what the genomic analyses add to the collaborative study. The leading findings concern SwrW-associated serratamolides, pigment-associated genes and extracellular-matrix loci. Aromatic metabolism and a putative LadA-like protein add comparative context. Keep any final oil-performance claim tied to the experimental team\'s actual material and results. '+src.genome);
 // A quiet cover with a genuine source genome map, rather than an invented culture image.
 s.shapes.items[0].text='';
 text(s,'NMZ Serratia\ngenomics',64,135,650,170,62,C.ink,true);
 text(s,'An explainer for the research group',68,330,620,45,30,C.teal);
 text(s,'SM-NMZ   Slaughterhouse effluent\nC14-NMZ   Calotropis rhizosphere',68,421,655,98,27);
 text(s,'20 October 2026',68,595,600,32,22,C.muted);
 await img(s,'Figure1_SM-NMZ.png',738,154,475,475,'Actual Bakta chromosome feature map for SM-NMZ');
}
{
 const s=slide('DNA, gene predictions and activity',
  'About 1½ minutes. A read is a recorded DNA fragment. Assembly combines overlapping evidence into reconstructed sequences. Annotation predicts where genes occur and what their products may do. The genome is a parts list. It does not say which parts are active in a particular experiment. A related protein can use a different substrate, and a present gene can remain unexpressed. The experimental sample might contain cells, a supernatant or an extracted fraction, each with different biological content. An activity assay measures the effect of the material actually tested. The project has no expression measurement reported in these genomic analyses. '+src.genome);
 table(s,[['Stage','What it supplies'],['Sequencing','DNA fragments called reads'],['Assembly','Reconstructed chromosome and other replicons'],['Annotation','Predicted genes and possible functions'],['Experiment','An observed effect under stated conditions']],{h:365,widths:[290,862],size:28});
 text(s,'A predicted function is a candidate for explanation.',64,565,1120,55,31,C.teal,true);
}
{
 const s=slide('What each kind of evidence answers',
  'About 1½ minutes. Use swrW as the example. Protein similarity locates a plausible biosynthetic candidate. Gene context can show whether associated machinery is organized coherently. LC-HRMS supplies chemical evidence at its actual identification confidence. A tension measurement would show an interfacial effect for a specified material. A controlled genetic disruption or purified-compound experiment can test a particular contribution. These sources answer different questions. Several annotation programs can reuse the same reference information, so apparent agreement is not automatically independent confirmation. Reference-strain causality should remain separate from what was measured in NMZ. '+src.swrw);
 table(s,[['Evidence','Question it addresses'],['Related gene or protein','Is there a plausible candidate?'],['Several linked genes','Does the proposed machinery fit together?'],['Chemical analysis','Which molecular assignment has support?'],['Activity assay','What effect occurred in this experiment?'],['Controlled perturbation','Does this factor contribute to that effect?']],{h:435,widths:[398,754],size:27});
}
{
 const s=slide('Genome resources and identity',
  'About 2 minutes. A megabase is one million base pairs. The chromosome sizes are rounded here, while the plasmid is 3,581 bp. Bakta CDS counts are 4,566 and 4,626. The final TYGS queries total 4,974,098 and 5,050,553 bp and match Bakta total lengths exactly. SM includes its plasmid. TYGS identifies both as S. marcescens in one species cluster, with different subspecies clusters. GTDB r232 assigns separate species names through ANI screening. C14 has 98.22% ANI to the nematodiphila representative. Its 96.82% match to the marcescens representative falls below that representative\'s 96.86% radius. Use isolate names so this operational taxonomy difference does not obscure the focal comparison. '+src.genome+' '+src.tygs+' GTDB-Tk: https://ecogenomics.github.io/GTDBTk/faq.html. LPSN: https://lpsn.dsmz.de/species/serratia-nematodiphila and https://lpsn.dsmz.de/species/serratia-marcescens, checked 20 October 2026.');
 table(s,[['Feature','SM-NMZ','C14-NMZ'],['Chromosome','4.971 Mb','5.051 Mb'],['Additional replicon','3.581-kb plasmid','None recovered'],['Bakta CDSs','4,566','4,626'],['GTDB r232 label','S. marcescens','S. nematodiphila']],{h:350,widths:[368,392,392],size:27});
 text(s,'Unified TYGS: one species cluster, separate subspecies clusters',64,555,1130,42,28,C.teal,true);
 text(s,'Final TYGS total lengths now match Bakta exactly.',64,609,1120,35,25,C.muted);
}
{
 const s=slide('SwrW and reported serratamolides',
  'About 2 minutes. The image is a crop of the original clinker figure showing only the focal pair. The orange arrows mark swrW. Arrow direction follows gene orientation; ribbons connect protein matches. Their presence does not demonstrate transcription. The focal SwrW proteins share 98.9% amino-acid identity and carry a Ser-selective C–A–PCP–TE architecture. Characterized SwrW uses one module to make a cyclic dimeric depsipeptide, so one module does not imply a one-amino-acid product. The architecture supports family-level biosynthetic potential and does not select an exact congener. The manuscript reports LC-HRMS serrawettin W1 and serratamolide C for both isolates under the author\'s working assumption. W1 is also called serratamolide, so aliases are not independent discoveries. A chemical assignment and a contribution to measured activity remain separate claims. '+src.swrw+' '+src.chem);
 text(s,'Genomic evidence',64,145,550,35,26,C.teal,true);
 text(s,'Both isolates carry a conserved swrW candidate.',64,191,1130,45,31);
 await img(s,'Figure6_serrawettin.jpeg',64,255,1152,200,'Focal SM-NMZ and C14-NMZ rows from the original SwrW clinker comparison',{left:0,top:0,right:0.21,bottom:0.778});
 text(s,'Reported chemical evidence',64,487,780,35,26,C.teal,true);
 text(s,'LC-HRMS: serrawettin W1 and serratamolide C',64,535,1130,45,31);
 text(s,'The pig locus also matches the red/pink culture phenotype.',64,606,1110,37,25,C.muted);
 s.speakerNotes.append(' The conserved 14-gene pig architecture and reported red/pink cultures add a separate pigment-associated finding. They do not establish an emulsification or pour-point mechanism. Source: manuscript pig comparison and Figure7_prodigiosin.jpeg.');
}
{
 const s=slide('Extracellular matrices and surface activity',
  'About 2 minutes. EPS means extracellular polymeric substances, which can include polysaccharides and other material. A capsule remains associated with the cell, while the composition of released material depends on growth and extraction. Both isolates have capsule, EPS2 and cellulose-associated loci. The displayed DNA Features Viewer panel shows the important focal difference: a contiguous pgaDCBA locus in SM, compared with corresponding C14 flanks lacking that intervening locus. C14 still has a separate pgaB homolog elsewhere. The pga system is associated with PNAG, a matrix polysaccharide, but no polymer chemistry or amount is measured here. Large polymers can influence emulsion stability, while small amphiphiles can affect interfaces. Their relative roles depend on which material the assay uses. The HADEG Emulsan category contains generic capsule markers. '+src.loci+' PNAG reference: https://doi.org/10.1128/JB.186.9.2724-2734.2004.');
 text(s,'Both isolates: capsule/EPS and cellulose candidates',64,145,1150,44,30);
 await img(s,'figures/Figure3_EPS-CPS-neighborhoods.png',64,213,1152,335,'Panel D: SM pgaDCBA and the corresponding C14 flanks, equal kb scale',{left:0,top:0.699,right:0,bottom:0.086});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,548,1140,26,21,C.muted);
 text(s,'SM has the contiguous pga locus associated with PNAG.',64,577,1150,40,29,C.teal,true);
 text(s,'Matrix contribution depends on the material actually assayed.',64,627,1140,32,24,C.muted);
}
{
 const s=slide('Aromatic metabolism depends on the substrate',
  'About 2 minutes. Aromatic refers to ring chemistry. A hydrocarbon contains only carbon and hydrogen. Phenylacetate and hydroxyphenylacetate contain oxygen, so these aromatic substrates are not hydrocarbons. The shared hpa locus shown here and the paa locus support organized candidate routes for those particular compounds. SM additionally has hydroxybenzoate/protocatechuate and gentisate-associated candidates, with some downstream assignments still unresolved. These differences suggest experiments with specified substrates. They do not establish a faster rate or petroleum-wide degradation. The HADEG Toluene_degradation hit corresponds to a hydroxybenzoate-hydroxylase candidate in a pcaK neighborhood, rather than a complete toluene pathway. '+src.loci+' Prieto et al. (1996): https://doi.org/10.1128/jb.178.1.111-120.1996. Teufel et al. (2010): https://doi.org/10.1073/pnas.1005399107. Romero-Silva et al. (2013): https://doi.org/10.1371/journal.pone.0056038.');
 text(s,'Both isolates: organized hpa and paa loci',64,145,1140,43,31);
 await img(s,'figures/Figure5_Aromatic-neighborhoods.png',64,206,1152,330,'Panel A: shared hydroxyphenylacetate-associated hpa neighborhoods',{left:0,top:0.061,right:0,bottom:0.702});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,536,1140,26,21,C.muted);
 text(s,'SM adds hydroxybenzoate/pca and gentisate candidates.',64,563,1140,42,29,C.teal,true);
 text(s,'These findings concern specific oxygenated aromatics.',64,620,1140,38,25,C.muted);
}
{
 const s=slide('The first alkane oxidation remains unresolved',
  'About 1½ minutes. This is a simplified aerobic terminal-oxidation route. It does not describe all possible alkane pathways. Initial oxidation converts an alkane to an alcohol and requires appropriate initiation machinery. Downstream alcohol/aldehyde processing and fatty-acid metabolism cannot establish that initial reaction. The annotations named alkB in these genomes are DNA-repair demethylases, a different protein from membrane alkane hydroxylase AlkB. The reported searches did not resolve a convincing initiation system. This negative result is bounded by the methods, reference coverage and thresholds used. If controlled experiments show a chemical transformation, report that observation while keeping the initiating enzyme unresolved. An emulsion or lower pour point alone does not show alkane oxidation. Source: focal annotation products, HADEG tables and manuscript search results. '+src.lad);
 table(s,[['Simplified step','Genomic interpretation'],['Alkane to alcohol','Initiating system unresolved'],['Alcohol to aldehyde','Downstream processing candidates'],['Aldehyde to fatty acid','Downstream processing candidates'],['Fatty acid to cellular metabolism','Beta-oxidation and assimilation context']],{y:162,h:360,widths:[512,640],size:28});
 text(s,'DNA-repair AlkB and alkane hydroxylase AlkB are different proteins.',64,572,1150,70,29,C.teal,true);
}
{
 const s=slide('The LadA-like comparison',
  'About 2 minutes. This is an extracted subtree from the actual 34-sequence analysis, with original branch lengths. It includes the focal pair, canonical LadA A4IU28, LadA-alpha BAM76377.1 and an additional comparison sequence. We display the second component of each source internal label, the UFBoot value. The focal pair has 100% support and the larger grouping containing the canonical references has 99%. The reference pair itself has 68%, showing why a broad supported grouping should not be overread. Support describes grouping stability under the analysis, not the chance that a protein oxidizes an alkane. The source annotations call both candidates ssuD, and their neighborhood has sulfur/methionine-associated context. Earlier work reported activity and heterologous complementation. Mireles et al. did not detect direct long-chain alkane hydroxylation for tested LadA proteins under their conditions. That result does not determine every untested homolog\'s substrate. Our focal candidates remain functionally unresolved. '+src.lad+' '+src.loci);
 await img(s,'explainer/assets/LadA-subtree.png',64,145,1152,355,'Source-derived LadA comparison subtree with branch lengths, UFBoot labels 100, 99 and 68, and comparison sequence');
 text(s,'Node labels show UFBoot support (%).',64,501,1140,26,21,C.muted);
 text(s,'Strong sequence grouping supports a candidate relationship.',64,534,1150,45,30,C.teal,true);
 text(s,'Its substrate remains unresolved. Nearby genes add sulfur/methionine context.',64,591,1150,67,27);
}
{
 const s=slide('Matching assays to genomic candidates',
  'About 2 minutes. No numerical results for these four endpoints were supplied to the genomics author. This table is an interpretation framework. Tension requires the actual interface and units, usually mN/m. E24 is emulsion-layer height over total liquid-column height after 24 hours, multiplied by 100, under a specified oil and mixing protocol. Pour point is a temperature endpoint under a stated method and thermal history. Conversion needs the exact substrate and controls for recovery, adsorption or redistribution, preferably with products or carbon accounting. A shared swrW locus cannot explain an isolate difference by itself. Regulation, abundance and mixture composition are testable explanations rather than results. A published serrawettin effect in another strain supplies precedent only. Source: manuscript four-theme passages and integration notes. Zhang et al. (2021), another strain: https://doi.org/10.1007/s00449-021-02625-4.');
 table(s,[['Endpoint, if measured','Relevant interpretation','Evidence to pair with it'],['Surface/interfacial tension','Amphiphile contribution','Material, interface, mN/m, control'],['E24 emulsification index','Amphiphile and/or matrix contribution','Oil, 24-h protocol, layer heights'],['Aromatic conversion','Route matching the exact substrate','Substrate, products and recovery controls'],['Pour point','Low-temperature oil-flow performance','Oil, dose, method and temperature']],{h:385,widths:[325,405,422],size:25});
 text(s,'Numerical endpoint data remain with the experimental team.',64,587,1140,52,29,C.teal,true);
}
{
 const s=slide('Host-interaction genes and application context',
  'About 1 minute. VFDB similarity finds reference-associated homologs under a stated search procedure. ShlA and ShlB are associated with hemolysin machinery, Has with heme acquisition, and T6SS with interbacterial competition in characterized systems. Multiple database labels may describe the same genomic locus, so a hit count is not a virulence score. These findings matter if deployment is proposed, but cannot establish pathogenicity or safety of the focal isolates. Shanks et al. also links serratamolide to hemolytic activity in a reference strain. A biosurfactant label is therefore a functional description, with no automatic safety implication. Do not claim NMZ hemolysis without a relevant assay. Source: focal VFDB profiling and manuscript comparative section. Shanks et al. (2012): https://doi.org/10.1371/journal.pone.0036398. Murdoch et al. (2011): https://doi.org/10.1128/JB.05671-11.');
 table(s,[['Reference-associated system','Biological role in characterized systems'],['ShlA–ShlB','Hemolysin machinery'],['Has','Heme acquisition'],['Type VI secretion system','Bacterial competition']],{h:300,widths:[480,672],size:29});
 text(s,'Reference matches do not quantify pathogenicity or establish safety.',64,533,1140,94,32,C.teal,true);
}
{
 const s=slide('The genomics contribution to the paper',
  'About 1 minute, then discussion. Lead with the conserved swrW candidate alongside the reported serratamolides, the pig locus with the observed pigmentation, and the extracellular-matrix loci with a meaningful focal difference at pga. Aromatic routes should connect only to matching substrate experiments. Keep the LadA-like candidate as a bounded comparative finding. The new unified TYGS analysis gives exact size parity and makes the operational species-label difference explicit. The most useful next discussion is which experimental endpoint leads the paper and what material generated that endpoint. Match those results to these candidate systems before attributing a mechanism. Source: revised master and both concise manuscripts, unified TYGS report, and the focal gene-neighborhood sidecars.');
 table(s,[['Finding','Contribution'],['SwrW and reported serratamolides','Specific surface-active metabolite lead'],['pig locus and red/pink cultures','Pigment-associated finding'],['Matrix loci and SM pga cluster','Shared systems plus a focal difference'],['Aromatic loci and LadA-like comparison','Substrate-specific context and an unresolved enzyme']],{h:355,widths:[535,617],size:27});
 text(s,'Which measured endpoint and material should lead the paper?',64,575,1150,64,31,C.teal,true);
}

// Optional technical backups follow the main narrative.
{
 const s=slide('Workflow and tools by purpose',
  'Optional backup. Explain the biological question before each software name. Consensus assembly, polishing, feature prediction and functional interpretation are different operations. A tool can reuse another database\'s evidence. Final assembly totals now agree with TYGS. Read/assembly quality, accessions and raw sequence equivalence documentation remain separate from that size check. Sources: manuscript Methods and corrected bibliography. Bakta https://doi.org/10.1099/mgen.0.000685; CANT-HYD https://doi.org/10.3389/fmicb.2021.764058; Plassembler https://doi.org/10.1093/bioinformatics/btad409.',true);
 table(s,[['Question','Tools and evidence'],['Which read evidence enters assembly?','NanoPlot, Chopper, Filtlong'],['How are sequences reconstructed?','Autocycler/assemblers, dnaapler, Dorado'],['Where are genes and what are candidates?','Bakta, antiSMASH, DRAM, CANT-HYD, HADEG'],['How are genomes and proteins related?','TYGS, GTDB-Tk, ProteinOrtho/PoFF, IQ-TREE'],['How are local arrangements compared?','clinker and DNA Features Viewer']],{h:425,widths:[515,637],size:26});
}
{
 const s=slide('The unified TYGS genome phylogram',
  'Optional backup. This is the entire supplied genome-tree view. The original export is preserved in data/unified-TYGS. Red decimals show branch lengths and blue integers show support above 60%. Colored metadata squares encode clustering and other properties. They are not activity measurements. The same species-cluster color covers both user strains and the marcescens/nematodiphila type references, while subspecies-cluster colors distinguish the two focal neighborhoods. The server midpoint-roots the tree. It is not an experimentally determined ancestor tree. '+src.tygs,true);
 await img(s,'figures/Figure_TYGS-unified-genome-phylogram.png',66,126,655,532,'Complete TYGS tree and metadata, with surrounding white margins cropped',{left:0.04,top:0.04,right:0.09,bottom:0.21});
 text(s,'15 genomes\n13 type-strain references\n2 focal isolates',760,170,456,150,29);
 text(s,'One species cluster\nTwo focal subspecies clusters',760,368,456,105,30,C.teal,true);
 text(s,'GBDP d5 distances\n100 pseudo-bootstrap replicates',760,530,456,90,25,C.muted);
}
{
 const s=slide('Taxonomy comparisons and length parity',
  'Optional backup. dDDH uses the recommended d4 formula, separate from d5 tree distances. The focal-pair confidence interval is 71.2–77.0%. SM versus KCTC 42172 is 95.7% (94.2–96.8%). Both queries cross the broad species threshold against both named-species references. The server reports one species cluster and labels both S. marcescens, while GTDB gives C14 a nematodiphila label. GTDB ANI/AF values are SM 98.86%/0.947 to GCF_017299535.1 and C14 98.22%/0.932 to GCF_000738675.1. C14\'s 96.82% match to the marcescens representative is below its 96.86% radius. TYGS predicts 4,569/4,628 proteins and Bakta reports 4,566/4,626 CDSs. Different prediction schemes need not return equal counts. Matching sequence lengths alone does not independently establish sequence identity. '+src.tygs+' '+src.genome,true);
 table(s,[['dDDH(d4), %','SM-NMZ','C14-NMZ'],['S. marcescens ATCC 13880','90.7','73.7'],['S. nematodiphila DSM 21420','74.7','85.5'],['Direct focal comparison','74.2 (71.2–77.0)','Same comparison']],{h:275,widths:[560,296,296],size:27});
 text(s,'TYGS total = Bakta total',64,478,1140,42,30,C.teal,true);
 text(s,'SM   4,970,517 + 3,581 = 4,974,098 bp\nC14   5,050,553 bp',64,539,1120,94,29);
}
{
 const s=slide('Reading the SwrW neighborhood',
  'Optional backup. This is the original full clinker comparison, with the focal pair at the top. Arrows show gene size and direction, while colored ribbons connect protein matches under the alignment settings. Colors group matched homologs. Proximity alone does not prove a shared transcription unit. Reversing a display to align genes is not evidence of a biological inversion. SwrW\'s C domain participates in bond formation/acyl loading in context, A activates a substrate, PCP carries an intermediate, and TE is associated with release chemistry. These labels alone do not identify every reaction or congener. The raw antiSMASH ririwpeptide best-match label requires curated interpretation. '+src.swrw+' antiSMASH documentation: https://docs.antismash.secondarymetabolites.org/modules/clusterblast/.',true);
 await img(s,'Figure6_serrawettin.jpeg',64,135,900,510,'Full original SwrW clinker comparison across the reference panel');
 text(s,'Arrows\nGene length and direction\n\nRibbons\nProtein matches',995,189,215,269,24);
}
{
 const s=slide('Reading HADEG marker categories',
  'Optional backup. This is the original uncurated HADEG plot as requested. Bubble size reports qualifying marker-category hits and cannot be read as flux, complete pathways or active enzyme copies. The Emulsan row contains wzb/wzc capsule-related markers, without identification of the characterized Acinetobacter polymer. The SM Toluene_degradation call maps to a hydroxybenzoate-hydroxylase candidate. Both focal genomes have two ssuD-category auxiliary hits. A zero means no qualifying call in this analysis. It is not proof of biological absence. The detailed DRAM and VFDB plots likewise have their own denominators and filters. Source: original HADEG plot and focal result tables, with annotation-context checks in the manuscript.',true);
 await img(s,'Figure5_Bubbles-Subpathways-HADEG.png',64,134,540,510,'Original HADEG bubble plot, unchanged');
 text(s,'Emulsan\nGeneric capsule markers',665,161,540,100,29,C.teal,true);
 text(s,'Toluene_degradation\nHydroxybenzoate-hydroxylase candidate',665,299,540,139,29,C.teal,true);
 text(s,'Bubble counts describe markers.\nThey do not measure pathway activity.',665,498,540,125,28);
}
{
 const s=slide('Chemical assignments and peak areas',
  'Optional backup. The supplied chemistry presentation describes COCONUT-based workflows, with a second workflow adding Waters libraries, blank filtering and mass/fragment criteria. It reports serratamolide C among candidate assignments. The author has instructed that the deck/PDF covers both focal isolates. The displayed percent areas describe relative detector response under the specified denominator, not molar concentration, purity, yield or between-isolate production. Do not assign the fraction rows to an isolate without the source mapping. Authentic-standard evidence and a formal analytical confidence level should be reported only when documented. A molecular feature can support a chemical assignment without establishing which component caused an observed physical effect. '+src.chem,true);
 table(s,[['Observation','What it can support'],['Exact mass and adduct','A candidate molecular composition'],['Fragmentation and reference match','Additional structural evidence'],['Authentic standard, when documented','A stronger identity comparison'],['Relative peak area','Detector signal under a stated denominator']],{h:355,widths:[510,642],size:28});
 text(s,'The source reports chemical assignments. Genomics adds biosynthetic context.',64,565,1140,77,29,C.teal,true);
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
 const s=slide('The focal LadA-like genomic neighborhoods',
  'Optional backup. Both focal proteins carry a source ssuD gene qualifier. The orange LadA-like label overlays the unresolved sequence-comparison designation and does not silently replace the annotation. The shared core includes a second ssuD-associated gene, ydhS and metNPQ, which contributes sulfur/methionine-associated genomic context. These are gene arrangements, with equal physical scale across tracks. They are not alignment ribbons or operon assignments. Genomic context can help formulate substrate hypotheses but cannot prove a particular sulfur or alkane reaction. The surrounding flanks differ between isolates. '+src.loci+' '+src.lad,true);
 await img(s,'figures/Figure6_LadA-like-neighborhoods.png',64,137,1152,405,'Focal LadA-like gene maps with equal kb scale and sulfur/methionine context',{left:0,top:0.12,right:0,bottom:0.20});
 text(s,'Gene arrows. Scale in kb from the first displayed CDS.',64,545,1140,26,21,C.muted);
 text(s,'Source gene qualifier: ssuD. Candidate substrate remains unresolved.',64,580,1140,65,29,C.teal,true);
}

for (let i=0;i<audit.length;i++) audit[i].notes=P.slides.items[i].speakerNotes.text;
await fs.writeFile(path.join(build,'slide-content.json'),JSON.stringify(audit,null,2));
await fs.writeFile(path.join(output,'speaker-notes.md'),'# NMZ Serratia explainer: speaker notes\n\n12 main slides followed by 8 optional backups. Main talk: approximately 18–20 minutes.\n\n'+audit.map(a=>`## ${a.backup?'B'+(a.number-12):a.number}. ${a.title}\n\n${a.notes}\n`).join('\n'));
for(const [i,s] of P.slides.items.entries()){
 const stem=`slide-${String(i+1).padStart(2,'0')}`;
 await fs.writeFile(path.join(build,stem+'.png'),new Uint8Array(await (await P.export({slide:s,format:'png',scale:1.5})).arrayBuffer()));
 await fs.writeFile(path.join(build,stem+'.layout.json'),await (await s.export({format:'layout'})).text());
 console.log('Rendered',stem);
}
await fs.writeFile(path.join(build,'montage.webp'),new Uint8Array(await (await P.export({format:'webp',montage:true,scale:0.3})).arrayBuffer()));
await (await PresentationFile.exportPptx(P)).save(path.join(build,'candidate.pptx'));
await fs.writeFile(path.join(build,'presentation.json'),JSON.stringify(P.toProto()));
console.log('Exported draft PPTX and source snapshot. The PDF preview uses the checked slide renders.');
