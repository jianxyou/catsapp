import { View, Text } from 'react-native';

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