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

import axios from 'react-native-axios';
import styles from './DashboardStyle';

const LoginScreen = ({ navigation }) => {


    useEffect(() => {

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
function changeUsername(Username){
 console.log("Username is here=>",Username)   
}
function changePassword(){

}
function FetchMarkAsFav(){
    
    
    
        
        axios.post('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=6f5fae224e38fb668c76e3f839b4d12f&session_id=1c16110db9ecea84ef8a5d29ec9b046af9807759', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
            username: this.state.Username,
            password: this.state.Password,
            
        })

        
    })
          .then((response) => response.json())
          .then((json) => {
            if(json.success){
                // Actions.jump("Deck")
                Actions.Main({type:'reset'})
                this._storeData(json)
            }else {
                //onsole.warn(json.message)
            }
          })
          .catch((error) => {
            //console.error(error);
          });
      }


export default LoginScreen
