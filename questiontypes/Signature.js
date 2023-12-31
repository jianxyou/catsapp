import Draw from "../inputs/Draw";

import { View, Text, Pressable} from 'react-native'

// a question that lets you draw a signature with your finger
// it was never used but it works, although it is a bit buggy

const Signature = ({callback}) => {

    const myCanvas = <Draw />

    return ( 
        <View style={{height: 200, width: 400}}>

            {myCanvas}

            <View style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
            }}>

            <Pressable onPress={() => callback(myCanvas)} 
                style={{ padding: 5,
                    borderRadius: 10, 
                    borderColor: 'black', 
                    borderStyle: 'solid', 
                    borderWidth: 2, 
                    backgroundColor: 'white',
                    maxWidth: 150, 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center' 
                }}
            >

            <Text>Submit Signature</Text>
            </Pressable>
            </View>

        </View>

     );
}
 
export default Signature;