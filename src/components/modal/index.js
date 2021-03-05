import React, {useState, useEffect} from 'react';
import {Modal, Container} from './styles';

import {Link} from '~/components/text/styles';

export default ({
  visible,
  setVisible,
  children,
  title,
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
        close();
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
    <Modal
      {...props}
      title={title}
      transparent
      onClose={close}
      maskClosable
      visible={Boolean(visible)}
      closable
      footer={footer || footerButtons}>
      <Container>{children}</Container>
    </Modal>
  );
};
