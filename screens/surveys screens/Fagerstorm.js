import FTNDStyleSurvey from '../../surveytypes/FTNDStyleSurvey';
import { View,Text,Button,ScrollView,StyleSheet } from 'react-native';

import React, { useState } from 'react';
import CompoundSurvey from "../../surveytypes/CompoundSurvey";
import textstyles from '../../styles/textstyles'; 
// import { ScrollView } from 'react-native-gesture-handler';
import CompoundSurvey_for_ftnd from '../../surveytypes/compoundSurver_for_ftnd';

const FagerstrormScreen = ({navigation}) => {


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
            questionnaireNumber={24}
            listoflistofqs={[

                [
                    "How soon after you wake up do you smoke your first cigarette?",
                    "Do you find it difficult to refrain from smoking in places where it is forbidden, e.g., in church, at the library, in the cinema, etc.?",
                    "Which cigarette would you hate most to give up?",
                    "How many cigarettes/day do you smoke?",
                    "Do you smoke more frequently during the first hours after awakening than during the rest of the day?",
                    "Do you smoke if you are so ill that you are in bed most of the day?",
                ],

                [
                    "For how many years have you been smoking?",
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
                                "a. Within 5 minutes                        3 points",
                                "b. 6 — 30 minutes                          2 points",
                                "c. 31 — 60 minutes                        1 point",
                                "d. After 60 minutes                        0 points",
                        ], 

                        [    
                            "a. Yes                                                  1 point",
                            "b. No                                                   0 points",
                                
                        ],

                        [
                                "a. The first one in the morning   1 point",
                                "b. Any other                                     0 points",
                        ],

                        [
                                "a. 10 or less                                       0 points",
                                "b. 11 — 20                                          1 point",
                                "c. 21 — 30                                         2 points",
                                "d. 31 or more                                    3 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
                        ],
                    ],
                            
                    [
                        [],
                    ],

                    
            ]
                
            }

            desc=""


             minidescs={[
                "A) Lifetime History",
                "To current smokers",
            ]}
            goHome={() => navigation.navigate('MriScreen')}
        />
    
    
    
    const survey2 = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={24}
            listoflistofqs={[

                [
                    "How soon after you wake up do you smoke your first cigarette?",
                    "Do you find it difficult to refrain from smoking in places where it is forbidden, e.g., in church, at the library, in the cinema, etc.?",
                    "Which cigarette would you hate most to give up?",
                    "How many cigarettes/day do you smoke?",
                    "Do you smoke more frequently during the first hours after awakening than during the rest of the day?",
                    "Do you smoke if you are so ill that you are in bed most of the day?",
                ],

                [
                    "how many cigarettes did you smoke per day",
                    "For how many years, did you smoke cigarettes?",
                    "When is the last time you used nicotine/tobacco?",
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
                                "a. Within 5 minutes                        3 points",
                                "b. 6 — 30 minutes                          2 points",
                                "c. 31 — 60 minutes                        1 point",
                                "d. After 60 minutes                        0 points",
                        ], 

                        [    
                            "a. Yes                                                  1 point",
                            "b. No                                                   0 points",
                                
                        ],

                        [
                                "a. The first one in the morning   1 point",
                                "b. Any other                                     0 points",
                        ],

                        [
                                "a. 10 or less                                       0 points",
                                "b. 11 — 20                                          1 point",
                                "c. 21 — 30                                         2 points",
                                "d. 31 or more                                    3 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
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
                "A) Lifetime History",
                "To Non-smokers"
            ]}
            goHome={() => navigation.navigate('MriScreen')}
        />
    
    
    const survey3 = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={24}
            listoflistofqs={[

                [
                    "How soon after you wake up do you smoke your first cigarette?",
                    "Do you find it difficult to refrain from smoking in places where it is forbidden, e.g., in church, at the library, in the cinema, etc.?",
                    "Which cigarette would you hate most to give up?",
                    "How many cigarettes/day do you smoke?",
                    "Do you smoke more frequently during the first hours after awakening than during the rest of the day?",
                    "Do you smoke if you are so ill that you are in bed most of the day?",
                ],

                [
                    "How many cigarettes have you consumed in your lifetime？",
                    "When was the last time you used nicotine/tobacco?"
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
                                "a. Within 5 minutes                        3 points",
                                "b. 6 — 30 minutes                          2 points",
                                "c. 31 — 60 minutes                        1 point",
                                "d. After 60 minutes                        0 points",
                        ], 

                        [    
                            "a. Yes                                                  1 point",
                            "b. No                                                   0 points",
                                
                        ],

                        [
                                "a. The first one in the morning   1 point",
                                "b. Any other                                     0 points",
                        ],

                        [
                                "a. 10 or less                                       0 points",
                                "b. 11 — 20                                          1 point",
                                "c. 21 — 30                                         2 points",
                                "d. 31 or more                                    3 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
                        ],

                        [
                                "a. Yes                                                  1 point",
                                "b. No                                                   0 points",
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
                "A) Lifetime History",
                "To Non-smokers"
            ]}
            goHome={() => navigation.goBack()}
        />


    if (!surveyType) {
        if (askAdditionalQuestion) {
            return (
                <View>
                    <Text style={styles.boldTextCenter}>Have you smoked cigarettes or used nicotine regularly？</Text>
                    <Button title="Yes" onPress={() => setSurveyType('B')} />
                    <Button title="No" onPress={() => setSurveyType('C')} />
                </View>
            );
        } else {
            return (
                <View>
                    <Text style={styles.boldTextCenter}>Are you a current smoker or a non-smoker？</Text>
                    <Button title="Current-Smoker" onPress={() => setSurveyType('A')} />
                    <Button title="Non-Smoker" onPress={() => setAskAdditionalQuestion(true)} />
                </View>
            );
        }
    }
    
    else {
        // 根据用户的选择渲染 CompoundSurvey_for_ftnd 组件
         let content;
        switch (surveyType) {
            case 'A':
                content = survey1; // 假设survey1是一个组件或变量
                break;
            case 'B':
                content = survey2; // 假设survey2是一个不同的组件或变量
                break;
            case 'C':
                content = survey3; // 假设survey3是另一个组件或变量
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
 
export default FagerstrormScreen;