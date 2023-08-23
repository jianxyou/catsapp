// a wrapper function that helps render radio buttons with the correct state and labels
// RadioButton and RadioWrapper refer to a a series of buttons in which the label is on the outside of the button

// @pre all params must be given and cannot be null
// @post outputs a list of buttons that can be rendered

import RadioButton from "../inputs/RadioButton";

const RadioWrapper = ({isLiked, onRadioBtnClick, styles}) => {
    return (
        isLiked.map((item) => (
            <RadioButton
              onPress={() => onRadioBtnClick(item)}
              selected={item.selected}
              key={item.id}
              styles={styles}
            >
              {item.name}
            </RadioButton>
         ))
     );
}
 
export default RadioWrapper;