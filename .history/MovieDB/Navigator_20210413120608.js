import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import SecondScreen from '../screens/SecondScreen';
const MainStackNavigator = createStackNavigator({
  Main: {
    screen:TopRated,
    navigationOptions: () => ({
      title: 'TopRated'
    })
  },
  Second: {
    screen: Dash,
    navigationOptions: () => ({
     title: 'Second Screen'
    })
 }
});
export default createAppContainer(MainStackNavigator);