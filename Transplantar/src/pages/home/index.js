import React from 'react';

<<<<<<< HEAD
import {Container, ButtonContainer, RouteTitle} from './styles'

import CircleButton from '../../components/circleButton'
import NavBar from '../../components/navBar'
import PurpleRound from '../../components/purpleRound'
import SearchLab from '../../components/searchLab'

import Nurse from '../../assets/img/nurse.png'
import Pill from '../../assets/img/pill.png'
import Microscope from '../../assets/img/microscope.png'
import HomeLabSearch from '../../assets/img/home.png'

=======
import {Container, ButtonContainer, RouteTitle} from './styles';

import CircleButton from '../../components/circleButton';
import NavBar from '../../components/navBar';
import PurpleRound from '../../components/purpleRound';
import SearchLab from '../../components/searchLab';

import Nurse from '../../assets/img/nurse.png';
import Pill from '../../assets/img/pill.png';
import Microscope from '../../assets/img/microscope.png';
import HomeLabSearch from '../../assets/img/home.png';
>>>>>>> origin/master

const Home = () => {
  return (
    <Container>
<<<<<<< HEAD
      <PurpleRound
        height="22%"
        style={{position: 'relative'}}   
      >
      <RouteTitle>Transplantar</RouteTitle>
=======
      <PurpleRound height="22%" style={{position: 'relative'}}>
        <RouteTitle>Transplantar</RouteTitle>
>>>>>>> origin/master
        <ButtonContainer style={{marginTop: -35}}>
          <CircleButton source={Nurse}></CircleButton>
          <CircleButton source={Pill}></CircleButton>
          <CircleButton source={Microscope}></CircleButton>
        </ButtonContainer>
      </PurpleRound>
<<<<<<< HEAD
      <SearchLab source={HomeLabSearch}/> 
=======
      <SearchLab source={HomeLabSearch} />
>>>>>>> origin/master
    </Container>
  );
};

export default Home;
