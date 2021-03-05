import React, {useState, useEffect} from 'react';
import Modal from '~/components/modal';
import {
  ObservacaoTitleBlock,
  EditBlock,
  EditText,
  Icon,
  EditIcon,
  Block,
  Text,
  Title,
  MapView,
  ObsInput,
  MapContainer,
} from './styles';
import moment from 'moment';
import realm from '~/services/realm';
import {Marker} from 'react-native-maps';
import {Link} from '~/components/text/styles';
import ObservacaoBlock from './observacao-block';

export const ResumoPontoModal = ({pontoAtivo, setPontoAtivo}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (pontoAtivo !== null)
      setData(realm.objects('Ponto').filter(({id}) => id === pontoAtivo)[0]);
    else setData(null);
  }, [pontoAtivo]);

  return (
    <Modal
      title="Resumo Ponto"
      setVisible={setPontoAtivo}
      visible={pontoAtivo}
      footer={[]}>
      {data && (
        <>
          <Title>Resumo</Title>
          <Block>
            <Icon name="clock" />
            <Text>{moment(data.date).format('LTS')}</Text>
          </Block>
          <Block>
            <Icon name="calendar" />
            <Text>{moment(data.date).format('LL')}</Text>
          </Block>
          <ObservacaoBlock ponto={data} />
          <Block>
            <Text>{data.observation || '-'}</Text>
          </Block>
          <Title>Localização</Title>
          <Block>
            <MapContainer>
              {pontoAtivo && (
                <MapView
                  initialRegion={{
                    latitude: parseFloat(data.latitude),
                    longitude: parseFloat(data.longitude),
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                  }}>
                  <Marker
                    key={'1'}
                    coordinate={{
                      latitude: parseFloat(data.latitude),
                      longitude: parseFloat(data.longitude),
                    }}
                  />
                </MapView>
              )}
            </MapContainer>
          </Block>
          {/* <Title>Foto</Title>
          <Block></Block> */}
        </>
      )}
    </Modal>
  );
};
