import React, {useState, useEffect} from 'react';
import Modal from '~/components/modal/popup';
import {Link} from '~/components/text/styles';

import realm from '~/services/realm';
import ResumoPonto from './resumo';
import {Container} from './styles';

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
      footer={null}>
      {data && (
        <Container>
          <ResumoPonto ponto={data} showModal={pontoAtivo} />
        </Container>
      )}
    </Modal>
  );
};
