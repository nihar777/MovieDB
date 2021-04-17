import React ,{useEffect}from 'react';
import{

    Text,
    StyleSheet,
    AsyncStorage,
   TextInput,
   View,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import axios from 'react-native-axios';

export default TopMovie=()=>{

    useEffect(() => {
        
        FetchRequest    
      });
    function FetchRequest(){
        
        axios.post('https://developers.themoviedb.org/auth/request_token',

        {       
                 pagination:{pages:1,pageSize:10},
                 query: {institute_id:63,academic_year:126,users_id:1212},
                 search:""
                 /movie/top_rated
        })
        .then(responce =>{
                
                this.setState({responce:responce})
                console.log("Axios Is Here==>",responce.data.data[0].taskdetails[0].UserRef)

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
