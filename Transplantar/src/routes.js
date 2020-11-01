import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';
import Tips from './pages/tips';
import Match from './pages/match';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Register from './pages/register';
import EditProfile from './pages/editProfile';
import Menu from './pages/menu';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="SignUp" component={SignUp} />
    <Screen name="Register" component={Register} />
    <Screen name="Login" component={Login} />
    <Screen name="Home" component={Home} />
    <Screen name="Tips" component={Tips} />
    <Screen name="EditProfile" component={EditProfile} />
    <Screen name="Menu" component={Menu} />
    <Screen name="Match" component={Match} />
  </Navigator>
);

export default Routes;
