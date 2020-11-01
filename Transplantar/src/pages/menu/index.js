import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home';
import EditProfile from '../editProfile';
import Match from '../match';


const Tab = createBottomTabNavigator();

const Menu = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        style={{
          fontSize: 10,
          textColor: "#6f78f6",  
        }}
        />
      <Tab.Screen name="Match" component={Match} /> 
      <Tab.Screen name="Perfil" component={EditProfile} />
    </Tab.Navigator>
  );
};

export default Menu;
