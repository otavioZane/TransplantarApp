import React from 'react';
import {Termos} from '../signUp/styles';
import {Alert, ScrollView, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CardBackground,
  InputText,
  InputLabel,
  RouteTitle,
} from '../register/styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';

const Register = ({route, navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [CPF, setCPF] = React.useState('');
  const [city, setCity] = React.useState('');
  const [organ, setOrgan] = React.useState('');
  const [blood, setBlood] = React.useState('');

  const handleEditProfile = async () => {
    var userType = await AsyncStorage.getItem('tipoUsuario');
    var id = await AsyncStorage.getItem('usuarioId');
    fetch('https://transplantar.azurewebsites.net/' + id, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        cpf: CPF,
        nome: name,
        email: email,
        cidade: city,
        estado: 'São Paulo',
        orgao: parseInt(organ),
        pin: parseInt(pin),
        grupoSanguineio: parseInt(blood),
        tipoUsuario: parseInt(userType),
        celular: phone,
      }),
    }).then((response) => {
      if (response.ok) {
        AsyncStorage.setItem('cpf', CPF);
        AsyncStorage.setItem('nome', name);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('cidade', city);
        AsyncStorage.setItem('orgao', toString(organ));
        AsyncStorage.setItem('pin', toString(pin));
        AsyncStorage.setItem('grupoSanguineo', toString(blood));
        AsyncStorage.setItem('celular', phone);
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
          <RouteTitle>Editar o seu perfil</RouteTitle>
        </PurpleRound>
        <CardBackground style={{marginTop: -440, marginBottom: 500}}>
          <InputLabel>Nome</InputLabel>
          <InputText
            onChangeText={(text) => setName(text)}
            placeholder="Nome"
            value={AsyncStorage.getItem('cpf')}
          />
          <InputLabel>CPF</InputLabel>
          <InputText onChangeText={(text) => setCPF(text)} placeholder="CPF" />
          <InputLabel>E-mail</InputLabel>
          <InputText
            onChangeText={(text) => setEmail(text)}
            placeholder="E-mail"
            value={AsyncStorage.getItem('email')}
          />
          <InputLabel>Celular (WhatsApp)</InputLabel>
          <InputText
            onChangeText={(text) => setPhone(text)}
            placeholder="Celular"
            value={AsyncStorage.getItem('celular')}
          />
          <InputLabel>PIN</InputLabel>
          <InputText
            value={AsyncStorage.getItem('pin')}
            onChangeText={(text) => setPin(text)}
            placeholder="PIN"
          />
          <InputLabel>Cidade</InputLabel>
          <Picker
            selectedValue={AsyncStorage.getItem('cidade')}
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
            {AsyncStorage.getItem("tipoUsuario") == '0'
              ? 'Orgão Disponível'
              : 'Orgão Necessário'}
          </InputLabel>
          <Picker
            selectedValue={AsyncStorage.getItem('orgao')}
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
            selectedValue={AsyncStorage.getItem('grupoSanguineio')}
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
            text="Cadastrar"
            onPress={() => handleEditProfile()}
            textColor="#fff"
            backgroundColor="#6f78f6"
          />
        </CardBackground>
      </ScrollView>
    </View>
  );
};

export default Register;
