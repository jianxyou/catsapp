import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import { FlatList } from 'react-native';
import FinalWrapper from '../partials/FinalWrapper';

const styles = questionListStyle;

const FormattedHasslesSurvey = ({title, listofqs, data, goHome}) => {

    const desc=(
        <View>
        <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    Hassles and Uplifts Scale
                </Text>
        </View>
    
            <View style={styles.desc} >

                <Text style={styles.desctext}>
                {"HASSLES are irritants – things that annoy or bother you. They can make you upset or angry.\nUPLIFTS are events that make you feel good; they can make you glad, happy, and satisfied \n"}
                {"\nSome hassles and uplifts occur on a fairly regular basis while others are rare. Some have a big effect on you and other have a small effect. This questionnaire lists things that can be hassles or uplifts in day-to-day life. You will find that during the course of a day some of these things will have been only a hassle for you and some have been only an uplift."}
                {" Others will have been both a hassle "} 
                <Text style={styles.makeitalic}>{"AND"}</Text> {"an uplift.\n"}
                {"\nDIRECTIONS:  Please think about how much of a hassle and how much of an uplift each item was for you"} <Text style={styles.makebold}>{"YESTERDAY"}</Text>. {"Please indicate on the"} <Text style={styles.underline} >{"left-hand side"}</Text> {"of the page (under "} <Text style={styles.makebold}>{"HASSLES"}</Text>{") how much of a hassle the item was by circling the appropriate number, then indicate on the "}<Text style={styles.underline}>{"right-hand side"}</Text> {"of the page (under "}<Text style={styles.makebold}>{"UPLIFTS"}</Text>{") how much of an uplift it was for you by circling the appropriate number. \n"}
                {"Remember, select "}<Text style={styles.makebold}>{"one"}</Text>{" number on the left-hand side of the page and "}<Text style={styles.makebold}>{"one"}</Text>{" number on the right-hand side of the page for "}<Text style={styles.makebold}>{"each"}</Text>{" item."}
                </Text>

                <View style={styles.desccolumns} >
                    
                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>{"How much of a hassle or upset were each of these for you "}
                        <Text style={styles.makebold}><Text style={styles.underline}>{"YESTERDAY"}</Text></Text>
                        {"\n\n0= None or not applicable"}
                        {"\n1= somewhat"}
                        {"\n2= quite a bit"}
                        {"\n3= a great deal"}

                        </Text>
                    </View>

                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>{"How much of a uplift or enjoyment were each of these for you "}
                        <Text style={styles.makebold}><Text style={styles.underline}>{"YESTERDAY"}</Text></Text>
                        {"\n\n0= None or not applicable"}
                        {"\n1= somewhat"}
                        {"\n2= quite a bit"}
                        {"\n3= a great deal"}

                        </Text>
                        
                    </View>

                </View>


                <Text style={styles.desctext}>
                    {"Please select a number "}
                    <Text style={styles.underline}>{"LEFT for HASSLES"}</Text>
                {" and one number on the "}<Text style={styles.underline}>{"RIGHT for UPLIFTS"}</Text>
                {" for "}<Text style={styles.underline}>{"EVERY ITEM"}</Text>{"."}
                </Text>

                <View style={styles.desccolumns} >
                    
                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>
                            {"\nHASSLES"}
                        </Text>
                    </View>

                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>
                            {"\nUPLIFTS"}
                        </Text>
                        
                    </View>

                </View>

            </View>

        </View>
       
    );

    return FinalWrapper(title, [desc, listofqs], data, goHome, styles);
}

 
export default FormattedHasslesSurvey;