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
import DashboardStyles from './DashboardStyle'

function Dashboard(){

    return(
        <View style={DashboardStyles.viewStyle}>
            <Text>
                Movie Screen Is here,...
            </Text>
        </View>
    )
}
export default dash

