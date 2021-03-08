import React from 'react';

import {ButtonContainer, Text, Icon} from './styles';

const Button = ({children, onPress, icon, size, ghost, ...props}) => {
  return (
    <ButtonContainer {...props} size={size} ghost={ghost} onPress={onPress}>
      <>
        {icon && <Icon ghost={ghost} buttonSize={size} name={icon} />}
        {children && (
          <Text size={size} icon={icon} ghost={ghost}>
            {children}
          </Text>
        )}
      </>
    </ButtonContainer>
  );
};

export default Button;
