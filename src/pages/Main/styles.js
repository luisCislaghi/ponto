import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;
export const Text = styled.Text`
  font-size: 16px;
`;
export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  padding: 0 20px;
`;
export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  background-color: #fdfdfd;
`;
export const Submit = styled.TouchableOpacity`
  background-color: #fd2;
  justify-content: center;
  margin-left: 10px;
  border-radius: 4px;
  padding: 0 14px;
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
