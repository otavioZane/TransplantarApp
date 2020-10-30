import React from 'react';
import {Container, ContainerButtons, Logo, Termos} from './styles';
import RoundButton from '../../components/roundButton';
import PurpleRound from '../../components/purpleRound';
import LogoImg from '../../assets/img/transplantar_logo.png';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <PurpleRound
        style={{alignItems: 'center'}}
        text="start"
        textColor="#fff"
        height="55%">
        <Logo source={LogoImg} />
      </PurpleRound>
      <ContainerButtons>
        <RoundButton
          onPress={() => navigation.navigate('Register', {userType: 'doador'})}
          text="Sou doador"
          textColor="#292b2a"
        />
        <RoundButton
          onPress={() =>
            navigation.navigate('Register', {userType: 'receptor'})
          }
          text="Sou receptor"
          textColor="#82bbdc"
        />
        <RoundButton
          onPress={() => navigation.navigate('Login', {userType: 'receptor'})}
          text="Já sou cadastrado"
          textColor="#6f78f6"
        />
      </ContainerButtons>
      <Termos>
        Ao prosseguir para cadastro você aceita os termos e condições de uso
      </Termos>
    </Container>
  );
};

export default SignUp;
