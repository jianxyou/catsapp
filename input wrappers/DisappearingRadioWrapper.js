// a wrapper function that helps render radio buttons with the correct state and labels
// DisapperingRadioWrapper has an addition field in 'isLiked' called visibile (a bool) which determines if the button will be rendered or not
// For more information see auditRadioStyles.js

// @pre all params must be given and cannot be null
// @post outputs a list of buttons that can be rendered

import RadioButton from "../inputs/RadioButton";

const DisappearingRadioWrapper = ({isLiked, onRadioBtnClick, styles}) => {
    return (
        isLiked.map((item) => (
            <RadioButton
              onPress={() => onRadioBtnClick(item)}
              selected={item.selected}
              key={item.id}
              styles={styles(item.visible)}
            >
              {item.name}
            </RadioButton>
         ))
     );
}
 
export default DisappearingRadioWrapper;