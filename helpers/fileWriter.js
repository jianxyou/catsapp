import * as FileSystem from 'expo-file-system';
import { useContext } from 'react';
import { ParticipantContext } from '../context and async storage/ParticipantContext';
import newDir from './newDir';

import createQuery from './createQuery';

async function fileWrite (data, val, questionnaireNumber) {
    const dirpath = FileSystem.documentDirectory + 'cats-data';
    // Ensure the directory exists
    newDir(dirpath);

    // Create the query/data string to write to the file
    const query = createQuery(questionnaireNumber, data, val);

    // Here we set the file name to 'data.txt'
    const filepath = dirpath + '/data.txt';

    // Read the current contents of the file
    let currentcontents = '';
    try {
        currentcontents = await FileSystem.readAsStringAsync(filepath);
    } catch (e) {
        // If the file does not exist, an error will be thrown
        console.log("File does not exist, will be created.", e.message);
    }

    // Concatenate the new data with the existing data
    const toWrite = currentcontents + query;

    // Write the new contents back to the file
    try {
        await FileSystem.writeAsStringAsync(filepath, toWrite);
        console.log('file written!', filepath);
    } catch (e) {
        console.log("Error writing the file", e.message);
    }
}
export default fileWrite;
