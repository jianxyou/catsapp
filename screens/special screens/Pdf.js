// PdfScreen.js
import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import Pdf from 'react-native-pdf';
import { getAllImages, createPdfFromImages, savePdfToFileApp } from '../../partials/pdfUtils';

function PdfScreen({ navigation }) {
    const [pdfUri, setPdfUri] = useState(null);

    const handlePress = async () => {
        try {
            const base64Images = await getAllImages();
            const pdfPath = await createPdfFromImages(base64Images);
            setPdfUri(`file://${pdfPath}`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            Alert.alert('Error', 'Unable to generate PDF');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="get pdf" onPress={handlePress} />
            <Button title="save" onPress={() => pdfUri && savePdfToFileApp(pdfUri)} />
            {pdfUri && <Pdf source={{ uri: pdfUri }} style={styles.pdfView} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pdfView: {
        flex: 1,
        width: '100%',
        height: '80%',
    },
});

export default PdfScreen;
