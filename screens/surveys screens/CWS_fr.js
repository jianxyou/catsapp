import {ScrollView, StyleSheet, View, Text } from 'react-native';

import SIASQuestionList from '../../surveytypes/SIASQuestionList';
import SASQuestionListStyle from '../../styles/question list styles/SASQuestionListStyle';
import SIASStyle from '../../styles/question styles/SIASStyle';
import CWSStyle from '../../styles/question styles/CWSStyle';
import cannabisRadioStyles from '../../styles/input styles/cannabisRadioStyles';
import CannabisQuestionList from '../../surveytypes/CannabisQuestionList';
import cannabisQuestionListStyle from '../../styles/question list styles/cannabisQuestionListStyle';

import textstyles from '../../styles/textstyles';

const CWS_fr_Screen = ({navigation}) => {

    const styles = SIASquestionliststyle;
    const styles2 = StyleSheet.create({
        stickyHeader: {
            // 添加您的样式，例如背景色，字体样式等
            backgroundColor: 'white',
            padding: 10,
            // 确保它在顶部
            zIndex: 1000
        },
        textLarge: {
            fontSize: 35, // 这里的数值可以根据你的需要进行调整
            paddingLeft: 300
        },

        textLittle: {
            fontSize: 20, // 这里的数值可以根据你的需要进行调整
            marginLeft: 1000
        }
    });


    const StickyHeader = () => (
        <View style={styles2.stickyHeader}>
        <Text style = {styles2.textLarge}>     Not at all       Moderately        Extreme                      <Text style = {styles2.textLittle}> Impact(1-10)</Text> </Text>
        </View>
    );

    const desc = (
        <View style={styles.desc}>
            <Text style={textstyles.desctext}>
                <Text style={textstyles.makebold}>Instructions</Text>
                : Cette version du CWS concerne les symptômes reessentis au cours des dernières 24 heures et peut être administrèe par un interviewer OU par auto-évaluation.
                {"\n\n"}
                Les affirmations suivantes décrivent comment vous vous êtes senti au cours des <Text style={textstyles.underline}>24</Text> dernières heures. Veuillez <Text style={textstyles.makebold}>entourer le chiffre</Text> qui représente le mieux vos expériences personnelles pour chaque affirmation. Pour chaque affirmation, veuillez évaluer son impact négatif sur les activités quotidiennes normales sur la même échelle (0 = Pas du tout à 10 = Extrêmement), en écrivant le chiffre dans la colonne de droite.
            </Text>
        </View>
    );
    

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
        <CannabisQuestionList
            questionnaireNumber={22}
            desc={desc}
            scale={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            values={[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            goHome={() => navigation.goBack()}   
            buttonstyle={cannabisRadioStyles}
            liststyle={cannabisQuestionListStyle}
            questionstyle={CWSStyle}

            qs={[
                "La seule chose à laquelle je pouvais penser était de fumer du cannabis",
                "J'avais mal à la tête",
                "Je n'avais pas d'appeétit",
                "Je me sentais nauséeux (comme si j'allais vomir)",
                "Je me sentais nerveux",
                "J'ai eu des accès dde colère",
                "J'avais des sautes d'humeur",
                "Je me sentais déprimé",
                "J'étais facilement irrité",
                "Je m'imaginais être défoncé",
                "Je me sentais agité",
                "Je me réveillais tôt",
                "J'avais mal au ventre",
                "J'avais des cauchemars et/ou des rêves étranges",
                "La vie semblait être une lutte difficile",
                "Je me suis réveillé en sueur la nuit",
                "J'avais du mal à m'endormir la nuit",
                "Je me sentais physiquement tendu",
                "J'avais des bouffées de chaleur",
            ]}

        />
        </ScrollView>
      );
}
 
export default CWS_fr_Screen;    