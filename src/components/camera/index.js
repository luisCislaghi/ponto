import React, {useState, useEffect} from 'react';
import {Modal} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {RNCamera} from 'react-native-camera';
import {StyledCamera, CameraIcon, CloseIcon} from './styles';

const Camera = ({isVisible, onChangePhoto, onCloseCamera}) => {
  const [camera, setCamera] = useState();
  const [allowSnap, setAllowSnap] = useState(false);

  const onTakePicture = async () => {
    if (allowSnap) {
      try {
        setAllowSnap(false);
        const {uri} = await camera.takePictureAsync({
          quality: 1,
          forceUpOrientation: true,
          fixOrientation: true,
          mirrorImage: true,
          pauseAfterCapture: true,
          skipProcessing: true,
        });
        onChangePhoto(uri);
      } catch (error) {
        console.log('Erro', 'Houve um erro ao tirar a foto.');
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
      destroyOnClose
      onClose={onCloseCamera}>
      <StyledCamera
        ref={(ref) => setCamera(ref)}
        type={RNCamera.Constants.Type.front}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        onCameraReady={() => {
          setAllowSnap(true);
        }}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Precisamos da sua permissão para usar a câmera.',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar',
        }}
        captureAudio={false}>
        <CameraIcon
          name="camera"
          size={40}
          color={'#fff'}
          allowSnap={allowSnap}
          onPress={onTakePicture}
        />
        <CloseIcon name="x" size={50} color={'#fff'} onPress={onCloseCamera} />
      </StyledCamera>
    </Modal>
  );
};

export default Camera;
