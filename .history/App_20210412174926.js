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
import {Router, Scene, Stack, Actions} from 'react-native-router-flux'
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
          <Router>
              <Scene key="root" >
                {/* <Scene key="Auth"hideNavBar >
                  <Scene key="Top"component={TopRated} title={"Login"} hideNavBar={false} />
                </Scene> */}
                
                {/* <Scene key="Main" hideNavBar> */}
                  <Scene key="Download"component={TopRated}title={"BGDownload"}hideNavBar={true} initial={true}
                {/* </Scene> */}
              </Scene>
            </Router> 
        </SafeAreaView>
      </View>
    );
  }
}
export default App


