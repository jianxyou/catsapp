// import React, { useRef, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import { captureRef } from 'react-native-view-shot';

// import SubmitButton from "../../partials/SubmitButton";
// import returnInternalName from '../../helpers/returnInternalName';

// const CSSRSScreen = ({ navigation }) => {

//   // Composant pour les questions avec Oui/Non et les tentatives totales
//   const AttemptQuestionBlock = ({ questionText, state, setState }) => {
//     return (
//       <View style={styles.questionContainer}>
//         <Text>{questionText}</Text>

//         {/* Oui/Non pour la vie entière */}
//         <Text style={styles.subTitle}>Vie entière</Text>
//         <View style={styles.checkboxRow}>
//           <Checkbox label="Oui" checked={state.lifetimeYes} onChange={(value) => setState({ ...state, lifetimeYes: value, lifetimeNo: !value })} />
//           <Checkbox label="Non" checked={state.lifetimeNo} onChange={(value) => setState({ ...state, lifetimeNo: value, lifetimeYes: !value })} />
//           <TextInput
//             style={styles.input}
//             placeholder="Nombre total de tentatives"
//             keyboardType="numeric"
//             value={state.lifetimeAttempts}
//             onChangeText={(text) => setState({ ...state, lifetimeAttempts: text })}
//           />
//         </View>

//         {/* Oui/Non pour les 3 derniers mois */}
//         <Text style={styles.subTitle}>Les 3 derniers mois</Text>
//         <View style={styles.checkboxRow}>
//           <Checkbox label="Oui" checked={state.recentYes} onChange={(value) => setState({ ...state, recentYes: value, recentNo: !value })} />
//           <Checkbox label="Non" checked={state.recentNo} onChange={(value) => setState({ ...state, recentNo: value, recentYes: !value })} />
//           <TextInput
//             style={styles.input}
//             placeholder="Nombre total de tentatives"
//             keyboardType="numeric"
//             value={state.recentAttempts}
//             onChangeText={(text) => setState({ ...state, recentAttempts: text })}
//           />
//         </View>

//         {/* Description si Oui est sélectionné */}
//         {(state.lifetimeYes || state.recentYes) && (
//           <TextInput
//             style={styles.descriptionInput}
//             placeholder="Si oui, décrivez..."
//             value={state.description}
//             onChangeText={(text) => setState({ ...state, description: text })}
//           />
//         )}
//       </View>
//     );
//   };

//   // Composant réutilisable pour sélectionner une valeur pour la vie entière et le dernier mois avec des options uniques
//   const IntensityPicker = ({ label, options, lifetimeValue, recentValue, onLifetimeChange, onRecentChange }) => {
//     return (
//       <View style={styles.pickerContainer}>
//         <Text style={styles.label}>{label}</Text>

//         {/* Sélecteur pour la vie entière */}
//         <Text style={styles.subTitle}>Vie entière</Text>
//         <View style={styles.pickerRow}>
//           {options.map((option) => (
//             <TouchableOpacity
//               key={option.value}
//               style={[styles.pickerOption, lifetimeValue === option.value && styles.selectedOption]}
//               onPress={() => onLifetimeChange(option.value)}
//             >
//               <Text>{option.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Sélecteur pour le dernier mois */}
//         <Text style={styles.subTitle}>Le dernier mois</Text>
//         <View style={styles.pickerRow}>
//           {options.map((option) => (
//             <TouchableOpacity
//               key={option.value}
//               style={[styles.pickerOption, recentValue === option.value && styles.selectedOption]}
//               onPress={() => onRecentChange(option.value)}
//             >
//               <Text>{option.label}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   const LethalityQuestionBlock = ({ questionText, options, state, setState }) => {
//     return (
//       <View style={styles.questionContainer}>
//         <Text>{questionText}</Text>

//         {/* Affichage des options */}
//         {options.map((option) => (
//           <Text key={option.value} style={styles.optionText}>{`${option.value}. ${option.label}`}</Text>
//         ))}

//         {/* Saisie du code pour la vie entière */}
//         <Text style={styles.subTitle}>Vie entière</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Entrez le code"
//           keyboardType="numeric"
//           value={state.lifetimeCode}
//           onChangeText={(text) => setState({ ...state, lifetimeCode: text })}
//         />

//         {/* Saisie du code pour les 3 derniers mois */}
//         <Text style={styles.subTitle}>Les 3 derniers mois</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Entrez le code"
//           keyboardType="numeric"
//           value={state.recentCode}
//           onChangeText={(text) => setState({ ...state, recentCode: text })}
//         />
//       </View>
//     );
//   };

//   // Composant de case à cocher pour les sélections Oui/Non
//   const Checkbox = ({ label, checked, onChange }) => {
//     return (
//       <TouchableOpacity onPress={() => onChange(!checked)} style={styles.checkboxContainer}>
//         <View style={[styles.checkbox, checked && styles.checked]} />
//         <Text>{label}</Text>
//       </TouchableOpacity>
//     );
//   };

//   // Composant QuestionBlock pour la section Idéation Suicidaire
//   const QuestionBlock = ({ questionText, state, setState }) => {
//     return (
//       <View style={styles.questionContainer}>
//         <Text>{questionText}</Text>
//         <View style={styles.checkboxRow}>
//           <Text>Vie entière :</Text>
//           <Checkbox label="Oui" checked={state.lifetimeYes} onChange={(value) => setState({ ...state, lifetimeYes: value, lifetimeNo: !value })} />
//           <Checkbox label="Non" checked={state.lifetimeNo} onChange={(value) => setState({ ...state, lifetimeNo: value, lifetimeYes: !value })} />
//         </View>
//         <View style={styles.checkboxRow}>
//           <Text>Le dernier mois :</Text>
//           <Checkbox label="Oui" checked={state.pastMonthYes} onChange={(value) => setState({ ...state, pastMonthYes: value, pastMonthNo: !value })} />
//           <Checkbox label="Non" checked={state.pastMonthNo} onChange={(value) => setState({ ...state, pastMonthNo: value, pastMonthYes: !value })} />
//         </View>
//         <TextInput
//           style={styles.input}
//           placeholder="Si oui, décrivez..."
//           value={state.description}
//           onChangeText={(text) => setState({ ...state, description: text })}
//         />
//       </View>
//     );
//   };

//   async function capture(ref) {
//     if (!ref.current) {
//       console.error('La référence n\'est pas disponible.');
//       return;
//     }
//     const uri = await captureRef(ref, {
//         format: 'png',
//         quality: 1.0,
//         result: 'tmpfile',
//         fileName: 'kkmage',
//         snapshotContentContainer: true,
//         useRenderInContext: true,
//     })
  
//     const myuri = 'file://' + uri;
//     return myuri;
//   }
  
//   const questionnaireNumber = 37;
//   const ref1 = useRef();
//   const goHome = () => navigation.goBack();
  
//   const button = <SubmitButton capture={() => capture(ref1)} goHome={goHome} questionnaireNumber={questionnaireNumber}></SubmitButton>;

//   const [wishToDie, setWishToDie] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
//   const [nonSpecificThoughts, setNonSpecificThoughts] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
//   const [activeIdeationNoIntent, setActiveIdeationNoIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
//   const [activeIdeationWithIntent, setActiveIdeationWithIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
//   const [specificPlanIntent, setSpecificPlanIntent] = useState({ lifetimeYes: false, lifetimeNo: false, pastMonthYes: false, pastMonthNo: false, description: '' });
//   const [frequency, setFrequency] = useState({ lifetime: 0, recent: 0 });
//   const [duration, setDuration] = useState({ lifetime: 0, recent: 0 });
//   const [controllability, setControllability] = useState({ lifetime: 0, recent: 0 });
//   const [deterrents, setDeterrents] = useState({ lifetime: 0, recent: 0 });
//   const [reasons, setReasons] = useState({ lifetime: 0, recent: 0 });
//   const [actualAttempt, setActualAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
//   const [interruptedAttempt, setInterruptedAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
//   const [abortedAttempt, setAbortedAttempt] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
//   const [preparatoryActs, setPreparatoryActs] = useState({ lifetimeYes: false, lifetimeNo: false, recentYes: false, recentNo: false, lifetimeAttempts: '', recentAttempts: '', description: '' });
  
//   const [actualLethality, setActualLethality] = useState({ lifetimeCode: '', recentCode: '' });
//   const [potentialLethality, setPotentialLethality] = useState({ lifetimeCode: '', recentCode: '' });

//   return (
//     <ScrollView ref={ref1} contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Formulaire d'idéation suicidaire</Text>

//       {/* Questions sur l'idéation suicidaire */}
//       <QuestionBlock
//         questionText="1. Souhait de mourir : Avez-vous souhaité être mort ou avez-vous souhaité pouvoir dormir et ne jamais vous réveiller ?"
//         state={wishToDie}
//         setState={setWishToDie}
//       />
//       <QuestionBlock
//         questionText="2. Pensées suicidaires actives non spécifiques : Avez-vous réellement eu des pensées de vous tuer ?"
//         state={nonSpecificThoughts}
//         setState={setNonSpecificThoughts}
//       />
//       <QuestionBlock
//         questionText="3. Idéation suicidaire active avec méthodes (sans plan) sans intention d'agir : Avez-vous pensé à comment vous pourriez faire cela ?"
//         state={activeIdeationNoIntent}
//         setState={setActiveIdeationNoIntent}
//       />
//       <QuestionBlock
//         questionText="4. Idéation suicidaire active avec une certaine intention d'agir, sans plan spécifique : Avez-vous eu ces pensées et avez-vous eu une certaine intention d'agir ?"
//         state={activeIdeationWithIntent}
//         setState={setActiveIdeationWithIntent}
//       />
//       <QuestionBlock
//         questionText="5. Idéation suicidaire active avec un plan spécifique et une intention : Avez-vous commencé à élaborer ou élaboré les détails de la façon dont vous alliez vous tuer ?"
//         state={specificPlanIntent}
//         setState={setSpecificPlanIntent}
//       />

//       {/* Intensité de l'idéation */}
//       <Text style={styles.sectionTitle}>Intensité de l'idéation</Text>

//       {/* Fréquence */}
//       <IntensityPicker
//         label="Fréquence : Combien de fois avez-vous eu ces pensées ?"
//         options={[
//           { label: "(1) Moins d'une fois par semaine", value: 1 },
//           { label: "(2) Une fois par semaine", value: 2 },
//           { label: "(3) 2-5 fois par semaine", value: 3 },
//           { label: "(4) Quotidien ou presque quotidien", value: 4 },
//           { label: "(5) Plusieurs fois par jour", value: 5 },
//         ]}
//         lifetimeValue={frequency.lifetime}
//         recentValue={frequency.recent}
//         onLifetimeChange={(value) => setFrequency({ ...frequency, lifetime: value })}
//         onRecentChange={(value) => setFrequency({ ...frequency, recent: value })}
//       />

//       {/* Durée */}
//       <IntensityPicker
//         label="Durée : Quand vous avez ces pensées, combien de temps durent-elles ?"
//         options={[
//           { label: "(1) Fugace - quelques secondes ou minutes", value: 1 },
//           { label: "(2) Moins d'une heure/la moitié du temps", value: 2 },
//           { label: "(3) 1-4 heures/une grande partie du temps", value: 3 },
//           { label: "(4) 4-8 heures/la plupart de la journée", value: 4 },
//           { label: "(5) Plus de 8 heures/persistantes ou continues", value: 5 },
//         ]}
//         lifetimeValue={duration.lifetime}
//         recentValue={duration.recent}
//         onLifetimeChange={(value) => setDuration({ ...duration, lifetime: value })}
//         onRecentChange={(value) => setDuration({ ...duration, recent: value })}
//       />

//       {/* Contrôlabilité */}
//       <IntensityPicker
//         label="Contrôlabilité : Pouvez-vous arrêter de penser à vous tuer ou à vouloir mourir si vous le souhaitez ?"
//         options={[
//           { label: "(1) Capable de contrôler les pensées facilement", value: 1 },
//           { label: "(2) Peut contrôler les pensées avec peu de difficulté", value: 2 },
//           { label: "(3) Peut contrôler les pensées avec une certaine difficulté", value: 3 },
//           { label: "(4) Peut contrôler les pensées avec beaucoup de difficulté", value: 4 },
//           { label: "(5) Incapable de contrôler les pensées", value: 5 },
//           { label: "(0) N'essaie pas de contrôler les pensées", value: 0 },
//         ]}
//         lifetimeValue={controllability.lifetime}
//         recentValue={controllability.recent}
//         onLifetimeChange={(value) => setControllability({ ...controllability, lifetime: value })}
//         onRecentChange={(value) => setControllability({ ...controllability, recent: value })}
//       />

//       {/* Dissuasion */}
//       <IntensityPicker
//         label="Dissuasion : Y a-t-il des choses (par exemple, famille, religion, douleur de la mort) qui vous ont empêché de vouloir mourir ?"
//         options={[
//           { label: "(1) Les dissuasions vous ont définitivement arrêté", value: 1 },
//           { label: "(2) Les dissuasions vous ont probablement arrêté", value: 2 },
//           { label: "(3) Incertain que les dissuasions vous ont arrêté", value: 3 },
//           { label: "(4) Les dissuasions vous ont très probablement pas arrêté", value: 4 },
//           { label: "(5) Les dissuasions ne vous ont définitivement pas arrêté", value: 5 },
//           { label: "(0) Ne s'applique pas", value: 0 },
//         ]}
//         lifetimeValue={deterrents.lifetime}
//         recentValue={deterrents.recent}
//         onLifetimeChange={(value) => setDeterrents({ ...deterrents, lifetime: value })}
//         onRecentChange={(value) => setDeterrents({ ...deterrents, recent: value })}
//       />

//       {/* Raisons de l'idéation */}
//       <IntensityPicker
//         label="Raisons de l'idéation : Quelles sortes de raisons aviez-vous pour penser à vouloir mourir ou vous tuer ?"
//         options={[
//           { label: "(1) Complètement pour attirer l'attention, se venger ou provoquer une réaction des autres", value: 1 },
//           { label: "(2) Principalement pour attirer l'attention, se venger ou provoquer une réaction des autres", value: 2 },
//           { label: "(3) Également pour attirer l'attention, se venger ou provoquer une réaction des autres et pour mettre fin à la douleur", value: 3 },
//           { label: "(4) Principalement pour mettre fin à la douleur", value: 4 },
//           { label: "(5) Complètement pour mettre fin à la douleur", value: 5 },
//           { label: "(0) Ne s'applique pas", value: 0 },
//         ]}
//         lifetimeValue={reasons.lifetime}
//         recentValue={reasons.recent}
//         onLifetimeChange={(value) => setReasons({ ...reasons, lifetime: value })}
//         onRecentChange={(value) => setReasons({ ...reasons, recent: value })}
//       />

//       <Text style={styles.sectionTitle}>Comportement suicidaire</Text>

//       {/* Tentative réelle */}
//       <AttemptQuestionBlock
//         questionText="Tentative réelle : Avez-vous fait une tentative de suicide ? Avez-vous fait quelque chose pour vous faire du mal ?"
//         state={actualAttempt}
//         setState={setActualAttempt}
//       />

//       {/* Tentative interrompue */}
//       <AttemptQuestionBlock
//         questionText="Tentative interrompue : Y a-t-il eu un moment où vous avez commencé à faire quelque chose pour mettre fin à votre vie mais quelqu'un ou quelque chose vous a arrêté avant que vous ne fassiez quoi que ce soit ?"
//         state={interruptedAttempt}
//         setState={setInterruptedAttempt}
//       />

//       {/* Tentative avortée */}
//       <AttemptQuestionBlock
//         questionText="Y a-t-il eu un moment où vous avez commencé à faire quelque chose pour essayer de mettre fin à votre vie mais vous vous êtes arrêté avant de faire quoi que ce soit ?"
//         state={abortedAttempt}
//         setState={setAbortedAttempt}
//       />

//       {/* Actes préparatoires */}
//       <AttemptQuestionBlock
//         questionText="Avez-vous pris des mesures pour préparer une tentative de suicide ou vous préparer à vous tuer ? (par exemple, collecter des pilules, obtenir une arme, donner des objets de valeur ou écrire une lettre de suicide) ?"
//         state={preparatoryActs}
//         setState={setPreparatoryActs}
//       />

//         {/* Létalité réelle / Dommages médicaux */}
//       <LethalityQuestionBlock
//         questionText="Létalité réelle / Dommages médicaux :"
//         options={[
//           { label: "Aucun dommage physique ou très léger (par exemple, égratignures superficielles)", value: 0 },
//           { label: "Légers dommages physiques (par exemple, parole léthargique, brûlures du premier degré, saignement léger, entorses)", value: 1 },
//           { label: "Dommages physiques modérés, soins médicaux nécessaires (par exemple, conscient mais somnolent, peu réactif, brûlures au deuxième degré, saignement d'un gros vaisseau)", value: 2 },
//           { label: "Dommages physiques modérément sévères, hospitalisation médicale probablement nécessaire en soins intensifs", value: 3 },
//           { label: "Dommages physiques sévères, hospitalisation médicale et soins intensifs nécessaires", value: 4 },
//           { label: "Décès", value: 5 },
//         ]}
//         state={actualLethality}
//         setState={setActualLethality}
//       />

//       {/* Létalité potentielle */}
//       <LethalityQuestionBlock
//         questionText="Létalité potentielle (à répondre uniquement si létalité réelle = 0) :"
//         options={[
//           { label: "Comportement peu susceptible de causer des blessures", value: 0 },
//           { label: "Comportement susceptible de causer des blessures mais peu susceptible de causer la mort", value: 1 },
//           { label: "Comportement susceptible de causer la mort malgré les soins médicaux disponibles", value: 2 },
//         ]}
//         state={potentialLethality}
//         setState={setPotentialLethality}
//       />
      
//       {/* Bouton de soumission */}
//       {button}
//     </ScrollView>
//   );
// };

// const styles = {
//   container: {
//     padding: 16,
//     backgroundColor: '#f4f4f4',
//   },
//   title: {
//     fontSize: 24, 
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   sectionTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: 24,
//   },
//   questionContainer: {
//     marginBottom: 24,
//   },
//   checkboxRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 8,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#000',
//     marginRight: 8,
//   },
//   checked: {
//     backgroundColor: '#000',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginVertical: 8,
//     borderRadius: 4,
//   },
//   pickerContainer: {
//     marginVertical: 12,
//   },
//   pickerRow: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   pickerOption: {
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     minWidth: 40,
//     alignItems: 'center',
//   },
//   selectedOption: {
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     borderColor: '#000',
//     color: '#fff',
//   },
//   descriptionInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginTop: 8,
//     borderRadius: 4,
//     minHeight: 80,
//   },
//   label: {
//     fontSize: 13,
//     fontWeight: '800',
//     marginTop: 8,
//     marginBottom: 8,
//   },
// };

// export default CSSRSScreen;


import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { KeyboardAvoidingView, Platform } from 'react-native';

import SubmitButton from "../../partials/SubmitButton";
import returnInternalName from '../../helpers/returnInternalName';






const CSSRSScreen= ({ navigation }) => {

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
          placeholder="Total # of Attempts"
          keyboardType="numeric"
          // value={state.lifetimeAttempts}
          // // onChangeText={(text) => setState({ ...state, lifetimeAttempts: text })}
          // onChangeText={(text) => setState((prevState) => ({ ...prevState, lifetimeAttempts: text }))}
        />
      </View>

      {/* Yes/No for Past 3 months */}
      <Text style={styles.subTitle}>Past 3 months</Text>
      <View style={styles.checkboxRow}>
        <Checkbox label="Yes" checked={state.recentYes} onChange={(value) => setState({ ...state, recentYes: value, recentNo: !value })} />
        <Checkbox label="No" checked={state.recentNo} onChange={(value) => setState({ ...state, recentNo: value, recentYes: !value })} />
        <TextInput
          style={styles.input}
          placeholder="Total # of Attempts"
          keyboardType="numeric"
          // value={state.recentAttempts}
          // // onChangeText={(text) => setState({ ...state, recentAttempts: text })}
          // onChangeText={(text) => setState((prevState) => ({ ...prevState, recentAttempts: text }))}
        />
      </View>

  
      {/* Description if Yes is selected */}
        <TextInput
          style={styles.descriptionInput}
          placeholder="If yes, describe..."
          // value={state.description}
          // // onChangeText={(text) => setState({ ...state, description: text })}
          // onChangeText={(text) => setState((prevState) => ({ ...prevState, description: text }))}
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
        placeholder="Enter Code"
        keyboardType="numeric"
        // value={state.lifetimeCode}
        // onChangeText={(text) => setState({ ...state, lifetimeCode: text })}
      />

      {/* Past 3 months Code Input */}
      <Text style={styles.subTitle}>Past 3 months</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Code"
        keyboardType="numeric"
        // value={state.recentCode}
        // onChangeText={(text) => setState({ ...state, recentCode: text })}
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
      </View>
      <View style={styles.checkboxRow}>
        <Text>Past Month:</Text>
        <Checkbox label="Yes" checked={state.pastMonthYes} onChange={(value) => setState({ ...state, pastMonthYes: value, pastMonthNo: !value })} />
        <Checkbox label="No" checked={state.pastMonthNo} onChange={(value) => setState({ ...state, pastMonthNo: value, pastMonthYes: !value })} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="If yes, describe..."
        // value={state.description}
        // onChangeText={(text) => setState({ ...state, description: text })}
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
