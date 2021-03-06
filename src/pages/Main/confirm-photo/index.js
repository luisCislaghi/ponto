import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';
import Button from '~/components/button';
import {Container, NewIcon, ConfirmIcon, ImageBlock} from './styles';

const ConfirmPhoto = ({photo, onNewphoto, onCancel, onConfirm}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={Boolean(photo)}
      closable={true}
      onRequestClose={onCancel}>
      {photo && (
        <Container>
          <ImageBlock source={{uri: photo}} />
          <Button ghost onPress={onNewphoto}>
            <NewIcon />
          </Button>
          <Button ghost onPress={onConfirm}>
            <ConfirmIcon />
          </Button>
        </Container>
      )}
    </Modal>
  );
};

export default ConfirmPhoto;
