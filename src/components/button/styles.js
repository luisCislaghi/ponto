import styled from 'styled-components/native';
import BaseText from '~/components/text/styles';

export const ButtonContainer = styled.TouchableOpacity.attrs({})`
  flex-direction: row;
  padding: ${({size}) => (size === 'lg' ? '20px 28px' : '12px 25px')};
  border-radius: 40px;
  background-color: ${({ghost}) => (ghost ? '#fff' : '#0ab368')};
`;

export const Text = styled(BaseText)`
  color: ${({ghost}) => (ghost ? '#0ab368' : '#fff')};
`;
