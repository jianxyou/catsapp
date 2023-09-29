import { internalNamesSelf } from "../schemaconstants";

function returnInternalName (questionnaireNumber : number) : string {
    return internalNamesSelf[questionnaireNumber];
}

export default returnInternalName;