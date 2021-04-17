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

    const [responce, UseResponce] = useState(false)

    

    useEffect(() => {
        
        FetchRequest    
      });
    function FetchRequest(){
        
        axios.post('https://developers.themoviedb.org/auth/request_token',
        
        {       
                
              
        })
        .then(responce =>{
                console.log("Top ==>",responce)

        })
        .catch((error)=>{
            console.log("==>Error",error.message)
        })
    }
    
    return(
        <View>
            <Text onPress={()=>{
                FetchRequest
            }}>Top Movies....is coming soon.....</Text>
        </View>
    )
}   
