import { Text } from 'react-native';

import MacCATQuestionList from "../../surveytypes/MacCATQuestionList";

import textstyles from "../../styles/textstyles";
import radioStyles from '../../styles/input styles/radioStyles';
import FTNDStyle from '../../styles/question styles/FTNDStyle';
import CompoundStyle from '../../styles/compound survey styles/CompoundStyle';
import questionListStyle from '../../styles/question list styles/questionListStyle';


const MaccatScreen = ({navigation}) => {
    return ( 
        <MacCATQuestionList 
        listoflistofqs={[
            [
                <Text style={textstyles.desctext}>
                    Nature of Project{"\n"}Why are we doing this study?{"\n"}<Text style={textstyles.makeitalic}>To measure synaptic density and neuroinflammation in the brain</Text>
                    {"\n"}
                    {"\n"}
                    What procedures are involved in this study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        Clinical Interviews
                        {"\n"}Questionnaures
                        {"\n"}3 PET scans (1 optional)
                        {"\n"}2 MRI scans (1 optional)
                    </Text>
                </Text>,

                <Text style={textstyles.desctext}>
                    Primary purpose is research
                    {"\n"}What is the main goal of the study?
                    {"\n"}<Text style={textstyles.makeitalic}>1. Research</Text>
                </Text>,

                <Text style={textstyles.desctext}>
                    Effects on individualized care 
                    {"\n"}How is your participantion in this study affecting your further treatment?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        1. No change in your as needed
                        {"\n"}2. Continue vists with your psychiatrist if needed
                        {"\n"}3. 5 visits with Research Team
                    </Text>
                </Text>,

                <Text style={textstyles.desctext}>
                    Side Effects (of PET scan) & Benefits
                    {"\n"}What are 2 possible rissks or side effects of being in the study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        {"\n"}1. Pain or bruising at site of arteriaal line insertion
                        {"\n"}Pain or brusing at site of injection
                        {"\n"}Becme tired or upset of answering question
                        {"\n"}Small amount of radiation
                    </Text>
                    {"\n"}{"\n"}What is aa possible benefit of being in this study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        Contribution to scientific knowledge
                        {"\n"}Monetary compensation (305 $)
                    </Text>
                </Text>, 


                <Text style={textstyles.desctext}>
                    Ability to withdraw
                    {"\n"}When can you withdraw from the study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        1. At ANY point.
                    </Text>
                    {"\n"}{"\n"}
                    What happens if you decide to withdraw?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        2. Have the right to withdraw
                        {"\n"}3. NO effect on treated as needed.
                        {"\n"}4. NO effect on participation in future studies.
                        {"\n"}5. Receive payment for all the time spent in the study
                    </Text>
                </Text>,
            ],





            [
                <Text style={textstyles.desctext}>
                    Object no personal benefit
                    {"\n"}What is your understanding of the primary goal of this study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        Goal of the study is research
                        {"\n"}To measure sssynaptic density and neuroinflammation in the brain
                    </Text>
                </Text>,

                <Text style={textstyles.desctext}>
                    Possibility of reduced benefit
                    {"\n"}Is the reduction of symptoms the primary goal of this study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        1. Symptom change not main goal; Research
                    </Text>
                </Text>,

                <Text style={textstyles.desctext}>
                    What do you believe would happen if you decide to withdraw from the study?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        1. Have the right to withdraw.
                        {"\n"}2. NO effect on treatment as needed.
                        {"\n"}3. No effect on participation in future studies.
                        {"\n"}4. Receive payment for all the time spent in the study.
                    </Text>
                </Text>,
            ],


            [
                (<Text style={textstyles.desctext}>
                    Consequential Reasoning
                    {"\n"}Based on what you know about the study, are you still interested in participating. If 'YES': give reasons for your choice.
                </Text>),

                (<Text style={textstyles.desctext}>
                    Comparative Reasoning
                    {"\n"}Since participation is optional, do you understand what other options you have?
                </Text>),

                (<Text style={textstyles.desctext}>
                    Generating Consequences
                    {"\n"}We have discussed the requirements of the study of and possible side effects as well as benefits of the study. How would participating in the study affect your everyday life?
                    {"\n"}<Text style={textstyles.makeitalic}>
                        1. Required to come to the Montreal Neurological Institute for the PET scan visits and to the Douglas Research Centre for the other visits
                        {"\n"}2. Possible mild nausea at PET scan
                        {"\n"}3. May become tired or upset from answering questionss
                        {"\n"}4. Benefits: monetary compensation (305$)
                    </Text>
                </Text>),

                (<Text style={textstyles.desctext}>
                    Logical consistency of choice
                    {"\n"}A few minutes ago you told me you favoured either participating (or not participating) in the study. Whqat do you think now that we haave discussed everything?
                </Text>),

            ],


            [
                <Text style={textstyles.desctext}>
                    You have been invited to participate in the Imaging Alterations in Synaptic density and neuroinflammation in Clinical High Risk and First Episode Psychosis, would you like to participate? 
                </Text>
            ],

    

        ]} 

        scales={[
            [
                [
                "2  Able to give 1 objective of this project and list 3 procedures.",
	            "1  Able to give 1 objective of this project and list 2 procedures.",
	            "0  Unable to recall objective or unable to list more than 1 procedure.",
                ],

                [
                    "2  States it's a research study & research (not tx) is main goal.",
	                "1  States it's a research study but doesn't specify that research outweighs treatment in the objectives.",
	                "0  Doesn't state the research is the focus OR states treatment is focus.",
                ],

                [
                    "2  States any 2 of the above points.",
	                "1  States any 1 of the above points.",
	                "0  Unable to give any of the above points.",
                ],

                [
                    "2  Able to give 1 risk and 1 benefit",
                    "1  Able to give either 1 risk or 1 benefit.",
                    "0  Unable to list a risk or benefit.",
                ],

                [
                    "2  Able to give point 1 and two of points 2-5.",
	                "1  Able to give point 1 and one of points 2-5.",
	                "0  Unable to give point 1 (may still state any number of points 2-5).",
                ],
            ],

            [
                [
                    "2  States points 1 and 2; and acknowledges being recruited for reason unrelated to potential personal benefit and has condition of relevance to study.",
                    "1  Gives point 1 or 2, acknowledges being recruited for reason related and unrelated",
                    "0  Unable to distinguish between research and treatment, gives neither point 1 or point 2."
                ],

                [
                    "2  Acknowledges that symptom change is not the primary goaal of the study.",
                    "1  Demostrates uncertainty as to whether personal needs determine experiment conditions",
                    "0  Fails to acknowledge that symptom changes is not the primary goal of the study.",
                ],

                [
                    "2  Able to give two points including point 2, acknowledges that refusal to participate or withdraw has no adverse effects. Able to receive regular treatment as indicated",
                    "1  Able to give one point but is uncertaain whether refusal or withdrawl will have adverse effects (or believes for a plausible reason that refusal or withdrawal will have adverse effects).",
                    "0  Unable to give any of the above points, believes refusal or withdrawal will have adverse effects for no plausible reason.",
                ]

            ],

            [
                [
                    "2  Able to give 2 specific reasons when expalining their choice (either from points discussed or other plausible consequences).",
                    "1  Mentions only 1 specific reason",
                    "0  Unaable to identify specific consquences even after further querying (i.e., 'any more specific reasons what that choice seems best?').",
                ],

                [
                    "2  Offers at least one statment in the form of a comparision of at least two opinions, with the comparison including a statement of at least one specific difference.",
                    "1  Makes comparison statement, but doesn't include a statment of a specific consequence.",
                    "0  Makes no comparative statement",
                ],

                [
                    "2  Gives at least 2 reasonable consequences to at least two of the above (may be specifically prompted, e.g., how would the tiem requirement affect your everyday life?) which go beyond what is presented (e.g., nausea may limit activity).",
                    "1  Gives one or more consequences to one of the above.",
                    "0  Goves no everyday consequences despite encouragement.",
                ],

                [
                    "2  Choice flowd logically from subject's own reasoning as evident in the previous three subparts.",
                    "1  It is not clear if choice follows logically from ssubject's own reasoning.",
                    "0  Subject's choice clearly doesn't follow logically from own reasoning."
                ]

            ],

            [
                [
                    "2  Statess a choice",
                    "1  States more than once choice, seems ambivalent",
                    "0  Does not state a choice",
                ]
            ],
        ]}
        values={[
            [
                [2,1,0],
                [2,1,0],
                [2,1,0],
                [2,1,0],
                [2,1,0],
            ],

            [
                [2,1,0],
                [2,1,0],
                [2,1,0],
            ],

            [
                [2,1,0],
                [2,1,0],
                [2,1,0],
                [2,1,0],
            ],

            [
                [2,1,0],
            ],

        ]} 
        title="MacCAT" 

        minidescs={[
            "Understanding",
            "Appreciation",
            "Reasoning",
            "Expressing a choice",
        ]} 
        desc="" 
        goHome={() => navigation.navigate('Home')} 
        buttonstyles={radioStyles} 
        questionstyles={FTNDStyle} 
        liststyles={CompoundStyle} 
        finalstyles={questionListStyle}
        />
     );
}
 
export default MaccatScreen;