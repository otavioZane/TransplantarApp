import React from 'react'
import {SafeAreaView} from 'react-native'
import {Container, Title} from './styles'
import RoundButton from '../../components/roundButton'

const SignUp = () => {
  return (

    <SafeAreaView>
      <Container>
        <Title>Cadastro</Title>
        <RoundButton 
          // text="Sou doador"
          // textColor=''
          />
      </Container>
    </SafeAreaView>
  )
}

export default SignUp