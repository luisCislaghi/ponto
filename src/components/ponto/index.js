import Icon from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import moment from 'moment';
import {
  Pressable,
  SwipeContainer,
  Container,
  Data,
  Time,
  Block,
  SyncIcon,
  DeleteIcon,
  SwipeAction,
} from './styles';
import Toast from 'react-native-toast-message';
import realm from '~/services/realm';

export default ({data, setPontoAtivo}) => {
  const handleDelete = () => {
    try {
      realm.write(() => {
        realm.delete(data);
      });
      Toast.show({
        position: 'bottom',
        text1: 'Ponto excluído',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Falha ao excluir ponto',
      });
      console.log(err);
    }
  };
  return (
    <SwipeContainer>
      <SwipeAction
        autoClose
        right={[
          {
            text: <DeleteIcon name="trash" />,
            onPress: () => handleDelete(),
            style: {
              backgroundColor: '#ff4d4f',
            },
          },
        ]}>
        <Pressable
          onPress={() => {
            setPontoAtivo(data.id);
          }}>
          <Container>
            <Block>
              <Time>{moment(data.date).format('LTS')}</Time>
              <Data>{moment(data.date).format('LL')}</Data>
            </Block>
            <Block>
              {parseInt((Math.random() * 10) % 2) === 0 && ( // gera randomicamente só para visual
                <SyncIcon name="refresh-cw" />
              )}
            </Block>
          </Container>
        </Pressable>
      </SwipeAction>
    </SwipeContainer>
  );
};
