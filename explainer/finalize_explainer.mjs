import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const skill=process.env.PRESENTATIONS_SKILL_DIR;
const python=process.env.RUNTIME_PYTHON;
if(!skill||!python)throw new Error('Set PRESENTATIONS_SKILL_DIR and RUNTIME_PYTHON.');
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const workspaceDir=path.resolve(import.meta.dirname,'../..');
const build=path.join(workspaceDir,'tmp/explainer-2026-10-20');
const finalPath=path.join(import.meta.dirname,'NMZ-Serratia-genomics-explainer-2026-10-20.pptx');
const requiredNativeTableOwnerSlides=[2,3,4,8,10,11,12,13,15,18];
const result=await finalizePresentation({
 workspaceDir,candidatePath:path.join(build,'candidate.pptx'),finalPath,
 explicitTotalSlideCount:20,
 pythonExecutable:python,
 integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
 layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
 layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...requiredNativeTableOwnerSlides.flatMap(n=>['--require-native-table-slide',String(n)])],
 requiredNativeTableOwnerSlides,
 fontPolicy:{basis:'design',families:['Arial']},
 verifyArtifactToolImport:true,
 receiptPath:path.join(build,'final-validation.json')
});
console.log(JSON.stringify(result,null,2));
