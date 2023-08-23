// complicated, dont remember how it works
// orginally wanted to implement digital signatures, but Pablo said he didnt want it so its abandonned
// To my knowlegde this code still works and can be seen in Signature.js but its a little buggy

// If you want to reduce file size and speed up bulid times, deleting this, Signature.js and its related dependencies like react-native-skia could help 

import React, { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { Canvas, Path } from "@shopify/react-native-skia";

interface IPath {
  segments: String[];
  color?: string;
}

const noPressStyles = StyleSheet.create({
  reset: {
    padding: 5,
    borderRadius: 10, 
    borderColor: 'black', 
    borderStyle: 'solid', 
    borderWidth: 2, 
    backgroundColor: 'white', 
  }
});

const onPressStyles = StyleSheet.create({
  reset: {
    padding: 5,
    borderRadius: 10, 
    borderColor: 'black', 
    borderStyle: 'solid', 
    borderWidth: 2, 
    backgroundColor: 'black', 
  }
});

let styles = noPressStyles;

const stylesPress = () => {
  styles = onPressStyles;
}

const resetStyles = () => {
  styles = noPressStyles;
}




const Draw = () => {

  const [paths, setPaths] = useState<IPath[]>([]);

  const pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: "black",
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);

    const myCanvas = (
      <Canvas style={{ flex: 8 }}>

        {paths.map((p, index) => (
          <Path
            key={index}
            path={p.segments.join(" ")}
            strokeWidth={5}
            style="stroke"
            color={p.color}
          />
        ))}
      </Canvas>
    );


    return (
      <GestureHandlerRootView style={{ flex: 1, display:'flex', flexDirection: 'row', justifyContent: 'flex-start', maxWidth: 400, maxHeight: 150}}>
      <GestureDetector gesture={pan}>

          <View style={{ display: 'flex', flex: 1, backgroundColor: "white", maxWidth: 300, maxHeight: 150, }}>

          {myCanvas}

          </View>


      </GestureDetector>

      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 10,}}>
      <Pressable style={styles.reset} onPressIn={stylesPress} onPress={ () =>  { 
        setPaths([]);
        resetStyles();
      }  }  >
        <Text>Reset</Text>
      </Pressable>
      </View>


      </GestureHandlerRootView>
    );
  }

export default Draw;
  