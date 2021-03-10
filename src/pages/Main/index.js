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
import {Marker, Circle} from 'react-native-maps';
import realm from '~/services/realm';
import ResumoPontoMainModal from './confirm-ponto/index';
import Camera from '~/components/camera';
import ConfirmPhoto from './confirm-photo/index';
import uuid from 'react-native-uuid';
import * as RNFS from 'react-native-fs';

const Main = () => {
  const [location, setLocation] = useState(null);
  const [time, setTime] = useState(moment());
  const [region, setRegion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ponto, setPonto] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  const onChangePhoto = (newPhoto) => {
    setPhoto(newPhoto);
    setIsCameraVisible(false);
  };

  const onConfirmPhoto = () => {
    if (photo) {
      const newPath = `${RNFS.DocumentDirectoryPath}/${uuid.v1()}.jpg`;
      RNFS.copyFile(photo, newPath).catch((err) => {
        console.log(err.message, err.code);
      });
      setPonto({
        id: uuid.v1(),
        latitude: String(location?.coords?.latitude),
        longitude: String(location?.coords?.longitude),
        date: time.toDate(),
        image: {
          id: uuid.v1(),
          src: newPath,
        },
      });

      setPhoto(null);
      setShowModal(true);
    } else {
      setIsCameraVisible(true);
    }
  };

  useEffect(() => {
    if (!location) return;
    setRegion({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [location]);

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

  const handleRegistrar = async () => {
    setIsCameraVisible(true);
  };

  const onSubmitObservacao = (obs) => {
    const newPonto = {...ponto};
    newPonto.observation = obs;
    setPonto(newPonto);
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
      <Camera
        isVisible={isCameraVisible}
        onChangePhoto={onChangePhoto}
        onCloseCamera={onCloseCamera}
      />
      <ConfirmPhoto
        photo={photo}
        onNewphoto={() => {
          setPhoto(null);
          setIsCameraVisible(true);
        }}
        onCancel={() => {
          setPhoto(null);
          onCloseCamera();
        }}
        onConfirm={onConfirmPhoto}
      />
      <HeaderContainer>
        <Title>
          Olá, <TextBold>Luis</TextBold>
        </Title>
        <Date>{time.format('LL')}</Date>
        <Time>{time.format('LT')}</Time>
      </HeaderContainer>
      <ResumoPontoMainModal
        ponto={ponto}
        onSubmitObservacao={onSubmitObservacao}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <MapContainer>
        {region && (
          <MapView
            showsUserLocation
            initialRegion={region}
            onRegionChangeComplete={setRegion}>
            <>
              <Marker
                key={'1'}
                coordinate={{
                  longitude: -51.521834,
                  latitude: -29.161432,
                }}
                title={'Rodoviária Bento Gonçalves'}
                description={'Você pode bater o ponto próximo a este local'}
              />
              <Circle
                center={{
                  longitude: -51.521834,
                  latitude: -29.161432,
                }}
                strokeColor="#0ab368"
                fillColor="rgba(10, 179, 104,0.30)"
                radius={500}
              />
            </>
          </MapView>
        )}
      </MapContainer>
      <ButtonContainer>
        <Button size="lg" onPress={handleRegistrar}>
          Registrar Ponto
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Main;
