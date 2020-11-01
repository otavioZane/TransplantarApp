import React, {useEffect} from 'react';
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
  const [userType, setUserType] = React.useState('');

  useEffect(() => {
    async function fetchData() {
      setName(await AsyncStorage.getItem('nome'));
      setEmail(await AsyncStorage.getItem('email'));
      setPhone(await AsyncStorage.getItem('celular'));
      setPin(await AsyncStorage.getItem('pin'));
      setCPF(await AsyncStorage.getItem('cpf'));
      setCity(await AsyncStorage.getItem('cidade'));
      setOrgan(await AsyncStorage.getItem('orgao'));
      setBlood(await AsyncStorage.getItem('grupoSanguineo'));
      setUserType(await AsyncStorage.getItem('tipoUsuario'));
    }
    fetchData();
  }, []);

  const handleDeleteAccount = async () => {
    var id = await AsyncStorage.getItem('id');
    fetch('https://transplantar.azurewebsites.net/' + id, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
      body: false,
    }).then((response) => {
      if (response.ok) {
        AsyncStorage.clear();

        Alert.alert('Deletado!', 'Seus dados foram deletados com sucesso.');

        navigation.navigate('SignUp');
      } else {
        let error = new Error(response.statusText);
        Alert.alert('Erro', 'Houve um erro ao processar a requisição.');
        error.response = response;
        throw error;
      }
    });
  };

  const handleEditProfile = async () => {
    var userType = await AsyncStorage.getItem('tipoUsuario');
    var id = await AsyncStorage.getItem('id');
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
        grupoSanguineo: parseInt(blood),
        tipoUsuario: parseInt(userType),
        celular: phone,
      }),
    }).then((response) => {
      if (response.ok) {
        AsyncStorage.setItem('cpf', CPF);
        AsyncStorage.setItem('nome', name);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('cidade', city);
        AsyncStorage.setItem('orgao', organ);
        AsyncStorage.setItem('pin', pin);
        AsyncStorage.setItem('grupoSanguineo', blood);
        AsyncStorage.setItem('celular', phone);

        Alert.alert('Alterado!', 'Seus dados foram atualizados com sucesso.');
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
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <PurpleRound height="40%" style={{position: 'relative'}}>
          <RouteTitle>Editar o seu perfil</RouteTitle>
        </PurpleRound>
        <CardBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: -290,
            marginBottom: 400,
          }}>
          <InputLabel>Nome</InputLabel>
          <InputText
            onChangeText={(text) => setName(text)}
            placeholder="Nome"
            defaultValue={name}
          />
          <InputLabel>CPF</InputLabel>
          <InputText
            onChangeText={(text) => setCPF(text)}
            placeholder="CPF"
            defaultValue={CPF}
          />
          <InputLabel>E-mail</InputLabel>
          <InputText
            onChangeText={(text) => setEmail(text)}
            placeholder="E-mail"
            defaultValue={email}
          />
          <InputLabel>Celular (WhatsApp)</InputLabel>
          <InputText
            onChangeText={(text) => setPhone(text)}
            placeholder="Celular"
            defaultValue={phone}
          />
          <InputLabel>PIN</InputLabel>
          <InputText
            value={AsyncStorage.getItem('pin')}
            onChangeText={(text) => setPin(text)}
            placeholder="PIN"
            defaultValue={pin}
          />
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
            {userType == '0' ? 'Orgão Disponível' : 'Orgão Necessário'}
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
            Ao clicar em 'Salvar' você afirma que concorda com os termos e
            condições da plataforma.
          </Termos>

          <RoundButton
            text="Deletar Conta"
            onPress={() => handleDeleteAccount()}
            textColor="#8c0000"
            backgroundColor="#fff"
          />

          <RoundButton
            text="Salvar"
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
