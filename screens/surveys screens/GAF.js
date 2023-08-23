import { View, Text } from 'react-native';

import GAFQuestionList from "../../surveytypes/GAFQuestionList";

import textstyles from "../../styles/textstyles";
import gafQuestionListStyle from '../../styles/question list styles/gafQuestionListStyle';

const styles = gafQuestionListStyle;

const GAFScreen = ({navigation}) => {
    return ( 
        <GAFQuestionList 
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
            goHome={() => navigation.navigate('Home')}
        />
    );
}
 
export default GAFScreen;