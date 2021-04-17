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

const LoginScreen = ({ navigation }) => {

    useEffect(() => {

    })
    const [Username,setUsername]
    const [Password,setPassrname]
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
                <TouchableOpacity style={styles.TouchableOpacityStyleForLogin}>
                    {/* // onPress={() => this.Authantication()}> */}
                    <Text style={{ color: "white", fontSize: wp('4%') }}>Log in</Text>

                </TouchableOpacity>

            </View>
        </View>
    )
}
function changeUsername(){

}
function changePassword(){

}
export default LoginScreen
