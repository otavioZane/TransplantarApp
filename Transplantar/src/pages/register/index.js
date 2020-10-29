import React from 'react';
import {Termos} from '../signUp/styles';
import {ScrollView, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {CardBackground, InputText, InputLabel, RouteTitle} from './styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';

const Register = ({route, navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [pin, setPin] = React.useState('');
  const [city, setCity] = React.useState('');
  const [organ, setOrgan] = React.useState('');
  const [blood, setBlood] = React.useState('');

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
            <Picker.Item label="Rim" value="Rim" />
            <Picker.Item label="Medúla óssea" value="Medúla óssea" />
            <Picker.Item label="Fígado" value="Fígado" />
            <Picker.Item label="Pulmão" value="Pulmão" />
          </Picker>
          <InputLabel>Tipo Sanguíneo</InputLabel>
          <Picker
            selectedValue={blood}
            style={{
              width: '100%',
            }}
            onValueChange={(itemValue, itemIndex) => setBlood(itemValue)}>
            <Picker.Item label="Selecione" value="Selecione" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="AB" value="AB" />
            <Picker.Item label="O" value="O" />
          </Picker>
          <Termos style={{textAlign: 'center'}}>
            Ao clicar em 'Cadastrar' você afirma que concorda com os termos e
            condições da plataforma.
          </Termos>
          <RoundButton
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
