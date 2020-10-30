import React from 'react';
import {Termos} from '../signUp/styles';
import {ScrollView, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {
  CardBackground,
  InputText,
  InputLabel,
  RouteTitle,
} from '../register/styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';

const Login = ({route, navigation}) => {
  const [CPF, setCPF] = React.useState('');
  const [pin, setPin] = React.useState('');

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
          onPress={() => navigation.navigate('Home')}
          text="Acessar"
          textColor="#fff"
          backgroundColor="#6f78f6"
        />
      </CardBackground>
    </View>
  );
};

export default Login;
