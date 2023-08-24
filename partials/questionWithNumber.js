import { View, Text } from 'react-native';

// generates the plain text in a question based on certain params

// @params num is the final number of the question
// @params q is the question text
// @params seperator is the string that seperates the number and the text
// @params styles contains css that styles the JSX

const questionWithNumber = (num, q, seperator, styles) => {
    return (  
            <View style={styles.questionlabelcontainer}>
    
                <View style={styles.number}>
                    <View style={styles.number2}>
                    <Text style={styles.questionlabel}>
                        {num+seperator}
                    </Text>
                    </View>
                </View>
    
                <View style={styles.alltext}>
                    <View style={styles.text}>
                        <Text style={styles.questionlabel}> 
                            {q}
                        </Text>
                    </View>
    
                </View>
            </View>
    );
}
 
export default questionWithNumber;