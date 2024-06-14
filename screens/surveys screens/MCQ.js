import MCQQuestionList from "../../surveytypes/MCQQuestionList";
import questionListStyle from "../../styles/question list styles/questionListStyle";

const MCQScreen = ({navigation}) => {

    return ( 
        <MCQQuestionList 
            questionnaireNumber={5}
            desc=""
            scale={[1, 2, 3, 4, 5, 6, 7]}
            values={[1, 2, 3, 4, 5, 6, 7]}
            goHome={() => navigation.navigate('MriScreen')}
            finalstyles={questionListStyle}
            qs={[
                "Fumer de la marijuana serait agréable en ce moment.",
                "Je ne pourrais pas facilement limiter la quantité de marijuana que je fume en ce moment.",
                "En ce moment, je fais des plans pour consommer de la marijuana.",
                "Je me sentirais plus en contrôle des choses en ce moment si je pouvais fumer de la marijuana.",
                "Fumer de la marijuana m'aiderait à mieux dormir la nuit.",
                "Si je fumais de la marijuana en ce moment, je me sentirais moins tendu.",
                "Je ne serais pas capable de contrôler combien de marijuana je fume si j'en avais ici.",
                "Ce serait génial de fumer de la marijuana en ce moment.",
                "Je me sentirais moins anxieux si je fumais de la marijuana en ce moment.",
                "J'ai besoin de fumer de la marijuana maintenant.",
                "Si je fumais de la marijuana en ce moment, je me sentirais moins nerveux.",
                "Fumer de la marijuana me rendrait content.",
            ]}
        />
    );
}
 
export default MCQScreen;
