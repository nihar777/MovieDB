import React ,{useEffect}from 'react';
import{

    Text,
    StyleSheet,
    AsyncStorage,
   TextInput,
   View,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList, State } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import axios from 'react-native-axios';


export default TopMovie=()=>{
    
    useEffect(() => {
        
        FetchRequest    
      });
    function FetchRequest(){
        
        axios.post('https://developers.themoviedb.org/auth/request_token',       
        )
        .then(responce =>{
                console.log("Token==>",responce)

        })
        .catch((error)=>{
            console.log("==>Error",error.message)
        })
    }
    
    return(
        <View>
           <
        </View>
    )
}   
