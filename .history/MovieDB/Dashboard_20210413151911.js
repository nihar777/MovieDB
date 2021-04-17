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
       
        </View>
       
    )
}
export default Dashboard

