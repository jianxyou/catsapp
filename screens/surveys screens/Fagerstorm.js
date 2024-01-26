import FTNDStyleSurvey from '../../surveytypes/FTNDStyleSurvey';
import { View,Text,Button,ScrollView } from 'react-native';

import React, { useState } from 'react';
import CompoundSurvey from "../../surveytypes/CompoundSurvey";
import textstyles from '../../styles/textstyles'; 
// import { ScrollView } from 'react-native-gesture-handler';
import CompoundSurvey_for_ftnd from '../../surveytypes/compoundSurver_for_ftnd';

const FagerstrormScreen = ({navigation}) => {


    const [smokes, setSmokes] = useState(null);

    const survey = 
        <CompoundSurvey_for_ftnd 
            questionnaireNumber={24}

            // scales={[
            //     [
            //         "a. Within 5 minutes                        3 points",
            //         "b. 6 — 30 minutes                          2 points",
            //         "c. 31 — 60 minutes                        1 point",
            //         "d. After 60 minutes                        0 points",
            //    ], 

            //    [    
            //     "a. Yes                                                  1 point",
            //     "b. No                                                   0 points",
                    
            //    ],

            //    [
            //         "a. The first one in the morning   1 point",
            //         "b. Any other                                     0 points",
            //    ],

            //    [
            //         "a. 10 or less                                       0 points",
            //         "b. 11 — 20                                          1 point",
            //         "c. 21 — 30                                         2 points",
            //         "d. 31 or more                                    3 points",
            //    ],

            //    [
            //         "a. Yes                                                  1 point",
            //         "b. No                                                   0 points",
            //    ],

            //    [
            //         "a. Yes                                                  1 point",
            //         "b. No                                                   0 points",
            //    ],
            // ]}

            // values={[
            //     [3, 2, 1, 0],
            //     [1, 0],
            //     [1, 0],
            //     [0, 1, 2, 3],
            //     [1, 0],
            //     [1, 0],
            // ]}


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

                [
                    "If you have ever smoked cigarettes or used nicotine regularly, how many cigarettes did you smoke per day",
                    "If you have ever smoked cigarettes or used nicotine regularly， For how many years, did you smoke cigarettes?",
                    "If you have ever smoked cigarettes or used nicotine regularly， When is the last time you used nicotine/tobacco?",
                    "If you have not smoked cigarettes or used nicotine regularly，how many cigarettes have you consumed in your lifetime？",
                    "If you have not smoked cigarettes or used nicotine regularly，When was the last time you used nicotine/tobacco?"
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
                ],

                [
                    'shortanswer',
                    'shortanswer',
                    'shortanswer',
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
                    []
                ],

                [
                    [],
                    [],
                    [],
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
                    ],

                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
            ]
                
            }

            desc=""


             minidescs={[
                "A) Lifetime History",
                "To current smokers",
                "To Non-smokers"
            ]}
            goHome={() => navigation.navigate('MriScreen')}
        />

    
    return (  
        <ScrollView>
            {survey}
        </ScrollView>
    );
}
 
export default FagerstrormScreen;