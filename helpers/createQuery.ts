import { useContext } from "react";
import { ParticipantContext } from "../context and async storage/ParticipantContext";
import queryZipper from "./queryZipper";

import { sqlCreateTablesSelf, tableNamesSelf } from "../schemaconstants";

function createQuery (questionnaireNumber : number, data : Array<any>, val : string) : string {

    let query : string = "";

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

        query = query + "\nstrSQL='" + "INSERT INTO " + tableName1 + " VALUES (" + myarray1.toString() + ")'";
        query = query + "\nCurrentdb.Execute strSQL";

        query = query + "\nstrSQL='" + "INSERT INTO " + tableName2 + " VALUES (" + myarray2.toString() + ")'";
        query = query + "\nCurrentdb.Execute strSQL";

        return query;
    } else {

        const tablename = tableNamesSelf[questionnaireNumber];

        query = query + "\nUPDATE " + tablename + " SET " + queryZipper(questionnaireNumber, data) + " WHERE ((PatientID=" + val + ") AND (visit=1002));\n"

        console.log(query);
        return query;
    }

}

export default createQuery;