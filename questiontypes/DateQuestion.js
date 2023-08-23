import { useState } from 'react';
import { Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import shortStyle from '../styles/question styles/shortStyle';

const DateQuestion = ({num, q, callback}) => {

    const styles = shortStyle;

    const [date, setDate] = useState(new Date());
  
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;

        setDate(currentDate);
        callback(num, date);
      };    

      const question = (
        <Text style={styles.questionlabel}> 
          {(num +1) + ": " + q} 
        </Text>
      );
  
    return ( 
        <View style={styles.singlequestion}>
            
            {question}

            <View style={styles.alloptions}>
    
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                onChange={onChange}
                style={{marginLeft: 40}}
            />
      
        </View>
    </View> 
     );
}
 
export default DateQuestion;