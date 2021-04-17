import React, { useEffect, useState } from 'react';
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
import { Container, Icon, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Item, Right, Input, InputGroup } from 'native-base';


import styles from './DashboardStyle';
import axios from 'axios';


const Dashboard = ({ navigation }) => {
    const [MovieDataResponce, SetMovieData] = useState([])

    useEffect(() => {
        TopRatedMovie()

    }, []);



    function MarkAsFav(id) {
        let header = {
            headers: { "Content-Type": "application/json;charset=utf-8" }
        }


        let body = {
            "media_type": "movie",
            "media_id": id,
            "favorite": true
        }

        console.log("id==>", body)
        console.warn("Clicked...")
        axios.post('https://api.themoviedb.org/3/account/favorite?api_key=6f5fae224e38fb668c76e3f839b4d12f&session_id=1c16110db9ecea84ef8a5d29ec9b046af9807759', body, header)

            .then(responce => {

                console.log("Mark as Fav,..", responce)
            })
            .catch((error) => {
                console.log("==>Error", error)
            })
    }
    function TopRatedMovie() {


        console.log("Clicked")
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=6f5fae224e38fb668c76e3f839b4d12f&language=en-US&page=1')
            .then(responce => {

                console.log("Axios Is Here==>", responce.data.results)
                SetMovieData(responce.data.results)
                console.log("State Sucessfuly Working,,,", MovieDataResponce)

            })
            .catch((error) => {
                console.log("==>Error", error)
            })
    }

    return (
        <View style={{}} >
            <View>

           
            <Content style={styles.ContentStyle}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Content>
            </View>
            <FlatList
                data={MovieDataResponce}
                renderItem={({ item, index }) => {
                    console.log("Flatlist item Data==>", item)
                    return (
                        <Content>

                            <Card>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Dashboard')}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + item.backdrop_path }} />

                                            <Body>
                                                <Text style={{ fontFamily: 'Montserrat-BlackItalic', }}>{item.title}</Text>
                                                <Text style={{ fontFamily: 'Montserrat-BlackItalic', }} note>{item.details}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </TouchableOpacity>
                                <CardItem cardBody>
                                    <Image resizeMode="contain" source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + item.poster_path }} style={styles.bigImageStyle} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <TouchableOpacity
                                            onPress={() => MarkAsFav(item.id)}
                                            style={styles.buttonStyle}
                                            transparent>
                                            <Icon type="Ionicons" name="md-heart" />
                                            <Text style={styles.TextStyle}>Mark As Favourite</Text>
                                        </TouchableOpacity>
                                    </Left>
                                </CardItem>
                            </Card>
                        </Content>)
                }}>
            </FlatList>
        </View>
    )
}
export default Dashboard
