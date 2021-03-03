import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Title,
  HeaderContainer,
  PontoContainer,
  List,
  Data,
} from './styles';
import Button from '~/components/button';
import Ponto from '~/components/ponto';
import moment from 'moment';
import realm from '~/services/realm';

const Pontos = () => {
  const [pontos, setPontos] = useState([]);

  function getPontos() {
    return realm.objects('Ponto').sorted('date', true);
  }

  useEffect(() => {
    function initPontos() {
      const data = getPontos();

      function onPontoChange(p, changes) {
        console.log('changes', changes);
        if (
          changes.deletions.length ||
          changes.insertions.length ||
          changes.modifications.length
        )
          setPontos(getPontos());
      }

      data.addListener(onPontoChange);

      console.log('init');
      setPontos(data);
    }
    initPontos();
  }, []);

  const keyExtractor = (item) => item.id;

  const render = (item) => <Ponto data={item.item} />;
  console.log('pontos: ', JSON.stringify(pontos));
  return (
    <Container>
      <HeaderContainer>
        <Title>Meus Pontos</Title>
      </HeaderContainer>
      <List data={pontos} renderItem={render} keyExtractor={keyExtractor} />
    </Container>
  );
};

export default Pontos;
