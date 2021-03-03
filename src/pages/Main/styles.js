import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import Text from '~/components/text/styles';
import Map from 'react-native-maps';

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
  overflow: hidden;
`;

export const MapView = styled(Map)`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  position: absolute;
  align-self: center;
  bottom: 40px;
  background-color: transparent;
`;
