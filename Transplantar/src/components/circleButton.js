import styled from 'styled-components/native';
import {TouchableOpacity, Image, Text, Dimensions} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const CircleButton = (props) => {
  return (
    <ButtonCircle onPress={props.onPress}>
      <ButtonImage source={props.source} />
      <ButtonTextTitle>{props.textTitle}</ButtonTextTitle>
      <ButtonTextST>{props.textST}</ButtonTextST>
    </ButtonCircle>
  );
};

const ButtonCircle = styled(TouchableOpacity)`
  border-color: #ccc;
  border-radius: 100;
  border-width: 1;
  height: 80;
  margin: 10px;
  padding: 12px;
  width: 92;
  background-color: #fff;
  /* justify-content: center; */
  align-content: center;
  align-items: center;
`;

const ButtonImage = styled(Image)`
  height: 50;
  width: 50;
  margin-bottom: 16px;
  resize-mode: contain;
`;

const ButtonTextTitle = styled(Text)`
  color: #000;
  font-size: 12;
  text-align: center;
  margin-top: 6;
  font-weight: bold;
`;

const ButtonTextST = styled(Text)`
  color: #ccc;
  font-size: 10;
  text-align: center;
  margin-top: 2;
`;
export default CircleButton;
