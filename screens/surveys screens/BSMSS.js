import CompoundInternalRadioQuestionList from "../../surveytypes/CompoundInteralRadioQuestionList";

import { Text } from 'react-native';

import textstyles from "../../styles/textstyles";
import barrettRadioStyle from "../../styles/input styles/barrettRadioStyle";
import BarrattStyle from "../../styles/question styles/BarrattStyle";
import BarrattCompoundStyle from "../../styles/compound survey styles/BarrattCompoundStyle";
import barrattQuestionListStyle from "../../styles/question list styles/barrattQuestionListStyle";

const BarrattScreen = ({navigation}) => {
    return ( 
        <CompoundInternalRadioQuestionList 
        listoflistofqs={[
            [
                "Less than 7th grade",
                "Junior high / Middle school (9th grade)",
                "Partial high school (10th or 11th grade)",
                "High school graduate",
                "Partial college (at leaast one year)",
                "College education",
                "Graduate degree",
            ],

            [
                "Day laborer, janitor, house cleaner, farm worker, food counter sales, food preparation worker, busboy.",
                "Garbage collector, short-order cook, cab driver, shoe sales, assembly line workers, masons, baggage porter.",
                "Painter, skilled construction trade, sales clerk, truck driver, cook, saales counter or general office clerk.",
                "Automobile mechanic, typist, locksmith, farmer, carpenter, receptionist, consstruction laborer, hairdresser.",
                "Machinist, musician, bookkeper, secretary, insurance sales, cabinet maker, personnel specialist, welder.",
                "Supervisor, librarian, aircraft mechanic, artist and artisan, electrician, administrator, military enlisted personnel, buyer.",
                "Nurse, skilled technician, medical technician, counselor, manager, police and fire personnel, financial manager, physical, occupational, speech therapist.",
                "Mechanical, nuclear, and electrical engineer, educational aadministrator, verterinaarian, military officer, elementary, high school and special education teacher.",
                "Physician, attorney, professor, chemical and aerospace engineer, judge, CEO, senior manager, public offical, pyschologist, pharmacist, accountant."
            ]
        ]} 
        scales={[
            [
                [3,3,3,3],
                [6,6,6,6],
                [9,9,9,9],
                [12,12,12,12],
                [15, 15, 15, 15],
                [18, 18, 18, 18],
                [21, 21, 21, 21],
            ],

            [
                [5, 5, 5, 5],
                [10,10,10,10],
                [15,15,15,15],
                [20,20,20,20],
                [25,25,25,25],
                [30,30,30,30],
                [35,35,35,35],
                [40,40,40,40],
                [45,45,45,45],
            ],
        ]} 
        values={[
            [
                [3,3,3,3],
                [6,6,6,6],
                [9,9,9,9],
                [12,12,12,12],
                [15, 15, 15, 15],
                [18, 18, 18, 18],
                [21, 21, 21, 21],
            ],

            [
                [5, 5, 5, 5],
                [10,10,10,10],
                [15,15,15,15],
                [20,20,20,20],
                [25,25,25,25],
                [30,30,30,30],
                [35,35,35,35],
                [40,40,40,40],
                [45,45,45,45],
            ],
        ]} 

        labels={[
            ["Level of School Completed", "Mother", "Father", "Spouse", "You"],
            ["Occupation", "Mother", "Father", "Spouse", "You"],
        ]}

        title="The Barrat Simplified Measure of Social Status (BSMSS)" 
        minidescs={[
            <Text style={textstyles.desctext}>
            Circle the appropriate number for your <Text style={textstyles.underline}>Mother's</Text>, your <Text style={textstyles.underline}>Father's</Text>, your <Text style={textstyles.underline}>Spouse / Partner's</Text>, and <Text style={textstyles.underline}>your</Text> level of school completed and occupation. If you grew up in a single parent home, circle only the score from your one parent. If you are neither married nor partnered circle only your score. If you are a full time student circle only the scores for your parents.
        </Text>,

        <Text style={textstyles.desctext}>
            Circle the appropriate number for your <Text style={textstyles.underline}>Mother's</Text>, your <Text style={textstyles.underline}>Father's</Text>, your <Text style={textstyles.underline}>Spouse / Partner's</Text>, and <Text style={textstyles.underline}>your</Text> occupation. If you grew up in a single parent home, use only the score from your parent. If you are not married or partnered circle only your score. If you are still a full-time student only circle the scores for your parents. If you are retired use your most recent occupation.
        </Text>
        ]}
        desc=""
        goHome={() => navigation.navigate('Home')} 
        buttonstyles={barrettRadioStyle} 
        questionstyles={BarrattStyle} 
        liststyles={BarrattCompoundStyle} 
        finalstyles={barrattQuestionListStyle}
        />
     );
}
 
export default BarrattScreen;