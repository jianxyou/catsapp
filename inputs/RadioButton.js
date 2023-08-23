// a button whose related text is displayed on the outside (next to it)
// see RadioWrapper for more info

// @pre all params cannot be null
// @post outputs dynaimcally rendered button

import { View, Pressable, Text } from 'react-native';

export default RadioButton = ({ onPress, selected, children, styles}) => {
  
    return (
      <View style={styles.radioButtonContainer}>

        <Pressable onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </Pressable>

        <Pressable onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </Pressable>
        
      </View>
    );
};

