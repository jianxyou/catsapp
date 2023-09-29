import * as FileSystem from 'expo-file-system';
import { useContext } from 'react';
import { ParticipantContext } from '../context and async storage/ParticipantContext';
import newDir from './newDir';

import createQuery from './createQuery';

async function fileWrite (data, val, questionnaireNumber) {

    const dirpath = FileSystem.documentDirectory + 'cats-data'

    newDir(dirpath);

    const query = createQuery(questionnaireNumber, data, val);

    const filepath = dirpath + '/' + val + 'data.txt';

    const currentcontents = await FileSystem.readAsStringAsync(filepath);
    const toWrite = currentcontents + query;
    FileSystem.writeAsStringAsync(filepath, toWrite)
        .then(res => console.log('file written!', filepath))
        .catch(err => console.log("file created but not written", err.message));
}

export default fileWrite;