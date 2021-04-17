import React ,{useEffect}from 'react';
import{


StyleSheet,
AsyncStorage,
FlatList,
Image,
TextInput,

View,

} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import DashboardStyles from './DashboardStyle'
import styles from './DashboardStyle';
import Icon from 'react-native-vector-icons'
import { Container, Header, Content, Card, CardItem, Text,Button,Thumbnail,Left, Body ,Right} from 'native-base';
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

const Dashboard=(navigation)=>{   
     return( 
        <View style={{flex:1}}>
                        <FlatList 
                        data={MovieData}
                        renderItem={({item,index})=>{
                            return( 
                            <Content> 
                            <Card>
                           <CardItem>
                           <Left>
                               <Thumbnail source={{uri:item.image}}/>
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
                               <Icon type="Ionicons" name="md-heart" />
                               <Text>12 Likes</Text>
                               </Button>
                           </Left>
                           
                           <Right>
                               <Text>11h ago</Text>
                           </Right>
                           </CardItem>
                       </Card>
                       </Content>


                         )}}>
                         
                       </FlatList>
        </View>
       
    )
}
export default Dashboard

