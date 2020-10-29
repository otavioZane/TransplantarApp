import styled from 'styled-components/native';
import {View, TextInput} from 'react-native';

export const InputText = styled(TextInput)`
  background: #fff;
  width: 100%;
  border-radius: 14px;
  border: 1px #d9d9d9;
  padding: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const InputLabel = styled.Text`
  color: ${({textColor}) => textColor || '#6f78f6'};
  font-size: 16;
  font-weight:bold
  text-align: left;
  margin-right: auto;
  padding: 9px;
`;

export const RouteTitle = styled.Text`
  color: ${({textColor}) => textColor || '#fff'};
  font-size: 26;
  font-weight:bold
  text-align: center;
  margin-right: auto;
  margin-top:36px;
  padding: 36px;
`;

export const CardBackground = styled(View)`
  background: #fff;
  width: 90%;
  justify-content: center;
  border-radius: 14px;
  padding: 16px;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
