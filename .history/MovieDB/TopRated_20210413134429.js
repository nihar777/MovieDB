import React ,{useEffect}from 'react';
import{


StyleSheet,
AsyncStorage,
Image,
TextInput,
View,

} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList, State } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body ,Right} from 'native-base';
import Icon from 'react-native-vector-icons'
import axios from 'react-native-axios';

const MovieData = [
    {
        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        title: 'First Item',
        details:'onionCapture'
    },
    {

        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Second Item',
        details:'onionCapture'
    },
    {
        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Third Item',
        details:'onionCapture'
    },
  ];

export default TopMovie=props=>{
    
    useEffect(() => {
        
        // FetchRequest(); 
      });
    // function FetchRequest(){
        
    //     axios.post('https://developers.themoviedb.org/auth/request_token',{
            
    //             "redirect_to": "http://www.themoviedb.org/"
              
    //     })
    //     .then(responce =>{
    //             console.log("Token==>",responce)

    //     })
    //     .catch((error)=>{
    //         console.log("==>Error",error.message)
    //     })
    // }
    
    return(
        <View style={{flex:1}}>
         
                        <FlatList 
                        data={MovieData}
                        renderItem={()=>{}}>

                        </FlatList>
                         
        </View>
    )
}   
