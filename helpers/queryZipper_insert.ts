import { isNewBackTitleImplementation } from "react-native-screens";
import { tableColumnsSelf } from "../schemaconstants";

function queryZipper_insert(questionnaireNumber : number, data : Array<any>,  hassOrUp : number) : string | Array<String> {

    let query = ""; 

    let mycolumns = tableColumnsSelf[questionnaireNumber];

    if (questionnaireNumber == 4) {

        if (hassOrUp == 0){
            for(let i : number = 0; i < 53; i++) {
                
                if (i == 52){

                    let currinsert = data[i]; 
                    query = query + currinsert;
                    break;
                }
                let currinsert = data[i] + ','; 
                query = query + currinsert;
            }
        }
        else{
            for(let i : number = 53; i < 106; i++) {

                if (i == 105){

                    let currinsert = data[i]; 
                    query = query + currinsert;
                    break;
                }
                let currinsert = data[i] + ','; 
                query = query + currinsert;
            }

        }

        

    } else {

        for(let i : number = 0; i < mycolumns.length; i++) {
            let currcolumn : string = mycolumns[i];

            // if table is SIAS
            if (questionnaireNumber == 12){
                if (data[i] == "Moderately"){
                    data[i] = 3;
                }
                else if (data[i] == "Slightly"){
                    data[i] = 2;
                }

                else if (data[i] == "Extremely"){
                    data[i] = 5;
                }

                else if (data[i] == "Not at all"){
                    data[i] = 1;
                }

                else if (data[i] == "Very"){
                    data[i] = 4;
                }
            }

            // if table is AES
            if (questionnaireNumber == 11){
                if (data[i] == "NOT AT ALL"){
                    data[i] = 1;
                }
                else if (data[i] == "SLIGHTLY"){
                    data[i] = 2;
                }

                else if (data[i] == "SOMEWHAT"){
                    data[i] = 3;
                }

                else if (data[i] == "A LOT"){
                    data[i] = 4;
                }
            }

            // if table is SAS
            if (questionnaireNumber == 13 ){
                if (data[i] == "None OR little of the time"){
                    data[i] = 1;
                }
                else if (data[i] == "Some of the time"){
                    data[i] = 2;
                }

                else if (data[i] == "Good part of the time"){
                    data[i] = 3;
                }

                else if (data[i] == "Most OR all of the time"){
                    data[i] = 4;
                }
            }


            // if table is SAFE

            
            // if table is Rosenberg scale
            if (questionnaireNumber == 14 ){
                if (data[i] == "Strongly Disagree"){
                    data[i] = 1;
                }
                else if (data[i] == "Disagree"){
                    data[i] = 2;
                }

                else if (data[i] == "Agree"){
                    data[i] = 3;
                }

                else if (data[i] == "Strongly Agree"){
                    data[i] = 4;
                }
            }



            // if table is SHAPS
            if (questionnaireNumber == 20 ){
                if (data[i] == "True"){
                    data[i] = 1;
                }
                else if (data[i] == "False"){
                    data[i] = 0;
                }
            }


            // if table is DAST
            if (questionnaireNumber == 17 ){
                if (data[i] == "YES"){
                    data[i] = 1;
                }
                else if (data[i] == "NO"){
                    data[i] = 0;
                }
            }


            

            // if table is TEC

            // if table is RLE
            if (questionnaireNumber == 21){
                if (data[i] == ""){
                    data[i] = "null"
                }

            }

            // if table is RLE
            if (questionnaireNumber == 15){
                if (data[i] == "YES"){
                    data[i] = 1;
                }

                else if (data[i] == "YES, still effects me"){
                    data[i] = 2;
                }

            }


            // if table is Drug history table.
            if (questionnaireNumber == 0){
                if (data[i] == null) {
                    data[i] = "Null";
                } else {

                    data[i] =  data[i]  
                }
            }


             // if table is SRLE
            if (questionnaireNumber == 18){
                if (data[i] == "not at all part of my life") {
                    
                    data[i] = 1;

                }
                else if (data[i] == "only slightly"){

                    data[i] = 2;
                }

                else if (data[i] == "distinctly"){
                    data[i] = 3;
    
                }


                else if (data[i] == "very much"){
                    data[i] = 4;
                }

            }


                
            if (questionnaireNumber == 21){

                if (i >= 32){
                    query = query.slice(0,-1);
                    break
                }
                
            
            }


            // if its  TICS
            if (questionnaireNumber == 23){
                if (data[i] == "Not at all") {
                    
                    data[i] = 0;

                }
                else if (data[i] == "Slightly"){

                    data[i] = 1;
                }

                else if (data[i] == "Moderately"){
                    data[i] = 2;
    
                }


                else if (data[i] == "Very"){
                    data[i] = 3;
                }

                else if (data[i] == "Extremely"){
                    data[i] = 4;
                }

            }
            
            


            if (i == mycolumns.length -1){

                let currinsert = data[i]; 
                query = query + currinsert;
                break;
            }


            
            

            let currinsert = data[i] + ','; 

            query = query + currinsert;
        }
    }

    return query;
}

export default queryZipper_insert;

