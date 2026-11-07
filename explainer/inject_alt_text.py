"""Inject alt text (descr attribute on p:cNvPr) into PPTX slide XML."""
import json
from pathlib import Path
import sys
import zipfile
import xml.etree.ElementTree as ET

def inject_alt_text(pptx_path: Path, inspect_path: Path):
    if not pptx_path.is_file() or not inspect_path.is_file():
        raise FileNotFoundError(f"Missing {pptx_path} or {inspect_path}")
    
    # Read image metadata from inspect.ndjson
    images_by_slide = {}
    with open(inspect_path, 'r', encoding='utf-8') as f:
        for line in f:
            if not line.strip():
                continue
            rec = json.loads(line)
            if rec.get('kind') == 'image':
                s_idx = rec['slideIndex']
                images_by_slide.setdefault(s_idx, []).append(rec)
    
    total_injected = 0
    # Process the PPTX zip
    temp_path = pptx_path.with_suffix('.tmp.pptx')
    with zipfile.ZipFile(pptx_path, 'r') as in_z, zipfile.ZipFile(temp_path, 'w', compression=zipfile.ZIP_DEFLATED) as out_z:
        for item in in_z.infolist():
            content = in_z.read(item.filename)
            if item.filename.startswith('ppt/slides/slide') and item.filename.endswith('.xml'):
                stem = item.filename[len('ppt/slides/slide'):-len('.xml')]
                if stem.isdigit():
                    s_num = int(stem) # 1-based slide number
                    s_idx = s_num - 1 # 0-based
                    slide_imgs = images_by_slide.get(s_idx, [])
                    if slide_imgs:
                        ET.register_namespace('p', 'http://schemas.openxmlformats.org/presentationml/2006/main')
                        ET.register_namespace('a', 'http://schemas.openxmlformats.org/drawingml/2006/main')
                        ET.register_namespace('r', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
                        tree = ET.fromstring(content)
                        pics = tree.findall('.//{http://schemas.openxmlformats.org/presentationml/2006/main}pic')
                        for i, pic in enumerate(pics):
                            if i < len(slide_imgs):
                                alt = slide_imgs[i].get('alt', '')
                                if alt:
                                    cnv = pic.find('.//{http://schemas.openxmlformats.org/presentationml/2006/main}cNvPr')
                                    if cnv is not None:
                                        cnv.set('descr', alt)
                                        if not cnv.get('name'):
                                            cnv.set('name', alt[:60])
                                        total_injected += 1
                        content = ET.tostring(tree, encoding='utf-8', xml_declaration=True)
            out_z.writestr(item, content)
            
    temp_path.replace(pptx_path)
    print(f"Successfully injected alt text into {total_injected} images across {len(images_by_slide)} slides in {pptx_path.name}")

if __name__ == '__main__':
    p_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('tmp/explainer-revision-2026-11-05/candidate.pptx')
    i_path = Path(sys.argv[2]) if len(sys.argv) > 2 else p_path.with_suffix('.pptx.inspect.ndjson')
    inject_alt_text(p_path, i_path)

