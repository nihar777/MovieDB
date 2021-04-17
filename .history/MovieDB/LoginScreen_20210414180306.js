import React, { useEffect,useState } from 'react';
import {


    StyleSheet,
    AsyncStorage,
    Image,
    TextInput,
    FlatList,
    Text,
    View,

} from 'react-native';
import { TouchableOpacity, TouchableHighlight, State } from 'react-native-gesture-handler';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container, Icon, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';


import styles from './DashboardStyle';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
   
    function changeUsername(Username){
        setUsername(Username)
    //  console.log("Username is here=>",Username)   
    }
    function changePassword(Password){
        setPassword(Password)
        // console.log("Password Is here=>",Password)   
    
    }

    async function FetchMarkAsFav(){
    console.log("Username is here=>",Username)  
    console.log("Password Is here=>",Password)   
    let body={
        "media_type": "movie",
        "media_id": 550,
        "favorite": true
      }

    await axios.post('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=6f5fae224e38fb668c76e3f839b4d12f&session_id=1c16110db9ecea84ef8a5d29ec9b046af9807759',{
            
    })
    .then(res =>{

        console.log("Markas Fav,..",res)  
    })
    .catch((error)=>{
    console.log("==>LoginError",error)
    })
}
    
    


    useEffect(() => {
        FetchMarkAsFav()
    })

    const [Username,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.ViewStyleForLogin}>
                <Text style={styles.TextStyleForLogin}>Welcome back</Text>
                <View style={{ marginVertical: wp('20%') }}>
                    <TextInput style={styles.TextInputStyle}
                        placeholder={"Enter Your Username"}
                        onChangeText={(Emailvalue) => changeUsername(Emailvalue)}
                        placeholderTextColor="grey">
                    </TextInput>
                    <View>
                    </View><TextInput style={styles.TextInputStyle}
                        placeholder={"Enter Your Password"}
                        onChangeText={(PasswordValue) => changePassword(PasswordValue)}
                        placeholderTextColor="grey">

                    </TextInput>
                </View>
                <TouchableOpacity style={styles.TouchableOpacityStyleForLogin}
                    onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={{ color: "white", fontSize: wp('4%') }}>Log in</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}


export default LoginScreen
