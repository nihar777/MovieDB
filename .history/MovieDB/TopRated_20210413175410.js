import React ,{useEffect}from 'react';
import{


StyleSheet,
AsyncStorage,
Image,
TextInput,
FlatList,
Text,
View,

} from 'react-native';
import { TouchableOpacity,TouchableHighlight, State } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container,Icon, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body ,Right} from 'native-base';

import axios from 'react-native-axios';
import styles from './DashboardStyle';

const MovieData = [
    {
        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'First Item',
        details:'onionCapture'
    },
    {

        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'Second Item',
        details:'onionCapture'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage:'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'Third Item',
        details:'onionCapture'
    },
  ];    

 const TopMovie=({navigation})=>{
    
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
                        renderItem={({item,index})=>{
                            return(
                            
                            <Content>
                                <TouchableOpacity>

                                
                           <Card > 
                           <CardItem>
                           <Left>
                               <Thumbnail source={{uri:item.image}} />
                               <Body>
                               <Text>{item.title}</Text>
                               <Text note>{item.details}</Text>
                               </Body>
                           </Left>
                           </CardItem>
                           <CardItem cardBody>
                           <Image source={{uri:item.bigImage}} style={{height: 200, width: null, flex: 1}}/>
                           </CardItem>
                           <CardItem>
                           <Left>
                               <Button 
                               style={styles.buttonStyle}
                               transparent>
                               <Icon type="Ionicons" name="md-heart"/>
                               <Text>Mark As Favourite</Text>
                               </Button>
                           </Left>
                           </CardItem>
                       </Card>
                       </Content>)}}>
                </FlatList>
        </View>
    )
}   
export default TopMovie
