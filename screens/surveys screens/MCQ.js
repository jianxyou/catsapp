import MCQQuestionList from "../../surveytypes/MCQQuestionList";
import questionListStyle from "../../styles/question list styles/questionListStyle";

const MCQScreen = ({navigation}) => {

    return ( 
        
        <MCQQuestionList 
            questionnaireNumber={5}
            desc=""
            scale={[1,2,3,4,5,6,7]}
            values={[1,2,3,4,5,6,7]}
            goHome={() => navigation.goBack()}
            finalstyles={questionListStyle}
            qs={[
                "Smoking marijuana would be pleasant right now.",
                "I could not easily limit how much marijuana I smoked right now.",
                "Right now, I am making plans to use marijuana.",
                "I would feel more in control of things right now if I could smoke marijuana.",
                "Smoking marijuana would help me sleep better at night.",
                "If I smoked marijuana right now, I would feel less tense.",
                "I would not be able to control how much marijuana I smoked if I had some here.",
                "It would be great to smoke marijuana right now.",
                "I would feel less anxious if I smoked marijuana right now.",
                "I need to smoke marijuana now.",
                "If I were smoking marijuana right now, I would feel less nervous.",
                "Smoking marijuana would make me content.",
            ]}

        />
    );
}
 
export default MCQScreen;