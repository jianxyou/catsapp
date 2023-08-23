import SCIDQuestionList from "../surveytypes/SCIDQuestionLIst";

import questionListStyle from "../styles/question list styles/questionListStyle";
import CompoundScid from "../styles/compound survey styles/CompoundScid";

const MoodEpisodesScreen = ({navigation}) => {
    return ( 
        <SCIDQuestionList

            title="Mood Episodes"
            disorders={["Current Major Depressive Episode", "Past Major Depressive Episode"]}
            sectionlabels={[["PA.1", "PA.2", "PA.3", "PA.4"], ["PA.5", "PA.6", "PA.7", 'PA.8', 'PA.9'], ['PA.10', 'PA.11', 'PA.12', 'PA.13']]}
            compoundstyles={CompoundScid}
            liststyles={questionListStyle}
            goHome={() => navigation.navigate('Home')}

            artnums1={[
                //current major depressive episode
                [
                    ["A.1", "A.2"], ["A.3", "A.4", 'A.5', 'A.6', 'A.7', 'A.8'], ['A.9', '', 'B'], ['C', '', ''] 
                ],

                //past major depressive episode
                [
                    ["A.1", "A.2"], ["A.3", "A.4", 'A.5', 'A.6', 'A.7', 'A.8'], ['A.9', ''], ['B'], ['C', '', '', ''] 
                ],

                //current manic episode
                [
                    //PA.10
                    [
                        'A', 
                        '',
                        'B.1',
                        'B.2',
                    ],

                    //PA.11
                    [
                        'B.3',
                        'B.4',
                        'B.5',
                        'B.6',
                        'B.7',
                    ],

                    //PA.12
                    [
                        '',
                        'C',
                    ],

                    //PA.13
                    [
                        'D',
                        '',
                    ]
                ],
            ]}

            artnums2={[
                //current major depressive episode
                [
                    ['A1', 'A2'], [['A3', 'A4', 'A5'], ['A6', 'A7', 'A8'], ['A9', 'A10', 'A11'], 'A12', ['A13', 'A14', 'A15'], 'A16'], [['A17', 'A18', 'A19', 'A20', 'A21'], 'A22', 'A23'], ['A24', 'A25', 'A26'] 
                ],

                //past major depressive episode
                [
                    ['A27', 'A28'], [['A29', 'A30', 'A31'], ['A32', 'A33', 'A34'], ['A35', 'A36', 'A37'], 'A38', ['A39', 'A40', 'A41'], 'A42'], [['A43', 'A44', 'A45', 'A46', 'A47'], 'A48'], ['A49'], ['A50', 'A51', 'A52', 'A53']
                ],

                //current manic episode
                [
                    //PA.10
                    [
                        ['A54', 'A55', 'A56'], 
                        'A57', 
                        'A58', 
                        'A59'
                    ],

                    //PA.11
                    [
                        'A60', 
                        'A61', 
                        'A62', 
                        ['A63', 'A64', 'A65'], 
                        'A66'
                    ],

                    //PA.12
                    [
                        'A67',
                        'A68'
                    ],

                    //PA.13
                    [
                        'A69',
                        'A70',
                    ],
                ],



            ]}

            minidescs={[
                //current major depressive episode
                [
                    //PA.1
                    "",

                    //PA.2
                    "",

                    //PA.3
                    "",

                    //PA.4
                    "",
                ],

                //past major depressive episode
                //current major depressive episode
                [
                    //PA.5
                    "",

                    //PA.6
                    "",

                    //PA.7
                    "",

                    //PA.8
                    "",

                    //PA.9
                    "",
                ],

                //current manic episode
                [
                    //PA.10
                    '',

                    //PA.11
                    '',

                    //PA.12
                    '',

                    //PA.13
                    '',
                ],

            ]}

           
            options={[
                //current major depressive episode
                [
                    //PA.1
                    [
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.2
                    [
                        ["?", "1", "2", "3", ["Weight losss or decreased appetite", "Weight gain or increased appetite"]], 
                        ["?", "1", "2", "3", ["Insomnia", "Hypersomnia"]], 
                        ["?", "1", "2", "3", ["Psychomotor agitation", "Pyschomotor retardation"]], 
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3", ["Worthlessness", "Guilt"]], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.3
                    [
                        ["?", "1", "2", "3", ["Thoughts of own death", "Suicidal ideation", "Specific plan", "Suicide attempt"]], 
                        ["1", "3"], 
                        ["1", "3"]
                    ], 

                    //PA.4
                    [["?", "1", "3"], ["1", "3"], []]
                ],

                //past major depressive episode
                [
                    //PA.5
                    [
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.6
                    [
                        ["?", "1", "2", "3", ["Weight losss or decreased appetite", "Weight gain or increased appetite"]], 
                        ["?", "1", "2", "3", ["Insomnia", "Hypersomnia"]], 
                        ["?", "1", "2", "3", ["Psychomotor agitation", "Pyschomotor retardation"]], 
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3", ["Worthlessness", "Guilt"]], 
                        ["?", "1", "2", "3"]
                    ], 
                    
                    //PA.7
                    [
                        ["?", "1", "2", "3", ["Thoughts of own death", "Suicidal ideation", "Specific plan", "Suicide attempt"]],  
                        ["1", "3"], 
                    ], 
                   
                    //PA.8
                    [
                        ["?", "1", "2", "3"]
                    ], 
                    
                    //PA.9
                    [
                        ["?", "1", "3"], 
                        ["1", "3"], 
                        [''], 
                        ['']
                    ],
                ],

                //current manic episode
                [
                    //PA.10
                    [
                        ["?", '1', '2', '3', ['Elevated, expansive mood', 'Irratible mood']]
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                    ],

                    //PA.11
                    [
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3', ['Increase in activity', 'Psychomotor agitation']],
                        ['?', '1', '2', '3'],
                    ],

                    //PA.12
                    [
                        ['1', '3'],
                        ['?', '1', '2', '3'],
                    ],

                    //PA.13
                    [
                        ['?', '1', '3'],
                        ['1', '3']
                    ],
                ]

            ]}

            values={[
                //current major depressive episode
                [
                    //PA.1
                    [
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.2
                    [
                        ["?", "1", "2", "3", ["Weight losss or decreased appetite", "Weight gain or increased appetite"]], 
                        ["?", "1", "2", "3", ["Insomnia", "Hypersomnia"]], 
                        ["?", "1", "2", "3", ["Psychomotor agitation", "Pyschomotor retardation"]], 
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3", ["Worthlessness", "Guilt"]], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.3
                    [
                        ["?", "1", "2", "3", ["Thoughts of own death", "Suicidal ideation", "Specific plan", "Suicide attempt"]], 
                        ["1", "3"], 
                        ["1", "3"]
                    ], 

                    //PA.4
                    [["?", "1", "3"], ["1", "3"], []]
                ],

                //past major depressive episode
                [
                    //PA.5
                    [
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3"]
                    ], 

                    //PA.6
                    [
                        ["?", "1", "2", "3", ["Weight losss or decreased appetite", "Weight gain or increased appetite"]], 
                        ["?", "1", "2", "3", ["Insomnia", "Hypersomnia"]], 
                        ["?", "1", "2", "3", ["Psychomotor agitation", "Pyschomotor retardation"]], 
                        ["?", "1", "2", "3"], 
                        ["?", "1", "2", "3", ["Worthlessness", "Guilt"]], 
                        ["?", "1", "2", "3"]
                    ], 
                    
                    //PA.7
                    [
                        ["?", "1", "2", "3", ["Thoughts of own death", "Suicidal ideation", "Specific plan", "Suicide attempt"]],  
                        ["1", "3"], 
                    ], 
                   
                    //PA.8
                    [
                        ["?", "1", "2", "3"]
                    ], 
                    
                    //PA.9
                    [
                        ["?", "1", "3"], 
                        ["1", "3"], [], 
                        []
                    ],
                ],

                //current manic episode
                [
                    //PA.10
                    [
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                    ],


                    //PA.11
                    [
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3'],
                        ['?', '1', '2', '3', ['Increase in activity', 'Psychomotor agitation']],
                        ['?', '1', '2', '3'],
                    ],

                    //PA.12
                    [
                        ['1', '3'],
                        ['?', '1', '2', '3'],
                    ],

                    //PA.13
                    [
                        ['?', '1', '3'],
                        ['1', '3']
                    ],
                ]

            ]}

            listoflistofqs={[

                //current major depressive episode
                [
                    //PA.1
                    [
                        "Depressed mood",
                        ["Diminished Interest/Pleasure", "IF NEITHER A.1 NOR A.2 IS CODED 3 GO TO PAST MAJOR DEPRESSIVE EPISODE, PA.5"],
                    ],

                    //PA.2
                    [
                        "Weight/appetite loss/gain",
                        "Insomnia OR Hypersomnia",
                        "Psychomotor agitation/retardation",
                        "Fatigue",
                        "Worthlessness/guilt",
                        "Difficulty concentrating/indecisiveness",
                    ],

                    //PA.3
                    [
                        "Thoughts of death/suicide",
                        "AT LEAST FIVE OF THE ABOVE (A.1-A.9) CODED '3' AND AT LEAST ONE OF THES IS ITEM A.1 or A.2",
                        "Clinically significant distress or impairment",
                    ],

                    //PA.4
                    [
                        "Not attributable to substance or another medical condition",
                        "CRITERIA A, B, AND C ARE CODED '3' CURRENT MAJOR DEPRESSIVE EPISODE",
                        ["Total number of MDE (CODE 99 IF TOO NUMEROUS OR INDISTINCT)", "IF CURRENT MDE CRITERIA MET, GO TO PA.10"]
                    ],

                ],

                //PAST MAJOR DEPRESSIVE EPISODE
                [
                    //PA.5
                    [
                        "Depressed mood",
                        ["Diminished Interest/Pleasure", "IF NEITHER ITEM A.1 NOR A.2 IS CODED '3' GO TO PA.10"],
                    ],

                    //PA.6
                    [
                        "Weight/appetite loss/gain",
                        "Insomnia OR Hypersomnia",
                        "Psychomotor agitation/retardation",
                        "Fatigue",
                        "Worthlessness/guilt",
                        "Difficulty concentrating/indecisiveness",
                    ],
                    
                    //PA.7 
                    [
                        "Thoughts of death/suicide",
                        "AT LEAST FIVE OF THE ABOVE (A.1-A.9) CODED '3' AND AT LEAST ONE OF THES IS ITEM A.1 or A.2",
                    ],

                    //PA.8 
                    [
                        "Clinically significant distress or impairment",
                    ],

                    //PA.9 
                    [
                        "Not attributable to substance or another medical condition",
                        "CRITERIA A, B, AND C ARE CODED '3' CURRENT PAST DEPRESSIVE EPISODE",
                        "Age of onset of past MDE",
                        "Total number of MDE (CODE 99 IF TOO NUMEROUS OR INDISTINCT)",
                    ],

                ],

                
            ]}

            qtypes={[
                //current major depressive episode
                [
                    //PA.1
                    [
                        "scid",
                        "scidwithnote",
                    ],

                    //PA.2
                    [
                        "scidcheckif",
                        "scidcheckif",
                        'scidcheckif',
                        'scid',
                        'scidcheckif',
                        'scid',
                    ],

                    //PA.3
                    [
                        'scidcheckif',
                        'scidoptionlabel',
                        'scidoptionlabel',
                    ],

                    //PA.4
                    [
                        'scidoptionlabel',
                        'scidoptionlabel',
                        'scidenternumberwithnote',
                    ],
                ],

                //past major depressive episode
                //current major depressive episode
                [
                    //PA.5
                    [
                        "scid",
                        "scidwithnote",
                    ],

                    //PA.6
                    [
                        "scidcheckif",
                        "scidcheckif",
                        'scidcheckif',
                        'scid',
                        'scidcheckif',
                        'scid',
                    ],

                    //PA.7
                    [
                        'scidcheckif',
                        'scidoptionlabel',
                    ],

                    //PA.8

                    [
                        'scidoptionlabel',
                    ],

                    //PA.9
                    [
                        'scidoptionlabel',
                        'scidoptionlabel',
                        'scidenternumber',
                        'scidenternumber',
                    ],
                ],

            ]}




        />
     );
}
 
export default MoodEpisodesScreen;
