import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.ScrollView`
  max-height: ${Dimensions.get('window').height * 0.8}px;
`;

export const ActionsContainer = styled.View`
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 20px;
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
