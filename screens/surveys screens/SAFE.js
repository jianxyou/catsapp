import SAFEQuestionList from "../../surveytypes/SAFEQuestionList";

const SAFEScreen = ({navigation}) => {
    return ( 
        <SAFEQuestionList 

            questionnaireNumber={10}
            desc=""
            scale={[1,2,3,4,5]}
            values={[1,2,3,4,5]}
            goHome={() => navigation.navigate('PatientScreen')}
            qs={[
                "I feel uncomfortable when others make jokes about or put down people of my ethnic background.", 

                "I have more barriers to overcome than most people.",

                "It bothers me that family members I am close to do not understand my new values.",

                "Close family members and I have conflicting expectations about my future.",

                "It is hard to express to my friends how I really feel.",

                "My family does not want me to move away but I would like to.",

                "It bothers me to think that so many people use drugs.",

                "It bothers me that I cannot be with my family.",

                "In looking for a good job, I sometimes feel that my ethnicity is a limitation.",

                "I don't have any close friends.",

                "Many people have stereotypes about my culture or ethnic group and treat me as if they are true.",

                "I don't feel at home.",

                "People think I am unsociable when in fact I have trouble communicating in English.",

                "I often feel that people actively try to stop me from advancing.",

                "It bothers me when people pressure me to assimilate.",

                "I often feel ignored by people who are supposed to assist me.",
     
                "Because I am different I do not get enough credit for the work I do.",

                "It bothers me that I have an accent.",

                "Loosening the ties with my country is difficult.",

                "I often think about my cultural background.",

                "Because of my ethnic background, I feel that others often exclude me from participating in their activities.",

                "It is difficult for me to 'show off' my family.", 

                "People look down upon me if I practice customs of my culture.",

                "I have trouble understanding others when they speak.",
            ]}

        />
     );
}
 
export default SAFEScreen;