import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home';
import EditProfile from '../editProfile';
import Match from '../match';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faHeartbeat,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const Menu = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon color={color} size={size} icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="Compatíveis"
        component={Match}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon color={color} size={size} icon={faHeartbeat} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={EditProfile}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon color={color} size={size} icon={faUserCircle} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Menu;
