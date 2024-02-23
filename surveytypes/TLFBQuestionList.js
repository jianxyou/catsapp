import { useState } from 'react';
import { Button,View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import allNull from '../helpers/allNull';
import totalLength from '../helpers/totalLength';
import packagerwithlabels from '../helpers/packagerwithlabels';

import NoNumberMultiselectRadioQuestion from '../questiontypes/NoNumberMultiselectRadioQuestion';
import FormattedCompound from '../SurveyWrappers/FormattedCompund';
import ShortAnswerQuestion from '../questiontypes/ShortAnswerQuestion';
import TLFBStyles from '../styles/TLFBStyles';
import textstyles from "../styles/textstyles";


const TLFBQuestionList = ({listoflistofqs,values, questionnaireNumber, minidescs, desc, goHome, labels, buttonstyles, questionstyles, liststyles, finalstyles}) => {

    
    const [data, changeData] = useState(allNull(listoflistofqs.length));

    // console.log("wode ma", data_haha);
    const respond = (index, value) => {
        let temp = data;

        temp[index] = value;
        changeData(temp);
 
    }



    const returnJSXqs = l => {

        let currindex = 0;
        let myarr = new Array(l.length);


        for (let i = 0; i < l.length; i++) {
            let temp = l[i];

        
            let tempJSX = temp.map(
                (q, index) =>  <ShortAnswerQuestion key={index+currindex} scale={scales[i][index]} values={values[i][index]} num={index+currindex} q={q} callback={respond} buttonstyles={buttonstyles} questionstyles={questionstyles}/>
            );
            myarr[i] = tempJSX;
            
        

            currindex =+ temp.length;
        }
        
    
        // let tmp2 = l[2];
        // let temp2

        return myarr;
    }

    

    // let listofqs = listoflistofqs.map(
    //     (val, index) => 
    //     <ShortAnswerQuestion index = {index} key={index}  q={val} callback={respond} />
        
    // );

   

    let listofqs = <View>
    <Text style={textstyles.desctext}>
      <Text style={textstyles.makebold}>TIMELINE FOLLOWBACK</Text> {"\n"}{"\n"}


      To evaluate your <Text style={textstyles.makebold}>marijuana use</Text>, please record your pattern of marijuana use in the 
      past 90 days in the calendar below. This can be cannabinoids or marijuana, which 
      includes pot, weed, grass, hash, and synthetic cannabinoids (e.g., K2, Spice).
      Try to be as accurate as possible. Please record how many joints or how much (in 
      grams) cannabis you smoked or consumed for each day on the calendar. {"\n"}{"\n"}

            
      - Mark events on the calendar that fell within this time frame. Some of these might 
      include: Birthdays, appointments, stressful situations, buying cannabis. Write 
      the event on the calendar on the day it occurred.{"\n"}
      - On days when you did not smoke marijuana, not even part of a joint, you should 
      Write a 0.{"\n"}
      - On days when you did smoke marijuana, even part of a joint, you should write 
      in the total number of "average" sized joints you used. Indicate quantity, if 
      known, through other routes of administration.{"\n"}
      - The smallest number of joints you can record is "1". So, if you shared a joint 
      with someone you should write “1”{"\n"}

      </Text>

    <View style={TLFBStyles.calendar}>
      {/* {renderGrid()} */}

      {/* <Button title="confirmeee" style={buttonStyles.buttonContainer} onPress={calculateStats} /> */}
      <TouchableOpacity 
    //   style={buttonStyles.buttonContaiser} 
      onPress={() => {
        calculateStats();
        // calculateStats();
}}
    >
      {/* <Text style={buttonStyles.buttonText}>Confirm</Text> */}
      </TouchableOpacity>
    </View>
    </View>


    return (

        <FormattedCompound 
            qs={listofqs}
            questionnaireNumber={questionnaireNumber}
            desc={desc}
            data={data}
            goHome={goHome}
        />
    );
}

 
export default TLFBQuestionList;