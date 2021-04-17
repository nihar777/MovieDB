import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TopRated from './TopRated'
import Dashboard from './DashboardDashboard

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