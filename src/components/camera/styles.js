import styled from 'styled-components/native';
import BaseText, {Link} from '~/components/text/styles';
import IconLib from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';

import {RNCamera} from 'react-native-camera';

export const StyledCamera = styled(RNCamera)`
  width: ${Dimensions.get('window').width}px;
  height: ${(Dimensions.get('window').width * 4) / 3}px;
`;

export const CameraIcon = styled(IconLib).attrs({
  elevation: 5,
})`
  position: absolute;
  bottom: 50px;
  font-size: 48px;
  color: ${({allowSnap}) => (allowSnap ? '#fff' : 'rgba(255,255,255,0.5)')};
  align-self: center;
`;
export const CloseIcon = styled(IconLib)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
`;
