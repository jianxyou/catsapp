// these 2 functions manage the state of the Participant ID
// it is the one value that will keeps its value after closing and reopening the app

// these functions should take a decent time to complete and could be improved adding wrapper functions that are async and that wait for their execution to be finished
// be aware that all file system interactions come with an increased rate of errors

// if you are confused about certain functions calls see 'javascript promises'

import AsyncStorage from '@react-native-async-storage/async-storage';

const setAsyncData = (s : string) => {
    AsyncStorage.setItem('id', s)
      .then(() => console.log('value set'))
      .catch(e => console.log(e));
}

function getAsyncData() : string {
    let val = '';

    AsyncStorage.getItem('id')
        .then((res) => {
            if (res === null) {
            setAsyncData('');

            val = ''

            return '';

        } else {
          val = res;
          return res;
        }
        })
        .catch(e => {
          console.log(e);
          return '';
        });

    return val;
}

export {getAsyncData, setAsyncData} ;
