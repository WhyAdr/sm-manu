"""Render teaching panels from the manuscript's canonical gbparse sidecar.

No new annotation, sequence alignment or operon prediction is performed.
Every gene arrow is rendered with DNA Features Viewer.
"""
import os
import json
import hashlib
from pathlib import Path
os.environ.setdefault('MPLCONFIGDIR', str(Path(__file__).resolve().parents[2] / 'tmp/mplcache'))
os.environ.setdefault('MPLBACKEND', 'Agg')
import matplotlib.pyplot as plt
from dna_features_viewer import GraphicFeature, GraphicRecord

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'explainer/assets'
SOURCE = ROOT / 'figures/neighborhoods/neighborhoods.json'
DATA = json.loads(SOURCE.read_text(encoding='utf-8'))
COLORS = {'biosynthesis':'#258A96','transport':'#9471B3','regulation':'#D4AD50','other':'#C7CED5','candidate':'#E88B33'}
plt.rcParams.update({'font.family':'Arial','svg.fonttype':'none','svg.hashsalt':'nmz-teaching-2026-10-21'})
manifest = {'source':str(SOURCE.relative_to(ROOT)).replace('\\','/'), 'source_sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(), 'panels':[]}

for source_stem, letter, stem in [
    ('Figure3_EPS-CPS-neighborhoods','A','Capsule-loci'),
    ('Figure3_EPS-CPS-neighborhoods','C','Cellulose-loci'),
    ('Figure5_Aromatic-neighborhoods','C','Hydroxybenzoate-neighborhood'),
]:
    original = next(f for f in DATA['figures'] if f['stem']==source_stem)
    panel = next(p for p in original['panels'] if p['letter']==letter)
    tracks = panel['tracks']
    fig, axes = plt.subplots(len(tracks),1,figsize=(11, 1.35*len(tracks)+.55),squeeze=False)
    fig.subplots_adjust(left=.025,right=.985,top=.81,bottom=.15,hspace=1.15)
    max_span = max(t['span_bp'] for t in tracks)
    feature_ids=[]
    for ax, track in zip(axes[:,0],tracks):
        features=[]
        for f in track['features']:
            label=f['display_label']
            if stem=='Capsule-loci' and not (f['gene'] or label in {'PTP','Wzc','export'}): label=None
            if f['locus_tag']=='NNLMDO_011765': label='4-HBA hydroxylase*'
            features.append(GraphicFeature(start=f['local_start']-1,end=f['local_end'],strand={'+':1,'-':-1}.get(f['strand'],0),
                label=label,color=COLORS[f['category']],linecolor='#27323C',linewidth=.7,
                thickness=14,box_linewidth=0,box_color='white',fontdict={'fontsize':13,'fontstyle':'italic' if f['gene'] else 'normal'}))
            feature_ids.append(f['locus_tag'])
        record=GraphicRecord(sequence_length=track['span_bp'],features=features,labels_spacing=5)
        record.plot(ax=ax,with_ruler=True,annotate_inline=True,strand_in_label_threshold=0,max_label_length=30,
                    x_lim=(-max_span*.02,max_span*1.02))
        ax.set_title(f"{track['isolate']}   |   {track['genomic_start']:,}–{track['genomic_end']:,} bp",loc='left',fontsize=12,pad=22,color='#384653')
        tick_step=2000 if max_span>5000 else 1000
        ticks=list(range(0,track['span_bp']+1,tick_step))
        ax.set_xticks(ticks);ax.set_xticklabels([f'{t/1000:g}' for t in ticks],fontsize=11)
        ax.tick_params(axis='x',length=3,pad=2,colors='#52606D')
    for suffix in ('png','svg'):
        dest=OUT/f'{stem}.{suffix}'
        fig.savefig(dest,dpi=250,bbox_inches='tight',pad_inches=.12,metadata={'Date':None} if suffix=='svg' else {'Software':'DNA Features Viewer'})
        if suffix=='svg':
            content=dest.read_text(encoding='utf-8')
            dest.write_text('\n'.join(l.rstrip() for l in content.splitlines())+'\n',encoding='utf-8',newline='\n')
    plt.close(fig)
    manifest['panels'].append({'stem':stem,'original_figure':source_stem,'panel':letter,'locus_tags':feature_ids,
        'display_change':('Only source gene qualifiers and export/PTP/Wzc product labels displayed; all CDS retained' if stem=='Capsule-loci' else 'NNLMDO_011765 label abbreviates source product, not a renamed gene' if letter=='C' and 'Aromatic' in source_stem else 'source labels retained')})
    print(f'Rendered {stem}: {len(feature_ids)} CDS')
(OUT/'teaching-neighborhood-provenance.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8',newline='\n')
