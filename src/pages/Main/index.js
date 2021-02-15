import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, Form, Input, Submit, List, Text} from './styles';
import Ponto from '~/components/ponto';
import {pontosData} from '~/data';
import {PermissionsAndroid as pa} from 'react-native';
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';
import {useIsFocused} from '@react-navigation/native';

const Main = () => {
  const [location, setLocation] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    async () => {
      console.log('anasednjauisj');
      try {
        const granted = await pa.check(pa.PERMISSIONS.ACCESS_FINE_LOCATION);
        console.log('nhec', granted);
        if (granted === pa.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            (position) => {
              console.log(position);
              setLocation(position);
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        } else {
          console.log('O cara nao quis....');
          pa.request(pa.PERMISSIONS.ACCESS_FINE_LOCATION);
        }
      } catch (error) {
        console.log('fuck dammit', error);
      }
    };
  }, [isFocused]);

  return (
    <Container>
      <Title>Pontos - {moment().format('DD-MM-YYYY')}</Title>
      <Text>{location}</Text>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar Ponto"
        />
        <Submit onPress={() => {}}>
          <Icon name="plus" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={pontosData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <Ponto data={item} />}
      />
    </Container>
  );
};

export default Main;
