import CheckboxSurvey from "../../surveytypes/CheckboxSurvey";
import checkButtonStyle from "../../styles/input styles/checkboxStyles";
import RLEQuestionListStyle from "../../styles/question list styles/RLEQuestionListStyle";
import RLEStyle from "../../styles/question styles/RLEStyle";

const RLEScreen = ({navigation}) => {
    return (  
        <CheckboxSurvey 
        questionnaireNumber={11}

        qs={[
            "Avez-vous eu une maladie grave ou avez-vous été grièvement blessé?",

            "Has one of your immediate family * been seriously ill or injured?",

            "Est-ce que l'un de vos amis proches ou d'autres membres proches de votre famille ont été gravement malades ou blessés?",

            "Est-ce que quelqu'un de votre famille immédiate est décédé?",

            "Est-ce qu’un membre proche de votre famille ou l’un de vos amis proches sont décédés?",

            "Vous êtes-vous séparé de votre partenaire (sans compter un décès)?",

            "Avez-vous eu un problème sérieux avec un ami proche, un voisin ou un parent?",

            "Avez-vous, ou un membre de votre famille immédiate, été victime d'abus raciaux, d'attaques ou de menaces graves?",

            "Avez-vous, ou un membre de votre famille immédiate, été victime d'abus, d'attaques, de menaces - peut-être parce que vous ou quelqu'un de proche avez un handicap quelconque (c'est-à-dire un problème de santé mentale, un trouble d'apprentissage ou un problème physique)?",

            "Avez-vous, ou un membre de votre famille immédiate, été victime d'une autre forme d'abus grave, d'attaque ou de menace",

            "Vous, ou votre partenaire, êtes au chômage ou à la recherche d'un emploi depuis plus d'un mois?",

            "Vous, ou votre partenaire, avez été licencié de votre emploi ou ils vous ont fait sentir redondant?",

            "Avez-vous eu des difficultés financières majeures (ex.: dettes, difficultés à payer vos factures)?",

            "Est-ce que vous ou un membre de votre famille immédiate avez eu des contacts avec la police ou avez comparu en cour?",

            "Est-ce que vous ou un membre proche de votre famille avez été cambriolé ou agressé?",

            "Est-ce que vous ou une autre personne qui habite avec vous avez accouché?",

            "Est-ce que vous ou une autre personne vivant avec vous avez fait une fausse couche ou avez eu un mort-né?",

            "Avez-vous déménagé (par choix)?",

            "Avez-vous déménagé (pas par choix)?",

            "Avez-vous eu des difficultés de logement?",

            "Avez-vous eu un autre événement significatif (veuillez préciser)?",
        ]}

        options={[
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
            ["", ""],
        ]} 
        
        values={[
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
            ["YES", "YES, STILL AFFECTS ME"],
        ]} 

        desc="Listed below are a number of events. Please read each item carefully and then indicate whether or not each event has 
        happened to you in the past year.
        
        
        Please tick the YES box if the event has occurred.
        Please tick the 'still affects me' box if the event is still having an effect on your life" 
        
        goHome={() => navigation.navigate('Home')} 
        labels={["Oui", "M'affecte encore"]} 
        buttonstyles={checkButtonStyle} 
        questionstyles={RLEStyle} 
        finalstyles={RLEQuestionListStyle}
        />
    );
}
 
export default RLEScreen;