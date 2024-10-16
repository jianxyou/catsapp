import AESQuestionList from "../../surveytypes/AESQuestionList";

const AES_fr_Screen = ({navigation}) => {
    return (
        <AESQuestionList 
            questionnaireNumber={46}
            desc="For each statement, circle the answer that best describes the subject’s thoughts, feelings, and activity in the past 4 weeks"
            scale={[
                "PAS DU TOUT",
                "LÉGÈREMENT",
                "MODÉRÉMENT",
                "BEAUCOUP",
            ]}
            values={[
                "NOT AT ALL",
                "SLIGHTLY",
                "SOMEWHAT",
                "A LOT",
            ]}
            goHome={() => navigation.goBack()}

            qs={[
                "Des choses m'intéressant.",
                "J'accomplis des tâches durant la journée.",
                "Commencer des tâches oar moi-même est important pour moi",
                "Vivre de nouvelles expériences m'intéresse",
                "Apprendre de nouvelles choses m'intéresse",
                "Je met peu d'effort dans quoi que ce soit",
                "J'approche la vie avec intensité",
                "Compléter une tâche jusqu'au bout m'est important",
                "Je passe du temps à faire des choses qui m'intéressent.",
                "Quelqu'un doit me dire quoi faire à tous les jours.",
                "Je suis moins concerné(e) par mes problèmes que je devrais l'être.",
                "J'ai des amis",
                "Passer du temps avec mes amis est important pour moi",
                "Lorsque quelque chose de bien arrive, je suis excité(e)",
                "J'ai une compréhension exacte de mes problèmes",
                "Accomplir des tâches  durant la journée est important pour moi",
                "J'ai de l'initiative",
                
            ]}
        />
      );
}
 
export default AES_fr_Screen;