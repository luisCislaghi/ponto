import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import {
  Container,
  Image,
  Text,
  ActionContainer,
  Button,
  ButtonsContainer,
} from './styles';

const ConfirmPhoto = ({photo, onNewphoto, onCancel, onConfirm}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={Boolean(photo)}
      closable={true}
      onClose={onCancel}>
      {photo && (
        <Container>
          <Image source={{uri: photo}} />
          <ActionContainer>
            <Text>Ficou bonitão?</Text>
            <ButtonsContainer>
              <Button
                icon="refresh-ccw"
                onPress={onNewphoto}
                ghost
                size="lg"
                shape="circle"
              />
              <Button
                icon="check"
                onPress={onConfirm}
                ghost
                size="lg"
                shape="circle"
              />
            </ButtonsContainer>
          </ActionContainer>
        </Container>
      )}
    </Modal>
  );
};

export default ConfirmPhoto;
