import  * as FileSystem from 'expo-file-system';

async function newDir (path) {

    const dirInfo = await FileSystem.getInfoAsync(path);

    if (!dirInfo.exists) {
        FileSystem.makeDirectoryAsync(path)
            .then(res => console.log('created dir!'))
            .catch(err => console.log(err.message));

    } else console.log('dir alreeady exists!');
}

export default newDir;