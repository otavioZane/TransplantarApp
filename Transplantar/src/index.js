import React from 'react';
import Routes from './routes';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => (
  <AnimatedSplash
  translucent={true}
  isLoaded={this.state.isLoaded}
  logoImage={require("./assets/whatsapp-logo-icone-1.png")}
  backgroundColor={"#262626"}
  logoHeight={150}
  logoWidth={150}
  >
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </AnimatedSplash>
);

export default App;
