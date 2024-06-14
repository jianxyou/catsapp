import { Text } from 'react-native';
import textstyles from '../../styles/textstyles'; 

import CompoundSurvey from "../../surveytypes/CompoundSurvey";

const MJDrugHistoryQuestionnaireScreen = ({navigation}) => {
    return ( 
        <CompoundSurvey
            listoflistofqs={[

                [
                    "Quand avez-vous utilisé du cannabis pour la première fois?",
                    "Depuis combien de temps utilisez-vous du cannabis?",
                    "Quelle est la voie d'administration typique ? Joint?",
                    "Quelle est la fréquence d'utilisation? (Combien de fois par mois)",
                    "Quelles doses avez-vous utilisées?",
                ],

                [
                    "Âge de la première utilisation :",
                    "Total des mois d'utilisation :",
                    "Fréquence par mois :",
                    "Quantité totale de consommation à vie :",
                ],

                [
                    "Quand avez-vous utilisé du cannabis pour la première fois?",
                    "Quelle est la voie d'administration typique?",
                    "Quelle est la fréquence d'utilisation? (Combien de fois par mois au cours de la dernière année)",
                    "Quelles doses utilisez-vous? (Combien d'argent dépensez-vous?)",
                ],

                [
                    "Âge de la première utilisation :",
                    "Total des mois d'utilisation :",
                    "Fréquence par mois :",
                    "Quantité totale de consommation à vie :",
                ],

                [
                    "Y a-t-il des situations dans lesquelles vous utilisez plus? (stress? Examens? Ennui?)",
                    "Avez-vous besoin de plus en plus de la drogue que vous utilisez pour obtenir le même effet?",
                    "Décrivez les symptômes que vous ressentez en utilisant. Combien de temps durent-ils?",
                    "Décrivez les symptômes que vous ressentez si vous arrêtez soudainement d'utiliser du cannabis (jour 1, 2, 3)",
                    "Y a-t-il des drogues autres que le cannabis que vous avez utilisées au cours du mois dernier?",
                    "Prenez-vous souvent plus de drogues que prévu, ou les utilisez-vous plus longtemps que prévu?",
                    "Avez-vous eu de nombreuses tentatives infructueuses pour réduire votre consommation de drogues?",
                    "Passez-vous beaucoup de votre journée à obtenir, utiliser et récupérer des effets de drogues?",
                    "Avez-vous abandonné le travail, des activités sociales ou d'autres choses que vous faisiez à cause de votre consommation de drogues?",
                    "Continuez-vous à prendre des drogues malgré les dommages et les problèmes que cela vous cause?",
                    "Puis-je vous demander pourquoi vous prenez du cannabis?",
                    "Pensez-vous que le cannabis est nocif?",
                    "Pensez-vous que le cannabis endommage le cerveau?",
                    "Avez-vous envie de cannabis?",
                    "Prenez-vous généralement du cannabis en groupe?",
                    "Des membres de votre famille ont-ils des antécédents de consommation/abus de drogues?",
                ],

                [
                    "Enfin, puis-je vous demander si vous êtes prêt à ne pas changer votre mode de consommation habituel de cannabis et à vous abstenir de toute drogue psychoactive (à l'exception de l'alcool, de la nicotine et de la caféine) pendant votre participation à l'étude? (Demandez également aux participants de ne pas fumer de cannabis pendant au moins 2 heures avant chaque visite)."
                ],
                
            ]} 

            qtypes={[
                [
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                ],

                [
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                ],

                [
                    'longanswer',
                    "MJStyle",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "MJStyle",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                    "longanswer",
                ],

                [
                    "MJYesNo",
                ]
            ]}

            scales={[
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                                
                [
                    [],
                    ["Non", "Oui"],
                    [],
                    [],
                    [],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                ],
            ]} 
            
            values={[
                [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                    ["Non", "Oui"],
                    [],
                    [],
                    [],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    ["Non", "Oui"],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],

                [
                    [],
                ],
            ]} 

            questionnaireNumber={0}

            desc={
                <Text style={textstyles.desctext}>
                À propos de votre addiction
                </Text>}


            goHome={() => navigation.navigate('AdminScreen')}

            minidescs={[
                "A) Historique de vie",
                "",
                "B) Au cours des 12 derniers mois",
                "Les 12 derniers mois :",
                "C) Schéma d'utilisation",
                "",
            ]}

        />
     );
}
 
export default MJDrugHistoryQuestionnaireScreen;
