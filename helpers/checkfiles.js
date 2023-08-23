// this function is used to check which scales have or have not been completed
// more precisely it looks for files containing the data that should have been outputted

import * as FileSystem from 'expo-file-system';

//@params val is the current participant id

async function checkFiles (val) {

    const files = ['BeckAnxietyInventory', 'CannabisUseDisorderIdentificationTest-Revised(CUDIT-R)',  "FagerstormTestForNicotineDependence(FTND)", "HasslesandUpliftsScale", "12-ItemMarijuanaCravingQuestionnaire", "SAFE", "ApathyEvaluationScale(Self-rated)", "Drug History Questionnaire", 'SANS', "SIAS", "SAS", "RosenbergScale", "RecentLifeEvents", 'PANSSRatingForm', 'SDS', 'DAST', 'Surveyofrecentlifeevents', 'AUDIT', 'ClinicalGlobalImpression(CGI)', 'SHAPS', 'T.E.C.', 'MacCAT', 'GlobalAssessmentofFunctioning(GAF)Scale', 'TheCannabisWithdrawalScale', 'TheBarratSimplifiedMeasureofSocialStatus(BSMSS)'];
    
    const myarr = await getValues(files, val);

    return myarr;
}

// helper function for check files
async function getValues (names, val) {
    let arr = new Array();

    for (let i = 0;  i < names.length; i++) {
        const res = await FileSystem.getInfoAsync(FileSystem.documentDirectory+'cats-data/'+val+names[i].replace(/\s/g,'')+'.txt');
        arr.push(res.exists);
    }

    return arr;
}

export default checkFiles;