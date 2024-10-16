import SAFEQuestionList from "../../surveytypes/SAFEQuestionList";

const SAFE_fr_Screen = ({navigation}) => {
    return ( 
        <SAFEQuestionList 

            questionnaireNumber={45}
            desc=""
            scale={[1,2,3,4,5]}
            values={[1,2,3,4,5]}
            goHome={() => navigation.goBack()}
            qs={[
                "Je me sens mal à l'aise lorsque d'autres personnes font des blagues ou rabaissent des personnes de mon origine ethnique.", 

                "J'ai plus d'obstacles à surmonter que la plupart des gens.",

                "Cela me dérange que les membres de ma famille auxquels je suis proche ne comprennent pas mes nouvelles valeurs.",

                "Les membres proches de ma famille et moi avons des attentes contradictoires concernant mon avenir.",

                "Il est difficile d'exprimer à mes amis ce que je ressens vraiment.",

                "Ma famille ne veut pas que je déménage mais j'aimerais le faire.",

                "Cela me dérange de penser que tant de gens consomment de la drogue.",

                "Cela me dérange de ne pas pouvoir être avec ma famille.",

                "En cherchant un bon emploi, j'ai parfois l'impression que mon origine ethnique est une limitation.",

                "Je n'ai pas d'amis proches.",

                "Beaucoup de gens ont des stéréotypes sur ma culture ou mon groupe ethnique et me traitent comme s'ils étaient vrais.",

                "Je ne me sens pas chez moi.",

                "Les gens pensent que je suis asocial alors qu'en fait j'ai du mal à communiquer en anglais.",

                "J'ai souvent l'impression que les gens essaient activement de m'empêcher d'avancer.",

                "Cela me dérange quand les gens me pressent de m'assimiler.",

                "Je me sens souvent ignoré par les personnes censées m'aider.",
     
                "Parce que je suis différent, je n'obtiens pas assez de crédit pour le travail que je fais.",

                "Cela me dérange d'avoir un accent.",

                "Relâcher les liens avec mon pays est difficile.",

                "Je pense souvent à mon origine culturelle.",

                "En raison de mon origine ethnique, je sens que les autres m'excluent souvent de leur activité.",

                "Il est difficile pour moi de 'montrer' ma famille.", 

                "Les gens me méprisent si je pratique les coutumes de ma culture.",

                "J'ai du mal à comprendre les autres lorsqu'ils parlent.",
            ]}

        />
     );
}
 
export default SAFE_fr_Screen;