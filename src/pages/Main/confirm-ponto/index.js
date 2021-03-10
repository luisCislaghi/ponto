import React, {useState, useEffect} from 'react';
import Modal from '~/components/modal/popup';
import AntModal from '@ant-design/react-native/lib/modal';
import Button from '~/components/button';
import realm from '~/services/realm';
import ResumoPonto from '../../pontos/resumo/index';
import {ButtonContainer, ActionsContainer} from './styles';
import Toast from 'react-native-toast-message';

const ResumoPontoMainModal = ({
  ponto,
  onSubmitObservacao,
  showModal,
  setShowModal,
}) => {
  async function registrarPonto() {
    if (ponto?.latitude) {
      try {
        realm.write(() => {
          realm.create('Ponto', ponto);
        });

        setShowModal(false);

        Toast.show({
          position: 'bottom',
          text1: 'Ponto registrado',
        });

        // realm.close();
      } catch (err) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Falha ao registrar o ponto',
        });
        console.log('error', err);
      }
    }
  }

  const checkQuit = () => {
    AntModal.alert('Descartar Ponto?', 'Você perderá as informalções', [
      {
        text: 'Não',
        onPress: () => {},
      },
      {
        text: 'Sim',
        onPress: () => {
          setShowModal(false);
        },
      },
    ]);
  };

  return (
    <Modal
      title="Registrar Ponto"
      setVisible={setShowModal}
      onClose={checkQuit}
      visible={showModal}>
      {ponto && (
        <>
          <ResumoPonto
            ponto={ponto}
            showModal={showModal}
            onSubmitObservacao={onSubmitObservacao}
          />
          <ActionsContainer>
            <ButtonContainer>
              <Button ghost onPress={checkQuit}>
                Descartar
              </Button>
              <Button
                onPress={() => {
                  registrarPonto();
                }}>
                Confirmar
              </Button>
            </ButtonContainer>
          </ActionsContainer>
        </>
      )}
    </Modal>
  );
};
export default ResumoPontoMainModal;
