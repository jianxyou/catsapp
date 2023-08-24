import { View, ScrollView, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { captureRef } from 'react-native-view-shot';

import SubmitButton from "./SubmitButton";
import DoubleImageSubmit from './DoubleImageSubmit';

// the final step in formatting all surveys
// adds the button and combines the desc, questions and button

// @pre all parameters must be non-null

// @params arr is an array containing the elements that you want to render
// @params data is an array containing the data to be saved
// @params goHome is a function which returns the user to the home screen, it is executed on press of the submit button
// @params styles contains css that adds a little margin around the survey

// initally, the function to capture images had problems with capturing long images, 
// however, this seems to be fixed
// orginially ref2, longenough, half, qlist, first, last, doublebuttons were parameters exclusively for that, but they are no longer necessary
// i suggest ingnoring those variables 

const FinalWrapper = (title, arr, data, goHome, styles) => {

    // creates a refernece to a JSX element, essentially a variable name
    const ref1 = useRef();
    const ref2 = useRef();

    let longenough = false;

    const qlist = arr[1];
    const half = Math.ceil(qlist.length / 2);

    const first = qlist.splice(0, half);
    const last = qlist.splice(half);

    const updatebool = () => {
        if (qlist.length > 30) { longenough = true; }
    }

    // function that saves the image

    // @params ref is a reference to a JSX element see useRef()

    // @post return the uri of the generated image 
    // @post this image is stored in cache and will be copied and then the orginial copy will be deleted once the process terminates

    async function capture(ref) {
        const uri = await captureRef(ref, {
            format: 'png',
            quality: 1.0,
            result: 'tmpfile',
            fileName: title+'image',
            snapshotContentContainer: true,
            useRenderInContext: true,
        })

        const myuri = 'file://' + uri;

        return myuri;
    }

    // in partice shortresult will always return since bug was fixed

    const button = <SubmitButton data={data} capture={() => capture(ref1)} goHome={goHome} title={title}/>
    arr.push(button);

    const shortresult = (
        <View style={styles.page}>
            <ScrollView ref={ref1} >
                {arr.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>
        </View>
    );

    first.unshift(arr[0]);

    const doublebutton = <DoubleImageSubmit data={data} goHome={goHome} capture1={() => capture(ref1)} capture2={() => capture(ref2)} title={title} />
    last.push(doublebutton);

    const longresult = (
        <View style={styles.page}>

            <ScrollView ref={ref1} >
                {first.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>

            <ScrollView ref={ref2} >
                {last.map((val, index) => <View key={index}>{val}</View>)}
            </ScrollView>
        </View>
    );

    return longenough ? longresult : shortresult;
}
 
export default FinalWrapper;