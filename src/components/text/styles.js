import styled from 'styled-components/native';

const baseText = styled.Text`
  font-size: ${({size}) => (size === 'lg' ? '22px' : '16px')};
  font-family: 'Quicksand';
`;

export const Link = styled(baseText)`
  color: ${({disabled}) => (disabled ? 'rgba(0, 0, 0,0.25)' : '#0ab368')};
  font-family: 'Quicksand-SemiBold';
`;

export default baseText;
