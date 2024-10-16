import { LightSpeedInLeft } from "react-native-reanimated";
import AESQuestionList from "../../surveytypes/AESQuestionList";

const AESScreen = ({navigation}) => {
    return (
        <AESQuestionList 
            questionnaireNumber={11}
            desc="For each statement, check the answer that best describes the subject’s thoughts, feelings, and activity in the past 4 weeks"
            scale={[
                "NOT AT ALL",
                "SLIGHTLY",
                "SOMEWHAT",
                "A LOT",
            ]}
            values={[
                "NOT AT ALL",
                "SLIGHTLY",
                "SOMEWHAT",
                "A LOT",
            ]}
            goHome={() => navigation.goBack()}   

            qs={[
                "I am interested in things.",
                "I get things done during the day.",               
                "Getting things started on my own is important to me.",
                "I am interested in having new experiences.",
                "I am interested in learning new things",
                "I put little effort into anything.",
                "I approach life with intensity.",
                "Seeing a job through to the end is important to me.",
                "I spend time doing things that interest me.",
                "Someone has to tell me what to do each day.",
                "I am less concerned about my problems than I should be.",
                "I have friends.", 
                "Getting together with friends is important to me.",
                "When something good happens, I get excited.",
                "I have an accurate understanding of my problems.",
                "Getting things done during the day is important to me.",
                "I have initiative.",
                "I have motivation.",
                 
            ]}
        />
      );


    
}
 
export default AESScreen;


