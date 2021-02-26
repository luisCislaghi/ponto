import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import Text from '~/components/text/styles';

export const Container = styled.View`
  flex: 1;
  background-color: #0ab368;
`;
export const HeaderContainer = styled.View`
  padding: ${20 + getStatusBarHeight()}px 20px 20px 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  color: #fff;
`;

export const Date = styled(Text)`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-top: 15px;
`;
export const Time = styled(Text)`
  margin-top: 10px;
  color: #fff;
  font-size: 40px;
  text-align: center;
`;

export const TextBold = styled(Title)`
  font-weight: bold;
`;

export const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  position: absolute;
  align-self: center;
  bottom: 40px;
  background-color: transparent;
`;

// export const Form = styled.View`
//   flex-direction: row;
//   margin-top: 10px;
//   padding: 0 20px;
// `;
// export const Input = styled.TextInput.attrs({
//   placeholderTextColor: '#999',
// })`
//   flex: 1;
//   padding: 12px 15px;
//   border-radius: 4px;
//   font-size: 16px;
//   background-color: #fdfdfd;
// `;
// export const Submit = styled.TouchableOpacity`
//   background-color: #fd2;
//   justify-content: center;
//   margin-left: 10px;
//   border-radius: 4px;
//   padding: 0 14px;
// `;
// export const List = styled.FlatList.attrs({
//   contentContainerStyle: {paddingHorizontal: 20},
//   showVerticalScrollIndicator: false,
// })`
//   margin-top: 20px;
// `;
