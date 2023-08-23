// an input that lets you select one number from a list
// seen in Survey of Recent Life Events (SoRLE)

// @pre must input all params, none can be null
// @post renders interactive dropdown that lets user select one option from a list

import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet } from 'react-native';

const MyDropdown = ({options, callback, styles}) => {
    return (

        <SelectDropdown
            data={options}
            
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
                callback(selectedItem);
                console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}

            buttonStyle={styles}

            defaultButtonText='-'

            dropdownStyle={StyleSheet.create({
              display: 'flex',
              flexDirection: 'row'
            })}
          />
     );
}
 
export default MyDropdown;