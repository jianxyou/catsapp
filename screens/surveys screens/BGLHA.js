import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import SubmitButton from "../../partials/SubmitButton";
import { captureRef } from 'react-native-view-shot';
import returnInternalName from '../../helpers/returnInternalName';


const BGLHA= ({ navigation }) => {
    // State to manage selected options for each section and row
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

    // Handle selection in the table
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
    const questionnaireNumber = 37
    const ref1 = useRef();
    const goHome=() => navigation.goBack()

    // onErrorIndices={handleErrorIndices} dataForFlag = {dataForFlag}
    const button = <SubmitButton capture={() => capture(ref1)} goHome={goHome} questionnaireNumber={questionnaireNumber}></SubmitButton>
    

    // Render a single table row
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

    // Render a single section with a question, inputs, and table
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
                <Text style={[styles.headerCell, { marginLeft: 45}]}></Text>
                    {['N', 'R', 'O', 'F', 'DNA', 'DNK'].map((column) => (
                        <Text key={column} style={styles.headerCell}>{column}</Text>
                    ))}
                </View>
                {renderRow(`section${sectionNumber}`, 'Enfant', 'child')}
                {renderRow(`section${sectionNumber}`, 'Adolescent', 'teen')}
                {renderRow(`section${sectionNumber}`, 'Adult', 'adult')}
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>N = Never, R = Rarely, O = Occasionally, F = Frequently, DNK = Do Not Know, DNA = Does Not Apply</Text>
            </View>
        <ScrollView ref={ref1} style={styles.container}>
           
            {renderSection(1, "When you were in school, did you have disciplinary problems (ex. detention, suspension, expulsion)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(2, "Did you have difficulty getting along with your work supervisor (includes military service, volunteer, community service)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(3, "Did you have temper tantrum (ex: uncontrolled behaviour towards others)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "How is it manifested?", placeholder: "Describe manifestation", isLong: true },
                { label: "What provoked it?", placeholder: "Describe the provocation", isLong: true },
                { label: "Describe:", placeholder: "Provide additional details", isLong: true }
            ])}
            {renderSection(4, "Did you have difficulty getting along with your work supervisor (includes military service, volunteer, community service)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(5, "Have you ever had serious arguments with your family and/or friends (include only serious arguments)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(6, "Have you been in a physical fight (include family and strangers)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(7, "Have you ever deliberately destroyed objects that belonged to you or others (even minor incidents)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(8, "Have you ever done something illegal for which you were not caught? (Do not exclude illegal acts from item 7)", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(9, "Have you ever had trouble with the police? Even if it was a minor incident (include traffic violations, disturbing the peace, etc.)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(10, "Have you ever attempted to harm someone (other than yourself) with a weapon (e.g., knife, gun...)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}
            {renderSection(11, "Have you ever been violent towards yourself (non-suicidal acts only, e.g., self-harm, hitting your head against a wall, minor burns, scratches, or other acts not considered suicide attempts)?", [
                { label: "When did it happen?", placeholder: "Specify the time period" },
                { label: "Describe:", placeholder: "Provide details", isLong: true }
            ])}

            {button}
        </ScrollView>

        </View>
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

export default BGLHA;
