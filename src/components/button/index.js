import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {ButtonContainer, Text} from './styles';

const Button = ({children, onPress, size, ...props}) => {
  return (
    <ButtonContainer {...props} size={size} onPress={onPress}>
      <Text size={size}>{children}</Text>
    </ButtonContainer>
  );
};

export default Button;
