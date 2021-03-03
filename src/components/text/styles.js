import styled from 'styled-components/native';

export default styled.Text`
  font-size: ${({size}) => (size === 'lg' ? '22px' : '16px')};
  font-family: 'Quicksand';
`;
