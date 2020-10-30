import React from 'react';
import {Container, ButtonContainer, RouteTitle} from './styles'
import PurpleRound from '../../components/purpleRound'
import CircleButton from '../../components/circleButton'

const Home = () => {
  return (
    <Container>
      <PurpleRound
        height="22%"
        style={{position: 'relative'}}   
      >
      <RouteTitle>Transplantar</RouteTitle>
      <ButtonContainer style={{marginTop: -35}}>
        <CircleButton></CircleButton>
        <CircleButton></CircleButton>
        <CircleButton></CircleButton>
      </ButtonContainer>
      </PurpleRound>
      
    </Container>
  );
};

export default Home;
