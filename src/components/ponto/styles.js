import styled from 'styled-components/native';
import Text from '~/components/text/styles';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 15px 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Block = styled.View`
  flex-direction: row;
`;

export const Time = styled(Text)`
  font-size: 18px;
`;

export const Data = styled(Text)`
  color: rgba(0, 0, 0, 0.45);
  margin-left: 8px;
`;

export const SyncIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
`;
