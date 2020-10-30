import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Register from './pages/register';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="SignUp" component={SignUp} />
    <Screen name="Register" component={Register} />
    <Screen name="Login" component={Login} />
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default Routes;
