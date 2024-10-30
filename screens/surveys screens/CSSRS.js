

import React, { useRef, useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { KeyboardAvoidingView, Platform } from 'react-native';

import SubmitButton from "../../partials/SubmitButton";
import returnInternalName from '../../helpers/returnInternalName';

 // Question component for handling Yes/No and total attempts inputs
 const AttemptQuestionBlock = ({ questionText, state, setState }) => {
  return (
    <View style={styles.questionContainer}>
      <Text>{questionText}</Text>

      {/* Yes/No for Lifetime */}
      <Text style={styles.subTitle}>Lifetime</Text>
      <View style={styles.checkboxRow}>
        <Checkbox label="Yes" checked={state.lifetimeYes} onChange={(value) => setState({ ...state, lifetimeYes: value, lifetimeNo: !value })} />
        <Checkbox label="No" checked={state.lifetimeNo} onChange={(value) => setState({ ...state, lifetimeNo: value, lifetimeYes: !value })} />
        <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />
      </View>

      {/* Yes/No for Past 3 months */}
      <Text style={styles.subTitle}>Past 3 months</Text>
      <View style={styles.checkboxRow}>
        <Checkbox label="Yes" checked={state.recentYes} onChange={(value) => setState({ ...state, recentYes: value, recentNo: !value })} />
        <Checkbox label="No" checked={state.recentNo} onChange={(value) => setState({ ...state, recentNo: value, recentYes: !value })} />
        <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />
      </View>

  
      {/* Description if Yes is selected */}
      <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />
    </View>
  );
};
// Reusable component to pick a value for Lifetime and Past Month with unique options for each question
const IntensityPicker = ({ label, options, lifetimeValue, recentValue, onLifetimeChange, onRecentChange }) => {
  return (
    <View style={styles.pickerContainer}>
      <Text style = {styles.lable}>{label}</Text>

      {/* Lifetime Picker */}
      <Text style={styles.subTitle}>Lifetime</Text>
      <View style={styles.pickerRow}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[styles.pickerOption, lifetimeValue === option.value && styles.selectedOption]}
            onPress={() => onLifetimeChange(option.value)}
          >
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Past Month Picker */}
      <Text style={styles.subTitle}>Past Month</Text>
      <View style={styles.pickerRow}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[styles.pickerOption, recentValue === option.value && styles.selectedOption]}
            onPress={() => onRecentChange(option.value)}
          >
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const LethalityQuestionBlock = ({ questionText, options, state, setState }) => {
  return (
    <View style={styles.questionContainer}>
      <Text>{questionText}</Text>

      {/* Options display */}
      {options.map((option) => (
        <Text key={option.value} style={styles.optionText}>{`${option.value}. ${option.label}`}</Text>
      ))}

      {/* Lifetime Code Input */}
      <Text style={styles.subTitle}>Lifetime</Text>
      <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />

      {/* Past 3 months Code Input */}
      <Text style={styles.subTitle}>Past 3 months</Text>
      <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />
    </View>
  );
};
// Checkbox component for the yes/no selections
const Checkbox = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity onPress={() => onChange(!checked)} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

// QuestionBlock component for Suicidal Ideation section
const QuestionBlock = ({ questionText, state, setState }) => {
  return (
    <View style={styles.questionContainer}>
      <Text>{questionText}</Text>
      <View style={styles.checkboxRow}>
        <Text>Lifetime:</Text>
        <Checkbox label="Yes" checked={state.lifetimeYes} onChange={(value) => setState({ ...state, lifetimeYes: value, lifetimeNo: !value })} />
        <Checkbox label="No" checked={state.lifetimeNo} onChange={(value) => setState({ ...state, lifetimeNo: value, lifetimeYes: !value })} />
        {/* <Checkbox label="Yes" />
        <Checkbox label="No" /> */}
      </View>
      <View style={styles.checkboxRow}>
        <Text>Past Month:</Text>
        <Checkbox label="Yes" checked={state.pastMonthYes} onChange={(value) => setState({ ...state, pastMonthYes: value, pastMonthNo: !value })} />
        <Checkbox label="No" checked={state.pastMonthNo} onChange={(value) => setState({ ...state, pastMonthNo: value, pastMonthYes: !value })} />
        {/* <Checkbox label="Yes" />
        <Checkbox label="No" /> */}
      </View>
      <TextInput
          style={styles.input}
          placeholder="If yes, describe..."
          blurOnSubmit={false}
        />
    </View>
  )};


  async function capture(ref) {
    if (!ref.current) {
      console.error('Reference is not available.');
      return;
    }
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




const CSSRSScreen= ({ navigation }) => {

  // const inputRef = useRef(null);

 
  
  const questionnaireNumber = 37
  const ref1 = useRef();
  const goHome =() => navigation.navigate('ParticipantScreen')
  // onErrorIndices={handleErrorIndices} dataForFlag = {dataForFlag}
  const button = <SubmitButton capture={() => capture(ref1)} goHome={goHome} questionnaireNumber={questionnaireNumber}></SubmitButton>
  

  // useEffect(() => {
  //   if (ref1.current) {
  //     capture(ref1);
  //   }
  // }, [ref1]);
  // State for Suicidal Ideation questions
  const [wishToDie, setWishToDie] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
  const [nonSpecificThoughts, setNonSpecificThoughts] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
  const [activeIdeationNoIntent, setActiveIdeationNoIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
  const [activeIdeationWithIntent, setActiveIdeationWithIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
  const [specificPlanIntent, setSpecificPlanIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });

  // State for Intensity of Ideation questions (frequency, duration, controllability, deterrents, reasons for ideation)
  const [frequency, setFrequency] = useState({ lifetime: 0, recent: 0 });
  const [duration, setDuration] = useState({ lifetime: 0, recent: 0 });
  const [controllability, setControllability] = useState({ lifetime: 0, recent: 0 });
  const [deterrents, setDeterrents] = useState({ lifetime: 0, recent: 0 });
  const [reasons, setReasons] = useState({ lifetime: 0, recent: 0 });


  const [actualAttempt, setActualAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
  const [interruptedAttempt, setInterruptedAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
  const [abortedAttempt, setAbortedAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
  const [preparatoryActs, setPreparatoryActs] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
  
  
  const [actualLethality, setActualLethality] = useState({ lifetimeCode: '', recentCode: '' });
  const [potentialLethality, setPotentialLethality] = useState({ lifetimeCode: '', recentCode: '' });


  return (
    <ScrollView  ref={ref1} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Suicidal Ideation Form</Text>

      {/* Suicidal Ideation Questions */}
      <QuestionBlock
        questionText="1. Wish to be Dead: Have you wished you were dead or wished you could go to sleep and not wake up?"
        state={wishToDie}
        setState={setWishToDie}
      />
      <QuestionBlock
        questionText="2. Non-Specific Active Suicidal Thoughts: Have you actually had any thoughts of killing yourself?"
        state={nonSpecificThoughts}
        setState={setNonSpecificThoughts}
      />
      <QuestionBlock
        questionText="3. Active Suicidal Ideation with Any Methods (Not Plan) without Intent to Act: Have you been thinking about how you might do this?"
        state={activeIdeationNoIntent}
        setState={setActiveIdeationNoIntent}
      />
      <QuestionBlock
        questionText="4. Active Suicidal Ideation with Some Intent to Act, without Specific Plan: Have you had these thoughts and had some intention of acting on them?"
        state={activeIdeationWithIntent}
        setState={setActiveIdeationWithIntent}
      />
      <QuestionBlock
        questionText="5. Active Suicidal Ideation with Specific Plan and Intent: Have you started to work out or worked out the details of how to kill yourself?"
        state={specificPlanIntent}
        setState={setSpecificPlanIntent}
      />

      {/* Intensity of Ideation */}
      <Text style={styles.sectionTitle}>Intensity of Ideation</Text>

           {/* Frequency */}
        <IntensityPicker
        label="Frequency: How many times have you had these thoughts?"
        options={[
          { label: "(1) Less than once a week", value: 1 },
          { label: "(2) Once a week", value: 2 },
          { label: "(3) 2-5 times in a week", value: 3 },
          { label: "(4) Daily or almost daily", value: 4 },
          { label: "(5) Many times each day", value: 5 },
        ]}
        lifetimeValue={frequency.lifetime}
        recentValue={frequency.recent}
        onLifetimeChange={(value) => setFrequency({ ...frequency, lifetime: value })}
        onRecentChange={(value) => setFrequency({ ...frequency, recent: value })}
      />

      {/* Duration */}
      <IntensityPicker
        label="Duration: When you have the thoughts how long do they last?"
        options={[
          { label: "(1) Fleeting - few seconds or minutes", value: 1 },
          { label: "(2) Less than 1 hour/some of the time", value: 2 },
          { label: "(3) 1-4 hours/a lot of time", value: 3 },
          { label: "(4) 4-8 hours/most of day", value: 4 },
          { label: "(5) More than 8 hours/persistent or continuous", value: 5 },
        ]}
        lifetimeValue={duration.lifetime}
        recentValue={duration.recent}
        onLifetimeChange={(value) => setDuration({ ...duration, lifetime: value })}
        onRecentChange={(value) => setDuration({ ...duration, recent: value })}
      />

      {/* Controllability */}
      <IntensityPicker
        label="Controllability: Could/can you stop thinking about killing yourself or wanting to die if you want to?"
        options={[
          { label: "(1) Easily able to control thoughts", value: 1 },
          { label: "(2) Can control thoughts with little difficulty", value: 2 },
          { label: "(3) Can control thoughts with some difficulty", value: 3 },
          { label: "(4) Can control thoughts with a lot of difficulty", value: 4 },
          { label: "(5) Unable to control thoughts", value: 5 },
          { label: "(0) Does not attempt to control thoughts", value: 0 },
        ]}
        lifetimeValue={controllability.lifetime}
        recentValue={controllability.recent}
        onLifetimeChange={(value) => setControllability({ ...controllability, lifetime: value })}
        onRecentChange={(value) => setControllability({ ...controllability, recent: value })}
      />

      {/* Deterrents */}
      <IntensityPicker
        label="Deterrents: Are there things (e.g., family, religion, pain of death) that stopped you from wanting to die?"
        options={[
          { label: "(1) Deterrents definitely stopped you", value: 1 },
          { label: "(2) Deterrents probably stopped you", value: 2 },
          { label: "(3) Uncertain that deterrents stopped you", value: 3 },
          { label: "(4) Deterrents most likely did not stop you", value: 4 },
          { label: "(5) Deterrents definitely did not stop you", value: 5 },
          { label: "(0) Does not apply", value: 0 },
        ]}
        lifetimeValue={deterrents.lifetime}
        recentValue={deterrents.recent}
        onLifetimeChange={(value) => setDeterrents({ ...deterrents, lifetime: value })}
        onRecentChange={(value) => setDeterrents({ ...deterrents, recent: value })}
      />

      {/* Reasons for Ideation */}
      <IntensityPicker
        label="Reasons for Ideation: What sort of reasons did you have for thinking about wanting to die or killing yourself?"
        options={[
          { label: "(1) Completely to get attention, revenge, or a reaction from others", value: 1 },
          { label: "(2) Mostly to get attention, revenge, or a reaction from others", value: 2 },
          { label: "(3) Equally to get attention, revenge or reaction from others and to end/stop the pain", value: 3 },
          { label: "(4) Mostly to end/stop the pain", value: 4 },
          { label: "(5) Completely to end/stop the pain", value: 5 },
          { label: "(0) Does not apply", value: 0 },
        ]}
        lifetimeValue={reasons.lifetime}
        recentValue={reasons.recent}
        onLifetimeChange={(value) => setReasons({ ...reasons, lifetime: value })}
        onRecentChange={(value) => setReasons({ ...reasons, recent: value })}
      />


    <Text style={styles.sectionTitle}>Suicidal behaviour</Text>
        {/* Actual Attempt Section */}
      <AttemptQuestionBlock
        questionText="Actual Attempt: Have you made a suicide attempt? Have you done anything to harm yourself?"
        state={actualAttempt}
        setState={setActualAttempt}
      />

      {/* Interrupted Attempt Section */}
      <AttemptQuestionBlock
        questionText="Interrupted Attempt: Has there been a time when you started to do something to end your life but someone or something stopped you before you actually did anything?"
        state={interruptedAttempt}
        setState={setInterruptedAttempt}
      />


      <AttemptQuestionBlock
        questionText="Has there been a time when you started to do something to try to end your life but you stopped yourself before you
        actually did anything?"
        state={abortedAttempt}
        setState={setAbortedAttempt}
      />

      <AttemptQuestionBlock
        questionText="Have you taken any steps towards making a suicide attempt or preparing to kill yourself (such as collecting pills,
          getting a gun, giving valuables away or writing a suicide note)?"
        state={preparatoryActs}
        setState={setPreparatoryActs}
      />

       {/* Actual Lethality/Medical Damage Section */}
       <LethalityQuestionBlock
        questionText="Actual Lethality/Medical Damage:"
        options={[
          { label: "No physical damage or very minor physical damage (e.g., surface scratches)", value: 0 },
          { label: "Minor physical damage (e.g., lethargic speech; first-degree burns; mild bleeding; sprains)", value: 1 },
          { label: "Moderate physical damage; medical attention needed (e.g., conscious but sleepy, somewhat responsive; second-degree burns; bleeding of major vessel)", value: 2 },
          { label: "Moderately severe physical damage; medical hospitalization and likely intensive care required", value: 3 },
          { label: "Severe physical damage; medical hospitalization with intensive care required", value: 4 },
          { label: "Death", value: 5 },
        ]}
        state={actualLethality}
        setState={setActualLethality}
      />

      {/* Potential Lethality Section */}
      <LethalityQuestionBlock
        questionText="Potential Lethality (Only Answer if Actual Lethality = 0):"
        options={[
          { label: "Behavior not likely to result in injury", value: 0 },
          { label: "Behavior likely to result in injury but not likely to cause death", value: 1 },
          { label: "Behavior likely to result in death despite available medical care", value: 2 },
        ]}
        state={potentialLethality}
        setState={setPotentialLethality}
      />
      {button}
     </ScrollView>



     
   );
 };



const styles = {
  container: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,  // 将字体大小调大
    fontWeight: 'bold',  // 保持粗体
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,  // 同样调大副标题的字体
    fontWeight: '600',  // 设置为半粗体，稍微显眼
    marginTop: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 24,
  },
  questionContainer: {
    marginBottom: 24,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  pickerContainer: {
    marginVertical: 12,
  },
  pickerRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pickerOption: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    minWidth: 40,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',  // 黑色，但设置透明度为 20%
    borderColor: '#000',
    color: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginLeft: 16,
    width: 1000,
    height: 40,
    borderRadius: 4,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
    minHeight: 80,
  },

  label :{
    fontSize: 13,  
    fontWeight: '800',  
    marginTop: 8,
    marginBottom: 8,

  }
};
 export default CSSRSScreen;
