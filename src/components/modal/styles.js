import styled from 'styled-components/native';
import BaseText, {Link} from '~/components/text/styles';
import IconLib from 'react-native-vector-icons/Feather';
import Map from 'react-native-maps';
import {Dimensions} from 'react-native';
import AntModal from '@ant-design/react-native/lib/modal';

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Modal = styled(AntModal).attrs({
  elevation: 10,
})`
  width: ${Dimensions.get('window').width - 40}px;
  margin-top: 20px;
  background: #fff;
  border-radius: 20px;
`;

export const Container = styled.View`
  padding: 10px;
`;

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

export const ObservacaoBlock = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditBlock = styled.Pressable`
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
`;

export const EditText = styled(Link)``;
export const EditIcon = styled(Icon)`
  color: #0ab368;
`;

export const ObsInput = styled.TextInput.attrs({
  borderColor: 'rgba(0, 0, 0, 0.15)',
  borderWidth: 1,
  placeholderTextColor: 'rgba(0, 0, 0, 0.45)',
  borderRadius: 40,
})`
  flex: 1;
  height: 40px;
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 15px;
`;

export const Title = styled(BaseText)`
  /* font-size: 18px; */
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
