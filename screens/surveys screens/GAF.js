// import { View, Text } from 'react-native';

// import GAFQuestionList from "../../surveytypes/GAFQuestionList";

// import textstyles from "../../styles/textstyles";
// import gafQuestionListStyle from '../../styles/question list styles/gafQuestionListStyle';

// const styles = gafQuestionListStyle;

// const GAFScreen = ({navigation}) => {
//     return ( 
//         <GAFQuestionList 
//             questionnaireNumber={36}
//             title="Échelle Globale de Fonctionnement (EGF)"
//             desc={
//                 <View style={styles.desc}>

//                     <View style={styles.topdesc}>
//                         <Text style={textstyles.desctext}><Text style={textstyles.centertext}>(Du DSM-IV-TR, p. 34.)</Text></Text>
//                         <Text style={textstyles.desctext}>Prenez en compte le fonctionnement psychologique, social et professionnel sur un continuum hypothétique de santé mentale-maladie. Ne pas inclure les déficiences de fonctionnement dues à des limitations physiques (ou environnementales).</Text>
//                     </View>

//                     <View style={styles.maindesc}>

//                         <View style={styles.sectioncontainer}>

//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.makebold}><Text style={textstyles.centertext}>Code</Text></Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.makebold}>(Remarque : Utilisez des codes intermédiaires si nécessaire, par exemple, 45, 68, 72.)</Text></Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"100\n|\n91"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Fonctionnement supérieur dans une large gamme d'activités, les problèmes de la vie ne semblent jamais prendre le dessus, est recherché par les autres en raison de ses nombreuses qualités positives. Aucun symptôme.
//                                     </Text>
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"90\n|\n81"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Symptômes absents ou minimes 
//                                     </Text>
//                                     (par exemple, légère anxiété avant un examen), 
//                                     <Text style={textstyles.makebold}>
//                                         bon fonctionnement dans tous les domaines, intéressé et impliqué dans un large éventail d'activités. Socialement efficace, généralement satisfait de la vie, aucun problème ou souci autre que ceux du quotidien
//                                     </Text>
//                                     (par exemple, une dispute occasionnelle avec des membres de la famille).
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"80\n|\n71"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Si des symptômes sont présents, ils sont transitoires et des réactions prévisibles aux stresseurs psychosociaux 
//                                     </Text>
//                                     (par exemple, difficulté à se concentrer après une dispute familiale); 
//                                     <Text style={textstyles.makebold}>
//                                     pas plus qu'une légère altération du fonctionnement social, professionnel ou scolaire 
//                                     </Text>
//                                     (par exemple, retard temporaire dans les devoirs scolaires).
//                                 </Text>

//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"70\n|\n61"}</Text></Text>
//                             </View>


//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Quelques symptômes légers 
//                                     </Text>
//                                     (par exemple, humeur dépressive et insomnie légère) 
//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU quelques difficultés dans le fonctionnement social, professionnel ou scolaire 
//                                     </Text>
//                                     (par exemple, absentéisme occasionnel, ou vol au sein du foyer), 
//                                     <Text style={textstyles.makebold}>
//                                         mais fonctionne généralement assez bien, a quelques relations interpersonnelles significatives
//                                     </Text>
//                                 </Text>

//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"60\n|\n51"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Symptômes modérés 
//                                     </Text>
//                                     (par exemple, affect plat et discours circonstancié, attaques de panique occasionnelles)
                                        
//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU difficultés modérées dans le fonctionnement social, professionnel ou scolaire 
//                                     </Text>
//                                     (par exemple, peu d'amis, incapacité à garder un emploi).
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"50\n|\n41"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Symptômes graves 
//                                     </Text>
//                                     (par exemple, idéation suicidaire, rituels obsessionnels sévères, vol à l'étalage fréquent) 

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU une altération grave du fonctionnement social, professionnel ou scolaire
//                                     </Text>
//                                     (par exemple, pas d'amis, incapacité à garder un emploi).
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                             <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"40\n|\n31"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Quelques troubles de la perception de la réalité ou de la communication
//                                     </Text>
//                                     (par exemple, discours parfois illogique, obscur ou hors sujet) 

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU altération majeure dans plusieurs domaines, tels que le travail ou l'école, les relations familiales, le jugement, la pensée ou l'humeur 
//                                     </Text>
//                                     (par exemple, un homme déprimé évite les amis, néglige sa famille, et est incapable de travailler; un enfant frappe fréquemment des plus jeunes, est défiant à la maison et échoue à l'école).
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                                 <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"30\n|\n21"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Le comportement est fortement influencé par des délires ou des hallucinations{"\n"}OU altération grave de la communication ou du jugement
//                                     </Text>
//                                     (par exemple, parfois incohérent, agit de manière totalement inappropriée, préoccupé par le suicide) 

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU incapacité à fonctionner dans presque tous les domaines 
//                                     </Text>
//                                     (par exemple, reste au lit toute la journée; pas de travail, de domicile, ou d'amis).
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                             <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"20\n|\n11"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                             <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Danger de se blesser ou de blesser les autres
//                                     </Text>
//                                     (par exemple, tentatives de suicide sans attente claire de la mort; excitation maniaque violente fréquente)  

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU parfois incapable de maintenir une hygiène personnelle minimale
//                                     </Text>
//                                     (par exemple, s'étale des excréments)

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU altération grave de la communication 
//                                     </Text>
//                                     (par exemple, largement incohérent ou muet).


//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                             <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"10\n|\n1"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>
//                                     <Text style={textstyles.makebold}>
//                                         Danger persistant de gravement blesser soi-même ou les autres 
//                                     </Text>
//                                     (par exemple, violence récurrente)

//                                     <Text style={textstyles.makebold}>
//                                         {"\n"}OU incapacité persistante à maintenir une hygiène personnelle minimale{"\n"}OU acte suicidaire grave avec attente claire de la mort.
//                                     </Text>
                                        
//                                 </Text>
//                             </View>

//                         </View>

//                         <View style={styles.sectioncontainer}>
                            
//                             <View style={styles.sectionnumber}>
//                             <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"0"}</Text></Text>
//                             </View>

//                             <View style={styles.sectiontext}>
//                                 <Text style={textstyles.desctext}>Informations insuffisantes.</Text>
//                             </View>

//                         </View>

//                     </View>

//                 </View>
//             }
//             goHome={() => navigation.goBack()}
//         />
//     );
// }
 
// export default GAFScreen;


import { View, Text } from 'react-native';

import GAFQuestionList from "../../surveytypes/GAFQuestionList";

import textstyles from "../../styles/textstyles";
import gafQuestionListStyle from '../../styles/question list styles/gafQuestionListStyle';

const styles = gafQuestionListStyle;

const GAFScreen = ({navigation}) => {
    return ( 
        <GAFQuestionList 
            questionnaireNumber={36}
            title="Global Assessment of Functioning (GAF) Scale"
            desc={
                <View style={styles.desc}>

                    <View style={styles.topdesc}>
                        <Text style={textstyles.desctext}><Text style={textstyles.centertext}>(From DSM-IV-TR, p. 34.)</Text></Text>
                        <Text style={textstyles.desctext}>Consider psychological, social, and occupational functioning on a hypothetical continuum of mental health-illness. Do not include impairment in functioning due to physical (or environmental) limitations.</Text>
                    </View>

                    <View style={styles.maindesc}>

                        <View style={styles.sectioncontainer}>

                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.makebold}><Text style={textstyles.centertext}>Code</Text></Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}><Text style={textstyles.makebold}>(Note: Use intermediate codes when appropriate, e.g., 45, 68, 72.)</Text></Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"100\n|\n91"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Superior functioning in a wide raange of activities, life's problems never seem to get out of hand, is sought out by others because of his or her many positive qualities. No symptoms.
                                    </Text>
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"90\n|\n81"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Absent or minimal symptoms 
                                    </Text>
                                    (e.g., mild anxiety before an exam), 
                                    <Text style={textstyles.makebold}>
                                        good functioning in all aareas, interested and involved in a wide range of activities. Socially effective, generally satisfied wwith life, no more than everyday problems or concerns 
                                    </Text>
                                    (e.g., an occasional argument with family members).
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"80\n|\n71"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        If symptoms are present, they are transient and expectable reactions to pyschosocial stressors 
                                    </Text>
                                    (e.g., difficulty concentrating after family argument); 
                                    <Text style={textstyles.makebold}>
                                    no more than slight impairment in sociaal, occupational or school functioning 
                                    </Text>
                                    (e.g., temporarily falling behing in schoolwork).
                                </Text>

                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"70\n|\n61"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Some mild symptoms 
                                    </Text>
                                    (e.g., depressed mood and mild insomnia) 
                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR some difficulty in social, occupational, or school functioning 
                                    </Text>
                                    (e.g., occaisonal truancy, or theft within the household), 
                                    <Text style={textstyles.makebold}>
                                        but generally functioning pretty well, has some meaningful interpersonal relationships
                                    </Text>
                                </Text>

                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"60\n|\n51"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Moderate symptoms 
                                    </Text>
                                    (e.g., flat aaffect and circumstantial speech, occasional panic attacks)
                                        
                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR moderate difficulty in social, occupational, or school functioning 
                                    </Text>
                                    (e.g., few friends, unable to keep a job).
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"50\n|\n41"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Serious symptoms 
                                    </Text>
                                    (e.g., sucidial ideation, severe obsessional rituals, frequent shoplifting) 

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR any serious impairment in social, occupational, or school functioning
                                    </Text>
                                    (e.g., no friends, unable to keep a job).
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                            <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"40\n|\n31"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Some impairment in reality testing or communication
                                    </Text>
                                    (e.g., speech is at times illogical, obscure, or irrelevant) 

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR major impairment in several areas, such as work or school, family relations, judhment, thinking or mood 
                                    </Text>
                                    (e.g., depressed man avoids freinds, neglects family, and is unable to workl child frequently beats up younger children, is defiant at home, and is failing at school).
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                                <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"30\n|\n21"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Behavior is considerably influenced by delusions or hallucinations{"\n"}OR serious impairment in communication or judgment
                                    </Text>
                                    (e.g., sometimes incoherent, acts grossly inaappropriately, suicidial preoccupation) 

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR inabilty to function in almost all areas 
                                    </Text>
                                    (e.g., stays in bed all day; no job, home, or friends).
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                            <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"20\n|\n11"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                            <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Some danger of hurting self or others
                                    </Text>
                                    (e.g., suicidae attempts withour clear expectation of deaath; frequent violent, manic excitement)  

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR occasionally fails to maintain minimal person hygiene
                                    </Text>
                                    (e.g., semars feces)

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR gross impairment in communication 
                                    </Text>
                                    (e.g., largely incoherent or mute).


                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                            <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"10\n|\n1"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>
                                    <Text style={textstyles.makebold}>
                                        Persistent danger of severly hurting self or others 
                                    </Text>
                                    (e.g., recurrent violence)

                                    <Text style={textstyles.makebold}>
                                        {"\n"}OR persistent inability to maintain minimal personal hygiene{"\n"}OR serious suicidal act with clear expecation of death.
                                    </Text>
                                        
                                </Text>
                            </View>

                        </View>

                        <View style={styles.sectioncontainer}>
                            
                            <View style={styles.sectionnumber}>
                            <Text style={textstyles.desctext}><Text style={textstyles.centertext}>{"0"}</Text></Text>
                            </View>

                            <View style={styles.sectiontext}>
                                <Text style={textstyles.desctext}>Inadequate information.</Text>
                            </View>

                        </View>

                    </View>

                </View>
            }
            goHome={() => navigation.navigate('ParticipantScreen')}
        />
    );
}
 
export default GAFScreen;