import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {ButtonContainer, Text} from './styles';

const Button = ({children, onPress, ...props}) => {
  return (
    <ButtonContainer {...props} onPress={onPress}>
      <Text>{children}</Text>
    </ButtonContainer>
  );
};

export default Button;
