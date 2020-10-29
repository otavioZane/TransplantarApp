import React from 'react';
import {Container, Termos} from '../signUp/styles';
import {CardBackground} from './styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';

const Register = ({route, navigation}) => {
  return (
    <Container>
      <PurpleRound></PurpleRound>
      <CardBackground>
        <RoundButton text="Cadastrar" textColor="#6f78f6" />
      </CardBackground>
      <Termos>Cadastro do tipo: {route.params.type}</Termos>
    </Container>
  );
};

export default Register;
