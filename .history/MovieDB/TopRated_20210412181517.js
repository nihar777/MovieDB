import React from 'react';
import{

    StyleSheet,
    AsyncStorage,
   TextInput,
   View,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import axios from 'axios';

export default TopMovie=()=>{

    functFetchRequest(){
        
        axios.post('https://www.geniusedusoft.com:9100/api/task/allTasks',
       
            
        {       
                 pagination:{pages:1,pageSize:10},
                 query: {institute_id:63,academic_year:126,users_id:1212},
                 search:""
                 
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
            <Text>Top Movies....</Text>
        </View>
    )
}   
