import { useContext } from "react";
import { ParticipantContext } from "../context and async storage/ParticipantContext";
import queryZipper from "./queryZipper";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { sqlCreateTablesSelf, tableNamesSelf,tableColumnsSelf } from "../schemaconstants";
import queryZipper_insert from "./queryZipper_insert";

async function createQuery (questionnaireNumber : number, data : Array<any>, val : string) {

    let query : string = "";

    const stringValue = await AsyncStorage.getItem('clientId');
    const storedClientId = stringValue ? JSON.parse(stringValue) : null;
    

    const stringValue2 = await AsyncStorage.getItem('visitId');
    const storedVisitId = stringValue2 ? JSON.parse(stringValue2) : null;


    if (questionnaireNumber == 4) {
        const myarr = tableNamesSelf[4];
        const tableName1 : string = myarr[0];
        const tableName2 : string = myarr[1];

        // const myarray1 : Array<any> = new Array();
        // const myarray2 : Array<any> = new Array();

        const columnsArray1 = ["hass1","hass2","hass3","hass4","hass5","hass6","hass7","hass8","hass9","hass10","hass11","hass12","hass13","hass14","hass15","hass16","hass17","hass18","hass19","hass20","hass21","hass22","hass23","hass24","hass25","hass26","hass27","hass28","hass29","hass30","hass31","hass32","hass33","hass34","hass35","hass36","hass37","hass38","hass39","hass40","hass41","hass42","hass43","hass44","hass45","hass46","hass47","hass48","hass49","hass50","hass51","hass52","hass53"];
        const columnsArray2 = ["up1","up2","up3","up4","up5","up6","up7","up8","up9","up10","up11","up12","up13","up14","up15","up16","up17","up18","up19","up20","up21","up22","up23","up24","up25","up26","up27","up28","up29","up30","up31","up32","up33","up34","up35","up36","up37","up38","up39","up40","up41","up42","up43","up44","up45","up46","up47","up48","up49","up50","up51","up52","up53"];


        const columnsString1 = "( PatientID, visit, " + columnsArray1.join(", ") + ")";
        const columnsString2 = "( PatientID, visit, " + columnsArray2.join(", ") + ")";

        // for(let i : number = 0; i <= 54; i++) {
        //     myarray1[i] = data[i];
        // } 
        // for(let i : number = 55; i <= 108; i++) {
        //     myarray2[i-55] = data[i];
        // } 

        query = query + "INSERT INTO " + tableName1 + " " + columnsString1  + " VALUES " + "( " + storedClientId + "," + storedVisitId + "," + queryZipper_insert(questionnaireNumber,data) + " )" + ";";

        query = query + "INSERT INTO " + tableName2 + " " + columnsString2  + " VALUES " + "( " + storedClientId + "," + storedVisitId + "," + queryZipper_insert(questionnaireNumber,data) + " )" + ";";

        return query;
    } 
    
    else {

//         INSERT INTO tbl_CUDITR (PatientID, visit, CUDITR_1, CUDITR_2, CUDITR_3, CUDITR_4, CUDITR_5, CUDITR_6, CUDITR_7, CUDITR_8)
// VALUES (999, 999, null, 0, 1, 2, 3, 4, null, null);

        const tablename = tableNamesSelf[questionnaireNumber];
        //query = query + "UPDATE " + tablename + " SET " + queryZipper(questionnaireNumber, data) + " WHERE ((PatientID=" +storedClientId + ") AND (visit=" + storedVisitId +"));\n"
    
        const columnsArray = tableColumnsSelf[questionnaireNumber];
        const columnsString = "( PatientID, visit, " + columnsArray.join(", ") + ")";

        query = query + "INSERT INTO " + tablename + " " + columnsString  + " VALUES " + "( " + storedClientId + "," + storedVisitId + "," + queryZipper_insert(questionnaireNumber,data) + " )" + ";";
        
        query = query.replace(/undefined/g, 'null');
        
    }

        return query;
    }
    
    

export default createQuery;