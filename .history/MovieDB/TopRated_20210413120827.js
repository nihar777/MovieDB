import React ,{useEffect}from 'react';
import{

Text,
StyleSheet,
AsyncStorage,
TextInput,
View,
Button,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList, State } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import axios from 'react-native-axios';


export default TopMovie=props=>{
    
    useEffect(() => {
        
        FetchRequest(); 
      });
    function FetchRequest(){
        
        axios.post('https://developers.themoviedb.org/auth/request_token',{
            
                "redirect_to": "http://www.themoviedb.org/"
              
        })
        .then(responce =>{
                console.log("Token==>",responce)

        })
        .catch((error)=>{
            console.log("==>Error",error.message)
        })
    }
    
    return(
        <View>
           <Button
           title="Press For Token.."
           onPress={()=>props.navigation.navigate('Dash')}>

           </Button>
        </View>
    )
}   
