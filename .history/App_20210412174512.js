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
    this.getData()
  }
  async getData(){
    let userToken = await AsyncStorage.getItem('UserData');
    console.log('------->',userToken);
    if(userToken==null){
      Actions.Auth({type:'reset'})
    }else{
      Actions.Main({type:'reset'})
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
                  <Scene key="firebaseOTP"component={PhoneAuth} title={"FirebaseOTPExample"} hideNavBar={false}/>
                  <Scene key="Multi"component={Multi} title={"multiLanguage"} hideNavBar={false}/>
                  <Scene key="GeniuseLogin"component={GeniuseLoginForm} title={"Geniuselogin"} hideNavBar={true}/> 
                </Scene>
                
                <Scene key="Main" hideNavBar>
                  <Scene key="Deck"component={DeckSwipe} title={"Decks"} hideNavBar={false}/> 
                  <Scene key="Dash"type ='dashReset'component={Dashboard} title={"Dash"} hideNavBar={false}/> 
                  <Scene key="Profile"component={Profile} title={"Profile"} hideNavBar={false}/> 
                  <Scene key="GeniuseCircular"component={GeniuseCircular} title={"GeniuseCircular"} hideNavBar={false}/> 
                  <Scene key="Geniusetask"component={GeniuseTask} title={"GeniuseTask"} hideNavBar={false}/> 
                  <Scene key="Document"component={Document} title={"Document"} hideNavBar={false}/> 
                  <Scene key="GeniuseDash"component={GeniuseDashboard} title={"GeniuseDash"} hideNavBar={true} />
                  <Scene key="ProfileGeniuse"component={geniuseProfile} title={"GeniuseProfile"} hideNavBar={true}/> 
                  <Scene key="Parents"component={GeniuseParents} title={"GeniuseParents"} hideNavBar={true}/> 
                  <Scene key="Address"component={GeniuseAddress} title={"GeniuseAddress"} hideNavBar={true}/> 
                  <Scene key="popDialog"component={popDialog}title={"popDialog"}hideNavBar={true}/> 
                  <Scene key="Fetch"component={FetchData}title={"fetch"}hideNavBar={false} />
                  <Scene key="Fold"component={Fold}title={"Foldable"}hideNavBar={false}/>
                  <Scene key="Anim"component={Anim}title={"Animated"}hideNavBar={false}/>
                  <Scene key="Chart"component={chart}title={"Chart"}hideNavBar={false}/>
                  <Scene key="Native"component={NativeExample}title={"Native"}hideNavBar={false}/>
                  <Scene key="Fees"component={Fees}title={"Fees"}hideNavBar={true}/>
                  <Scene key="Cordinate"component={Cordinate}title={"Cordinate"}hideNavBar={false}/>
                  <Scene key="Deal"component={DealDetails}title={"Deal Details"}hideNavBar={true}/>
                  <Scene key="Share"component={ShareScreen}title={"ShareExample"}hideNavBar={false}/>
                  <Scene key="netInfo"component={netInfo}title={"NetInfoExample"}hideNavBar={false}/>
                  <Scene key="ScrollableTab"component={ScrollableTabsExampleMultiple}title={"ScrollableTabView"} hideNavBar={false}/>
                  <Scene key="Activity"component={Activity}title={"ActivityExample"}hideNavBar={false}/>
                  <Scene key="ContentLoad"component={ContentLoad}title={"ContentLoaderExample"}hideNavBar={false}/>
                  <Scene key="Chartkit"component={ChartExample}title={"Chartkit"}hideNavBar={true}/>
                  <Scene key="Maps"component={MapsExample}title={"MapsExample"}hideNavBar={false}/>
                  <Scene key="PropsText"component={Greeting}title={"GreetingExample"}hideNavBar={false}/>
                  <Scene key="PropsImage"component={Bananas}title={"GreetingExample"}hideNavBar={false}/>
                  <Scene key="LotsofGreetings"component={LotsOfGreetings}title={"LlotsOfGreetingsExample"}hideNavBar={false} />
                  <Scene key="tryProps"component={TrypropsExample}title={"PropsExample"}hideNavBar={false}/>
                  <Scene key="HomeScreen"component={HomeScreen}title={"Home"}hideNavBar={false}/>
                  <Scene key="View"component={ViewUser}title={"View User"}hideNavBar={false}/>
                  <Scene key="ViewAll"component={ViewAllUser}title={"View User"}hideNavBar={false}/>
                  <Scene key="Update"component={UpdateUser}title={"Update User"}hideNavBar={false}/> 
                  <Scene key="Register"component={RegisterUser}title={"Register User"}hideNavBar={false}/>
                  <Scene key="Delete"component={DeleteUser}title={'Delete User'}hideNavBar={false}/>
                  <Scene key="TextInputExample"component={TextFieldExample}title={"TextInputExample"}hideNavBar={false}/>
                  <Scene key="DashDesigns"component={DashDesign}title={"WaveExample"}hideNavBar={true}/>
                  <Scene key="LottieExample"component={LottieAnimatedExample}title={"LottieExample"}hideNavBar={true}/>
                  <Scene key="OTP"component={OTPExample}title={"OTPExample"}hideNavBar={false}/>
                  <Scene key="ErrorImage"component={ErrorImage}title={"ErrorImageExample"}hideNavBar={false}/>
                  <Scene key="Snap"component={example}title={"SnapExample"}hideNavBar={true} initial={true}/> 
                  <Scene key="Twitter"component={TwitterSignIn}title={"TwitterExample"}hideNavBar={true} />
                  <Scene key="Download"component={downloader}title={"BGDownload"}hideNavBar={true}/>
                  {/* <Scene key="Main"component={MainScreen}title={"OnBoardingExample"}hideNavBar={true} initial={true}/> */}
                  
                  </Scene>
              </Scene>
            </Router> 
        </SafeAreaView>
      </View>
    );
  }
}
export default App


