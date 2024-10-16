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
import GAF2Screen from'./screens/surveys screens/GAF2';
import TecScreen from './screens/TEC';
import MaccatScreen from './screens/surveys screens/MacCAT';
import GAFScreen from './screens/surveys screens/GAF';
import BGLHA from './screens/surveys screens/BGLHA';
import CannabisWithdrawalScreen from './screens/surveys screens/CannabisWithdrawalScale';
import BarrattScreen from './screens/surveys screens/BSMSS';
import CSSRSScreen from './screens/surveys screens/CSSRS';
import HAMDScreen from './screens/surveys screens/HAMD';
import BISscreen from './screens/surveys screens/BIS';
import TICSScreen from './screens/surveys screens/TICS';
import SAQScreen from './screens/surveys screens/SAQ';
import TLFBScreen from './screens/surveys screens/TLFB';
import PatientScreen from './screens/special screens/PatientScreen';
import AdminScales from './screens/special screens/AdminScreen';
import MriScreen from './screens/special screens/MriScreen';
import SDM8Screen from './screens/special screens/SDM8';
import CURBScreen from './screens/special screens/CURB';
import CURB_S_Screen from './screens/special screens/CURB_S';
import Curbs_admin from './screens/special screens/Curbs_admin';
import { displayNamesSelf, internalNamesSelf } from './schemaconstants';
// import CSSRSScreen from './screens/surveys screens/SSRS';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import FollowUpScreen from './screens/special screens/FollowUp';


import Sorle_fu_screen from './screens/surveys screens/Sorle_fu';
import BAI_fu from './screens/surveys screens/BAI_fu';
import SHAPS_fu_Screen from './screens/surveys screens/SHAPS_fu';
import AES_fu_Screen from './screens/surveys screens/AES_fu';
import SIAS_fu_Screen from './screens/surveys screens/SIAS_fu';
import SAS_fu_SCreen from './screens/surveys screens/SAS_fu';
import Audit_fu_Screen from './screens/surveys screens/AUDIT_fu';
import FTND_fu_Screen from './screens/surveys screens/FTND_fu';
import CUDIT_fu_Screen from './screens/surveys screens/CUDIT_fu';
import SDS_fu_Screen from './screens/surveys screens/SDS_fu';



import CURB_S_fr_Screen from './screens/special screens/CURB_S_fr';
import PET_fr_Screen from './screens/special screens/PET_fr';


import Tec_fr_Screen from './screens/TEC_fr';
import RLE_fr_Screen from './screens/surveys screens/RLE_fr';
import TICS_fr_Screen from './screens/surveys screens/TICS_fr';
import BIS_fr_screen from './screens/surveys screens/BIS_fr';
import BGLHA_fr from './screens/surveys screens/BGLHA_fr';

import Beck_fr_Screen from './screens/surveys screens/BAI_fr';
import CUDIT_fr_Screen from './screens/surveys screens/CUDIT_fr';
import SAFE_fr_Screen from './screens/surveys screens/SAFE_fr';
import AES_fr_Screen from './screens/surveys screens/AES_fr';
import SIAS_fr_Screen from './screens/surveys screens/SIAS_fr';
import SAS_fr_Screen from './screens/surveys screens/SAS_fr';
import RS_fr_Screen from './screens/surveys screens/RS_fr_screen';
import SDS_fr_Screen from './screens/surveys screens/SDS_fr';
import DAST_fr_Screen from './screens/surveys screens/DAST_fr';
import Sorle_fr_Screen from './screens/surveys screens/Sorle_fr';
import Audit_fr_Screen from './screens/surveys screens/AUDIT_fr';
import SHAPS_fr_Screen from './screens/surveys screens/SHAPS_fr';
import CWS_fr_Screen from './screens/surveys screens/CWS_fr';
import Others_fr_Screen from './screens/special screens/Others_fr';
import Hass_fr_Screen from './screens/surveys screens/hass_fr';
import MCQ_fr_Screen from './screens/surveys screens/MCQ_fr';
import SAQ_fr_Screen from './screens/surveys screens/SAQ_fr';
import FTND_fr_Screen from './screens/surveys screens/FTND_fr';
import FollowUp_fr_Screen from './screens/special screens/Followup_fr';

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
      <Stack.Screen name="SRLE" component={SoRLEScreen} />
      <Stack.Screen name="Mood Episodes" component={MoodEpisodesScreen} />
      <Stack.Screen name="Audit" component={AuditScreen} />
      <Stack.Screen name="Cgi" component={CGIScreen} />
      <Stack.Screen name="Shaps" component={SHAPSScreen} />
      <Stack.Screen name='Tec' component={TecScreen} />
      <Stack.Screen name="Maccat" component={MaccatScreen} />
      <Stack.Screen name="GAF" component={GAFScreen} />
      <Stack.Screen name='Cannabis' component={CannabisWithdrawalScreen} />
      <Stack.Screen name='BSMSS'component={BarrattScreen} />
      <Stack.Screen name='CSSRS'component={CSSRSScreen } />
      <Stack.Screen name='HAMD'component={HAMDScreen} />
      <Stack.Screen name='TICS'component={TICSScreen} />
      <Stack.Screen name='SAQ'component={SAQScreen} />
      <Stack.Screen name='TLFB' component={TLFBScreen} />
      <Stack.Screen name='BIS' component={BISscreen} />
      <Stack.Screen name='GAF2' component={GAF2Screen} />
      <Stack.Screen name='BGLHA' component={BGLHA} />
      <Stack.Screen name='ParticipantScreen' component={PatientScreen} />
      <Stack.Screen name='SDM8Screen' component={SDM8Screen} />
      <Stack.Screen name='CURBScreen' component={CURBScreen} />
      <Stack.Screen name='CURB_S_Screen' component={CURB_S_Screen} />
      <Stack.Screen name='AdminScreen' component={AdminScales} />
      <Stack.Screen name='Crubs_admin' component={Curbs_admin} />
      <Stack.Screen name='MriScreen' component={MriScreen} />
      <Stack.Screen name='FollowUp' component={FollowUpScreen} />


      <Stack.Screen name='SRLE_fu' component={Sorle_fu_screen} />
      <Stack.Screen name='Beck Anxiety_fu' component={BAI_fu} />
      <Stack.Screen name='Shaps_fu' component={SHAPS_fu_Screen} />
      <Stack.Screen name='AES_fu' component={AES_fu_Screen} />
      <Stack.Screen name='SIAS_fu' component={SIAS_fu_Screen} />
      <Stack.Screen name='SAS_fu' component={SAS_fu_SCreen} />
      <Stack.Screen name='Audit_fu' component={Audit_fu_Screen} />
      <Stack.Screen name='FTND_fu' component={FTND_fu_Screen} />
      <Stack.Screen name='CUDIT-R_fu' component={CUDIT_fu_Screen} />
      <Stack.Screen name='SDS_fu' component={SDS_fu_Screen} />


      <Stack.Screen name='curbs_fr' component={CURB_S_fr_Screen} />
      <Stack.Screen name='Others_fr' component={Others_fr_Screen} />
      <Stack.Screen name='PET_fr' component={PET_fr_Screen} />

      <Stack.Screen name='TEC_fr' component={Tec_fr_Screen} />
      <Stack.Screen name='RLE_fr' component={RLE_fr_Screen} />
      <Stack.Screen name='TICS_fr' component={TICS_fr_Screen} />
      <Stack.Screen name='FTND_fr' component={FTND_fr_Screen} />
      <Stack.Screen name='BIS_fr' component={BIS_fr_screen} />
      <Stack.Screen name='BGLHA_fr' component={BGLHA_fr} />


      <Stack.Screen name='BAI_fr' component={Beck_fr_Screen} />
      <Stack.Screen name='CUDIT_fr' component={CUDIT_fr_Screen} />
      <Stack.Screen name='SAFE_fr' component={SAFE_fr_Screen} /> 
      <Stack.Screen name='AES_fr' component={AES_fr_Screen} />  
      <Stack.Screen name='SIAS_fr' component={SIAS_fr_Screen} />  
      <Stack.Screen name='SAS_fr' component={SAS_fr_Screen} />  
      <Stack.Screen name='RS_fr' component={RS_fr_Screen} /> 
      {/* <RLE></RLE> ，这里需要自己加上去*/}
      <Stack.Screen name='SDS_fr' component={SDS_fr_Screen} /> 
      <Stack.Screen name='DAST_fr' component={DAST_fr_Screen} />
      <Stack.Screen name='Sorle_fr' component={Sorle_fr_Screen} /> 
      <Stack.Screen name='Audit_fr' component={Audit_fr_Screen} />
      <Stack.Screen name='SHAPS_fr' component={SHAPS_fr_Screen} />
      {/* TEC，这里需要自己加上去*/}
      <Stack.Screen name='CWS_fr' component={CWS_fr_Screen} />
     {/* Tics，这里需要自己加上去*/}


      <Stack.Screen name='Hass_fr' component={Hass_fr_Screen} />
      <Stack.Screen name='MCQ_fr' component={MCQ_fr_Screen} />
      <Stack.Screen name='SAQ_fr' component={SAQ_fr_Screen} />
      <Stack.Screen name='Followup_fr' component={FollowUp_fr_Screen} />
    


      </Stack.Navigator>
      </ParticipantContext.Provider>
    </NavigationContainer>
  );
}

export default App;
