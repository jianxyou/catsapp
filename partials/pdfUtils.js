// pdfUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import { Alert } from 'react-native';


export const getAllImages = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const imageKeys = keys.filter(key => key.startsWith('image'));
        const imageItems = await AsyncStorage.multiGet(imageKeys);
        console.log(imageItems);
        return imageItems.map(item => item[1]);
    } catch (error) {
        console.error('Error fetching images', error);
        return [];
    }
};

export const createPdfFromImages = async (base64Images) => {
    let imagesHtml = base64Images.map((imgBase64) => {
        return `<div style="page-break-after: always; width: 100%; height: 100%; text-align: center;"><img src="data:image/png;base64,${imgBase64}" style="width: 100%; height: 100%; object-fit: contain;"></div>`;
    }).join('');

    const options = {
        html: `<html><body style="margin: 0; padding: 0;">${imagesHtml}</body></html>`,
        fileName: 'myPDF',
        directory: 'Documents',
    };

    try {
        const file = await RNHTMLtoPDF.convert(options);
        return file.filePath;
    } catch (error) {
        console.error('Error creating PDF', error);
        return null;
    }
};

export const savePdfToFileApp = async (pdfUri) => {
    try {
        const fileName = 'MyPDF.pdf';
        const destinationPath = `${RNFS.LibraryDirectoryPath}/${fileName}`;

        if (await RNFS.exists(destinationPath)) {
            await RNFS.unlink(destinationPath);
        }

        await RNFS.copyFile(pdfUri, destinationPath);

        Alert.alert('Success', `File saved to: ${destinationPath}`);
        return destinationPath;
    } catch (error) {
        console.error('Error saving file to Files app', error);
        Alert.alert('Error', 'Unable to save file');
        return null;
    }
};