import React from 'react';
import {Termos} from '../signUp/styles';
import {View, Alert} from 'react-native';
import {
  CardBackground,
  InputText,
  InputLabel,
  RouteTitle,
} from '../register/styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({route, navigation}) => {
  const [CPF, setCPF] = React.useState('');
  const [pin, setPin] = React.useState('');

  const handleLogin = () => {
    if (CPF.length == 11 && pin.length == 4) {
      fetch('https://transplantar.azurewebsites.net/cpf/' + CPF, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((user) => {
          if (user != null) {
            if (user.pin == pin) {
              AsyncStorage.setItem('auth', 'true');
              AsyncStorage.setItem('id', JSON.stringify(user.usuarioId));
              AsyncStorage.setItem('cpf', user.cpf);
              AsyncStorage.setItem('nome', user.nome);
              AsyncStorage.setItem('email', user.email);
              AsyncStorage.setItem('cidade', user.cidade);
              AsyncStorage.setItem('orgao', JSON.stringify(user.orgao));
              AsyncStorage.setItem('pin', JSON.stringify(user.pin));
              AsyncStorage.setItem(
                'grupoSanguineo',
                JSON.stringify(user.grupoSanguineo),
              );
              AsyncStorage.setItem(
                'tipoUsuario',
                JSON.stringify(user.tipoUsuario),
              );
              AsyncStorage.setItem('celular', user.celular);
              navigation.navigate('Menu');
            } else {
              Alert.alert('Acesso Negado', 'O PIN informado está incorreto!');
            }
          } else {
            Alert.alert(
              'Acesso Negado',
              'Não foi possível completar a requisição. ',
            );
          }
        });
    } else {
      Alert.alert('Acesso Negado', 'Digite um PIN ou um CPF válido!');
    }
  };

  return (
    <View style={{alignItems: 'center', height: '100%'}}>
      <PurpleRound height="60%" style={{position: 'relative'}}>
        <RouteTitle>Login</RouteTitle>
      </PurpleRound>
      <CardBackground style={{position: 'absolute', marginTop: 250}}>
        <InputLabel>CPF</InputLabel>
        <InputText onChangeText={(text) => setCPF(text)} placeholder="CPF" />
        <InputLabel>PIN de Acesso</InputLabel>
        <InputText onChangeText={(text) => setPin(text)} placeholder="PIN" />
        <Termos style={{textAlign: 'center'}}>
          Ao clicar em 'Acessar' você afirma que concorda com os termos e
          condições da plataforma.
        </Termos>
        <RoundButton
          onPress={() => handleLogin()}
          text="Acessar"
          textColor="#fff"
          backgroundColor="#6f78f6"
        />
      </CardBackground>
    </View>
  );
};

export default Login;
