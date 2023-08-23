import { useState } from 'react';
import { View, Text } from 'react-native';

import RadioWrapper from "../input wrappers/RadioWrapper";

import cgiRadioStyles from "../styles/input styles/cgiRadioStyles";
import textstyles from "../styles/textstyles";
import cgiCustomStyle from "../styles/question styles/cgiCustomStyle";

const CustomCgiQuestion = ({callback}) => {

    const styles = cgiCustomStyle;

    const num = 2;

    const labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16"];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    const [isLiked, setIsLiked] = useState(labels.map(        
        (val, index) => ( { key: index, id: index, value: nums[index], name: val, selected: false } )
        
    ));

    const onRadioBtnClick = (item) => {

        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
            ? { ...isLikedItem, selected: !(isLikedItem.selected) }
            : { ...isLikedItem, selected: false }

        );

        setIsLiked(updatedState);

        if (!(item.selected)) callback(num, item.value);
        else callback (num, null);
    };

    const question = (

        <View style={styles.questionlabelcontainer}>

            <View style={styles.number}>
                <View style={styles.number2}>
                <Text style={styles.questionlabel}>
                    <Text style={textstyles.makebold}>
                    {(num +1)+"."}
                    </Text>
                </Text>
                </View>
            </View>

            <View style={styles.alltext}>

                <View style={styles.text}>
                    
                <Text style={styles.questionlabel}> 
                <Text style={textstyles.makebold}>Efficacy index</Text>: Rate this item on the basis of <Text style={textstyles.makebold}>drug effect only</Text>.
{"\n"}Select the terms which best describe the degrees of therapeutic effect and side effects and record the number in the box where the two items intersect.
{"\n"}EXAMPLE: Therapeutic effect is rated as ‘Moderate’ and side effects are judged ‘Do not significantly interfere with patient’s functioning’.
                </Text>
        
                </View>

            </View>

        </View>

    );

    return (
        <View style={styles.singlequestion}>

            {question}

            <View style={styles.finallabels}>

                <View style={styles.finallabel}>
                    <Text style={textstyles.desctext}><Text style={textstyles.makebold}>Therapeutic effect</Text></Text>
                </View>
                
                <View style={styles.finallabel}>
                    <Text style={textstyles.desctext}><Text style={textstyles.makebold}>Side effects</Text></Text>
                </View>
                    
            </View>

            <View style={styles.withsideoptions}>

                <View style={styles.sideoptions}>

                    <View style={styles.singleside}>
                            <Text style={textstyles.desctext}>
                                <Text style={textstyles.makebold}>Marked </Text>
                                Vast improvement. Complete or nearly complete remission of all symptoms
                            </Text>
                        </View>

                        <View style={styles.singleside}>
                            <Text style={textstyles.desctext}>
                                <Text style={textstyles.makebold}>Moderate </Text>
                                Decided improvement. Partial remission of symptoms
                            </Text>
                        </View>


                        <View style={styles.singleside}>
                            <Text style={textstyles.desctext}>
                                <Text style={textstyles.makebold}>Minimal </Text>
                                Slight improvement which doesn't alter status of care of patient
                            </Text>
                        </View>

                        <View style={styles.singleside}>
                            <Text style={textstyles.desctext}>
                                <Text style={textstyles.makebold}>Unchanged or worse </Text>
                            </Text>
                        </View>

                </View>

                <View style={styles.withtopoptions}>

                    <View style={styles.topoptions}>

                        <View style={styles.singletop}>
                            <Text style={textstyles.desctext}>
                            <Text style={textstyles.makeitalic}>None</Text>
                            </Text>
                        </View>

                        <View style={styles.singletop}>
                            <Text style={textstyles.desctext}>
                            <Text style={textstyles.makeitalic}>Does not significantly interfere with patient's functioning</Text>
                            </Text>
                        </View>


                        <View style={styles.singletop}>
                            <Text style={textstyles.desctext}>
                            <Text style={textstyles.makeitalic}>Significantly interferes with patient's functioning</Text>
                            </Text>
                        </View>

                        <View style={styles.singletop}>
                            <Text style={textstyles.desctext}>
                            <Text style={textstyles.makeitalic}>Outweighs therapeutic effect</Text>
                            </Text>
                        </View>


                    </View>

                    <View style={styles.alloptions}>
                        <RadioWrapper isLiked={isLiked} onRadioBtnClick={onRadioBtnClick} styles={cgiRadioStyles} />
                    </View>

                </View>

            </View>


        </View> 
    );

}
export default CustomCgiQuestion;