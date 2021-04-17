import * as  React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  AsyncStorage,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TopRated from './MovieDB/TopRated';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      
    }
   
  }
 
   render(){
    return (
    <View style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>

          
        </SafeAreaView>
      </View>
    );
  }
}
export default App


