import React, { useEffect } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: 'lightblue',
        flex: 1
    },
    buttonStyle: {
        width: wp('76%'),
        // backgroundColor:"red",
        alignContent:"center",
        alignItems:"center",
        flexDirection:"row",
        height: hp('8%'),
    },
    TextStyle:{
        marginStart:5,
        alignSelf:"center",
        alignItems:"center",
        alignContent:"center",
        fontFamily:'Montserrat-BlackItalic',
        
    }
})
export default styles;
