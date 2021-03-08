import React from 'react';
import {Marker} from 'react-native-maps';
import moment from 'moment';
import ObservacaoBlock from '../resumo/observacao-block';
import {Icon, Block, Text, Title, MapView, MapContainer, Image} from './styles';
const ResumoPonto = ({ponto, showModal, onSubmitObservacao}) => {
  return (
    <>
      <Title>Resumo</Title>
      <Block>
        <Icon name="clock" />
        <Text>{moment(ponto.date).format('LTS')}</Text>
      </Block>
      <Block>
        <Icon name="calendar" />
        <Text>{moment(ponto.date).format('LL')}</Text>
      </Block>
      <ObservacaoBlock ponto={ponto} onSubmit={onSubmitObservacao} />
      <Block>
        <Text>{ponto.observation || '-'}</Text>
      </Block>
      <Title>Localização</Title>
      <Block>
        <MapContainer>
          {showModal && (
            <MapView
              initialRegion={{
                latitude: parseFloat(ponto.latitude),
                longitude: parseFloat(ponto.longitude),
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }}>
              <Marker
                key={'1'}
                coordinate={{
                  latitude: parseFloat(ponto.latitude),
                  longitude: parseFloat(ponto.longitude),
                }}
              />
            </MapView>
          )}
        </MapContainer>
      </Block>
      <Title>Foto</Title>
      {ponto.image?.src && (
        <Block>
          <Image source={{uri: ponto.image.src}} />
        </Block>
      )}
    </>
  );
};

export default ResumoPonto;
