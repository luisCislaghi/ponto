import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import Modal from '~/components/modal';

import {
  ObservacaoTitleBlock,
  Title,
  EditBlock,
  EditIcon,
  ObsInput,
} from './styles';
import {Link} from '~/components/text/styles';
import realm from '~/services/realm';
import Toast from 'react-native-toast-message';

const ObservacaoBlock = ({ponto, onSubmit}) => {
  const [obs, setObs] = useState(ponto.observation);
  const [showObsModal, setShowObsModal] = useState(false);

  const handleSubmit = () => {
    if (ponto.observation !== obs) {
      if (onSubmit) {
        onSubmit(obs);
        setShowObsModal(false);
      } else {
        try {
          realm.write(() => {
            const p = realm
              .objects('Ponto')
              .filter((e) => e.id === ponto.id)[0];
            p.observation = obs;
          });
          setShowObsModal(false);
          Toast.show({
            position: 'bottom',
            text1: 'Observação alterada',
          });
        } catch (err) {
          Toast.show({
            type: 'error',
            position: 'bottom',
            text1: 'Falha ao alterar observação',
          });
          console.log(err);
        }
      }
    }
  };

  return (
    <>
      <Modal
        title="Editar Observação"
        setVisible={setShowObsModal}
        visible={showObsModal}
        footer={[
          {
            text: <Link>Cancelar</Link>,
            onPress: () => {
              setShowObsModal(false);
            },
          },
          {
            text: <Link disabled={ponto.observation === obs}>Salvar</Link>,
            onPress: () => handleSubmit(),
          },
        ]}>
        <ObsInput
          onChangeText={setObs}
          onSubmitEditing={handleSubmit}
          defaultValue={obs}
        />
      </Modal>
      <ObservacaoTitleBlock>
        <Title>Observação</Title>
        <EditBlock
          onPress={() => {
            setShowObsModal(true);
          }}>
          <EditIcon name="edit" />
          <Link>Editar</Link>
        </EditBlock>
      </ObservacaoTitleBlock>
    </>
  );
};

export default ObservacaoBlock;
