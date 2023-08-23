import { View, Text } from 'react-native';

const scidQuestionFormatter = (artnum1, q, styles) => {
    return (  
            <View style={styles.questionlabelcontainer}>
    
                <View style={styles.number}>
                    <View style={styles.number2}>
                    <Text style={styles.questionlabel}>
                        {artnum1}
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
 
export default scidQuestionFormatter;