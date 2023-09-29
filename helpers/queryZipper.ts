import { tableColumnsSelf } from "../schemaconstants";

function queryZipper(questionnaireNumber : number, data : Array<any>) : string | Array<String> {

    let query = ""; 

    let mycolumns = tableColumnsSelf[questionnaireNumber];

    if (questionnaireNumber == 3) {

        let mycolumns1 = mycolumns[0];
        let mycolumns2 = mycolumns[1];

        for(let i : number = 0; i < mycolumns1.length; i++) {
            let currcolumn : string = mycolumns1[i];
            let currinsert = currcolumn + " = " + data[i] + ", ";

            query = query + currinsert;
        }


        for(let i : number = 0; i < mycolumns2.length; i++) {
            let currcolumn : string = mycolumns2[i];
            let currinsert = currcolumn + " = " + data[i+53] + ", ";

            query = query + currinsert;

        }

    } else {

        for(let i : number = 0; i < mycolumns.length; i++) {
            let currcolumn : string = mycolumns[i];
            let currinsert = currcolumn + " = " + data[i] + ", ";

            query = query + currinsert;

        }
    }

    return query;
}

export default queryZipper;