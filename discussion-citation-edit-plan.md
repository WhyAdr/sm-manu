# Results and Discussion Citation Expansion Plan

## Objective

Add literature support where the Results and Discussion interprets genomic observations through established taxonomy, virulence, metabolism, hydrocarbon, biosurfactant, extracellular-polysaccharide, or monooxygenase biology. Retain uncited isolate-specific measurements as original results and avoid using citations as substitutes for evidence generated in this study.

## Citation targets

1. **Taxonomic thresholds (Section 2)**
   - Support the conventional 70% dDDH species, 79% dDDH subspecies, and approximately 95% ANI species boundaries with genome-taxonomy literature.

2. **Secondary metabolites (Section 3)**
   - Support functional interpretation of the *pig* prodigiosin locus and the single-module *swrW*/serratamolide system.
   - Add literature only where named biochemical roles or established pathway architecture are discussed; keep antiSMASH-specific region observations tied to the current analysis and antiSMASH citation.

3. **Virulence-factor clusters (Section 3)**
   - Support ShlA–ShlB two-partner hemolysin biology, HasA/Has system heme acquisition, and T6SS-mediated interbacterial competition.
   - Preserve the distinction between VFDB sequence matches and demonstrated virulence.

4. **Aromatic and hydrocarbon metabolism (Section 4)**
   - Support established *hpa*, *paa*, *pca/pob*, and gentisate pathway interpretations.
   - Support the distinction between downstream fatty-acid assimilation and demonstrated initial alkane hydroxylation, including canonical AlkB/CYP153/AlmA/LadA systems where discussed.

5. **Biosurfactants and extracellular polymers (Section 4)**
   - Support serrawettin-associated interfacial activity, the distinction between *Acinetobacter* RAG-1 emulsan and generic *wzb/wzc* capsule loci, and established cellulose/PNAG contributions to biofilm matrices.
   - Support PueA/polyurethane-esterase and PHA-marker interpretations where those biochemical assignments are retained.

6. **LadA and related group-C monooxygenases (Section 5)**
   - Use the existing canonical LadA and LadA-family citations where sufficient; add a group-C flavin monooxygenase source only if it directly supports the comparative enzyme-family interpretation.

## Source-selection rules

- Prefer primary research articles and authoritative taxonomy/database-method papers.
- Use reviews only for broad multi-pathway synthesis when a single primary source cannot support the statement cleanly.
- Cite the narrowest claim supported by each source; do not attach a paper to isolate-specific measurements it did not generate.
- Avoid citations for figure-derived counts, identities, locus tags, synteny, bootstrap values, and other results produced in this study.
- Maintain numbered inline citations matching a References list alphabetized by first-author surname.

## Verification

- Confirm every new citation supports the adjacent claim.
- Verify all inline citation numbers map one-to-one to References entries.
- Verify References remain sequential and alphabetized by first-author surname.
- Confirm all Markdown image paths resolve and run `git diff --check`.

## Implementation outcome

- Added 17 references supporting genome-taxonomy thresholds; prodigiosin and serrawettin loci; ShlA-ShlB, Has, and T6SS biology; aromatic-catabolic pathways; biosurfactant, emulsan, PNAG, and biofilm-matrix interpretations; PueA; and group-C/LadA-family monooxygenases.
- Updated the antiSMASH citation from version 7.0 to the antiSMASH 8.0 publication to match the software version used in the analysis.
- Renumbered all pre-existing citations after restoring strict alphabetical order in the expanded References list.
- Verified 53 cited numbers against 53 sequential References entries, with no unlisted citations or uncited entries; first-author order is alphabetical after Unicode normalization.
- Verified all 14 Markdown figure links resolve and `git diff --check` reports no whitespace errors.
