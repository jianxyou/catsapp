import { View, Text } from 'react-native';

import NoNumberQuestionList from "../../surveytypes/NoNumberQuestionList";

import rosenbergRadioStyles from "../../styles/input styles/rosenbergRadioStyles";
import rosenbergStyle from "../../styles/question styles/RosenbergStyle";
import rosenbergQuestionListStyle from "../../styles/question list styles/rosenbergQuestionListStyle";
import textstyles from '../../styles/textstyles';

const RosenbergScreen = ({navigation}) => {
    return (  
        <NoNumberQuestionList
            questionnaireNumber={10}
            desc={
                    <Text style={textstyles.desctext}>
                        
                Veuillez cocher la réponse appropriée pour chacune des affirmations ci-dessous:
                    </Text>
                }
                
            scale={["", "", "", ""]}
            values={["Strongly Disagree", "Disagree", "Agree", "Strongly Agree"]}
            labels={["Fortement en désaccord", "En désaccord", "En accord", "Fortement en accord"]}
            goHome={() => navigation.navigate('Home')}
            buttonstyles={rosenbergRadioStyles}
            questionstyles={rosenbergStyle}
            finalstyles={rosenbergQuestionListStyle}
            qs={[
                "Je sens que je suis une personne de valeur, au moins autant que les autres.",
                "Je sens que j'ai un certain nombre de bonnes qualités.",
                "Dans l'ensemble, j'ai tendance à penser que je suis un échec.",
                "Je suis capable de faire des choses aussi bien que la plupart des autres personnes.",
                "Je sens que je n'ai pas grande chose de quoi être fier/fière.",
                "J'adopte une attitude positive envers moi-même.",
                "Dans l'ensemble, je suis satisfait de moi-même.",
                "J'aimerais pouvoir avoir plus de respect pour moi-même.",
                "Je me sens certainement inutile parfois.",
                "Parfois, je pense que je ne suis pas bon(ne) du tout."    
            ]}

        />
    );
}
 
export default RosenbergScreen;