import { Survey } from "survey-engine/lib/data_types";
import { ComponentGenerators } from "../../../../editor-engine/utils/componentGenerators";
import { SurveyItemGenerators } from "../../../../editor-engine/utils/question-type-generator";
import { generatePageBreak } from "../../../../editor-engine/utils/simple-generators";
import { SimpleSurveyEditor } from "../../../../editor-engine/utils/simple-survey-editor";
import { surveyKeys } from "../studyRules";
import { getPOLINT, getWKINT, getWBT, getWABS, getSWABS, getSKPART, getSKPOL, getPROB1, getKPROB1, getPROB2, getKPROB2, getIMAGEAL, getIMAGEOS, getIMAGEAB, getKANZLER, getEPERF, getESTRATAL, getESTRATOS, getESTRATAB, getWK, getPID, getSTPID, getAGE, getSEX, getPERS1, getPERS2, getEDUC, getWBR } from "./question_pool/questions";


export const generate_PUB0912PRE = (): Survey | undefined => {
    const surveyKey = surveyKeys.PUB_0912_PRE;

    const surveyEditor = new SimpleSurveyEditor({
        surveyKey: surveyKey,
        name: new Map([
            ["de", "0929 Pre"],
        ]),
        description: new Map([
            ["de", "not defined"],
        ]),
        durationText: new Map([
            ["de", "not defined"],
        ])
    })

    // surveyEditor.editor.setMaxItemPerPage({ small: 1, large: 1 });
    surveyEditor.addSurveyItemToRoot(SurveyItemGenerators.display({
        parentKey: surveyKey,
        itemKey: 'intro',
        content: [ComponentGenerators.markdown({
            content: new Map([
                ['de', `## ${surveyKey}`]
            ]),
        })],
    }));

    const isRequired = false;

    // add questions
    surveyEditor.addSurveyItemToRoot(getWBT(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getWABS(surveyKey, isRequired));
    //TODO Peter: short form of SKPART
    surveyEditor.addSurveyItemToRoot(getSKPART(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getSKPOL(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getPROB1(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getKPROB1(surveyKey, isRequired));
    
    
    surveyEditor.addSurveyItemToRoot(generatePageBreak(surveyKey));

    surveyEditor.addSurveyItemToRoot(getKANZLER(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getEPERF(surveyKey, isRequired));

    //short form WK
    surveyEditor.addSurveyItemToRoot(getWK(surveyKey, isRequired));


    surveyEditor.addSurveyItemToRoot(getPID(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(generatePageBreak(surveyKey));

    //TODO Peter display of STPID depends on PID answer
    surveyEditor.addSurveyItemToRoot(getSTPID(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getSEX(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getAGE(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getEDUC(surveyKey, isRequired));
    surveyEditor.addSurveyItemToRoot(getWBR(surveyKey, isRequired));


    //surveyEditor.addSurveyItemToRoot(Q2(surveyKey));
    //surveyEditor.addSurveyItemToRoot(getQ1c(surveyKey,true));

    // Survey End
    surveyEditor.addSurveyItemToRoot(SurveyItemGenerators.surveyEnd(surveyKey, new Map([
        ['de', 'TODO: Text for end of survey']
    ])));

    return surveyEditor.getSurvey();
}

