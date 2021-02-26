import styled from 'styled-components/native';
import BaseText from '~/components/text/styles';

export const ButtonContainer = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  padding: 16px 24px;
  border-radius: 40px;
  background-color: #0ab368;
`;

export const Text = styled(BaseText)`
  color: #fff;
`;
