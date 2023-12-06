import { useContext } from "react";
import { ParticipantContext } from "../context and async storage/ParticipantContext";
import queryZipper from "./queryZipper";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { sqlCreateTablesSelf, tableNamesSelf } from "../schemaconstants";

async function createQuery (questionnaireNumber : number, data : Array<any>, val : string) {

    let query : string = "";

    const stringValue = await AsyncStorage.getItem('clientId');
    const storedClientId = stringValue ? JSON.parse(stringValue) : null;
    

    const stringValue2 = await AsyncStorage.getItem('visitId');
    const storedVisitId = stringValue2 ? JSON.parse(stringValue2) : null;


    if (questionnaireNumber == 3) {
        const myarr = tableNamesSelf[3];
        const tableName1 : string = myarr[0];
        const tableName2 : string = myarr[1];

        const myarray1 : Array<any> = new Array();
        const myarray2 : Array<any> = new Array();

        for(let i : number = 0; i <= 54; i++) {
            myarray1[i] = data[i];
        } 
        for(let i : number = 55; i <= 108; i++) {
            myarray2[i-55] = data[i];
        } 

        query = query + "UPDATE " + tableName1 + " SET " + queryZipper(questionnaireNumber, myarray1) + " WHERE ((PatientID=" + val + ") AND (visit=102));\n"

        query = query + "UPDATE " + tableName2 + " SET " + queryZipper(questionnaireNumber, myarray2) + " WHERE ((PatientID=" + val + ") AND (visit=102));\n"

        return query;
    } else {

        const tablename = tableNamesSelf[questionnaireNumber];
        query = query + "UPDATE " + tablename + " SET " + queryZipper(questionnaireNumber, data) + " WHERE ((PatientID=" +storedClientId + ") AND (visit=" + storedVisitId +"));\n"
        console.log("wocaole");
        console.log(query);
        return query;
    }
    
    
}

export default createQuery;