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
        backgroundColor:"red",
        height: hp('4%'),
    }
})
export default styles;