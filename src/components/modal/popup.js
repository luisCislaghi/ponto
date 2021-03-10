import React, {useState, useEffect} from 'react';
import {PopupModal, Container} from './styles';

import {Link} from '~/components/text/styles';

export default ({
  visible,
  setVisible,
  children,
  title,
  onClose,
  onSubmit,
  footer,
  ...props
}) => {
  const close = () => {
    setVisible(null);
  };

  const footerButtons = [
    {
      text: <Link>Cancelar</Link>,
      onPress: () => {
        setVisible(false);
      },
    },
    {
      text: <Link>Salvar</Link>,
      onPress: () => {
        onSubmit();
      },
    },
  ];

  return (
    <PopupModal
      {...props}
      title={title}
      onClose={onClose ? onClose : close}
      maskClosable
      popup
      animationType="slide-up"
      visible={Boolean(visible)}
      footer={footer || footerButtons}>
      <Container>{children}</Container>
    </PopupModal>
  );
};
