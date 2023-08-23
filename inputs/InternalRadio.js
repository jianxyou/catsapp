// a button whose related text is displayed on the inside
// see InternalRadioWrapper for more info

// @pre all params cannot be null
// @post outputs dynaimcally rendered button

import { View, Pressable, Text } from 'react-native';

export default InternalRadio = ({ onPress, selected, children, styles}) => {

    const whenSelected = (
        <View style={styles.radioButtonIcon} >
            <View style={styles.radioButtonText} >
            <Text style={styles.radioButtonText}>{children}</Text>
            </View>
        </View>
    );
  
    return (
      <View style={styles.radioButtonContainer}>

        <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.radioButton}>
          {selected ? whenSelected : <Text style={styles.radioButtonText} >{children}</Text>}
        </Pressable>

        </View>
        
      </View>
    );
};