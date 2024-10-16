import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import SubmitButton from "../../partials/SubmitButton";
import { captureRef } from 'react-native-view-shot';
import returnInternalName from '../../helpers/returnInternalName';

const BGLHA_fr = ({ navigation }) => {
    // État pour gérer les options sélectionnées pour chaque section et ligne
    const [selected, setSelected] = useState({
        section1: { child: null, teen: null, adult: null },
        section2: { child: null, teen: null, adult: null },
        section3: { child: null, teen: null, adult: null },
        section4: { child: null, teen: null, adult: null },
        section5: { child: null, teen: null, adult: null },
        section6: { child: null, teen: null, adult: null },
        section7: { child: null, teen: null, adult: null },
        section8: { child: null, teen: null, adult: null },
        section9: { child: null, teen: null, adult: null },
        section10: { child: null, teen: null, adult: null },
        section11: { child: null, teen: null, adult: null },
    });

    // Gérer la sélection dans le tableau
    const handleSelect = (section, row, column) => {
        setSelected({
            ...selected,
            [section]: { ...selected[section], [row]: column },
        });
    };

    async function capture(ref) {
        const uri = await captureRef(ref, {
            format: 'png',
            quality: 1.0,
            result: 'tmpfile',
            fileName: 'kkmage',
            snapshotContentContainer: true,
            useRenderInContext: true,
        })

        const myuri = 'file://' + uri;

        return myuri;
    }

    const questionnaireNumber = 43;
    const ref1 = useRef();
    const goHome=() => navigation.goBack()

    const button = <SubmitButton capture={() => capture(ref1)} goHome={goHome} questionnaireNumber={questionnaireNumber}></SubmitButton>;

    // Rendre une seule ligne du tableau
    const renderRow = (section, label, row) => (
        <View style={styles.row} key={`${section}-${row}`}>
            <Text style={styles.label}>{label}</Text>
            {['N', 'R', 'O', 'F', 'DNA', 'DNK'].map((column) => (
                <TouchableOpacity
                    key={column}
                    style={[
                        styles.cell,
                        selected[section][row] === column ? styles.selected : null,
                    ]}
                    onPress={() => handleSelect(section, row, column)}
                >
                    {selected[section][row] === column ? <View style={styles.innerCircle} /> : null}
                </TouchableOpacity>
            ))}
        </View>
    );

    // Rendre une seule section avec une question, des entrées et un tableau
    const renderSection = (sectionNumber, question, extraFields = []) => (
        <View style={styles.section} key={`section${sectionNumber}`}>
            <Text style={styles.question}>{sectionNumber}. {question}</Text>
            {extraFields.map((field, index) => (
                <View key={index} style={styles.fieldContainer}>
                    <Text style={styles.subQuestion}>{field.label}</Text>
                    <TextInput
                        style={field.isLong ? styles.inputLong : styles.inputShort}
                        placeholder={field.placeholder}
                        multiline={field.isLong}
                        numberOfLines={field.isLong ? 4 : 1}
                    />
                </View>
            ))}
            <View style={styles.tableContainer}>
                <View style={styles.headerRow}>
                    <Text style={[styles.headerCell, { marginLeft: 45 }]}></Text>
                    {['N', 'R', 'O', 'F', 'DNA', 'DNK'].map((column) => (
                        <Text key={column} style={styles.headerCell}>{column}</Text>
                    ))}
                </View>
                {renderRow(`section${sectionNumber}`, 'Enfant', 'child')}
                {renderRow(`section${sectionNumber}`, 'Adolescent', 'teen')}
                {renderRow(`section${sectionNumber}`, 'Adulte', 'adult')}
            </View>
        </View>
    );

    return (
        <ScrollView ref={ref1} style={styles.container}>
            {renderSection(1, "Lorsque vous étiez à l'école, avez-vous eu des problèmes disciplinaires (ex. retenue, suspension, expulsion)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(2, "Avez-vous eu des difficultés à vous entendre avec votre superviseur de travail (y compris service militaire, bénévolat, service communautaire)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(3, "Avez-vous eu des crises de colère (ex : comportement incontrôlé envers les autres)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Comment cela s'est-il manifesté ?", placeholder: "Décrivez la manifestation", isLong: true },
                { label: "Qu'est-ce qui l'a provoqué ?", placeholder: "Décrivez la provocation", isLong: true },
                { label: "Décrivez :", placeholder: "Fournissez des détails supplémentaires", isLong: true }
            ])}
            {renderSection(4, "Avez-vous eu des difficultés à vous entendre avec votre superviseur de travail (y compris service militaire, bénévolat, service communautaire)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(5, "Avez-vous déjà eu des disputes sérieuses avec votre famille et/ou vos amis (inclure uniquement des disputes sérieuses)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(6, "Avez-vous été dans une bagarre physique (inclure la famille et les étrangers)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(7, "Avez-vous déjà délibérément détruit des objets qui vous appartenaient ou qui appartenaient à d'autres (même des incidents mineurs)?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(8, "Avez-vous déjà fait quelque chose d'illégal pour lequel vous n'avez pas été pris ? (Ne pas exclure les actes illégaux de l'élément 7)", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(9, "Avez-vous déjà eu des ennuis avec la police ? Même si c'était un incident mineur (inclure les infractions au code de la route, trouble à l'ordre public, etc.) ?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(10, "Avez-vous déjà tenté de blesser quelqu'un (autre que vous-même) avec une arme (ex. couteau, arme à feu...) ?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}
            {renderSection(11, "Avez-vous déjà été violent envers vous-même (actes non suicidaires uniquement, ex : auto-mutilation, se frapper la tête contre un mur, brûlures mineures, égratignures ou autres actes non considérés comme des tentatives de suicide) ?", [
                { label: "Quand cela s'est-il produit?", placeholder: "Précisez la période" },
                { label: "Décrivez :", placeholder: "Fournissez des détails", isLong: true }
            ])}

            {button}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    section: {
        marginBottom: 30,
    },
    question: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subQuestion: {
        fontSize: 14,
        marginBottom: 5,
    },
    fieldContainer: {
        marginBottom: 10,
    },
    inputShort: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        backgroundColor: '#e0f0ff',
    },
    inputLong: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: '#e0f0ff',
        height: 60,
    },
    tableContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    headerCell: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 40,
        textAlignVertical: 'center',
        marginHorizontal: 6
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    label: {
        width: 100,
        fontSize: 16,
        paddingLeft: 10,
    },
    cell: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selected: {
        backgroundColor: '#007bff',
    },
    innerCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
});

export default BGLHA_fr;
