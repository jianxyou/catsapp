// deletes all stored data created by the app
// this action is irreverisble

import * as FileSystem from 'expo-file-system';

async function clearData () {
    
    const path = FileSystem.documentDirectory + '/cats-data';

    FileSystem.deleteAsync(path)
        .then(() => console.log('data removed!'))
        .catch(err => console.log(err.message));
}

export default clearData;