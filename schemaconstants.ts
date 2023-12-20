const tableNamesSelf : ArraUZHIDy<string | Array<string> > = [
    "DrugHQ", //Drug history questionnaire
    "CSSRS", //不知道有没有这个表名
    "BSMSS",
    "HAMD",
    

    
    ["HUS_Hassles", "HUS_Uplifts" ],
    "MCQ_curbfeppa",
    "SAQ",

    "BAI",
    "tbl_CUDITR",
    // "FTND",
    "SAFE",
    "AES",
    "SIAS",
    "SAS",
    "RS", //Rosenberg
    "RLE",
    "SDS",
    "DAST",
    "SRLE", //SoRLE
    "tbl_AUDITR",
    "SHAPS",
    "tbl_TEC_Duration",
    "tbl_CWS",
    //"SRAC",
    "TICS",
    "TLFB"
];

const displayNamesSelf = [
    "Drug History Questionnaire", 
    "SSRS",
    "BSMSS",
    "HAMD",



    "Hassles and Uplifts Scale",
    "12 - Item Marijuana Craving Questionnaire", 
    "SAQ",

    'Beck Anxiety Inventory', 
    'Cannabis Use Disorder Identification Test - Revised (CUDIT-R)',  
    // "Fagerstorm Test For Nicotine Dependence (FTND)", 
    "SAFE", 
    "Apathy Evaluation Scale (Self-rated)", 
    "SIAS", 
    "SAS", 
    "Rosenberg Scale", 
    "Recent Life Events",
    'SDS',
    'DAST', 
    'Survey of recent life events', 
    'AUDIT', 
    'SHAPS', 
    'T.E.C.', 
    'The Cannabis Withdrawal Scale',
    "TICS",
    "TLFB"
];


const internalNamesSelf : Array<string> = [
    "MJ Drug History Questionnaire", 
    "SSRS",
    "BSMSS",
    "HAMD",



    "Hassles and Uplifts", 
    "MCQ", 
    "SAQ",

    'Beck Anxiety', 
    'CUDIT-R',  
    // "FTND", 
    "SAFE", 
    "AES", 
    "SIAS", 
    "SAS", 
    "Rosenberg", 
    "RLE", 
    'SDS', 
    'DAST', 
    'SoRLE', 
    'Audit', 
    'Shaps', 
    'Tec', 
    "Cannabis",
    "TICS",
    "TLFB"
];



const sqlCreateTablesSelf : Array<string> = [
    'strSQL="CREATE TABLE IF NOT EXISTS [BAI] ([IDBAI] Counter,[patientID] Long,[visit] Integer,[BAI_1] Integer,[BAI_2] Integer,[BAI_3] Integer,[BAI_4] Integer,[BAI_5] Integer,[BAI_6] Integer,[BAI_7] Integer,[BAI_8] Integer,[BAI_9] Integer,[BAI_10] Integer,[BAI_11] Integer,[BAI_12] Integer,[BAI_13] Integer,[BAI_14] Integer,[BAI_15] Integer,[BAI_16] Integer,[BAI_17] Integer,[BAI_18] Integer,[BAI_19] Integer,[BAI_20] Integer,[BAI_21] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [tbl_CUDITR] ([IDCUDITR] Counter,[patientID] Long,[visit] Integer,[CUDITR_1] Long,[CUDITR_2] Long,[CUDITR_3] Long,[CUDITR_4] Long,[CUDITR_5] Long,[CUDITR_6] Long,[CUDITR_7] Long,[CUDITR_8] Long )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [FTND] ([IDFTND] Counter,[Visit] Long,[PatientID] Long,[FTND_1] Double,[FTND_2] Double,[FTND_3] Double,[FTND_4] Double,[FTND_5] Double,[FTND_6] Double )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [HUS_Hassles] ([IDHUShassles] Counter,[PatientID] Long,[visit] Double,[hass1] Double,[hass2] Double,[hass3] Double,[hass4] Double,[hass5] Single,[hass6] Double,[hass7] Double,[hass8] Double,[hass9] Double,[hass10] Double,[hass11] Double,[hass12] Double,[hass13] Double,[hass14] Double,[hass15] Double,[hass16] Double,[hass17] Double,[hass18] Double,[hass19] Double,[hass20] Double,[hass21] Double,[hass22] Double,[hass23] Double,[hass24] Double,[hass25] Double,[hass26] Double,[hass27] Double,[hass28] Double,[hass29] Double,[hass30] Double,[hass31] Double,[hass32] Double,[hass33] Double,[hass34] Double,[hass35] Double,[hass36] Double,[hass37] Double,[hass38] Double,[hass39] Double,[hass40] Double,[hass41] Double,[hass42] Double,[hass43] Double,[hass44] Double,[hass45] Double,[hass46] Double,[hass47] Double,[hass48] Double,[hass49] Double,[hass50] Double,[hass51] Double,[hass52] Double,[hass53] Double )"\nCurrentdb.Execute strSQL\nstrSQL="CREATE TABLE [HUS_Uplifts] ([IDHUSuplifts] Counter,[PatientID] Long,[visit] Long,[up1] Double,[up2] Double,[up3] Double,[up4] Double,[up5] Double,[up6] Double,[up7] Double,[up8] Double,[up9] Double,[up10] Double,[up11] Double,[up12] Double,[up13] Double,[up14] Double,[up15] Double,[up16] Double,[up17] Double,[up18] Double,[up19] Double,[up20] Double,[up21] Double,[up22] Double,[up23] Double,[up24] Double,[up25] Double,[up26] Double,[up27] Double,[up28] Double,[up29] Double,[up30] Double,[up31] Double,[up32] Double,[up33] Double,[up34] Double,[up35] Double,[up36] Double,[up37] Double,[up38] Double,[up39] Double,[up40] Double,[up41] Double,[up42] Double,[up43] Double,[up44] Double,[up45] Double,[up46] Double,[up47] Double,[up48] Double,[up49] Double,[up50] Double,[up51] Double,[up52] Double,[up53] Double )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [MCQ_curbfeppa] ([IDMCQ] Counter,[PatientID] Long,[visit] Long,[MCQ_1] Long,[MCQ_2] Long,[MCQ_3] Long,[MCQ_4] Text (255),[MCQ_5] Text (255),[MCQ_6] Long,[MCQ_7] Text (255),[MCQ_8] Long,[MCQ_9] Long,[MCQ_10] Long,[MCQ_11] Long,[MCQ_12] Long )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SAFE] ([IDSAFE] Counter,[PatientID] Double,[visit] Double,[SAFE_1] Double,[SAFE_2] Double,[SAFE_3] Double,[SAFE_4] Double,[SAFE_5] Double,[SAFE_6] Double,[SAFE_7] Double,[SAFE_8] Double,[SAFE_9] Double,[SAFE_10] Double,[SAFE_11] Double,[SAFE_12] Double,[SAFE_13] Double,[SAFE_14] Double,[SAFE_15] Double,[SAFE_16] Double,[SAFE_17] Double,[SAFE_18] Double,[SAFE_19] Double,[SAFE_20] Double,[SAFE_21] Double,[SAFE_22] Double,[SAFE_23] Double,[SAFE_24] Double )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [AES] ([IDAES] Counter,[PatientID] Long,[visit] Double,[AES_1] Double,[AES_2] Integer,[AES_3] Integer,[AES_4] Integer,[AES_5] Integer,[AES_6] Integer,[AES_7] Integer,[AES_8] Double,[AES_9] Integer,[AES_10] Integer,[AES_11] Integer,[AES_12] Integer,[AES_13] Integer,[AES_14] Integer,[AES_15] Integer,[AES_16] Integer,[AES_17] Integer,[AES_18] Integer,[AES_1_num] Double,[AES_2_num] Integer,[AES_3_num] Integer,[AES_4_num] Integer,[AES_5_num] Integer,[Reversed_AES_6_num] Integer,[AES_7_num] Integer,[AES_8_num] Double,[AES_9_num] Integer,[Reversed_AES_10_num] Integer,[Reversed_AES_11_num] Integer,[AES_12_num] Integer,[AES_13_num] Integer,[AES_14_num] Integer,[AES_15_num] Integer,[AES_16_num] Integer,[AES_17_num] Integer,[AES_18_num] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [DrugHQ] ([IDDrugHQ] Counter,[PatientID] Long,[visit] Long,[Life_FirstUse] Text (255),[Life_HowLong] Text (255),[Life_TypicalRoute] Text (255),[Life_Frequency] Text (255),[Life_Dose] Text (255),[Life_AgeFirstUse] Text (255),[Life_totalMonthsUse] Text (255),[Life_FreqMonth] Text (255),[Life_TotalAmount] Text (255),[12_FirstUse] Text (255),[12_TypicalRoute] Text (255),[12_Freq] Text (255),[12_AgeFirstUse] Text (255),[12_TotalMonthsUse] Text (255),[12_FreqMonth] Text (255),[12_TotalAmountofLifetime] Text (255),[UseMore] Text (255),[NeedMore] Text (255),[SXSDuring&HowLong] Text (255),[SXSstop] Text (255),[OtherDrugs] Text (255),[TakeMore] Text (255),[CutDown] Text (255),[TimeSpent] Text (255),[GivenUp] Text (255),[KeepTaking] Text (255),[WhyTake] Text (255),[Harmful] Text (255),[DamageBrain] Text (255),[Crave] Text (255),[InGroup] Text (255),[FamilyHistDrug] Text (255),[WillingtoChange] Text (255) )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SIAS] ([IDSIAS] Counter,[patientID] Long,[visit] Integer,[SIAS_1] Integer,[SIAS_2] Integer,[SIAS_3] Integer,[SIAS_4] Integer,[SIAS_5] Integer,[SIAS_6] Integer,[SIAS_7] Integer,[SIAS_8] Integer,[SIAS_9] Integer,[SIAS_10] Integer,[SIAS_11] Integer,[SIAS_12] Integer,[SIAS_13] Integer,[SIAS_14] Integer,[SIAS_15] Integer,[SIAS_16] Integer,[SIAS_17] Integer,[SIAS_18] Integer,[SIAS_19] Integer,[SIAS_20] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SAS] ([IDSAS] Counter,[patientID] Long,[visit] Integer,[SAS_1] Integer,[SAS_2] Integer,[SAS_3] Integer,[SAS_4] Integer,[SAS_5] Integer,[SAS_6] Integer,[SAS_7] Integer,[SAS_8] Integer,[SAS_9] Integer,[SAS_10] Integer,[SAS_11] Integer,[SAS_12] Integer,[SAS_13] Integer,[SAS_14] Integer,[SAS_15] Integer,[SAS_16] Integer,[SAS_17] Integer,[SAS_18] Integer,[SAS_19] Integer,[SAS_20] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [RS] ([IDRS] Counter,[patientID] Long,[visit] Integer,[RS_1] Integer,[RS_2] Integer,[RS_3] Integer,[RS_4] Integer,[RS_5] Integer,[RS_6] Integer,[RS_7] Integer,[RS_8] Integer,[RS_9] Integer,[RS_10] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [RLE] ([IDRLE] Counter,[patientID] Long,[visit] Integer,[rle_1] Integer,[rle_2] Integer,[rle_3] Integer,[rle_4] Integer,[rle_5] Integer,[rle_6] Integer,[rle_7] Integer,[rle_8] Integer,[rle_9] Integer,[rle_10] Integer,[rle_11] Integer,[rle_12] Integer,[rle_13] Integer,[rle_14] Integer,[rle_15] Integer,[rle_16] Integer,[rle_17] Integer,[rle_18] Integer,[rle_19] Integer,[rle_20] Integer,[rle_21] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SDS] ([IDSDS] Counter,[PatientID] Long,[visit] Long,[SDS_1] Double,[SDS_2] Double,[SDS_3] Double,[SDS_4] Double,[SDS_5] Double )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [DAST] ([IDDAST] Counter,[PatientID] Long,[visit] Long,[DAST_1] Double,[DAST_2] Double,[DAST_3] Double,[DAST_4] Double,[DAST_5] Double,[DAST_6] Double,[DAST_7] Double,[DAST_8] Double,[DAST_9] Double,[DAST_10] Double,[DAST_11] Double,[DAST_12] Double,[DAST_13] Double,[DAST_14] Double,[DAST_15] Double,[DAST_16] Double,[DAST_17] Double,[DAST_18] Double,[DAST_19] Double,[DAST_20] Double,[DAST_21] Double,[DAST_22] Double,[DAST_23] Double,[DAST_24] Double,[DAST_25] Double,[DAST_26] Double,[DAST_27] Double,[DAST_28] Double )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SRLE] ([IDSRLE] Counter,[patientID] Long,[visit] Integer,[SRLE_1] Integer,[SRLE_2] Integer,[SRLE_3] Integer,[SRLE_4] Integer,[SRLE_5] Integer,[SRLE_6] Integer,[SRLE_7] Integer,[SRLE_8] Integer,[SRLE_9] Integer,[SRLE_10] Integer,[SRLE_11] Integer,[SRLE_12] Integer,[SRLE_13] Integer,[SRLE_14] Integer,[SRLE_15] Integer,[SRLE_16] Integer,[SRLE_17] Integer,[SRLE_18] Integer,[SRLE_19] Integer,[SRLE_20] Integer,[SRLE_21] Integer,[SRLE_22] Integer,[SRLE_23] Integer,[SRLE_24] Integer,[SRLE_25] Integer,[SRLE_26] Integer,[SRLE_27] Integer,[SRLE_28] Integer,[SRLE_29] Integer,[SRLE_30] Integer,[SRLE_31] Integer,[SRLE_32] Integer,[SRLE_33] Integer,[SRLE_34] Integer,[SRLE_35] Integer,[SRLE_36] Integer,[SRLE_37] Integer,[SRLE_38] Integer,[SRLE_39] Integer,[SRLE_40] Integer,[SRLE_41] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [tbl_AUDITR] ([IDAUDITR] Counter,[patientID] Long,[visit] Integer,[AUDITR_1] Long,[AUDITR_2] Long,[AUDITR_3] Long,[AUDITR_4] Long,[AUDITR_5] Long,[AUDITR_6] Long,[AUDITR_7] Long,[AUDITR_8] Long,[AUDITR_9] Long,[AUDITR_10] Long )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [SHAPS] ([IDSHAPS] Counter,[Visit] Long,[PatientID] Long,[SHAPS_1] Integer,[SHAPS_2] Integer,[SHAPS_3] Integer,[SHAPS_4] Integer,[SHAPS_5] Integer,[SHAPS_6] Integer,[SHAPS_7] Integer,[SHAPS_8] Integer,[SHAPS_9] Integer,[SHAPS_10] Integer,[SHAPS_11] Integer,[SHAPS_12] Integer,[SHAPS_13] Integer,[SHAPS_14] Integer,[SHAPS_15] Integer )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [tbl_TEC_Duration] ([ID] Counter,[IDTEC] Long,[PatientID] Long,[visit] Long,[Age_0-6_1_Duration] YesNo,[Age_7-12_1_Duration] YesNo,[Age_13-18_1_Duration] YesNo,[Age_0-6_2_Duration] YesNo,[Age_7-12_2_Duration] YesNo,[Age_13-18_2_Duration] YesNo,[Age_0-6_3_Duration] YesNo,[Age_7-12_3_Duration] YesNo,[Age_13-18_3_Duration] YesNo,[Age_0-6_4_Duration] YesNo,[Age_7-12_4_Duration] YesNo,[Age_13-18_4_Duration] YesNo,[Age_0-6_5_Duration] YesNo,[Age_7-12_5_Duration] YesNo,[Age_13-18_5_Duration] YesNo,[Age_0-6_6_Duration] YesNo,[Age_7-12_6_Duration] YesNo,[Age_13-18_6_Duration] YesNo,[Age_0-6_7_Duration] YesNo,[Age_7-12_7_Duration] YesNo,[Age_13-18_7_Duration] YesNo,[Age_0-6_8_Duration] YesNo,[Age_7-12_8_Duration] YesNo,[Age_13-18_8_Duration] YesNo,[Age_0-6_9_Duration] YesNo,[Age_7-12_9_Duration] YesNo,[Age_13-18_9_Duration] YesNo,[Age_0-6_10_Duration] YesNo,[Age_7-12_10_Duration] YesNo,[Age_13-18_10_Duration] YesNo,[Age_0-6_11_Duration] YesNo,[Age_7-12_11_Duration] YesNo,[Age_13-18_11_Duration] YesNo,[Age_0-6_12_Duration] YesNo,[Age_7-12_12_Duration] YesNo,[Age_13-18_12_Duration] YesNo,[Age_0-6_13_Duration] YesNo,[Age_7-12_13_Duration] YesNo,[Age_13-18_13_Duration] YesNo,[Age_0-6_14_Duration] YesNo,[Age_7-12_14_Duration] YesNo,[Age_13-18_14_Duration] YesNo,[Age_0-6_15_Duration] YesNo,[Age_7-12_15_Duration] YesNo,[Age_13-18_15_Duration] YesNo,[Age_0-6_16_Duration] YesNo,[Age_7-12_16_Duration] YesNo,[Age_13-18_16_Duration] YesNo,[Age_0-6_17_Duration] YesNo,[Age_7-12_17_Duration] YesNo,[Age_13-18_17_Duration] YesNo,[Age_0-6_18_Duration] YesNo,[Age_7-12_18_Duration] YesNo,[Age_13-18_18_Duration] YesNo,[Age_0-6_19_Duration] YesNo,[Age_7-12_19_Duration] YesNo,[Age_13-18_19_Duration] YesNo,[Age_0-6_20_Duration] YesNo,[Age_7-12_20_Duration] YesNo,[Age_13-18_20_Duration] YesNo,[Age_0-6_21_Duration] YesNo,[Age_7-12_21_Duration] YesNo,[Age_13-18_21_Duration] YesNo,[Age_0-6_22_Duration] YesNo,[Age_7-12_22_Duration] YesNo,[Age_13-18_22_Duration] YesNo,[Age_0-6_23_Duration] YesNo,[Age_7-12_23_Duration] YesNo,[Age_13-18_23_Duration] YesNo,[Age_0-6_24_Duration] YesNo,[Age_7-12_24_Duration] YesNo,[Age_13-18_24_Duration] YesNo,[Age_0-6_25_Duration] YesNo,[Age_7-12_25_Duration] YesNo,[Age_13-18_25_Duration] YesNo,[Age_0-6_26_Duration] YesNo,[Age_7-12_26_Duration] YesNo,[Age_13-18_26_Duration] YesNo,[Age_0-6_27_Duration] YesNo,[Age_7-12_27_Duration] YesNo,[Age_13-18_27_Duration] YesNo,[Age_0-6_28_Duration] YesNo,[Age_7-12_28_Duration] YesNo,[Age_13-18_28_Duration] YesNo,[Age_0-6_29_Duration] YesNo,[Age_7-12_29_Duration] YesNo,[Age_13-18_29_Duration] YesNo )"\nCurrentdb.Execute strSQL',
    'strSQL="CREATE TABLE IF NOT EXISTS [tbl_CWS] ([IDCWS] Counter,[patientID] Long,[visit] Long,[Severity_1] Integer,[Impact_1] Integer,[Severity_2] Integer,[Impact_2] Integer,[Severity_3] Integer,[Impact_3] Integer,[Severity_4] Integer,[Impact_4] Integer,[Severity_5] Integer,[Impact_5] Integer,[Severity_6] Integer,[Impact_6] Integer,[Severity_7] Integer,[Impact_7] Integer,[Severity_8] Integer,[Impact_8] Integer,[Severity_9] Integer,[Impact_9] Integer,[Severity_10] Integer,[Impact_10] Integer,[Severity_11] Integer,[Impact_11] Integer,[Severity_12] Integer,[Impact_12] Integer,[Severity_13] Integer,[Impact_13] Integer,[Severity_14] Integer,[Impact_14] Integer,[Severity_15] Integer,[Impact_15] Integer,[Severity_16] Integer,[Impact_16] Integer,[Severity_17] Integer,[Impact_17] Integer,[Severity_18] Integer,[Impact_18] Integer,[Severity_19] Integer,[Impact_19] Integer )"\nCurrentdb.Execute strSQL',
    //'strSQL="CREATE TABLE [TICS] IF NOT EXISTS ([IDTICS] Counter,[patientID] Long,[visit] Integer,[tics_1] Integer,[tics_2] Integer,[tics_3] Integer,[tics_4] Integer,[tics_5] Integer,[tics_6] Integer,[tics_7] Integer,[tics_8] Integer,[tics_9] Integer,[tics_10] Integer,[tics_11] Integer,[tics_12] Integer,[tics_13] Integer,[tics_14] Integer,[tics_15] Integer,[tics_16] Integer,[tics_17] Integer,[tics_18] Integer,[tics_19] Integer,[tics_20] Integer,[tics_21] Integer,[tics_22] Integer,[tics_23] Integer,[tics_24] Integer,[tics_25] Integer,[tics_26] Integer,[tics_27] Integer,[tics_28] Integer,[tics_29] Integer,[tics_30] Integer )"\nCurrentdb.Execute strSQL'
];

const tableColumnsSelf : Array<any> = [ 


    ["Life_FirstUse","Life_HowLong","Life_TypicalRoute","Life_Frequency","Life_Dose","Life_AgeFirstUse","Life_totalMonthsUse","Life_FreqMonth","Life_TotalAmount","12_FirstUse","12_TypicalRoute","12_Freq","12_AgeFirstUse","12_TotalMonthsUse","12_FreqMonth","12_TotalAmountofLifetime","UseMore","NeedMore","[SXSDuring&HowLong]","SXSstop","OtherDrugs","TakeMore","CutDown","TimeSpent","GivenUp","KeepTaking","WhyTake","Harmful","DamageBrain","Crave","InGroup","FamilyHistDrug","WillingtoChange"],
    ["wocao"],
    ["Occupation","Education","SocialStatus"], //BSSS
    ["HRSD_1", "HRSD_2", "HRSD_3", "HRSD_4", "HRSD_5", "HRSD_6", "HRSD_7", "HRSD_8", "HRSD_9", "HRSD_10", "HRSD_11", "HRSD_12", "HRSD_13", "HRSD_14", "HRSD_15", "HRSD_16", "HRSD_17", "HRSD_18","HRSD_18AMPM", "HRSD_19", "HRSD_20", "HRSD_21"],


    [["hass1","hass2","hass3","hass4","hass5","hass6","hass7","hass8","hass9","hass10","hass11","hass12","hass13","hass14","hass15","hass16","hass17","hass18","hass19","hass20","hass21","hass22","hass23","hass24","hass25","hass26","hass27","hass28","hass29","hass30","hass31","hass32","hass33","hass34","hass35","hass36","hass37","hass38","hass39","hass40","hass41","hass42","hass43","hass44","hass45","hass46","hass47","hass48","hass49","hass50","hass51","hass52","hass53”], [up1","up2","up3","up4","up5","up6","up7","up8","up9","up10","up11","up12","up13","up14","up15","up16","up17","up18","up19","up20","up21","up22","up23","up24","up25","up26","up27","up28","up29","up30","up31","up32","up33","up34","up35","up36","up37","up38","up39","up40","up41","up42","up43","up44","up45","up46","up47","up48","up49","up50","up51","up52","up53"]],
    ["MCQ_1","MCQ_2","MCQ_3","MCQ_4","MCQ_5","MCQ_6","MCQ_7","MCQ_8","MCQ_9","MCQ_10","MCQ_11","MCQ_12"],
    ["SAQ_1", "SAQ_2", "SAQ_3", "SAQ_4", "SAQ_5", "SAQ_6", "SAQ_7", "SAQ_8", "SAQ_9", "SAQ_10", "SAQ_11", "SAQ_12", "SAQ_13", "SAQ_14", "SAQ_15", "SAQ_16", "SAQ_17", "SAQ_18", "SAQ_19", "SAQ_20"],


    ["BAI_1", "BAI_2", "BAI_3", "BAI_4", "BAI_5", "BAI_6", "BAI_7", "BAI_8", "BAI_9", "BAI_10", "BAI_11", "BAI_12", "BAI_13", "BAI_14", "BAI_15", "BAI_16", "BAI_17", "BAI_18","BAI_19", "BAI_20", "BAI_21"],
    ["CUDITR_1", "CUDITR_2", "CUDITR_3", "CUDITR_4", "CUDITR_5", "CUDITR_6", "CUDITR_7", "CUDITR_8"],
    //["FTND_1", "FTND_2", "FTND_3", "FTND_4", "FTND_5", "FTND_6"],  
    ["SAFE_1","SAFE_2","SAFE_3","SAFE_4","SAFE_5","SAFE_6","SAFE_7","SAFE_8","SAFE_9","SAFE_10","SAFE_11","SAFE_12","SAFE_13","SAFE_14","SAFE_15","SAFE_16","SAFE_17","SAFE_18","SAFE_19","SAFE_20","SAFE_21","SAFE_22","SAFE_23","SAFE_24"],
    ["AES_1","AES_2","AES_3","AES_4","AES_5","AES_6","AES_7","AES_8","AES_9","AES_10","AES_11","AES_12","AES_13","AES_14","AES_15","AES_16","AES_17","AES_18","AES_1_num","AES_2_num","AES_3_num","AES_4_num","AES_5_num","Reversed_AES_6_num","AES_7_num","AES_8_num","AES_9_num","Reversed_AES_10_num","Reversed_AES_11_num","AES_12_num","AES_13_num","AES_14_num","AES_15_num","AES_16_num","AES_17_num","AES_18_num"],
    ["SIAS_1","SIAS_2","SIAS_3","SIAS_4","SIAS_5","SIAS_6","SIAS_7","SIAS_8","SIAS_9","SIAS_10","SIAS_11","SIAS_12","SIAS_13","SIAS_14","SIAS_15","SIAS_16","SIAS_17","SIAS_18","SIAS_19","SIAS_20"],
    ["SAS_1","SAS_2","SAS_3","SAS_4","SAS_5","SAS_6","SAS_7","SAS_8","SAS_9","SAS_10","SAS_11","SAS_12","SAS_13","SAS_14","SAS_15","SAS_16","SAS_17","SAS_18","SAS_19","SAS_20"],
    ["RS_1","RS_2","RS_3","RS_4","RS_5","RS_6","RS_7","RS_8","RS_9","RS_10"],
    ["rle_1","rle_2","rle_3","rle_4","rle_5","rle_6","rle_7","rle_8","rle_9","rle_10","rle_11","rle_12","rle_13","rle_14","rle_15","rle_16","rle_17","rle_18","rle_19","rle_20","rle_21"],
    ["SDS_1","SDS_2","SDS_3","SDS_4","SDS_5"],
    ["DAST_1","DAST_2","DAST_3","DAST_4","DAST_5","DAST_6","DAST_7","DAST_8","DAST_9","DAST_10","DAST_11","DAST_12","DAST_13","DAST_14","DAST_15","DAST_16","DAST_17","DAST_18","DAST_19","DAST_20","DAST_21","DAST_22","DAST_23","DAST_24","DAST_25","DAST_26","DAST_27","DAST_28"],
    ["SRLE_1","SRLE_2","SRLE_3","SRLE_4","SRLE_5","SRLE_6","SRLE_7","SRLE_8","SRLE_9","SRLE_10","SRLE_11","SRLE_12","SRLE_13","SRLE_14","SRLE_15","SRLE_16","SRLE_17","SRLE_18","SRLE_19","SRLE_20","SRLE_21","SRLE_22","SRLE_23","SRLE_24","SRLE_25","SRLE_26","SRLE_27","SRLE_28","SRLE_29","SRLE_30","SRLE_31","SRLE_32","SRLE_33","SRLE_34","SRLE_35","SRLE_36","SRLE_37","SRLE_38","SRLE_39","SRLE_40","SRLE_41"],
    ["AUDITR_1","AUDITR_2","AUDITR_3","AUDITR_4","AUDITR_5","AUDITR_6","AUDITR_7","AUDITR_8","AUDITR_9","AUDITR_10"],
    ["SHAPS_1","SHAPS_2","SHAPS_3","SHAPS_4","SHAPS_5","SHAPS_6","SHAPS_7","SHAPS_8","SHAPS_9","SHAPS_10","SHAPS_11","SHAPS_12","SHAPS_13","SHAPS_14","SHAPS_15"],
    ["Age_0-6_1_Duration","Age_7-12_1_Duration","Age_13-18_1_Duration","Age_0-6_2_Duration","Age_7-12_2_Duration","Age_13-18_2_Duration","Age_0-6_3_Duration","Age_7-12_3_Duration","Age_13-18_3_Duration","Age_0-6_4_Duration","Age_7-12_4_Duration","Age_13-18_4_Duration","Age_0-6_5_Duration","Age_7-12_5_Duration","Age_13-18_5_Duration","Age_0-6_6_Duration","Age_7-12_6_Duration","Age_13-18_6_Duration","Age_0-6_7_Duration","Age_7-12_7_Duration","Age_13-18_7_Duration","Age_0-6_8_Duration","Age_7-12_8_Duration","Age_13-18_8_Duration","Age_0-6_9_Duration","Age_7-12_9_Duration","Age_13-18_9_Duration","Age_0-6_10_Duration","Age_7-12_10_Duration","Age_13-18_10_Duration","Age_0-6_11_Duration","Age_7-12_11_Duration","Age_13-18_11_Duration","Age_0-6_12_Duration","Age_7-12_12_Duration","Age_13-18_12_Duration","Age_0-6_13_Duration","Age_7-12_13_Duration","Age_13-18_13_Duration","Age_0-6_14_Duration","Age_7-12_14_Duration","Age_13-18_14_Duration","Age_0-6_15_Duration","Age_7-12_15_Duration","Age_13-18_15_Duration","Age_0-6_16_Duration","Age_7-12_16_Duration","Age_13-18_16_Duration","Age_0-6_17_Duration","Age_7-12_17_Duration","Age_13-18_17_Duration","Age_0-6_18_Duration","Age_7-12_18_Duration","Age_13-18_18_Duration","Age_0-6_19_Duration","Age_7-12_19_Duration","Age_13-18_19_Duration","Age_0-6_20_Duration","Age_7-12_20_Duration","Age_13-18_20_Duration","Age_0-6_21_Duration","Age_7-12_21_Duration","Age_13-18_21_Duration","Age_0-6_22_Duration","Age_7-12_22_Duration","Age_13-18_22_Duration","Age_0-6_23_Duration","Age_7-12_23_Duration","Age_13-18_23_Duration","Age_0-6_24_Duration","Age_7-12_24_Duration","Age_13-18_24_Duration","Age_0-6_25_Duration","Age_7-12_25_Duration","Age_13-18_25_Duration","Age_0-6_26_Duration","Age_7-12_26_Duration","Age_13-18_26_Duration","Age_0-6_27_Duration","Age_7-12_27_Duration","Age_13-18_27_Duration","Age_0-6_28_Duration","Age_7-12_28_Duration","Age_13-18_28_Duration","Age_0-6_29_Duration","Age_7-12_29_Duration","Age_13-18_29_Duration"],
    ["Severity_1","Impact_1","Severity_2","Impact_2","Severity_3","Impact_3","Severity_4","Impact_4","Severity_5","Impact_5","Severity_6","Impact_6","Severity_7","Impact_7","Severity_8","Impact_8","Severity_9","Impact_9","Severity_10","Impact_10","Severity_11","Impact_11","Severity_12","Impact_12","Severity_13","Impact_13","Severity_14","Impact_14","Severity_15","Impact_15","Severity_16","Impact_16","Severity_17","Impact_17","Severity_18","Impact_18","Severity_19","Impact_19"],
    ["tics_1","tics_2","tics_3","tics_4","tics_5","tics_6","tics_7","tics_8","tics_9","tics_10","tics_11","tics_12","tics_13","tics_14","tics_15","tics_16","tics_17","tics_18","tics_19","tics_20","tics_21","tics_22","tics_23","tics_24","tics_25","tics_26","tics_27","tics_28","tics_29","tics_30"],
    ["TotalJoints","DaysJoints","PercDaysJoints","AvgJointPerUseDay","AvgJointPerDay","AbstinentDays","EstJointsYear","GreatJointDay","JointsPerWeek"]
];




export { tableNamesSelf, displayNamesSelf, internalNamesSelf, sqlCreateTablesSelf, tableColumnsSelf }; 