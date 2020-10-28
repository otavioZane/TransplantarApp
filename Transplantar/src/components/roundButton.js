import styled from 'styled-components/native';
import React from 'react';

const RoundButton = (props) => (
  <ButtonContainer
      onPress={() => props.onPress}
      backgroundColor={props.backgroundColor}
  >
      <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  width: 280px;
  height: 40px;
  padding: 12px;
  border-radius: 50px;
  border-color: #ccc;    
  border-width: 1px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: #6f78f6;
  text-align: center;

`;

export default RoundButton
