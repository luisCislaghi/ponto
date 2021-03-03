import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  HeaderContainer,
  Title,
  MapContainer,
  Date,
  ButtonContainer,
  Time,
  MapView,
  TextBold,
} from './styles';
import Button from '~/components/button';
import {PermissionsAndroid as pa} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import moment from 'moment';
import {Marker} from 'react-native-maps';
import realm from '~/services/realm';

const Main = () => {
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(moment());
  const [region, setRegion] = useState(null);

  useEffect(() => {
    if (!location) return;
    setRegion({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [location]);

  async function registrarPonto() {
    if (location?.coords?.latitude) {
      try {
        const novoPonto = {
          id: `AC${Math.random() * 10}`,
          latitude: String(location?.coords?.latitude),
          longitude: String(location?.coords?.longitude),
          date: time.toDate(),
        };

        console.log('novo: ', novoPonto);

        realm.write(() => {
          realm.create('Ponto', novoPonto);
        });

        // realm.close();
      } catch (error) {
        console.log('error', error);
      }
    }
  }

  const getLocation = async () => {
    try {
      const granted = await pa.check(pa.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted) {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Usuário não permitiu acessar a localização.');
        pa.request(pa.PERMISSIONS.ACCESS_FINE_LOCATION);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInterval(() => setTime(moment()), 800);
    getLocation();
    if (!location) getLocation();
    // return () => {
    //   realm.close();
    // };
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
        {region && (
          <MapView
            showsUserLocation
            initialRegion={region}
            onRegionChangeComplete={setRegion}>
            <Marker
              key={'1'}
              coordinate={{
                longitude: -51.521834,
                latitude: -29.161432,
              }}
              title={'Rodoviária Bento Gonçalves'}
              description={'Você pode bater o ponto próximo a este local'}
            />
          </MapView>
        )}
      </MapContainer>
      <ButtonContainer>
        <Button
          size="lg"
          onPress={async () => {
            await registrarPonto();
          }}>
          Registrar Ponto
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
