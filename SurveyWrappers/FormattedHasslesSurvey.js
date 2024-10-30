import { View, Text } from 'react-native';

import questionListStyle from '../styles/question list styles/questionListStyle';
import FinalWrapper from '../partials/FinalWrapper';

import returnDisplayName from '../helpers/returnDisplayName';

const styles = questionListStyle;

const FormattedHasslesSurvey = ({questionnaireNumber, listofqs, data, goHome}) => {
    console.log(data);
    const desc=(
        <View>
        <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    {returnDisplayName(questionnaireNumber)}
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

                {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                </Text>



                <Text style={styles.desctext}>
                    {"LES TRACAS sont des irritants – des choses qui vous agacent ou vous dérangent. Ils peuvent vous rendre contrarié ou en colère.\nLES SOURCES DE SATISFACTION sont des événements qui vous font du bien ; ils peuvent vous rendre heureux, content et satisfait.\n"}
                    {"\nCertains tracas et sources de satisfaction se produisent de manière assez régulière, tandis que d'autres sont rares. Certains ont un grand effet sur vous, et d'autres un petit effet. Ce questionnaire énumère des choses qui peuvent être des tracas ou des sources de satisfaction dans la vie quotidienne. Vous constaterez que, au cours d'une journée, certaines de ces choses n'auront été que des tracas pour vous, et d'autres seulement des sources de satisfaction."}
                    {" D'autres auront été à la fois des tracas "} 
                    <Text style={styles.makeitalic}>{"ET"}</Text> {" des sources de satisfaction.\n"}
                    {"\nDIRECTIVES :  Veuillez réfléchir à quel point chaque élément a été un tracas et à quel point il a été une source de satisfaction pour vous"} <Text style={styles.makebold}>{"HIER"}</Text>. {"Veuillez indiquer sur le"} <Text style={styles.underline} >{"côté gauche"}</Text> {"de la page (sous "} <Text style={styles.makebold}>{"TRACAS"}</Text>{") à quel point l'élément a été un tracas en encerclant le chiffre approprié, puis indiquez sur le "}<Text style={styles.underline}>{"côté droit"}</Text> {"de la page (sous "}<Text style={styles.makebold}>{"SATISFACTIONS"}</Text>{") à quel point il a été une source de satisfaction pour vous en encerclant le chiffre approprié. \n"}
                    {"N'oubliez pas, sélectionnez "}<Text style={styles.makebold}>{"un"}</Text>{" chiffre du côté gauche de la page et "}<Text style={styles.makebold}>{"un"}</Text>{" chiffre du côté droit de la page pour "}<Text style={styles.makebold}>{"chaque"}</Text>{" élément."}
                </Text>


                <View style={styles.desccolumns} >
                    
                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>{"À quel point chacun de ces éléments a-t-il été un tracas ou une contrariété pour vous "}
                        <Text style={styles.makebold}><Text style={styles.underline}>{"HIER"}</Text></Text>
                        {"\n\n0= Aucun ou non applicable"}
                        {"\n1= un peu"}
                        {"\n2= pas mal"}
                        {"\n3= beaucoup"}

                        </Text>
                    </View>

                    <View style={styles.onedesccolumn} >
                        <Text style={styles.desctext}>{"À quel point chacun de ces éléments a-t-il été une source de satisfaction ou de plaisir pour vous "}
                        <Text style={styles.makebold}><Text style={styles.underline}>{"HIER"}</Text></Text>
                        {"\n\n0= Aucun ou non applicable"}
                        {"\n1= un peu"}
                        {"\n2= pas mal"}
                        {"\n3= beaucoup"}

                        </Text>
                        
                    </View>

                </View>
                <Text style={styles.desctext}>
    {"Veuillez sélectionner un chiffre "}
    <Text style={styles.underline}>{"À GAUCHE pour les TRACAS"}</Text>
    {" et un chiffre à "}<Text style={styles.underline}>{"DROITE pour les SOURCES DE SATISFACTION"}</Text>
    {" pour "}<Text style={styles.underline}>{"CHAQUE ÉLÉMENT"}</Text>{"."}
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

    return FinalWrapper(questionnaireNumber, [desc, listofqs], data, goHome, styles,null);
}

 
export default FormattedHasslesSurvey;