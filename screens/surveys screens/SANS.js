import SANSQuestionList from "../../surveytypes/SANSQuestionList";

const SANSScreen = ({navigation}) => {
    return ( 
        <SANSQuestionList 
            title="SANS"
            desc="0=None          1=Questionable          2=Mild          3=Moderate          4=Marked          5=Severe"
            scale={[0,1,2,3,4,5]}
            values={[0,1,2,3,4,5]}
            goHome={() => navigation.goBack()}

            minidescs={[
                "AFFECTIVE FLATTENING OR BLUNTING",
                "INAPPROPRIATE AFFECT",
                "ALOGIA",
                'AVOLITION - APATHY',
                'ANHEDONIA - ASOCIALITY',
                'ATTENTION',
            ]}

            listoflistofqs={[

                [
                    "Unchanging Facial Expression",
                    "Decreased Spontaneous Movements",
                    "Paucity of Expressive Gestures",
                    "Poor Eye Contact",
                    "Affective Nonresponsivity",
                    "Lack of Vocal Inflections",
                    "Global Rating of Affective Flattening",
                ],

                [
                    "Inappropriate Affect"
                ],

                [
                    "Poverty of Speech",
                    "Poverty of Content of Speech",
                    "Blocking",
                    "Increased Latency of Response",
                    "Global Rating of Alogia",
                ],

                [
                    "Grooming and Hygiene",
                    "Impersistence at Work or School",
                    "Physical Anergia",
                    "Global Rating of Avolition-Apathy",
                ],

                [
                    "Recreational Interests and Activities",
                    "Sexual Activity",
                    "Ability to Fee/ Intimacy and Closeness",
                    "Relationships with Friends and Peers",
                    "Global Rating of Anhedonia-Asociality",
                ],

                [
                   "Social Inattentiveness",
                   "Inattentiveness During Mental Status Testing",
                    "Global Rating of Attention",
                ],
            ]}

            listoflistofsubqs={[

                [
                    "The patient's face appears wooden, changes less than expected as emotional content of discourse changes.",
                    "The patient shows few or no spontaneous movements, does not shift position, move extremities, etc.",
                    "The patient does not use hand gestures, body position, etc., as an aid to expressing his ideas.",
                    'The patient avoids eye contact or "stares through" interviewer even when speaking.',
                    'The patient fails to smile or laugh when prompted.',
                    "The patient fails to show normal vocal emphasis patterns, is often monotonic.",
                    "This rating should focus on overall severity of symptoms, especially unresponsiveness, eye contact, facial expression, and vocal inflections.",
                ],

                [
                    "The patient's affect is inappropriate or incongruous, not simply flat or blunted.",
                ],

                [
                    "The patient's replies to questions are restricted in amount, tend to be brief, concrete, and unelaborated.",
                    "The patient's replies are adequate in amount but tend to be vague, overconcrete, or overgeneralized, and convey little information.",
                    "The patient indicates, either spontaneously or with prompting, that his train of thought was interrupted.",
                    "The patient takes a long time to reply to questions; prompting indicates the patient is aware of the question.",
                    "The core features of alogia are poverty of speech and poverty of content.",
                ],

                [
                    "The patient's clothes may be sloppy or soiled, and he may have greasy hair, body odor, etc.",
                    "The patient has difficulty seeking or maintaining employment, completing school work, keeping house, etc. If an inpatient, cannot persist at ward activities, such as OT, playing cards, etc.",
                    "The patient tends to be physically inert. He may sit for hours and does not initiate spontaneous activity.",
                    "Strong weight may be given to one or two prominent symptoms if particularly striking.",
                ],

                [
                    "The patient may have few or no interests, Both the quality and quantity of interests should be taken into account.",
                    "The patient may show a decrease in sexual interest and activity, or enjoyment when active.",
                    "The patient may display an inability to form close or intimate relationships, especially with the opposite sex and family.",
                    "The patient may have few or no friends and may prefer to spend all of his time isolated.",
                    "This rating should reflect overall severity, taking into account the patient's age, family status, etc.",

                ],

                [
                    'The patient appears uninvolved or unengaged. He may seem "spacy."',
                    'Tests of "serial 7s" (at least five subtractions) and spelling "world" backwards:\nScore: 2=1 error; 3=2 errors; 4=3 errors',
                    "This rating should assess the patient's overall concentration, clinically and on tests.",
                ],


            ]}

        />
     );
}
 
export default SANSScreen;