import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const skill=process.env.PRESENTATIONS_SKILL_DIR;
const python=process.env.RUNTIME_PYTHON;
if(!skill||!python)throw new Error('Set PRESENTATIONS_SKILL_DIR and RUNTIME_PYTHON.');
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const workspaceDir=path.resolve(import.meta.dirname,'../..');
const build=path.join(workspaceDir,'tmp/explainer-expansion-2026-10-21');
const runId=new Date().toISOString().replace(/[:.]/g,'-');
const finalPath=path.join(build,'validated',runId,'NMZ-Serratia-genomics-explainer-2026-10-20.pptx');
await fs.mkdir(path.dirname(finalPath),{recursive:true});
const requiredNativeTableOwnerSlides=[2,4,5,6,7,8,12,18,19,21,22,23,24,26,29];
const result=await finalizePresentation({
 workspaceDir,candidatePath:path.join(build,'candidate.pptx'),finalPath,
 explicitTotalSlideCount:31,
 pythonExecutable:python,
 integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...requiredNativeTableOwnerSlides.flatMap(n=>['--require-native-table-slide',String(n)])],
 requiredNativeTableOwnerSlides,
 fontPolicy:{basis:'design',families:['Arial']},
 verifyArtifactToolImport:true,
 receiptPath:path.join(build,`final-validation-${runId}.json`)
});
console.log(JSON.stringify({finalPath:result.finalPath,receiptPath:result.receiptPath,sha256:result.finalSha256,slides:result.packageIntegrity.slide_count,layoutFindings:result.presentationLayout.findingCount,importPassed:result.firstPartyImport.passed},null,2));
