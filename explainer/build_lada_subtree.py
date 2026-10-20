"""Scientific tree extract from the source IQ-TREE topology and branch lengths."""
from pathlib import Path
from Bio import Phylo
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

ASSETS=Path(__file__).resolve().parent/'assets'
tree=Phylo.read(ASSETS/'LadA_smartgap.treefile','newick')
names=['SM-NMZ|NNLMDO_015255','C14-NMZ|OJMJKD_015520','BAM76377.1',
       'sp|A4IU28|LADA_GEOTN','tr|A0ABS9YXJ5|A0ABS9YXJ5_9MYCO']
clade=tree.common_ancestor(names)
labels=dict(zip(names,['SM-NMZ  NNLMDO_015255','C14-NMZ  OJMJKD_015520',
                      'LadA-alpha  BAM76377.1','Canonical LadA  A4IU28','Comparison  A0ABS9YXJ5']))
for node in clade.find_clades():
    if node.name and '/' in node.name and not node.is_terminal():
        node.confidence=float(node.name.split('/')[1])
        node.name=None
clade.branch_length=0
fig,ax=plt.subplots(figsize=(12,3.8))
Phylo.draw(Phylo.BaseTree.Tree(root=clade,rooted=False),axes=ax,do_show=False,
    label_func=lambda n:labels.get(n.name,''),show_confidence=False,
    branch_labels=lambda n:str(int(n.confidence)) if n.confidence is not None and not n.is_terminal() else None,
    label_colors={labels[k]:'#136C74' for k in names if k.startswith(('SM','C14'))})
ax.set_ylabel('');ax.set_yticks([])
ax.set_xlabel('Substitutions per site (extracted subtree)',fontsize=11)
ax.set_xlim(-0.03,1.7)
ax.spines[['top','right','left']].set_visible(False)
for label in ax.texts:label.set_fontsize(12)
fig.tight_layout()
fig.savefig(ASSETS/'LadA-subtree.png',dpi=200)
svg=ASSETS/'LadA-subtree.svg'
fig.savefig(svg,metadata={'Date':None})
svg.write_text('\n'.join(line.rstrip() for line in svg.read_text().splitlines())+'\n',encoding='utf-8',newline='\n')
