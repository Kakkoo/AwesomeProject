import React, {useState} from 'react';
//import Main from './components/Main';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './components/RootStackScreen';
//import {enableScreens} from 'react-native-screens';
//import Drawer1 from './components/Drawer1';
//import Drawer2 from './components/Drawer2';

//import {createDrawerNavigator} from '@react-navigation/drawer';

//const RootDrawer = createDrawerNavigator();

//enableScreens();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  return (
    <NavigationContainer>
      <RootStackScreen />
      
      {/* <RootDrawer.Navigator initialRouteName="Main">
        <RootDrawer.Screen name="Main" component={Main} />
        <RootDrawer.Screen name="Drawer1" component={Drawer1} />
        <RootDrawer.Screen name="Drawer2" component={Drawer2} />
      </RootDrawer.Navigator> */}
    </NavigationContainer>
  );
};
export default App;