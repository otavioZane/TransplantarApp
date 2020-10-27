import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name="cadastro" component={SignUp} />
    <Screen name="login" component={Login} />
    <Screen name="home" component={Home} />
  </Navigator>
)

export default Routes
