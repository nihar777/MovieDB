import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SecondScreen from '../screens/SecondScreen';
const MainStackNavigator = createStackNavigator({
  Main: {
    screen:T,
    navigationOptions: () => ({
      title: 'Main Screen'
    })
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: () => ({
     title: 'Second Screen'
    })
 }
});
export default createAppContainer(MainStackNavigator);