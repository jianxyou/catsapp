import { View, FlatList } from 'react-native';

const genqs = (listofqs, styles) => {
    return (  
        <View >
            <FlatList data={listofqs} style={styles.questionlist} renderItem={({item}) => item} />
        </View>
    );
}
 
export default genqs;