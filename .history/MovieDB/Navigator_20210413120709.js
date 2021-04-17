import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
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
    screen: D,
    navigationOptions: () => ({
     title: 'Second Screen'
    })
 }
});
export default createAppContainer(MainStackNavigator);