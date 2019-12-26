import Home from './screens/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './screens/Details';
import WebView from './screens/WebView';

const MainNavigation = createStackNavigator(
  {
    Home: {screen: Home},
    Details: {screen: Details},
    WebView: {screen: WebView},
  },

  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#b83227',
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  },
);

const App = createAppContainer(MainNavigation);

export default App;
