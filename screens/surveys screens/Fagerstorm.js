import FTNDStyleSurvey from '../../surveytypes/FTNDStyleSurvey';
import { View } from 'react-native';

const FagerstrormScreen = ({navigation}) => {

    const survey = 
        <FTNDStyleSurvey 
            title="Fagerstorm Test For Nicotine Dependence (FTND)"

            scales={[
                [
                    "a. Within 5 minutes                        3 points",
                    "b. 6 — 30 minutes                          2 points",
                    "c. 31 — 60 minutes                        1 point",
                    "d. After 60 minutes                        0 points",
               ], 

               [    
                "a. Yes                                                  1 point",
                "b. No                                                   0 points",
                    
               ],

               [
                    "a. The first one in the morning   1 point",
                    "b. Any other                                     0 points",
               ],

               [
                    "a. 10 or less                                       0 points",
                    "b. 11 — 20                                          1 point",
                    "c. 21 — 30                                         2 points",
                    "d. 31 or more                                    3 points",
               ],

               [
                    "a. Yes                                                  1 point",
                    "b. No                                                   0 points",
               ],

               [
                    "a. Yes                                                  1 point",
                    "b. No                                                   0 points",
               ],
            ]}

            values={[
                [3, 2, 1, 0],
                [1, 0],
                [1, 0],
                [0, 1, 2, 3],
                [1, 0],
                [1, 0],
            ]}

            qs={[
                "How soon after you wake up do you smoke your first cigarette?",
                "Do you find it difficult to refrain from smoking in places where it is forbidden, e.g., in church, at the library, in the cinema, etc.?",
                "Which cigarette would you hate most to give up?",
                "How many cigarettes/day do you smoke?",
                "Do you smoke more frequently during the first hours after awakening than during the rest of the day?",
                "Do you smoke if you are so ill that you are in bed most of the day?",
            ]}

            desc=""

            goHome={() => navigation.navigate('Home')}
        />
    return (  
        <View> 

            {survey}
    
        </View>
    );
}
 
export default FagerstrormScreen;