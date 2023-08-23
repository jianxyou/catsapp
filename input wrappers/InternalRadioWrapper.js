// a wrapper function that helps render radio buttons with the correct state and labels
// InternalRadioButton and InternalRadioWrapper refer to a a series of buttons in which the label is inside of the button
// Note that long labels will not render properly in small buttons, if you are using long labels use RadioWrapper

// @pre all params must be given and cannot be null
// @post outputs a list of buttons that can be rendered

import InternalRadio from "../inputs/InternalRadio";

const InternalRadioWrapper = ({isLiked, onRadioBtnClick, styles}) => {
    return (
        isLiked.map((item) => (
            <InternalRadio
              onPress={() => onRadioBtnClick(item)}
              selected={item.selected}
              key={item.id}
              styles={styles}
            >
            {item.name}
            </InternalRadio>
         ))
     );
}
 
export default InternalRadioWrapper;