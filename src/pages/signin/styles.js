import styled from 'styled-components/native';
import BaseText from '~/components/text/styles';
import {Image, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Button from '~/components/button';

export const ImageBackground = styled(Image)`
  position: absolute;
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height + getStatusBarHeight() + 50}px;
`;

export const Container = styled.View`
  flex: 1;
  padding: ${40 + getStatusBarHeight()}px 40px 40px 40px;
  background: rgba(255, 255, 255, 0.92); //#0ab368
`;

export const Logo = styled(Image)`
  margin: 60px 0 10px 0;
  width: ${Dimensions.get('window').width / 2.3}px;
  align-self: center;
  resize-mode: contain;
`;

export const Title = styled(BaseText)`
  font-size: 32px;
  text-align: center;
  margin-bottom: 100px;
`;

export const Label = styled(BaseText)`
  font-size: 20px;
  padding: 0 0 10px 5px;
`;

export const SenhaInput = styled.TextInput.attrs({
  borderColor: 'rgba(0, 0, 0, 0.15)',
  borderWidth: 1,
  placeholderTextColor: 'rgba(0, 0, 0, 0.45)',
  borderRadius: 60,
})`
  font-family: 'Quicksand';
  color: rgba(0, 0, 0, 0.85);
  padding: 10px 15px;
  background: white;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const SubmitButton = styled(Button)`
  /* margin-bottom: 100px; */
`;
