import React, {useState, useEffect} from 'react';
import Modal from '~/components/modal';
import Button from '~/components/button';
import realm from '~/services/realm';
import ResumoPonto from '../../pontos/resumo/index';
import {Container} from './styles';
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

  return (
    <Modal
      title="Registrar Ponto"
      setVisible={setShowModal}
      visible={showModal}
      footer={[]}>
      {ponto && (
        <>
          <ResumoPonto
            ponto={ponto}
            showModal={showModal}
            onSubmitObservacao={onSubmitObservacao}
          />
          <Container>
            <Button
              onPress={() => {
                registrarPonto();
              }}>
              Confirmar
            </Button>
          </Container>
        </>
      )}
    </Modal>
  );
};
export default ResumoPontoMainModal;
