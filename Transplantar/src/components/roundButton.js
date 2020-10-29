import styled from 'styled-components/native';
import React from 'react';

const RoundButton = ({onPress, text, textColor, backgroundColor}) => (
  <ButtonContainer onPress={() => onPress} backgroundColor={backgroundColor}>
    <ButtonText textColor={textColor}>{text}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity`
  border-color: #ccc;
  border-radius: 50;
  border-width: 1;
  height: 40;
  padding: 12px;
  padding-bottom: 35;
  width: 280;
`;

const ButtonText = styled.Text`
  color: ${({textColor}) => textColor || '#6f78f6'};
  font-size: 20;
  justify-content: center;
  text-align: center;
`;

export default RoundButton;
