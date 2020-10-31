import React from 'react';

import {Container, ButtonContainer, RouteTitle} from './styles'

import PurpleRound from '../../components/purpleRound'
import CircleButton from '../../components/circleButton'
import SearchLab from '../../components/searchLab'

import Nurse from '../../assets/img/nurse.png'
import Pill from '../../assets/img/pill.png'
import Microscope from '../../assets/img/microscope.png'
import HomeLabSearch from '../../assets/img/home.png'

const Home = () => {
  return (
    <Container>
      <PurpleRound
        height="22%"
        style={{position: 'relative'}}   
      >
      <RouteTitle>Transplantar</RouteTitle>
        <ButtonContainer style={{marginTop: -35}}>
          <CircleButton source={Nurse}></CircleButton>
          <CircleButton source={Pill}></CircleButton>
          <CircleButton source={Microscope}></CircleButton>
        </ButtonContainer>
      </PurpleRound>
      {/* <SearchLab source={HomeLabSearch}/> */}
    </Container>
  );
};

export default Home;
