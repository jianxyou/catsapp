import { tableNamesSelf } from "../schemaconstants";

function createInsertInto(participantId : string) : string {

    let query : string = "";

    for (let i : number = 0; i < tableNamesSelf.length; i++) {

        let tablename : string | Array<string> = tableNamesSelf[i];

        if (i == 3) {

            const tablename1 = tablename[0];
            const tablename2 = tablename[0];

            let currquery = "INSERT INTO " + tablename1 + " (PatientID, visit) VALUES (" + participantId + ", 1002);\n";

            query = query + currquery;

            currquery = "INSERT INTO " + tablename2 + " (PatientID, visit) VALUES (" + participantId + ", 1002);\n"
            
            query = query + currquery;

        } else {

        let currquery = "INSERT INTO " + tablename + " (PatientID, visit) VALUES (" + participantId + ", 1002);\n"
        query = query + currquery;

        }

    }

    query = query + "\n";

    return query;
}

export default createInsertInto;