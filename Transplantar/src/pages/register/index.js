import React from 'react';
import {Termos} from '../signUp/styles';
import {ScrollView, View, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {CardBackground, InputText, InputLabel, RouteTitle} from './styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({route, navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [CPF, setCPF] = React.useState('');
  const [city, setCity] = React.useState('');
  const [organ, setOrgan] = React.useState('');
  const [blood, setBlood] = React.useState('');

  const handleRegisterUser = async () => {
    var userType = route.params.userType == 'doador' ? '0' : '1';

    var data = JSON.stringify({
      cpf: CPF,
      nome: name,
      email: email,
      cidade: city,
      estado: 'São Paulo',
      orgao: parseInt(organ),
      pin: parseInt(pin),
      grupoSanguineo: parseInt(blood),
      tipoUsuario: parseInt(userType),
      celular: phone,
    });
    fetch('https://transplantar.azurewebsites.net/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    }).then((response) => {
      if (response.status == 201) {
        fetch('https://transplantar.azurewebsites.net/cpf/' + CPF, {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((user) => {
            AsyncStorage.setItem('id', JSON.stringify(user.usuarioId));
            AsyncStorage.setItem('auth', 'true');
            AsyncStorage.setItem('cpf', CPF);
            AsyncStorage.setItem('nome', name);
            AsyncStorage.setItem('email', email);
            AsyncStorage.setItem('cidade', city);
            AsyncStorage.setItem('orgao', organ);
            AsyncStorage.setItem('pin', pin);
            AsyncStorage.setItem('tipoUsuario', userType);
            AsyncStorage.setItem('estado', 'São Paulo');
            AsyncStorage.setItem('grupoSanguineo', blood);
            AsyncStorage.setItem('celular', phone);

            navigation.navigate('Menu');
          });
      } else {
        let error = new Error(response.statusText);
        Alert.alert('Erro', 'Houve um erro ao processar a requisição.');
        error.response = response;
        throw error;
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        alwaysBounceVertical={true}
        contentContainerStyle={{alignItems: 'center', flexGrow: 1}}>
        <PurpleRound height="60%" style={{position: 'relative'}}>
          <RouteTitle>Cadastro de {route.params.userType}</RouteTitle>
        </PurpleRound>
        <CardBackground style={{marginTop: -440, marginBottom: 500}}>
          <InputLabel>Nome</InputLabel>
          <InputText
            onChangeText={(text) => setName(text)}
            placeholder="Nome"
          />
          <InputLabel>CPF</InputLabel>
          <InputText onChangeText={(text) => setCPF(text)} placeholder="CPF" />
          <InputLabel>E-mail</InputLabel>
          <InputText
            onChangeText={(text) => setEmail(text)}
            placeholder="E-mail"
          />
          <InputLabel>Celular (WhatsApp)</InputLabel>
          <InputText
            onChangeText={(text) => setPhone(text)}
            placeholder="Celular"
          />
          <InputLabel>PIN</InputLabel>
          <InputText onChangeText={(text) => setPin(text)} placeholder="PIN" />
          <InputLabel>Cidade</InputLabel>
          <Picker
            selectedValue={city}
            style={{
              width: '100%',
            }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}>
            <Picker.Item label="Selecione" value="Selecione" />
            <Picker.Item
              label="São Caetano do Sul"
              value="São Caetano do Sul"
            />
            <Picker.Item label="São Paulo" value="São Paulo" />
            <Picker.Item label="Osasco" value="Osasco" />
          </Picker>
          <InputLabel>
            {route.params.userType == 'doador'
              ? 'Orgão Disponível'
              : 'Orgão Necessário'}
          </InputLabel>
          <Picker
            selectedValue={organ}
            style={{
              width: '100%',
            }}
            onValueChange={(itemValue, itemIndex) => setOrgan(itemValue)}>
            <Picker.Item label="Selecione" value="Selecione" />
            <Picker.Item label="Rim" value="0" />
            <Picker.Item label="Medúla óssea" value="1" />
            <Picker.Item label="Fígado" value="2" />
            <Picker.Item label="Pulmão" value="3" />
          </Picker>
          <InputLabel>Tipo Sanguíneo</InputLabel>
          <Picker
            selectedValue={blood}
            style={{
              width: '100%',
            }}
            onValueChange={(itemValue, itemIndex) => setBlood(itemValue)}>
            <Picker.Item label="Selecione" value="Selecione" />
            <Picker.Item label="A" value="0" />
            <Picker.Item label="B" value="1" />
            <Picker.Item label="AB" value="2" />
            <Picker.Item label="O" value="3" />
          </Picker>
          <Termos style={{textAlign: 'center'}}>
            Ao clicar em 'Cadastrar' você afirma que concorda com os termos e
            condições da plataforma.
          </Termos>
          <RoundButton
            onPress={() => handleRegisterUser()}
            text="Cadastrar"
            textColor="#fff"
            backgroundColor="#6f78f6"
          />
        </CardBackground>
      </ScrollView>
    </View>
  );
};

export default Register;
