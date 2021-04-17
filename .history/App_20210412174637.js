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
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageExample from './ImageScreen';
import ScrollViewExample from './ScrollViewEx';
import DeckSwipe from './DeckSwiper';
import Login from './LoginForm';
import Dashboard from './Dashboard';
import Profile from './Profile';
import GeniuseCircular from './GeniusedData';
import GeniuseTask from './GeniusedDataTask';
import Document from './DocumentPicker';
import GeniuseLoginForm from './GeniuseLogin';
import GeniuseDashboard from './GeniuseDashboard';
import geniuseProfile from './GeniuseProfile';
import GeniuseParents from './GeniuseParents';
import GeniuseAddress from './GeniuseAddress';
import popDialog from './PopDialogExample';
import FetchData from './AxiosExample';
import Anim from './Animated';
import Fold from './FoldableCard';
import Multi from './MultilanguageExample';
import chart from './PureChartExample';
import NativeExample from './nativeBaseComponent';
import Fees from './GeniuseFees';
import DealDetails from './GeniuseDeal';
import Cordinate from './BottomLay';
import ChartExample from './ChartKitExample';
import ShareScreen from './Share';
import netInfo from './NetInfo';
import ScrollableTabsExampleMultiple from './ScrollableTab';
import PhoneAuth from './FirebaseAuth/FirebaseFirst';
import ContentLoad from './ContentLoader';
import Greeting, { Activity, ButtonExample, Bananas, LotsOfGreetings,InsideProps, TrypropsExample } from './FuntionalComponent';
import MapsExample from './Maps';
import HomeScreen from './Pages/HomeScreen';
import ViewUser from './Pages/ViewUser';
import ViewAllUser from './Pages/ViewAllUser';
import UpdateUser from './Pages/UpdateUser';
import RegisterUser from './Pages/RegisterUser';
import DeleteUser from './Pages/DeleteUser';
import { TextFieldExample } from './Pages/TextInputExample';
import { DashDesign } from './Coustom.../Dashboard';
import LottieAnimatedExample from './LottieExample/LottieAnimatedExample';
import { OTPExample } from './OTPExample';
import ErrorImage from './ErrorImage';
import example from './ReactNativeSnap/main';
import downloader from './BackgroundDownload/DownloadService';
import TwitterSignIn from './SocialAutantication/Twitter';
import MainScreen from './OnBoardingScreens/MainScreen';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        userToken:'',
    }
   
  }
 
   render(){
    return (
    <View style={{flex:1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>
          <Router>
              <Scene key="root" >
                <Scene key="Auth"hideNavBar >
                
                <Scene key="Main"component={MainScreen}title={"OnBoardingExample"}hideNavBar={true} initial={true}/>
                  <Scene key="Login"component={Login} title={"Login"} hideNavBar={false}/>
                 
                </Scene>
                
                <Scene key="Main" hideNavBar>
                  <Scene key="Download"component={downloader}title={"BGDownload"}hideNavBar={true}/>
                  
                  </Scene>
              </Scene>
            </Router> 
        </SafeAreaView>
      </View>
    );
  }
}
export default App


