import React, { useEffect,useState  } from 'react';
import { useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ParticipantContext } from './context and async storage/ParticipantContext';
import { getAsyncData } from './context and async storage/asyncData';

import HomeScreen from './screens/special screens/Home';
import IDScreen from './screens/special screens/ID';
import PdfScreen from './screens/special screens/Pdf';
import DataScreen from './screens/special screens/Data';
import MainScreen from './screens/special screens/Main';
// import WorkerScreen from './screens/special screens/Worker';
import BeckScreen  from "./screens/surveys screens/BAI"
import CUDITScreen from './screens/surveys screens/CUDIT';
import AdminScreen from './screens/special screens/Admin';
import FagerstrormScreen from './screens/surveys screens/Fagerstorm';
import HasslesScreen from './screens/surveys screens/HasslesAndUplifts';
import MCQScreen from './screens/surveys screens/MCQ';
import SAFEScreen from './screens/surveys screens/SAFE';
import AESScreen from './screens/surveys screens/AES';
import MJDrugHistoryQuestionnaireScreen from './screens/surveys screens/MJDrugHistoryQuestionnaire';
import SANSScreen from './screens/surveys screens/SANS';
import SIASScreen from './screens/surveys screens/SIAS';
import SASSCreen from './screens/surveys screens/SAS';
import RosenbergScreen from './screens/surveys screens/RosenbergSelfEsteem';
import RLEScreen from './screens/surveys screens/RLE';
import PANSSScreen from './screens/surveys screens/PANSS';
import SDSScreen from './screens/surveys screens/SDS';
import DASTScrenn from './screens/surveys screens/DAST';
import SoRLEScreen from './screens/surveys screens/SurveyOfRecentLifeExperiences';
import MoodEpisodesScreen from './screens/MoodEpisodes';
import AuditScreen from './screens/surveys screens/AUDIT';
import CGIScreen from './screens/surveys screens/CGI';
import SHAPSScreen from './screens/surveys screens/SHAPS';
import TecScreen from './screens/TEC';
import MaccatScreen from './screens/surveys screens/MacCAT';
import GAFScreen from './screens/surveys screens/GAF';
import CannabisWithdrawalScreen from './screens/surveys screens/CannabisWithdrawalScale';
import BarrattScreen from './screens/surveys screens/BSMSS';
import SSRScreen from './screens/surveys screens/SSRS';
import HAMDScreen from './screens/surveys screens/HAMD';
import TICSScreen from './screens/surveys screens/TICS';
import SAQScreen from './screens/surveys screens/SAQ';
import TLFBScreen from './screens/surveys screens/TLFB';
import PatientScreen from './screens/special screens/PatientScreen';
import AdminScales from './screens/special screens/AdminScreen';
import MriScreen from './screens/special screens/MriScreen';
import { displayNamesSelf, internalNamesSelf } from './schemaconstants';
import CSSRSScreen from './screens/surveys screens/SSRS';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [val, setVal] = useState(getAsyncData());

  

  useEffect(() => {
    const clearStorage = async () => {
        try {
            await AsyncStorage.clear();
            await AsyncStorage.removeItem('id');
            console.log('Storage successfully cleared!');
        } catch (e) {
            console.error('Failed to clear the async storage.', e);
        }
    };

    const initializeFilled = async () => {
      try {
        
        const initialFilled = displayNamesSelf.map(() => false);
        await AsyncStorage.setItem('filled', JSON.stringify(initialFilled));
        console.log(initialFilled);
      } catch (error) {
        // 错误处理
        console.error('Failed to initialize filled array', error);
      }
    };

    
    clearStorage();
    initializeFilled();
}, []);


  return (
    <NavigationContainer>
      <ParticipantContext.Provider value={{val, setVal}}>
      <Stack.Navigator>


      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Worker" component={WorkerScreen} /> */}
      <Stack.Screen name="Pdf" component={PdfScreen} />
      <Stack.Screen name="Data" component={DataScreen} />
      <Stack.Screen name="Admin" component={AdminScreen} />
      <Stack.Screen name="ID" component={IDScreen} />
      <Stack.Screen name="Beck Anxiety" component={BeckScreen} />
      <Stack.Screen name="CUDIT-R" component={CUDITScreen} />
      <Stack.Screen name="FTND" component={FagerstrormScreen}/>
      <Stack.Screen name="Hassles and Uplifts" component={HasslesScreen} />
      <Stack.Screen name="SAFE" component={SAFEScreen} />
      <Stack.Screen name="MCQ" component={MCQScreen}/>
      <Stack.Screen name="AES" component={AESScreen}/>
      <Stack.Screen name="MJ Drug History Questionnaire" component={MJDrugHistoryQuestionnaireScreen} />
      <Stack.Screen name="SANS" component={SANSScreen} />
      <Stack.Screen name="SIAS" component={SIASScreen} />
      <Stack.Screen name="SAS" component={SASSCreen} />
      <Stack.Screen name="Rosenberg" component={RosenbergScreen} />
      <Stack.Screen name="RLE" component={RLEScreen} />
      <Stack.Screen name="PANSS" component={PANSSScreen} />
      <Stack.Screen name="SDS" component={SDSScreen} />
      <Stack.Screen name="DAST" component={DASTScrenn} />
      <Stack.Screen name="SoRLE" component={SoRLEScreen} />
      <Stack.Screen name="Mood Episodes" component={MoodEpisodesScreen} />
      <Stack.Screen name="Audit" component={AuditScreen} />
      <Stack.Screen name="Cgi" component={CGIScreen} />
      <Stack.Screen name="Shaps" component={SHAPSScreen} />
      <Stack.Screen name='Tec' component={TecScreen} />
      <Stack.Screen name="Maccat" component={MaccatScreen} />
      <Stack.Screen name="GAF" component={GAFScreen} />
      <Stack.Screen name='Cannabis' component={CannabisWithdrawalScreen} />
      <Stack.Screen name='BSMSS'component={BarrattScreen} />
      <Stack.Screen name='SSRS'component={CSSRSScreen } />
      <Stack.Screen name='HAMD'component={HAMDScreen} />
      <Stack.Screen name='TICS'component={TICSScreen} />
      <Stack.Screen name='SAQ'component={SAQScreen} />
      <Stack.Screen name='TLFB' component={TLFBScreen} />
      <Stack.Screen name='PatientScreen' component={PatientScreen} />
      <Stack.Screen name='AdminScreen' component={AdminScales} />
      <Stack.Screen name='MriScreen' component={MriScreen} />

      </Stack.Navigator>
      </ParticipantContext.Provider>
    </NavigationContainer>
  );
}

export default App;
