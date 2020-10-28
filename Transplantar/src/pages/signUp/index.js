import React from 'react'
import {SafeAreaView, Image} from 'react-native'
import {Container, Logo} from './styles'
import RoundButton from '../../components/roundButton'


const SignUp = () => {
  return (
    <SafeAreaView>
      <Container>
      <Image
        style={{Logo}}
        source={require('../../assets/img/transplantar_logo.png')}/>
        <RoundButton 
          // text="Sou doador"
          // textColor="#6f78f6"
          />
      </Container>
    </SafeAreaView>
  )
}

export default SignUp