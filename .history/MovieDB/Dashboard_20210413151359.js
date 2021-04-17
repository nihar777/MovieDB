import React ,{useEffect}from 'react';
import{


StyleSheet,
AsyncStorage,
FlatList,
Image,
TextInput,
Button,
Text,
View,

} from 'react-native';
import { TouchableOpacity,TouchableHighlight, State } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import DashboardStyles from './DashboardStyle'
import styles from './DashboardStyle';
import Icon from 'react-native-vector-icons'
import { Container, Header, Content, Card, CardItem, Thumbnail,Left, Body ,Right} from 'native-base';
const MovieData = [
    {
        image: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
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

function Dashboard(){   

    

    return( 
        <View style={{flex:1}}>
        <FlatList 
        
        data={MovieData}
        renderItem={({item,index})=>{
            return(

           
            <Content>
           <Card onTouchEndCapture={()=>props.navigation.navigate('Dashboard')}> 
           <Card>
           <CardItem >
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

