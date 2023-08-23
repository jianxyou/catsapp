import * as FileSystem from 'expo-file-system';

import newDir from './newDir';

async function fileWrite (text, title, val) {

    const dirpath = FileSystem.documentDirectory + 'cats-data'

    newDir(dirpath);

    const filepath = dirpath + '/' + val + title.replace(/\s/g,'')+'.txt';

    FileSystem.writeAsStringAsync(filepath, text)
        .then(res => console.log('file written!', filepath))
        .catch(err => console.log("file created but not written", err.message));
}

export default fileWrite;