// contains the context fo the currently set participant ID
// this code use the 'createContext' function to allow for the val of the particiapant id, and the function to change it to be globally available

import { createContext } from "react";

export const ParticipantContext = createContext({val: "hi", setVal: s => {}});
