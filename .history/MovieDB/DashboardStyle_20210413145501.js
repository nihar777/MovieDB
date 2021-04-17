import React ,{useEffect}from 'react';
import{
StyleSheet,
} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';



const styles=StyleSheet.create({
    ViewStyle:{
        backgroundColor:'lightblue',
        flex:1
    },
    buttonStyle:{
        width:wp('10%')
        height:heightPercentageToDP('')
    }
})
export default styles;
