import { tableNamesSelf } from "../schemaconstants";

function returnTableName (questionnaireNumber : number) : string | Array<string> {
    return tableNamesSelf[questionnaireNumber];
}