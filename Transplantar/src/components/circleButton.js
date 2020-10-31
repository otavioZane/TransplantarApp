import styled from 'styled-components/native';
import {TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react'

const {width, height} = Dimensions.get("window")

const CircleButton = (props) => { 
  return(
  <ButtonCircle>
    <ButtonImage source={props.source} /> 
  </ButtonCircle>
  )
};

const ButtonCircle = styled(TouchableOpacity)`
  border-color: #ccc;
  border-radius: 100;
  border-width: 1;
  height: 80;
  margin: 10px;
  padding: 12px;
  width: 80;
  background-color: #fff;
`;

const ButtonImage = styled(Image)`
  height: 50;
  width: 50; 
`;

export default CircleButton;