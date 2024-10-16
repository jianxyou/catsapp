import FTNDStyleSurvey from '../../surveytypes/FTNDStyleSurvey';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

import React, { useState } from 'react';
import CompoundSurvey from "../../surveytypes/CompoundSurvey";
import textstyles from '../../styles/textstyles'; 
// import { ScrollView } from 'react-native-gesture-handler';
import CompoundSurvey_for_ftnd from '../../surveytypes/compoundSurver_for_ftnd';

const FTND_fr_Screen = ({navigation}) => {

    const [smokes, setSmokes] = useState(null);
    const [askAdditionalQuestion, setAskAdditionalQuestion] = useState(false);
    const [surveyType, setSurveyType] = useState(null);

    const styles = StyleSheet.create({
        boldTextCenter: {
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });
    
    const survey1 = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={41}
            listoflistofqs={[

                [
                    "Combien de temps après votre réveil fumez-vous votre première cigarette ?",
                    "Trouvez-vous difficile de vous abstenir de fumer dans les endroits où c'est interdit, par exemple, à l'église, à la bibliothèque, au cinéma, etc. ?",
                    "Quelle cigarette détesteriez-vous le plus abandonner ?",
                    "Combien de cigarettes fumez-vous par jour ?",
                    "Fumez-vous plus fréquemment pendant les premières heures après votre réveil que pendant le reste de la journée ?",
                    "Fumez-vous si vous êtes si malade que vous restez au lit toute la journée ?",
                ],

                [
                    "Depuis combien d'années fumez-vous ?",
                ],
                
            ]} 

            qtypes={[
                [
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                ],

                [
                    'shortanswer',
                ],

            ]}


            values={[
                [
                    [3, 2, 1, 0],
                    [1, 0],
                    [1, 0],
                    [0, 1, 2, 3],
                    [1, 0],
                    [1, 0]
                ],

                [
                    []
                ],

            ]}


            scales={[
                    [
                        [
                            "a. Dans les 5 minutes                        3 points",
                            "b. 6 — 30 minutes                          2 points",
                            "c. 31 — 60 minutes                        1 point",
                            "d. Après 60 minutes                        0 point",
                        ], 

                        [    
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                                
                        ],

                        [
                            "a. La première de la journée         1 point",
                            "b. Toute autre                                   0 point",
                        ],

                        [
                            "a. 10 ou moins                                      0 point",
                            "b. 11 — 20                                           1 point",
                            "c. 21 — 30                                          2 points",
                            "d. 31 ou plus                                       3 points",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],
                    ],
                            
                    [
                        [],
                    ],

                    
            ]
                
            }

            desc=""


             minidescs={[
                "A) Historique de vie",
                "Pour les fumeurs actuels",
            ]}
            goHome={() => navigation.navigate('FollowUp')}
        />
    
    
    
    const survey2 = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={100}
            listoflistofqs={[

                [
                    "Combien de temps après votre réveil fumez-vous votre première cigarette ?",
                    "Trouvez-vous difficile de vous abstenir de fumer dans les endroits où c'est interdit, par exemple, à l'église, à la bibliothèque, au cinéma, etc. ?",
                    "Quelle cigarette détesteriez-vous le plus abandonner ?",
                    "Combien de cigarettes fumez-vous par jour ?",
                    "Fumez-vous plus fréquemment pendant les premières heures après votre réveil que pendant le reste de la journée ?",
                    "Fumez-vous si vous êtes si malade que vous restez au lit toute la journée ?",
                ],

                [
                    "Combien de cigarettes fumiez-vous par jour ?",
                    "Pendant combien d'années avez-vous fumé des cigarettes ?",
                    "Quand avez-vous utilisé de la nicotine/tabac pour la dernière fois ?",
                ]
                
            ]} 

            qtypes={[
                [
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
                ]
            ]}


            values={[
                [
                    [3, 2, 1, 0],
                    [1, 0],
                    [1, 0],
                    [0, 1, 2, 3],
                    [1, 0],
                    [1, 0]
                ],

                [
                    [],
                    [],
                    [],
                ],
            ]}


            scales={[
                    [
                        [
                            "a. Dans les 5 minutes                        3 points",
                            "b. 6 — 30 minutes                          2 points",
                            "c. 31 — 60 minutes                        1 point",
                            "d. Après 60 minutes                        0 point",
                        ], 

                        [    
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                                
                        ],

                        [
                            "a. La première de la journée         1 point",
                            "b. Toute autre                                   0 point",
                        ],

                        [
                            "a. 10 ou moins                                      0 point",
                            "b. 11 — 20                                           1 point",
                            "c. 21 — 30                                          2 points",
                            "d. 31 ou plus                                       3 points",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],
                    ],
                            
                    [
                        [],
                    ],

                    [
                        [],
                        [],
                        [],
                    ],
            ]
                
            }

            desc=""


             minidescs={[
                "A) Historique de vie",
                "Pour les non-fumeurs"
            ]}
            goHome={() => navigation.goBack()} 
        />
    
    
    const survey3 = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={101}
            listoflistofqs={[

                [
                    "Combien de temps après votre réveil fumez-vous votre première cigarette ?",
                    "Trouvez-vous difficile de vous abstenir de fumer dans les endroits où c'est interdit, par exemple, à l'église, à la bibliothèque, au cinéma, etc. ?",
                    "Quelle cigarette détesteriez-vous le plus abandonner ?",
                    "Combien de cigarettes fumez-vous par jour ?",
                    "Fumez-vous plus fréquemment pendant les premières heures après votre réveil que pendant le reste de la journée ?",
                    "Fumez-vous si vous êtes si malade que vous restez au lit toute la journée ?",
                ],

                [
                    "Combien de cigarettes avez-vous consommé au cours de votre vie ?",
                    "Quand avez-vous utilisé de la nicotine/tabac pour la dernière fois ?"
                ]
                
            ]} 

            qtypes={[
                [
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                    "radio",
                ],

              
                [
                    
                    'shortanswer',
                    'shortanswer'
                ]
            ]}


            values={[
                [
                    [3, 2, 1, 0],
                    [1, 0],
                    [1, 0],
                    [0, 1, 2, 3],
                    [1, 0],
                    [1, 0]
                ],



                [
                    [],
                    []
                ],
            ]}


            scales={[
                    [
                        [
                            "a. Dans les 5 minutes                        3 points",
                            "b. 6 — 30 minutes                          2 points",
                            "c. 31 — 60 minutes                        1 point",
                            "d. Après 60 minutes                        0 point",
                        ], 

                        [    
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                                
                        ],

                        [
                            "a. La première de la journée         1 point",
                            "b. Toute autre                                   0 point",
                        ],

                        [
                            "a. 10 ou moins                                      0 point",
                            "b. 11 — 20                                           1 point",
                            "c. 21 — 30                                          2 points",
                            "d. 31 ou plus                                       3 points",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],

                        [
                            "a. Oui                                                  1 point",
                            "b. Non                                                   0 point",
                        ],
                    ],

                    [
                        [],
                        []
                    ],
            ]
                
            }

            desc=""


             minidescs={[
                "A) Historique de vie",
                "Pour les non-fumeurs"
            ]}
            goHome={() => navigation.goBack()}
        />


    if (!surveyType) {
        if (askAdditionalQuestion) {
            return (
                <View>
                    <Text style={styles.boldTextCenter}>Avez-vous fumé des cigarettes ou utilisé de la nicotine régulièrement ?</Text>
                    <Button title="Oui" onPress={() => setSurveyType('B')} />
                    <Button title="Non" onPress={() => setSurveyType('C')} />
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={styles.boldTextCenter}>Êtes-vous un fumeur actuel ou un non-fumeur ?</Text>
                    <Button title="Fumeur actuel" onPress={() => setSurveyType('A')} />
                    <Button title="Non-fumeur" onPress={() => setAskAdditionalQuestion(true)} />
                </View>
            );
        }
    }
    
    else {
        // Rendre le composant CompoundSurvey_for_ftnd en fonction du choix de l'utilisateur
        let content;
        switch (surveyType) {
            case 'A':
                content = survey1;
                break;
            case 'B':
                content = survey2;
                break;
            case 'C':
                content = survey3;
                break;
            default:
                content = null;
        }

        return (
            <ScrollView>
                {content}
            </ScrollView>
        );
    }

    

}
 
export default FTND_fr_Screen;
