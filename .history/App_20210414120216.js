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
import newExample from './MovieDB/newExample';

const Stack = createStackNavigator();
function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Top" component={TopRated} ></Stack.Screen>
          <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
          <Stack.Screen name="new" component={newExample} u></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );

}
export default App


