import styled from 'styled-components/native';
import {View, Image, Text} from 'react-native';

export const Container = styled(View)` 
  align-items: center;
  justify-content: center;
`

export const ContainerButtons = styled(View)`
  background-color: red;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 10px;
`

export const Logo = styled(Image)`
  height: 350;
  width: 350;
`

export const Termos = styled(Text)`
  color: #ccc;
  font-size: 12;
  margin-top: 15;
`