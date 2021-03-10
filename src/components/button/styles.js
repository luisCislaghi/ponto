import styled from 'styled-components/native';
import BaseText from '~/components/text/styles';
import IconLib from 'react-native-vector-icons/Feather';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  elevation: 2, // Android
})`
  flex-direction: row;
  padding: ${({size, shape}) =>
    size === 'lg'
      ? shape === 'circle'
        ? '20px 20px'
        : '20px 30px'
      : shape === 'circle'
      ? '12px 12px'
      : '12px 24px'};
  border-radius: ${({shape}) => (shape === 'circle' ? 200 : 40)}px;
  background-color: ${({ghost}) => (ghost ? '#fff' : '#0ab368')};
  border-color: #0ab368;
  border-width: ${({ghost}) => (ghost ? 1 : 0)}px;
  align-items: center;
`;

export const Text = styled(BaseText)`
  margin-left: ${({icon}) => (icon ? 10 : 0)}px;
  color: ${({ghost}) => (ghost ? '#0ab368' : '#fff')};
`;

export const Icon = styled(IconLib)`
  color: ${({ghost}) => (ghost ? '#0ab368' : '#fff')};
  font-size: ${({buttonSize}) => (buttonSize === 'lg' ? '24px' : '18px')};
`;
