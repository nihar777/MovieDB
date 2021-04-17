import React, { useEffect } from 'react';
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

const MovieData = [
    {
        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'First Item',
        details: 'onionCapture'
    },
    {

        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'Second Item',
        details: 'onionCapture'
    },
    {
        image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
        bigImage: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        title: 'Third Item',
        details: 'onionCapture'
    },
];

const TopMovie = ({ navigation }) => {

    useEffect(() => {

        // FetchRequest(); 
    });
    // function FetchRequest(){

    //     axios.post('https://developers.themoviedb.org/auth/request_token',{

    //             "redirect_to": "http://www.themoviedb.org/"

    //     })
    //     .then(responce =>{
    //             console.log("Token==>",responce)

    //     })
    //     .catch((error)=>{
    //         console.log("==>Error",error.message)
    //     })
    // }

    return (

        <View style={{ flex: 1 }}>
            <View style={styles.ViewStyle}>

                <Text style={styles.TextStyle}>Welcome back</Text>

                <View style={{ marginVertical: wp('20%') }}>

                    <TextInput style={styles.TextInputStyle}
                        placeholder={"Enter Your Username"}
                        onChangeText={(Emailvalue) => this.changeUsername(Emailvalue)}
                        placeholderTextColor="grey">

                    </TextInput>

                    <View>
                        <HelperText style={{ marginStart: 50 }} type='error' visible={this.state.visible}>Email is required</HelperText>
                    </View>

                    <TextInput style={styles.TextInputStyle}
                        placeholder={"Enter Your Password"}
                        onChangeText={(PasswordValue) => this.changePassword(PasswordValue)}
                        placeholderTextColor="grey">

                    </TextInput>

                    <HelperText style={{ marginStart: 50 }} type='error' visible={this.state.visible1}>Password is required</HelperText>


                </View>
                <TouchableOpacity style={styles.TouchableOpacityStyleForLogin}>
                    {/* // onPress={() => this.Authantication()}> */}
                    <Text style={{ color: "white", fontSize: wp('4%') }}>Log in</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}
export default LoginScr
