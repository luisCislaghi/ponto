import styled from 'styled-components/native';
import Text from '~/components/text/styles';
import Icon from 'react-native-vector-icons/Feather';
import AntSwipeAction from '@ant-design/react-native/lib/swipe-action';

export const SwipeContainer = styled.View.attrs({
  elevation: 1,
})`
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 10px;
`;

export const Pressable = styled.Pressable`
  background-color: #fff;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
`;

export const SwipeAction = styled(AntSwipeAction)`
  background: transparent;
  border-radius: 8px;
`;

export const Block = styled.View`
  flex-direction: row;
  align-items: center;
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
export const DeleteIcon = styled(Icon)`
  color: #fff;
  font-size: 24px;
`;
