import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import splashScreen from './pages/splashScreen'
import Login from './pages/login'
import SignUp from './pages/signUp'

const { Navigator, Screen } = createStackNavigator();

const Routes = () => (
  <Navigator>
    <Screen name="splashScreen" component={splashScreen} />
    <Screen name="login" component={Login} />
    <Screen name="Cadastro" component={SignUp} />
  </Navigator>
)

export default Routes
