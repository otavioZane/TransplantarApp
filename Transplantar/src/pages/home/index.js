import React from 'react';

import {Container, ButtonContainer, RouteTitle} from './styles'

import CircleButton from '../../components/circleButton'
import NavBar from '../../components/navBar'
import PurpleRound from '../../components/purpleRound'
import SearchLab from '../../components/searchLab'

import Nurse from '../../assets/img/nurse.png'
import Pill from '../../assets/img/pill.png'
import Microscope from '../../assets/img/microscope.png'
import HomeLabSearch from '../../assets/img/home.png'

const Home = ({navigation}) => {
  return (
    <Container>
      <PurpleRound
        height="22%"
        style={{position: 'relative'}}   
      >
      <RouteTitle>Transplantar</RouteTitle>
        <ButtonContainer style={{marginTop: -35}}>
          <CircleButton 
            source={Microscope} 
            onPress={() => navigation.navigate('Tips', {tipTitle: 'Exames'})}
            textTitle="Exames"
            textST="Encontre seus exames"
            ></CircleButton>
          <CircleButton 
            source={Nurse} 
            onPress={() => navigation.navigate('Tips', {tipTitle: 'Pré-Doação'})}
            textTitle="Pré-doação"
            textST="Requisitos para doação"
            ></CircleButton>
          <CircleButton 
            source={Pill} 
            onPress={() => navigation.navigate('Tips', {tipTitle: 'Pós-Doação'})}
            textTitle="Pós-doação"
            textST="Cicatrização e cuidados"
            ></CircleButton>
        </ButtonContainer>
      </PurpleRound>
      <SearchLab source={HomeLabSearch}/>      
    </Container>
  );
};

export default Home;
