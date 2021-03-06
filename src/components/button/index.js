import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {ButtonContainer, Text} from './styles';

const Button = ({children, onPress, size, ghost, ...props}) => {
  return (
    <ButtonContainer {...props} size={size} ghost={ghost} onPress={onPress}>
      <Text size={size} ghost={ghost}>
        {children}
      </Text>
    </ButtonContainer>
  );
};

export default Button;
