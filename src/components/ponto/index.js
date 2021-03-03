import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import moment from 'moment';
import {Container, Data, Time, Block, SyncIcon} from './styles';

export default ({data}) => {
  const {date, latitude, longitude} = data;
  console.log('b');

  return (
    <Container>
      <Block>
        <Time>{moment(date).format('LTS')}</Time>
        <Data>{moment(date).format('LL')}</Data>
      </Block>
      <Block>
        {parseInt((Math.random() * 10) % 2) === 0 && ( // gera randomicamente só para visual
          <SyncIcon name="refresh-cw" />
        )}
      </Block>
    </Container>
  );
};
