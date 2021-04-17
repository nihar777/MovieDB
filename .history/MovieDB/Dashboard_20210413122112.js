import React ,{useEffect}from 'react';
import{

Text,
StyleSheet,
AsyncStorage,
FlatList,
TextInput,
View,
Button,
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList, State } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import DashboardStyles from './DashboardStyle'
import styles from './DashboardStyle';
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
        <View style={styles.ViewStyle}> 
          <FlatList
          data={}
          >

          </FlatList>
        </View>
    )
}
export default Dashboard

