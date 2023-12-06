import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import RNFS from 'react-native-fs';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

function PdfScreen({ navigation }) {

    const [pdfUri, setPdfUri] = useState(null);

    const getAllImages = async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const imageKeys = keys.filter(key => key.startsWith('image')); // 筛选出以 'image' 开头的键
          const imageItems = await AsyncStorage.multiGet(imageKeys); // 仅获取这些键对应的项目
          console.log(imageItems);
          return imageItems.map(item => item[1]); // 返回所有图片的 Base64 编码
        } catch (error) {
          console.error('Error fetching images', error);
          return []; // 发生错误时返回空数组
        }
      };

    // const createPdfFromImages = async (base64Images) => {
    //   const pdfPath = `${RNFS.DocumentDirectoryPath}/myPDF.pdf`;

    //   // 创建 PDF 文档对象
    //   const pdfDoc = PDFDocument.create(pdfPath);
    //   if (!pdfDoc) {
    //       console.error('Unable to create PDF document');
    //       return null;
    //   }
      

    //     console.log("di 1_hang")
    //     for (const base64Image of base64Images) {
            
    //       const imagePath = `${RNFS.TemporaryDirectoryPath}/${Math.random().toString(36).substring(7)}.png`;
    //       await RNFS.writeFile(imagePath, base64Image, 'base64');
        
    //       const page = await PDFPage.create()
    //         .setMediaBox(200, 200)
    //         .drawImage(imagePath, 'png', {
    //           x: 5,
    //           y: 5,
    //           width: 200,
    //           height: 200,
    //         });
    //       console.log(page);
    //       await pdfDoc.addPages(page);
    //     }
    //     console.log(pdfDoc);
        

    //     await pdfDoc.write();
    //     console.log("di 3_hang");

    //     return pdfPath;
    //   };


    

const createPdfFromImages = async (base64Images) => {
  // 创建 HTML 字符串，包含所有的 base64 编码的图片
  let imagesHtml = await base64Images.map((imgBase64) => {
    return `<img src="data:image/png;base64,${imgBase64}" style="width:100%;"><br>`;
  }).join('');

   const options = {
    html: `<html><body>${imagesHtml}</body></html>`, // 将所有图片作为 HTML 内容
    fileName: 'myPDF',
    directory: 'Documents',
  };

  try {
    const file = await RNHTMLtoPDF.convert(options); // 创建 PDF
    console.log(file.filePath);
    return file.filePath; // 返回 PDF 文件路径
  } catch (error) {
    console.error('Error creating PDF', error);
    return null;
  }
};



    const handlePress = async () => {
    try {
      const base64Images = await getAllImages();
      const pdfPath = await createPdfFromImages(base64Images);
      // console.log(pdfPath);
      // setPdfUri(`file://${pdfPath}`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      Alert.alert('Error', '无法生成 PDF');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="生成 PDF" onPress={handlePress} />
      {/* {pdfUri && <PDFViewer uri={pdfUri} />} 假设你有一个用于显示 PDF 的组件 */}
    </View>
  );
};
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PdfScreen;
