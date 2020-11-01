import React, {useEffect} from 'react';
import {Container, RouteTitle} from '../home/styles';
import PurpleRound from '../../components/purpleRound';
import {View, FlatList, Text, StyleSheet, Alert, Linking} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faNotesMedical,
  faGlobeAfrica,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Match = ({navigation}) => {
  const [matches, setMatches] = React.useState([]);

  function getBloodType(bloodNumber) {
    var grupoSanguineo;
    switch (bloodNumber) {
      case 0:
        grupoSanguineo = 'A';
        break;
      case 1:
        grupoSanguineo = 'A';
        break;
      case 2:
        grupoSanguineo = 'B';
        break;
      case 3:
        grupoSanguineo = 'AB';
        break;
      case 4:
        grupoSanguineo = 'O';
        break;
    }

    return grupoSanguineo;
  }

  useEffect(() => {
    async function fetchData() {
      let url = `https://transplantar.azurewebsites.net/${await AsyncStorage.getItem(
        'grupoSanguineo',
      )}/${await AsyncStorage.getItem('cidade')}/${await AsyncStorage.getItem(
        'orgao',
      )}/${await AsyncStorage.getItem('tipoUsuario')}`;

      fetch(url, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((users) => {
          if (users != null) {
            setMatches([users]);
          } else {
            Alert.alert(
              'Aguarde',
              'Não encontramos nenhum usuário compatível.',
            );
          }
        });
    }
    fetchData();
  }, []);

  function GetItem(item) {}

  const styles = StyleSheet.create({
    MainContainer: {
      // Setting up View inside content in Vertically center.
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      margin: 10,
    },

    item: {
      padding: 26,
      fontSize: 18,
      backgroundColor: '#fff',
      margin: 6,
      borderColor: '#ccc',
      borderRadius: 20,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <Container>
      <PurpleRound height="20%" style={{position: 'relative'}}>
        <RouteTitle>Transplantar</RouteTitle>
      </PurpleRound>
      <View style={styles.MainContainer}>
        <FlatList
          data={matches}
          renderItem={({item}) => (
            <View
              style={styles.item}
              onPress={GetItem.bind(this, item.usuarioId)}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.nome}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <FontAwesomeIcon color={'#8c0000'} icon={faNotesMedical} />
                  <Text style={{fontSize: 16}}>
                    {' '}
                    {getBloodType(item.grupoSanguineo)}
                  </Text>
                  <FontAwesomeIcon
                    style={{marginLeft: 10}}
                    color={'#36b1eb'}
                    icon={faGlobeAfrica}
                  />
                  <Text style={{fontSize: 16}}> {item.cidade}</Text>
                </View>
              </View>
              <FontAwesomeIcon
                style={{
                  marginLeft: 'auto',
                  padding: 20,
                }}
                onPress={() =>
                  Linking.openURL(
                    'https://api.whatsapp.com/send?phone=+55' + item.celular,
                  )
                }
                color={'#d1d1d1'}
                icon={faComments}
              />
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default Match;
