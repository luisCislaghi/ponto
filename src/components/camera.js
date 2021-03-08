import React, {useState, useEffect} from 'react';
import {Modal, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {RNCamera} from 'react-native-camera';

const Camera = ({isVisible, onChangePhoto, onCloseCamera}) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const {uri} = await camera.takePictureAsync({
        quality: 1,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      console.log('Erro', 'Houve um erro ao tirar a foto.');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      onRequestClose={onCloseCamera}>
      <RNCamera
        ref={(ref) => setCamera(ref)}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.front}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        captureAudio={false}>
        <Icon
          name="camera"
          size={40}
          color={'#fff'}
          onPress={onTakePicture}
          //   style={styles.buttonTakePicture}
        />
        <Icon
          name="x"
          size={50}
          color={'#fff'}
          onPress={onCloseCamera}
          //   style={styles.buttonCloseCamera}
        />
      </RNCamera>
    </Modal>
  );
};

export default Camera;
