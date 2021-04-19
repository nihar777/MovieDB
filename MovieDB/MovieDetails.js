import React, { useEffect, useState, useContext } from 'react';
import { Text, View, Image, FlatList, ImageBackgroundBase, ImageBackground, ScrollView, } from 'react-native';
import styles from './DashboardStyle';

import TopRatedMovie from './Dashboard'

import axios from 'axios';
const MovieDetails = ({ route, navigation }) => {

  const [MovieData, SetMovieData] = useState([])
  const { id } = route.params;

  useEffect((navigation) => {
    MovieDetails()
    console.log("MovieIdISHEre=>>>", id)

  }, []);

  function MovieDetails() {
    let Media_id = {
      id
    };
    console.log("id===", id)

    axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6f5fae224e38fb668c76e3f839b4d12f&language=en-US`,
    )
      .then(responce => {
        console.log('Movie Details..', responce.data);
        SetMovieData(responce.data);

        console.log("MovieData=>", MovieData.poster_path)


      })
      .catch(error => {
        console.log('==>Error', error);
      });
  }

  return (
     <View style={styles.DetailViewStyle}>
      <ScrollView>
        <Image
          resizeMode={"cover"}
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderColor: "black",
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 20,
          }} source={{ uri: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2' + MovieData.poster_path }}></Image>

        <Text
          style={{
            fontFamily: 'Montserrat-BlackItalic',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            margin: 5,
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          {MovieData.title}
        </Text>

        <View style={{ flexDirection: "row" }}>


          <View style={{ flexDirection: "column" }}>
            <Text style={styles.DetailTextStyle}>ReleaseDate </Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.DetailTextStyle}>Language </Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.DetailTextStyle}>Title</Text>
            <View style={styles.lineStyle}></View>


            <Text style={styles.DetailTextStyle}>Overview </Text>
            <View style={styles.lineStyle}></View>
          </View>


          <View style={{ flexDirection: "column" }}>
            <Text style={styles.DetailTextStyle}>: {MovieData.release_date}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.DetailTextStyle}>: {MovieData.original_language}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.DetailTextStyle}>: {MovieData.original_title}</Text>
            <View style={styles.lineStyle}></View>


            <Text style={styles.DetailTextStyle}>: {MovieData.overview} </Text>
            <View style={styles.lineStyle}></View>
          </View>
        </View>
      </ScrollView>
    </View>

  );
}

export default MovieDetails;
