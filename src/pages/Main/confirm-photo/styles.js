import styled from 'styled-components/native';
import {Image as RNImage} from 'react-native';
import ButtonComponent from '~/components/button';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled(RNImage)`
  flex: 1;
`;
export const ButtonsContainer = styled.View`
  padding: 30px 50px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled(ButtonComponent)``;
