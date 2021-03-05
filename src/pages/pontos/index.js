import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, Title, HeaderContainer, List} from './styles';
import Ponto from '~/components/ponto';
import moment from 'moment';
import realm from '~/services/realm';
import {ResumoPontoModal} from './modal/index';
const Pontos = () => {
  const [pontos, setPontos] = useState([]);
  const [pontoAtivo, setPontoAtivo] = useState(null);

  function getPontos() {
    return realm.objects('Ponto').sorted('date', true);
  }

  useEffect(() => {
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

    return () => {
      data.removeListener(onPontoChange);
    };
  }, []);

  const keyExtractor = (item) => item.id;

  const render = (item) => (
    <Ponto setPontoAtivo={setPontoAtivo} data={item.item} />
  );

  // console.log('pontos: ', JSON.stringify(pontos));

  return (
    <Container>
      <HeaderContainer>
        <Title>Meus Pontos</Title>
      </HeaderContainer>
      <ResumoPontoModal pontoAtivo={pontoAtivo} setPontoAtivo={setPontoAtivo} />
      <List
        data={pontos}
        extraData={pontos}
        windowSize={5}
        initialListSize={11}
        initialNumToRender={11}
        maxToRenderPerBatch={12}
        removeClippedSubviews // optional
        renderItem={render}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default Pontos;
