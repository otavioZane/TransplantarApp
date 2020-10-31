import styled from 'styled-components/native';
import React from 'react';
<<<<<<< HEAD
import {View, Text, TouchableOpacity} from 'react-native'

  const NavBar = (props) => (
    <NavBarView>
      <NavBarButton>
        <NavBarText></NavBarText>
      </NavBarButton>
      <NavBarButton>
        <NavBarText></NavBarText>
      </NavBarButton>
      <NavBarButton>
        <NavBarText></NavBarText>
      </NavBarButton>
      <NavBarButton>
        <NavBarText></NavBarText>
      </NavBarButton>
    </NavBarView>
)

  const NavBarView = styled(View)`
    height: 100;
    width: 100%;
    flex-direction: row;
  `;

  const NavBarButton = styled(TouchableOpacity)`
  
  `;

  const NavBarText = styled(Text)`
  
  `;

export default NavBar
=======
import {View, Text, TouchableOpacity} from 'react-native';

const NavBar = (props) => (
  <NavBarView>
    <NavBarButton>
      <NavBarText></NavBarText>
    </NavBarButton>
    <NavBarButton>
      <NavBarText></NavBarText>
    </NavBarButton>
    <NavBarButton>
      <NavBarText></NavBarText>
    </NavBarButton>
    <NavBarButton>
      <NavBarText></NavBarText>
    </NavBarButton>
  </NavBarView>
);

const NavBarView = styled(View)`
  height: 100;
  width: 100%;
  flex-direction: row;
`;

const NavBarButton = styled(TouchableOpacity)``;

const NavBarText = styled(Text)``;

export default NavBar;
>>>>>>> origin/master
