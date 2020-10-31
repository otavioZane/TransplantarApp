import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Register from './pages/register';
import EditProfile from './pages/editProfile';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="SignUp" component={SignUp} />
    <Screen name="Register" component={Register} />
    <Screen name="Login" component={Login} />
    <Screen name="Home" component={Home} />
    <Screen name="EditProfile" component={EditProfile} />
  </Navigator>
);

export default Routes;
