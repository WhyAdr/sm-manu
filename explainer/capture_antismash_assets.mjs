import { chromium } from 'file:///C:/Users/LIHTR-UA/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core/index.mjs';
import path from 'path';
import fs from 'fs';

const smHtml = 'file:///d:/W/serratia-research/antismash-serratia/antismash_out/SM-NMZ-antismash/index.html';
const c14Html = 'file:///d:/W/serratia-research/antismash-serratia/antismash_out/C14-NMZ-antismash/index.html';
const outDir = 'd:/W/serratia-research/manuscript/explainer/assets';
fs.mkdirSync(outDir, { recursive: true });

async function clearBadges(page) {
  await page.evaluate(() => {
    document.querySelectorAll('.custom-callout-badge').forEach(el => el.remove());
    document.querySelectorAll('.footer, #footer').forEach(el => { el.style.display = 'none'; });
  });
}

async function clickTab(page, regionSelector, tabName) {
  await page.evaluate(({ regionSelector, tabName }) => {
    const pageEl = document.querySelector(regionSelector);
    if (!pageEl) return;
    const candidates = Array.from(pageEl.querySelectorAll('.sidepanel-link, .details-tab, span, a, div'));
    const tab = candidates.find(el => el.children.length === 0 && el.textContent.trim() === tabName);
    if (tab) tab.click();
  }, { regionSelector, tabName });
}

async function enableModuleDomains(page, regionSelector) {
  await page.evaluate((regionSelector) => {
    const pageEl = document.querySelector(regionSelector);
    if (!pageEl) return;
    const switches = pageEl.querySelectorAll('.domains-show-modules, input[type="checkbox"]');
    switches.forEach(s => {
      if (!s.checked && s.parentElement && s.parentElement.parentElement && s.parentElement.parentElement.textContent.includes('Show module domains')) {
        s.click();
      }
    });
  }, regionSelector);
}

async function setLegendVisible(page, regionSelector, visible) {
  await page.evaluate(({ regionSelector, visible }) => {
    const pageEl = document.querySelector(regionSelector);
    if (!pageEl) return;
    const leg = pageEl.querySelector('.legend');
    if (leg) leg.style.display = visible ? '' : 'none';
  }, { regionSelector, visible });
}

async function getHeaderTop(page, regionSelector, headerText) {
  return await page.evaluate(({ regionSelector, headerText }) => {
    const pageEl = document.querySelector(regionSelector);
    if (!pageEl) return 380;
    const els = Array.from(pageEl.querySelectorAll('div, h3, h4, span'));
    const h = els.find(el => el.children.length <= 2 && el.textContent.trim().startsWith(headerText));
    if (h) {
      const r = h.getBoundingClientRect();
      return Math.round(r.top);
    }
    return 380;
  }, { regionSelector, headerText });
}

async function addBadge(page, { id, text, html, left, top, bg = 'rgba(30, 41, 59, 0.94)', border = '#475569', fontSize = '12px', maxWidth = '780px' }) {
  await page.evaluate(({ id, text, html, left, top, bg, border, fontSize, maxWidth }) => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.id = id;
    div.className = 'custom-callout-badge';
    if (html) div.innerHTML = html;
    else div.textContent = text;
    Object.assign(div.style, {
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      background: bg,
      color: '#ffffff',
      padding: '3px 9px',
      borderRadius: '5px',
      fontFamily: 'Segoe UI, Arial, sans-serif',
      fontSize,
      fontWeight: '600',
      letterSpacing: '0.1px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.22)',
      border: `1px solid ${border}`,
      maxWidth,
      zIndex: '99999',
      pointerEvents: 'none',
      lineHeight: '1.3'
    });
    document.body.appendChild(div);
  }, { id, text, html, left, top, bg, border, fontSize, maxWidth });
}

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--allow-file-access-from-files']
  });

  const context = await browser.newContext({
    viewport: { width: 1440, height: 1280 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  // =========================================================================
  // PART 1: SM-NMZ Regions
  // =========================================================================
  await page.goto(smHtml, { waitUntil: 'networkidle' });

  // 1. SM-NMZ Region 11 (swrW) — Cropped Domains + Full Window + ClusterBlast + MIBiG
  await page.click('a[href="#r1c11"]');
  await page.waitForTimeout(400);
  await clearBadges(page);

  await page.evaluate(() => {
    const pageEl = document.querySelector('#r1c11');
    const orfs = pageEl.querySelectorAll('polygon.orf');
    for (const p of orfs) {
      if (p.onmouseover) p.onmouseover();
      const details = document.body.innerText;
      if (details.includes('NNLMDO_021205')) {
        p.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        break;
      }
    }
  });
  await clickTab(page, '#r1c11', 'NRPS/PKS domains');
  await clickTab(page, '#r1c11', 'NRPS/PKS substrates');
  await enableModuleDomains(page, '#r1c11');
  await page.waitForTimeout(400);

  // Get exact coordinates of C, A, TE, KR, ER, AmT in #r1c11
  const r11Boxes = await page.evaluate(() => {
    const pageEl = document.querySelector('#r1c11');
    const texts = Array.from(pageEl.querySelectorAll('text'));
    const findRect = (label) => {
      const t = texts.find(el => el.textContent.trim() === label);
      if (!t) return null;
      const box = (t.previousElementSibling || t).getBoundingClientRect();
      return { left: box.left, right: box.right, top: box.top, bottom: box.bottom, height: box.height };
    };
    return {
      A: findRect('A'),
      TE: findRect('TE'),
      KR: findRect('KR'),
      ER: findRect('ER'),
      AmT: findRect('AmT')
    };
  });

  const r11HeaderTop = await getHeaderTop(page, '#r1c11', 'Detailed domain annotation');

  if (r11Boxes.A && r11Boxes.TE) {
    const pcpX = (r11Boxes.A.right + r11Boxes.TE.left) / 2;
    await addBadge(page, {
      id: 'pcp-badge',
      text: 'PCP (976–1042 AA)',
      left: Math.round(pcpX - 58),
      top: Math.round(r11Boxes.A.bottom + 4),
      fontSize: '11px'
    });
  }

  await addBadge(page, {
    id: 'swrw-core-note',
    text: 'Core swrW NRPS (NNLMDO_021205, 3,936 nt): C_Starter – A(Ser) – PCP – TE',
    left: 235,
    top: r11HeaderTop + 1,
    bg: 'rgba(127, 29, 29, 0.96)',
    border: '#fca5a5',
    fontSize: '11px'
  });

  if (r11Boxes.KR) {
    await addBadge(page, {
      id: 'fabg-note',
      text: '← Flanking fabG (3-oxoacyl-ACP reductase, SDR fold → weak KR hit, E = 7.1e-10)',
      left: Math.round(r11Boxes.KR.right + 55),
      top: Math.round(r11Boxes.KR.top + 1),
      bg: 'rgba(30, 41, 59, 0.92)',
      fontSize: '11px'
    });
  }
  if (r11Boxes.ER) {
    await addBadge(page, {
      id: 'adhp-note',
      text: '← Flanking adhP / yahK (Zn alcohol dehydrogenase → weak ER hit, E = 1.5e-11)',
      left: Math.round(r11Boxes.ER.right + 65),
      top: Math.round(r11Boxes.ER.top + 1),
      bg: 'rgba(30, 41, 59, 0.92)',
      fontSize: '11px'
    });
  }
  if (r11Boxes.AmT) {
    await addBadge(page, {
      id: 'tyrb-note',
      text: '← Boundary tyrB (housekeeping aromatic aminotransferase → AmT hit)',
      left: Math.round(r11Boxes.AmT.right + 25),
      top: Math.round(r11Boxes.AmT.top + 1),
      bg: 'rgba(30, 41, 59, 0.92)',
      fontSize: '11px'
    });
  }

  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c11-domains-crop.png'),
    clip: { x: 0, y: r11HeaderTop - 42, width: 1080, height: 280 }
  });

  // Now remove the 4 domain-crop notes, keep the PCP badge, open the Condensation_Starter popup, and capture the Full Window view!
  await page.evaluate(() => {
    ['swrw-core-note', 'fabg-note', 'adhp-note', 'tyrb-note'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    const pageEl = document.querySelector('#r1c11');
    const texts = Array.from(pageEl.querySelectorAll('text'));
    const cText = texts.find(t => t.textContent.trim() === 'C');
    if (cText && cText.previousElementSibling) {
      cText.previousElementSibling.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  });
  await page.waitForTimeout(300);

  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c11-full.png'),
    clip: { x: 0, y: 0, width: 1440, height: 920 }
  });
  await clearBadges(page);

  // Region 11 ClusterBlast crop
  await clickTab(page, '#r1c11', 'ClusterBlast');
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const pageEl = document.querySelector('#r1c11');
    const polys = Array.from(pageEl.querySelectorAll('.clusterblast-orf, polygon'));
    for (const p of polys) {
      p.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
      const tip = document.querySelector('.clusterblast-tooltip');
      if (tip && tip.textContent.includes('BVG90_RS18855')) {
        break;
      }
    }
  });
  await page.waitForTimeout(300);
  const cbHeaderTop = await getHeaderTop(page, '#r1c11', 'Similar known clusters');
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c11-clusterblast-crop.png'),
    clip: { x: 0, y: cbHeaderTop - 42, width: 1080, height: 460 }
  });

  // Region 11 MIBiG comparison crop (with nudged tooltip to the right)
  await page.evaluate(() => {
    const tip = document.querySelector('.clusterblast-tooltip');
    if (tip) tip.style.display = 'none';
  });
  await clickTab(page, '#r1c11', 'MIBiG comparison');
  await page.waitForTimeout(400);
  const mibig11Top = await getHeaderTop(page, '#r1c11', 'Similar gene clusters');
  await addBadge(page, {
    id: 'mibig-r11-badge',
    html: `<div style="font-weight:700; margin-bottom:2px; color:#f8fafc;">Hover score breakdown (Non-specific single-gene hit):</div>
           <div><b>0.69</b> <span style="color:#cbd5e1;">(id: 0.49, order: N/A, components: 0.67)</span></div>
           <div style="font-size:11px; color:#94a3b8; margin-top:2px;">Single matched gene: NNLMDO_021205 vs. plu3123 (46.7% id, 45.9% cov)</div>`,
    left: 380,
    top: mibig11Top + 165,
    bg: 'rgba(15, 23, 42, 0.95)',
    border: '#475569'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c11-mibig-crop.png'),
    clip: { x: 0, y: mibig11Top - 42, width: 1080, height: 480 }
  });
  await clearBadges(page);

  // 2. SM-NMZ Region 5 (prodigiosin) MIBiG comparison crop
  await page.click('a[href="#r1c5"]');
  await page.waitForTimeout(400);
  await clickTab(page, '#r1c5', 'MIBiG comparison');
  await page.waitForTimeout(400);
  const mibig5Top = await getHeaderTop(page, '#r1c5', 'Similar gene clusters');
  await addBadge(page, {
    id: 'mibig-r5-badge',
    html: `<div style="font-weight:700; margin-bottom:2px; color:#ecfdf5;">Specific multi-gene match (Region 5 · pig):</div>
           <div><b>0.93</b> <span style="color:#d1fae5;">(id: 0.84, order: 1.00, components: 0.96)</span></div>
           <div style="font-size:11px; color:#a7f3d0; margin-top:2px;">16 collinear genes matched (pigA–pigN, cueR, copA) at 86.7–100% id, 100% cov</div>`,
    left: 380,
    top: mibig5Top + 190,
    bg: 'rgba(6, 78, 59, 0.95)',
    border: '#059669'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c5-pig-mibig-crop.png'),
    clip: { x: 0, y: mibig5Top - 42, width: 1080, height: 480 }
  });
  await clearBadges(page);

  // 3. SM-NMZ Region 1 (NRP-metallophore; NRPS) & Region 9 (NRPS)
  await page.click('a[href="#r1c1"]');
  await page.waitForTimeout(400);
  await clickTab(page, '#r1c1', 'MIBiG comparison');
  await page.waitForTimeout(400);
  const mibig1Top = await getHeaderTop(page, '#r1c1', 'Similar gene clusters');
  await addBadge(page, {
    id: 'r1-note',
    text: 'SM-NMZ Region 1 (NRP-metallophore / NRPS): Core catecholate genes (entE, entF, mbtH, entS) match 6 ref proteins (47–69% id) → class-level support',
    left: 205,
    top: mibig1Top + 1,
    bg: 'rgba(30, 41, 59, 0.96)',
    border: '#94a3b8',
    fontSize: '11px',
    maxWidth: '850px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c1-metallophore-crop.png'),
    clip: { x: 0, y: mibig1Top - 42, width: 1080, height: 500 }
  });
  await clearBadges(page);

  await page.click('a[href="#r1c9"]');
  await page.waitForTimeout(400);
  await clickTab(page, '#r1c9', 'MIBiG comparison');
  await page.waitForTimeout(400);
  const mibig9Top = await getHeaderTop(page, '#r1c9', 'Similar gene clusters');
  await addBadge(page, {
    id: 'r9-note',
    text: 'SM-NMZ Region 9 (NRPS): Partial 5–6 protein matches to serratiochelin / viobactin / trichrysobactin (47–78% id) → shared catecholate core',
    left: 205,
    top: mibig9Top + 1,
    bg: 'rgba(30, 41, 59, 0.96)',
    border: '#94a3b8',
    fontSize: '11px',
    maxWidth: '850px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c9-metallophore-crop.png'),
    clip: { x: 0, y: mibig9Top - 42, width: 1080, height: 500 }
  });
  await clearBadges(page);

  // 4. SM-NMZ Unique NRPS Regions 2 (NRPS-like) & 7 (NRPS)
  await page.click('a[href="#r1c2"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c2', false);
  await clickTab(page, '#r1c2', 'NRPS/PKS domains');
  await enableModuleDomains(page, '#r1c2');
  await page.waitForTimeout(300);
  const r2Top = await getHeaderTop(page, '#r1c2', 'Detailed domain annotation');
  await addBadge(page, {
    id: 'r2-note',
    text: 'SM-NMZ Unique Region 2 (NRPS-like): NNLMDO_002205 (A – PCP – TD reductase architecture; absent in C14-NMZ)',
    left: 235,
    top: r2Top + 1,
    bg: 'rgba(127, 29, 29, 0.96)',
    border: '#fca5a5',
    fontSize: '11px',
    maxWidth: '820px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c2-domains-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 390 }
  });
  await clearBadges(page);

  await page.click('a[href="#r1c7"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c7', false);
  await clickTab(page, '#r1c7', 'NRPS/PKS domains');
  await enableModuleDomains(page, '#r1c7');
  await page.waitForTimeout(300);
  const r7Top = await getHeaderTop(page, '#r1c7', 'Detailed domain annotation');
  await addBadge(page, {
    id: 'r7-note',
    text: 'SM-NMZ Unique Region 7 (NRPS): Two-module NRPS locus (NNLMDO_010830–010835: C–A–PCP–TE & C–A–PCP; absent in C14-NMZ)',
    left: 235,
    top: r7Top + 1,
    bg: 'rgba(127, 29, 29, 0.96)',
    border: '#fca5a5',
    fontSize: '11px',
    maxWidth: '820px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c7-domains-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 530 }
  });
  await clearBadges(page);

  // 5. SM-NMZ Region 10 (Gap1-like NRPS cassette)
  await page.click('a[href="#r1c10"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c10', false);
  await clickTab(page, '#r1c10', 'NRPS/PKS domains');
  await enableModuleDomains(page, '#r1c10');
  await page.waitForTimeout(300);
  const sm10Top = await getHeaderTop(page, '#r1c10', 'Detailed domain annotation');
  await addBadge(page, {
    id: 'sm-r10-note',
    text: 'SM-NMZ Region 10 (Gap1-like NRPS cassette): 3 NRPS modules + CAL/ACP + malonyl-AT/ACP + type-II TE (97–100% collinear with UENF-22GI Gap1)',
    left: 235,
    top: sm10Top + 1,
    bg: 'rgba(30, 41, 59, 0.96)',
    border: '#94a3b8',
    fontSize: '11px',
    maxWidth: '830px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c10-domains-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 610 }
  });
  await clearBadges(page);

  // 6. SM-NMZ Region 8 (redox-cofactor: PQQ)
  await page.click('a[href="#r1c8"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c8', false);
  await clickTab(page, '#r1c8', 'MIBiG comparison');
  await page.waitForTimeout(400);
  // Click the BGC0000923 (pyrroloquinoline quinone) row in MIBiG table so the 5 matched PQQ genes show!
  await page.evaluate(() => {
    const pageEl = document.querySelector('#r1c8');
    const links = Array.from(pageEl.querySelectorAll('a, td, tr'));
    const pqq = links.find(el => el.textContent && el.textContent.includes('BGC0000923'));
    if (pqq) pqq.click();
  });
  await page.waitForTimeout(300);
  const sm8Top = await getHeaderTop(page, '#r1c8', 'Similar gene clusters');
  await addBadge(page, {
    id: 'sm-r8-note',
    text: 'Shared Region 8 (redox-cofactor): Conserved pqqA–pqqF operon matching canonical PQQ reference clusters (BGC0000923)',
    left: 205,
    top: sm8Top + 1,
    bg: 'rgba(30, 64, 175, 0.96)',
    border: '#93c5fd',
    fontSize: '11px',
    maxWidth: '850px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-sm-r1c8-pqq-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 740 }
  });
  await clearBadges(page);

  // =========================================================================
  // PART 2: C14-NMZ Regions
  // =========================================================================
  await page.goto(c14Html, { waitUntil: 'networkidle' });

  // 7. C14-NMZ Region 7 (opine-like-metallophore)
  await page.click('a[href="#r1c7"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c7', false);
  await clickTab(page, '#r1c7', 'MIBiG comparison');
  await page.waitForTimeout(400);
  const c14_7Top = await getHeaderTop(page, '#r1c7', 'Similar gene clusters');
  await addBadge(page, {
    id: 'c14-r7-note',
    text: 'C14-NMZ Unique Region 7 (opine-like-metallophore): CntM + CntL + efflux cassette; 6-protein yersinopine MIBiG match (0.84 score; 64–86% id)',
    left: 205,
    top: c14_7Top + 1,
    bg: 'rgba(6, 78, 59, 0.96)',
    border: '#6ee7b7',
    fontSize: '11px',
    maxWidth: '850px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-c14-r1c7-opine-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 740 }
  });
  await clearBadges(page);

  // 8. C14-NMZ Region 10 (single-module D-Val NRPS)
  await page.click('a[href="#r1c10"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c10', false);
  await clickTab(page, '#r1c10', 'NRPS/PKS domains');
  await enableModuleDomains(page, '#r1c10');
  await page.waitForTimeout(300);
  const c14_10Top = await getHeaderTop(page, '#r1c10', 'Detailed domain annotation');
  await addBadge(page, {
    id: 'c14-r10-note',
    text: 'C14-NMZ Region 10 (single-module D-Val NRPS): OJMJKD_018290 (C – A[Val] – PCP – E – C_DCL) near a T6SS neighborhood (distinct from SM-NMZ Region 10)',
    left: 235,
    top: c14_10Top + 1,
    bg: 'rgba(146, 64, 14, 0.96)',
    border: '#fcd34d',
    fontSize: '11px',
    maxWidth: '830px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-c14-r1c10-domains-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 420 }
  });
  await clearBadges(page);

  // 9. C14-NMZ Region 3 (ranthipeptide)
  await page.click('a[href="#r1c3"]');
  await page.waitForTimeout(400);
  await clearBadges(page);
  await setLegendVisible(page, '#r1c3', false);
  await clickTab(page, '#r1c3', 'TIGRFAM domains');
  // Toggle "Expand to show all names" or click the core gene so TIGR04085 (rSAM) is visible!
  await page.evaluate(() => {
    const pageEl = document.querySelector('#r1c3');
    const switches = pageEl.querySelectorAll('input[type="checkbox"]');
    switches.forEach(s => {
      if (!s.checked && s.parentElement && s.parentElement.parentElement && s.parentElement.parentElement.textContent.includes('Expand to show all names')) {
        s.click();
      }
    });
  });
  await page.waitForTimeout(300);
  const c14_3Top = await getHeaderTop(page, '#r1c3', 'Detailed TIGRFAM domain annotation');
  await addBadge(page, {
    id: 'c14-r3-note',
    text: 'C14-NMZ Unique Region 3 (ranthipeptide): Core radical SAM / SPASM (TIGR04085 / PF04055) + PqqD RRE architecture (class-level RiPP call)',
    left: 255,
    top: c14_3Top + 1,
    bg: 'rgba(109, 40, 217, 0.96)',
    border: '#c4b5fd',
    fontSize: '11px',
    maxWidth: '810px'
  });
  await page.screenshot({
    path: path.join(outDir, 'antismash-c14-r1c3-ranthipeptide-crop.png'),
    clip: { x: 0, y: 78, width: 1080, height: 550 }
  });

  await browser.close();
  console.log('Regenerated all polished antiSMASH visual assets in manuscript/explainer/assets/.');
})();
