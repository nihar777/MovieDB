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
import { createStackNavigator } from '@react-navigation/stack';
import TopRated from './MovieDB/TopRated';
import Dashboard from './MovieDB/Dashboard';

const Stack = createStackNavigator();
function App() {

    return (
    <View style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
              <Stack.Navigator>
              <Stack.Screen name="Top" component={N} ></Stack.Screen>
              {/* <Stack.Screen name="Top" component={TopRated} ></Stack.Screen>
              <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen> */}
             </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
      </View>
    );
  
}
export default App


