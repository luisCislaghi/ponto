import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  HeaderContainer,
  Title,
  Form,
  Input,
  Submit,
  List,
  MapContainer,
  Date,
  ButtonContainer,
  Time,
  TextBold,
} from './styles';
import Ponto from '~/components/ponto';
import Button from '~/components/button';
import {pontosData} from '~/data';
import {PermissionsAndroid as pa} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment';
import MapView, {Marker} from 'react-native-maps';

const Main = () => {
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(moment());
  const getLocation = async () => {
    console.log('anasednjauisj');

    try {
      const granted = await pa.check(pa.PERMISSIONS.ACCESS_FINE_LOCATION);
      console.log('nhec', granted);
      if (granted) {
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
      console.log('dammit', error);
    }
  };

  useEffect(() => {
    const i = setInterval(() => setTime(moment()), 800);
    getLocation();
    if (!location) getLocation();
    console.log(location?.coords?.latitude);
    console.log(location?.coords?.longitude);
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Title>
          Olá, <TextBold>Luis!</TextBold>
        </Title>
        <Date>{time.format('LL')}</Date>
        <Time>{time.format('LTS')}</Time>
      </HeaderContainer>
      <MapContainer>
        {location?.coords?.longitude && (
          <MapView
            style={{flex: 1}}
            region={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              key={'1'}
              coordinate={{
                longitude: location?.coords?.longitude,
                latitude: location?.coords?.latitude,
              }}
              title={'Você'}
              description={'está aqui'}
            />
          </MapView>
        )}
      </MapContainer>
      <ButtonContainer>
        <Button onPress={() => {}}>Registrar Ponto</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
