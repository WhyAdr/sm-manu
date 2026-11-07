"""Render the checked slide PNGs as a PDF preview and typeset the glossary."""
from pathlib import Path
import re
import sys
from xml.sax.saxutils import escape
from reportlab.pdfgen.canvas import Canvas
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, LongTable, TableStyle

OUT=Path(__file__).resolve().parent
BUILD=OUT.parent.parent/'tmp/explainer-revision-2026-11-05'
pdfmetrics.registerFont(TTFont('Arial', 'C:/Windows/Fonts/arial.ttf'))
pdfmetrics.registerFont(TTFont('ArialBold', 'C:/Windows/Fonts/arialbd.ttf'))
pdfmetrics.registerFont(TTFont('ArialItalic', 'C:/Windows/Fonts/ariali.ttf'))
pdfmetrics.registerFontFamily('Arial', normal='Arial',bold='ArialBold',italic='ArialItalic',boldItalic='ArialBold')

slides = [BUILD / f'slide-{i:02}.png' for i in range(1, 45)]
if not all(slide.is_file() for slide in slides):
    raise FileNotFoundError('Render all 44 slides before building the PDF preview.')
preview=Canvas(str(BUILD/'NMZ-Serratia-genomics-explainer-2026-10-20.pdf'),pagesize=(960,540))
preview.setTitle('NMZ Serratia genomics explainer')
preview.setAuthor('NMZ Serratia research project')
for slide in slides:
    preview.drawImage(str(slide),0,0,width=960,height=540)
    preview.showPage()
preview.save()
if '--preview-only' in sys.argv:
    print('Created updated slide PDF preview.')
    raise SystemExit(0)

def clean(text):
    text=text.replace('–','-').replace('—','-').replace('\u2011','-').replace('\u2013','-')
    text=escape(text)
    text=text.replace('⁺', '<super>+</super>')
    return re.sub(r'\*([^*]+)\*',r'<i>\1</i>',text)

body=ParagraphStyle('body',fontName='Arial',fontSize=10,leading=12.5,textColor=colors.HexColor('#183642'))
term=ParagraphStyle('term',parent=body,fontName='ArialBold')
heading=ParagraphStyle('heading',parent=term,fontSize=17,leading=21,spaceBefore=12,spaceAfter=9)
title=ParagraphStyle('title',parent=term,fontSize=23,leading=27,spaceAfter=12)
header=ParagraphStyle('header',parent=term,textColor=colors.white)
parts=[]
text=(OUT/'glossary.md').read_text(encoding='utf-8')
parts.extend([Paragraph('NMZ Serratia genomics',title),Paragraph('Glossary for the research group. Companion to the revised November 2026 explainer.',body),Spacer(1,12)])
section_rows=[]
def flush():
    global section_rows
    if not section_rows: return
    data=[[Paragraph('Term',header),Paragraph('Meaning and relevance',header)]]
    data += [[Paragraph(clean(a),term),Paragraph(clean(b),body)] for a,b in section_rows]
    tab=LongTable(data,colWidths=[153,358],repeatRows=1,hAlign='LEFT')
    tab.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#136C74')),
        ('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),
        ('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),
        ('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#D5DFE1')),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#EFF5F4')])]))
    parts.append(tab)
    section_rows=[]
parts.append(Paragraph('Core terms',heading))
for line in text.splitlines():
    if line.startswith('## Technical glossary'):
        flush()
        parts.append(Paragraph('Technical terms - optional reading',heading))
    if line.startswith('|') and not line.startswith('|---'):
        cells=[c.strip() for c in line.strip('|').split('|')]
        if len(cells)==2 and cells[0]!='Term': section_rows.append(cells)
flush()
def footer(canvas,doc):
    canvas.saveState();canvas.setFont('Arial',9);canvas.setFillColor(colors.HexColor('#526770'))
    canvas.drawString(42,24,'NMZ Serratia research group')
    canvas.drawRightString(A4[0]-42,24,str(doc.page));canvas.restoreState()
doc=SimpleDocTemplate(str(BUILD/'NMZ-Serratia-genomics-glossary-2026-10-20.pdf'),pagesize=A4,
    rightMargin=42,leftMargin=42,topMargin=36,bottomMargin=43,
    title='NMZ Serratia genomics glossary',author='NMZ Serratia research project')
doc.build(parts,onFirstPage=footer,onLaterPages=footer)
print('Created slide PDF preview and glossary PDF.')
