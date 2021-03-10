import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import Text from '~/components/text/styles';
import {Dimensions} from 'react-native';

export const Container = styled.ScrollView`
  max-height: ${Dimensions.get('window').height * 0.9}px;
`;

export const HeaderContainer = styled.View`
  padding: ${20 + getStatusBarHeight()}px 20px 20px 20px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  /* color: #fff; */
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
