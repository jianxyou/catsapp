import { StyleSheet, ScrollView, View, Text } from 'react-native';

import TecQuestionList from "../surveytypes/TecQuestionList";

import textstyles from '../styles/textstyles';
import questionListStyle from "../styles/question list styles/questionListStyle";

const TecScreen = ({ navigation }) => {

    const styles2 = StyleSheet.create({
        stickyHeader: {
            // Ajouter vos styles, par exemple couleur de fond, style de police, etc.
            backgroundColor: 'white',
            // Assurez-vous qu'il est en haut
            fontsize: 300
        },

        textLarge: {
            backgroundColor: 'white',
            paddingLeft: 500,
            fontSize: 29, // Vous pouvez ajuster cette valeur selon vos besoins
        },

        textLittle: {
            backgroundColor: 'white',
            paddingLeft: 500,
            fontSize: 20, // Vous pouvez ajuster cette valeur selon vos besoins
        }
    });

    const StickyHeader = () => (
        <View>
            <Text style={styles2.textLarge}>     Âge                niveau d'impact            <Text style={styles2.textLittle}>niveau de soutien (0 - 2) </Text> </Text>
        </View>
    );

    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <StickyHeader />
            <TecQuestionList
                questionnaireNumber={21}
                qs={[
                    "Devoir s'occuper de vos parents et/ou frères et sœurs quand vous étiez enfant.",
                    "Problèmes familiaux (par exemple, parent avec des problèmes d'alcool ou psychiatriques, pauvreté).",
                    "Perte d'un membre de la famille (frère, sœur, parent) quand vous étiez ENFANT.",
                    "Perte d'un membre de la famille (enfant du partenaire) quand vous étiez ADULTE.",
                    "Blessure corporelle grave (par exemple, perte d'un membre, mutilation, brûlures).",
                    "Menace pour la vie due à une maladie, une opération ou un accident.",
                    "Divorce de vos parents",
                    "Votre propre divorce",
                    "Menace pour la vie de la part d'une autre personne (par exemple, lors d'un crime).",
                    "Douleur intense (par exemple, due à une blessure ou à une opération).",
                    "Expériences de guerre (par exemple, emprisonnement, perte de proches, privation, blessure).",
                    "Victime de guerre de deuxième génération (expériences de guerre des parents ou proches)",
                    "Témoigner d'autres subir des traumatismes.",
                    "Négligence émotionnelle (par exemple, être laissé seul, affection insuffisante) par vos parents, frères ou sœurs.",
                    "Négligence émotionnelle par des membres de la famille plus éloignés (par exemple, oncles, tantes, neveux, nièces, grands-parents).",
                    "Négligence émotionnelle par des non-membres de la famille (par exemple, voisins, amis, beaux-parents, enseignants).",
                    "Abus émotionnel (par exemple, être rabaissé, taquiné, insulté, menacé verbalement ou injustement puni) par vos parents, frères ou sœurs.",
                    "Abus émotionnel par des membres de la famille plus éloignés.",
                    "Abus émotionnel par des non-membres de la famille.",
                    "Abus physique (par exemple, être frappé, torturé ou blessé) par vos parents, frères ou sœurs.",
                    "Abus physique par des membres de la famille plus éloignés.",
                    "Abus physique par des non-membres de la famille.",
                    "Punition bizarre",
                    "Harcèlement sexuel (actes de nature sexuelle qui n'impliquent PAS de contact physique) par vos parents, frères ou sœurs.",
                    "Harcèlement sexuel par des membres de la famille plus éloignés.",
                    "Harcèlement sexuel par des non-membres de la famille.",
                    "Abus sexuel (actes sexuels non désirés impliquant un contact physique) par vos parents, frères ou sœurs.",
                    "Abus sexuel par des membres de la famille plus éloignés.",
                    "Abus sexuel par des non-membres de la famille.",
                ]}
                desc={
                    <View style={questionListStyle.desc}>
                        <Text style={textstyles.desctext}>
                            {"Les gens peuvent vivre une variété d'expériences traumatisantes au cours de leur vie. Nous aimerions savoir trois choses : 1) si vous avez vécu l'un des 29 événements suivants, 2) quel âge vous aviez lorsque cela s'est produit, et 3) quel impact ces expériences ont eu sur vous."}
                            {"\n\n"}
                            {"A) Dans la "}<Text style={textstyles.underline}>première colonne</Text>{" (c'est-à-dire, cela vous est-il arrivé ?), indiquez si vous avez vécu chacune des 29 expériences en entourant OUI ou NON."}
                            {"\n\n"}
                            {"B) Pour chaque expérience où vous avez entouré OUI, indiquez "}<Text style={textstyles.underline}>dans la deuxième colonne</Text>{" (c'est-à-dire, Âge) votre âge lorsque cela s'est produit."}
                            {"\n"}
                            {"Si cela s'est produit plus d'une fois, indiquez TOUS les âges où cela s'est produit."}
                            {"\n"}
                            {"Si cela s'est produit pendant des années (par exemple, de 7 à 12 ans), indiquez la plage d'âges (c'est-à-dire de 7 à 12 ans)."}
                            {"\n\n"}
                            {"C) Dans la "}<Text style={textstyles.underline}>deuxième colonne</Text>{" (c'est-à-dire, Quel impact cela a-t-il eu sur vous ?), indiquez l'IMPACT (en entourant le numéro approprié) : 1, 2, 3, 4 ou 5."}
                            {"\n\n"}
                            {"1 = aucun"}
                            {"\n"}
                            {"2 = un peu"}
                            {"\n"}
                            {"3 = modéré"}
                            {"\n"}
                            {"4 = assez"}
                            {"\n"}
                            {"5 = beaucoup"}   
                            {"\n"}
                            {"\n"}
                            {"D) Dans la "}<Text style={textstyles.underline}>dernière colonne</Text>{" (c'est-à-dire, Quel impact cela a-t-il eu sur vous ?), indiquez combien de soutien vous avez reçu par la suite."} 
                            {"\n\n"}
                            {"0 = aucun"}
                            {"\n"}
                            {"1 = un peu"}
                            {"\n"}
                            {"2 = bon"}
                            {"\n"}
                            Merci pour votre coopération.
                        </Text>
                    </View>
                }
                goHome={() => navigation.navigate('ParticipantScreen')}
                finalstyles={questionListStyle}
            />
        </ScrollView>
    );
}

export default TecScreen;
