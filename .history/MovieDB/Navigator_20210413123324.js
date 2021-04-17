import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';npm i native-base
import TopRated from './TopRated'
import Dashboard from './Dashboard'

const MainStackNavigator = createStackNavigator({
  Main: {
    screen:TopRated,
    navigationOptions: () => ({
      title: 'TopRated'
    })
  },
  Second: {
    screen: Dashboard,
    navigationOptions: () => ({
     title: 'Dashboard'
    })
 }
});
export default createAppContainer(MainStackNavigator);