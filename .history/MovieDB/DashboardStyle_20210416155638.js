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
        
        fontFamily:'Montserrat-BlackItalic',
        
    },
    bigImageStyle:{
        height: 200, 
        width: null, 
        flex: 1 ,
        
        
    },
    ViewStyleForLogin:{
        backgroundColor:"white",
        flexDirection:"column",
        flex:1
    },
    TextInputStyle:{
        marginTop:wp('1%'),
        width:wp('70%'),
        fontSize:wp('3%'),
        height:hp('5%'),
        paddingLeft:wp('2%'),
        textAlign:"left",
        borderRadius:wp('50%'),
        alignSelf:"center",
        backgroundColor:"white",
        borderColor:"gray",
        borderWidth:1,
        padding:wp('2%')

    },

    TextStyleForLogin:{
        fontSize:wp('4%'),
        padding:15,
        marginTop:20,
        opacity:0.6,
        alignItems:"center",
        color:"blue"
    },

    TouchableOpacityStyleForLogin:{
        width:wp('60%'),
        opacity:0.6,
        height:hp('5%'),
        marginStart:2,
        marginTop:wp('8%'),
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue",
        borderRadius:wp('50%'),

        

    },
    ContentStyle:{
        flex:0.5,
        backgroundColor
    }
    
})
export default styles;
