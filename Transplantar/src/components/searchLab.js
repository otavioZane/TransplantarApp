import styled from 'styled-components/native';
import React from 'react';
<<<<<<< HEAD
import {Image, Text, View, TouchableOpacity} from 'react-native'
=======
import {Image, Text, View, TouchableOpacity} from 'react-native';
>>>>>>> origin/master

const SearchLab = (props) => (
  <SearchContainer>
    <SearchImage source={props.source} />
<<<<<<< HEAD
     <BtnContainer>
      <ButtonText>Encontrar laboratórios próximos</ButtonText>
    </BtnContainer> 
=======
    <BtnContainer>
      <ButtonText>Encontrar laboratórios próximos</ButtonText>
    </BtnContainer>
>>>>>>> origin/master
  </SearchContainer>
);

const SearchContainer = styled(View)`
  align-items: center;
  background: #fff;
  border-color: #ccc;
  border-radius: 40;
  justify-content: center;
  margin-top: 100;
  height: 330;
  width: 350;
`;

const ButtonText = styled(Text)`
  color: #6f78f6;
  font-size: 20;
  justify-content: center;
  text-align: center;
`;

const BtnContainer = styled(TouchableOpacity)`
  background: #fff;
  margin: 15px;
  padding: 12px;
  width: 350;
`;

const SearchImage = styled(Image)`
  height: 200;
<<<<<<< HEAD
  width: 300; 
=======
  width: 300;
>>>>>>> origin/master
`;

export default SearchLab;
