import { displayNamesSelf } from "../schemaconstants";

function returnDisplayName (questionnaireNumber : number) : string {
    return displayNamesSelf[questionnaireNumber];
}

export default returnDisplayName;