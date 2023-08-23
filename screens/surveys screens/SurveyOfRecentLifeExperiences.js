import SoRLEQuestionList from "../../surveytypes/SoRLEQuestionList";

import questionListStyle from "../../styles/question list styles/questionListStyle";
import SoRLEStyle from "../../styles/question styles/SoRLEStyle";
import SoRLEButtonStyle from "../../styles/input styles/SoRLEButtonStyle";

const SoRLEScreen = ({navigation}) => {
    return ( 
        <SoRLEQuestionList 
            title="Survey of recent life events"
            desc="Instructions:

            Following is a list of experiences which many people have some time or other. Please indicate 
            for each experience how much it has been a part of your life over the past month. Put a '1' in 
            the box provided next to an experience if it was not at all part of your life over the past month; 
            '2' for an experience that was only slightly part of your life over that time; '3' for an 
            experience that was distinctly part of your life; and '4' for an experience that was very much 
            part of your life over the past month."
            options={['1', '2', '3', '4']}
            goHome={() => navigation.navigate('Home')}
            buttonstyles={SoRLEButtonStyle}
            questionstyles={SoRLEStyle}
            liststyles={questionListStyle}

            qs={[

                "Disliking your daily activities",
                "Disliking your work",                               
                "Ethnic or racial conflict",
                "Conflicts with in-laws or boyfriend's/girlfriend's family",
                "Being let down or disappointed by friends",
                "Conflicts with supervisor(s) at work",
                "Social rejection",
                "Too many things to do at once",
                "Being taken for granted",
                "Financial conflicts with family members",
                "Having your trust betrayed by a friend",
                "Having your contributions overlooked",
                "Struggling to meet your own standards of performance and accomplishment",
                "Being taken advantage of",
                "Not enough leisure time",
                "Cash flow difficulties",
                "A lot of responsibilities",
                "Dissatisfaction with work",
                "Decisions about intimate relationship(s)",
                "Not enough time to meet your obligations",
                "Financial burdens",
                "Lower evaluation of your work than you think you deserve",
                "Experiencing high levels of noise",
                "Lower evaluation of your work than you hoped for",
                "Conflicts with family member(s)",
                "Finding your work too demanding",
                "Conflicts with friend(s)",
                "Trying to secure loans",
                "Getting 'ripped off' or cheated in the purchase of goods",
                "Unwanted interruptions of your work",
                "Social isolation",
                "Being ignored",
                "Dissatisfaction with your physical appearance",
                "Unsatisfactory housing conditions",
                "Finding work uninteresting",
                "Failing to get money you expected",
                "Gossip about someone you care about",                       
                "Dissatisfaction with your physical fitness",
                "Gossip about yourself",
                "Difficulty dealing with modern technology (e.g. computers)",
                "Hard work to look after and maintain home",
            ]}
        />
     );
}
 
export default SoRLEScreen;