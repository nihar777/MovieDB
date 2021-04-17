import React from 'react';
import{

    StyleSheet,
    AsyncStorage,
   TextInput,
   
} from 'react-native';
import { TouchableOpacity,TouchableHighlight, FlatList } from 'react-native-gesture-handler';

import {Actions} from 'react-native-router-flux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, } from 'native-base';
import axios from 'axios';
