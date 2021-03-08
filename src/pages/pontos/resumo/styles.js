import styled from 'styled-components/native';
import BaseText from '~/components/text/styles';
import IconLib from 'react-native-vector-icons/Feather';
import Map from 'react-native-maps';
import {Dimensions} from 'react-native';
import {Image as RNImage} from 'react-native';

export const Block = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const Icon = styled(IconLib)`
  color: rgba(0, 0, 0, 0.45);
  font-size: 18px;
  margin-right: 8px;
`;

export const Text = styled(BaseText)``;

export const ObservacaoTitleBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditBlock = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const EditIcon = styled(Icon)`
  color: #0ab368;
`;

export const ObsInput = styled.TextInput.attrs({
  borderColor: 'rgba(0, 0, 0, 0.15)',
  borderWidth: 1,
  placeholderTextColor: 'rgba(0, 0, 0, 0.45)',
  borderRadius: 40,
})`
  height: 40px;
  font-family: 'Quicksand';
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 15px;
`;

export const Title = styled(BaseText)`
  margin: 12px 0 8px 0;
  font-family: 'Quicksand-SemiBold';
`;

export const MapContainer = styled.View`
  flex: 1;
  /* width: ${Dimensions.get('window').width - 40}px; */
  border-radius: 20px;
  overflow: hidden;
  height: 200px;
`;

export const MapView = styled(Map)`
  flex: 1;
  height: 200px;
`;

export const Image = styled(RNImage)`
  /* flex: 1; */

  width: 100px;
  height: 100px;
`;
