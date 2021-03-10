import styled from 'styled-components/native';
import {Image as RNImage} from 'react-native';
import ButtonComponent from '~/components/button';
import {Dimensions} from 'react-native';
import BaseText from '~/components/text/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled(BaseText)`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
`;
export const Image = styled(RNImage)`
  width: ${Dimensions.get('window').width}px;
  height: ${(Dimensions.get('window').width * 4) / 3}px;
`;
export const ActionContainer = styled.View`
  padding: 30px 50px;
  flex-direction: column;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled(ButtonComponent)``;
