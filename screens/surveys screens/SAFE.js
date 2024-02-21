import SAFEQuestionList from "../../surveytypes/SAFEQuestionList";

const SAFEScreen = ({navigation}) => {
    return ( 
        <SAFEQuestionList 

            questionnaireNumber={5}
            desc=""
            scale={[1,2,3,4,5]}
            values={[1,2,3,4,5]}
            goHome={() => navigation.navigate('Home')}
            qs={[
                "Je me sens inconfortable quand d’autres font des blagues ou rabaissent des personnes du même origine ethnique que le mien.", 

                "J’ai plus ddddd’obstacles à surmonter que la plupart des autres.",

                "Cela me dérange que les membres de ma famille dont je suis proche ne comprennent pas mes nouvelles valeurs.",

                "Des membres de ma famille dont je suis proche et moi-même avons des attentes contradictoires quant à mon avenir.",

                "Il est difficile d’exprimer à mes amis ce que je ressens vraiment.",

                "Ma famille ne veut pas déménager mais je le voudrais.",

                "Cela me dérange de penser que tant de gens consomment de la drogue.",

                "Cela me dérange de ne pas pouvoir être avec ma famille.",

                "Quand je cherche un nouveau travail, j’ai parfois l’impression que mon origine ethnique est une limitation.",

                "Je n’ai aucun ami proche.",

                "eaucoup de personnes ont des stéréotypes sur ma culture ou groupe ethnique et me traitent comme s’ils étaient vrais.",

                "Je ne me sens pas chez moi.",

                "PLes gens croient que je ne suis pas sociable mais en fait c’est que j’ai de la misère à communiquer en français.",

                "J’ai souvent l’impression que les gens essaient activement de m’empêcher d’avancer.",

                "Cela me dérange quand les gens me mettent de la pression pour m’assimiler.",

                "Je me sens souvent ignoré(e) par des gens qui sont sensés m’assister.",
     
                "On ne me donne pas assez de crédit pour le travail que je fais parce que je suis différent(e).",

                "J’ai un accent et cela me dérange.",

                "Desserrer les liens avec mon pays est difficile.",

                "Je pense souvent à mon origine culturelle.",

                "J’ai l’impression que les autres m’excluent de leurs activités à cause de mon origine culturelle.",

                "Cela est difficile pour moi de vanter ma famille.", 

                "Les gens me regardent de haut quand je pratique des coutumes de ma culture.",

                "J’ai de la misère à comprendre les autres quand ils parlent.",
            ]}

        />
     );
}
 
export default SAFEScreen;