import React from 'react';
import {Termos} from '../signUp/styles';
import {View} from 'react-native';
import {CardBackground, RouteTitle} from '../register/styles';
import PurpleRound from '../../components/purpleRound';

const Home = ({route, navigation}) => {
  return (
    <View style={{alignItems: 'center', height: '100%'}}>
      <PurpleRound height="18%" style={{position: 'relative'}}>
        <RouteTitle>Transplantar</RouteTitle>
      </PurpleRound>
      <CardBackground style={{position: 'absolute', marginTop: 250}}>
        <Termos style={{textAlign: 'center'}}>
          Compartilhe o nosso aplicativo
        </Termos>
      </CardBackground>
    </View>
  );
};

export default Home;
