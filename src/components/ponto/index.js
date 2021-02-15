import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

import {Container, Data, Local} from './styles';

const Ponto = ({data}) => {
  return (
    <Container>
      <Data>
        <Icon name="calendar" />
        {data.data}
      </Data>
      <Local>
        <Icon name="map-pin" />
        {data.local}
      </Local>
    </Container>
  );
};

export default Ponto;
