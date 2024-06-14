import AESQuestionList from "../../surveytypes/AESQuestionList";

const AESScreen = ({navigation}) => {
    return (
        <AESQuestionList 
            questionnaireNumber={11}
            desc="Pour chaque affirmation, cochez la réponse qui décrit le mieux les pensées, les sentiments et l'activité du sujet au cours des 4 dernières semaines"
            scale={[
                "PAS DU TOUT",
                "LÉGÈREMENT",
                "QUELQUE PEU",
                "BEAUCOUP",
            ]}
            values={[
                "PAS DU TOUT",
                "LÉGÈREMENT",
                "QUELQUE PEU",
                "BEAUCOUP",
            ]}
            goHome={() => navigation.navigate('ParticipantScreen')}

            qs={[
                "Je suis intéressé par les choses.",
                "Je fais des choses pendant la journée.",
                "Il est important pour moi de commencer des choses par moi-même.",
                "Je suis intéressé par de nouvelles expériences.",
                "Je suis intéressé par l'apprentissage de nouvelles choses.",
                "Je ne mets presque aucun effort dans quoi que ce soit.",
                "J'aborde la vie avec intensité.",
                "Il est important pour moi de mener une tâche à son terme.",
                "Je passe du temps à faire des choses qui m'intéressent.",
                "Quelqu'un doit me dire quoi faire chaque jour.",
                "Je suis moins préoccupé par mes problèmes que je ne devrais l'être.",
                "J'ai des amis.",
                "Il est important pour moi de rencontrer des amis.",
                "Quand quelque chose de bien arrive, je suis excité.",
                "J'ai une compréhension précise de mes problèmes.",
                "Il est important pour moi de faire des choses pendant la journée.",
                "J'ai de l'initiative.",
                "J'ai de la motivation.",
            ]}
        />
      );
}

export default AESScreen;
