import React from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => (
  <NavigationContainer>
    <AnimatedSplash
      translucent={true}
      isLoaded={true}
      logoImage={require('./assets/transplantar_logo.png')}
      backgroundColor={'#6E78F7'}
      logoHeight={350}
      logoWidth={300}>
      <Routes />
    </AnimatedSplash>
  </NavigationContainer>
);

export default App;
