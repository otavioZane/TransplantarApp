import React from 'react';
import {Container, ContainerButtons, Logo, Termos} from './styles';
import RoundButton from '../../components/roundButton';
import PurpleRounded from '../../components/purpleRounded';
import LogoImg from '../../assets/img/transplantar_logo.png';

const SignUp = () => {
  return (
    <Container>
      <PurpleRounded>
        <Logo source={LogoImg} />
      </PurpleRounded>
      <ContainerButtons>
        <RoundButton text="Sou doador" textColor="#292b2a" />
        <RoundButton text="Sou receptor" textColor="#82bbdc" />
        <RoundButton text="Já sou cadastrado" textColor="#6f78f6" />
      </ContainerButtons>
      <Termos>
        Ao prosseguir para cadastro você aceita os termos e condições de uso
      </Termos>
    </Container>
  );
};

export default SignUp;
