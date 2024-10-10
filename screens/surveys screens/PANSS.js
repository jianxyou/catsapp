import CustomNumberingQuestionList from "../../surveytypes/CustomNumberingQuestionList";
import CompoundPANSSStyle from "../../styles/compound survey styles/CompoundPANSSStyle";
import panssRadioStyles from "../../styles/input styles/panssRadioStyles";
import panssStyle from "../../styles/question styles/panssStyle";
import panssQuestionListStyle from "../../styles/question list styles/panssQuestionListStyle";

const PANSSScreen = ({navigation}) => {
    return (
        <CustomNumberingQuestionList
        title="PANSS Rating Form" 
        scale={[1,2,3,4,5,6,7]} 
        values={[1,2,3,4,5,6,7]}
        labels={["absent", "minimal", "mild", "moderate", "moderate severe", "severe", "extreme"]} 
        artnums={[
            ["P1", "P2", "P3", "P4", "P5", 'P6', 'P7'],
            ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7'],
            ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G13', 'G14', 'G15', 'G15'],
        ]}
        listoflistofqs={[
            [
                "Delusions",
                "Conceptual disorganisation",
                "Hallucinatory behaviour",
                "Excitement",
                "Grandiosity",
                "Suspiciousness/persecution",
                "Hostility",
            ],

            [
                'Blunted affect',
                'Emotional withdrawal',
                'Poor rapport',
                'Passive/apathetic social withdrawal',
                'Difficulty in abstract thinking',
                'Lack of spontaneity & flow of conversation',
                'Stereotyped thinking',
            ],

            [
                'Somatic concern',
                'Anxiety',
                'Guilt feelings',
                'Tension',
                'Mannerisms & posturing',
                'Depression',
                'Motor retardation',
                'Uncooperativenss',
                'Unusual thought content',
                'Disorientation',
                'Poor attention',
                'Lack of judgement and insight',
                'Poor impulse control',
                'Preoccupation',
                'Active social avoidance',
            ],
        ]} 
        minidescs={["", "", ""]} 
        desc="" 
        goHome={() => navigation.goBack()} 
        liststyle={CompoundPANSSStyle} 
        finalstyle={panssQuestionListStyle} 
        buttonstyles={panssRadioStyles} 
        questionstyles={panssStyle}

    />
      );
}
 
export default PANSSScreen;