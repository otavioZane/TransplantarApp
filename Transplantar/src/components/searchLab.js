import styled from 'styled-components/native';
import React from 'react';
import {Image, Text, View, Linking, TouchableOpacity} from 'react-native';

const SearchLab = (props) => (
  <SearchContainer>
    <SearchImage source={props.source} />
    <BtnContainer
      onPress={() =>
        Linking.openURL(
          'https://www.google.com.br/maps/search/laborat%C3%B3rio',
        )
      }>
      <ButtonText>Encontrar laboratórios próximos</ButtonText>
    </BtnContainer>
  </SearchContainer>
);

const SearchContainer = styled(View)`
  align-items: center;
  background: #fff;
  border-color: #ccc;
  border-radius: 40;
  justify-content: center;
  margin-top: 26;
  height: 330;
  width: 350;
`;

const ButtonText = styled(Text)`
  color: #6f78f6;
  font-size: 20;
  border-color: #6f78f6;
  border-radius: 50;
  border-width: 2;
  padding: 6px;
  justify-content: center;
  text-align: center;
`;

const BtnContainer = styled(TouchableOpacity)`
  background: #fff;
  margin-top: 25px;
  padding: 12px;
  width: 350;
`;

const SearchImage = styled(Image)`
  height: 150;
  width: 300;
`;

export default SearchLab;
