import React from 'react';
import Toast from 'react-native-toast-message';
import Realm from 'realm';
import {
  Container,
  Title,
  SenhaInput,
  Label,
  SubmitButton,
  Logo,
  ImageBackground,
  ButtonsContainer,
} from './styles';
import Button from '~/components/button';
import LogoImg from '~/assets/img/logo.png';
import LoginImg from '~/assets/img/login.jpg';
import * as LocalAuthentication from 'expo-local-authentication';
import realm from '~/services/realm';

const SignIn = () => {
  const [senha, setSenha] = React.useState('');

  const handleSubmit = async () => {
    if (senha === '1234') {
    } else {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Senha Incorreta',
      });
    }
  };
  const openCamera = async (props) => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (hasHardware) {
      // const c = await LocalAuthentication.supportedAuthenticationTypesAsync();
      // console.log(c);
      const res = await LocalAuthentication.authenticateAsync();
      console.log('res', res);
      if (res?.success) {
        const credentials = Realm.Credentials.anonymous();
        console.log('credentials', credentials);
        try {
          const app = new Realm.App();
          const user = await app.logIn(credentials);

          // console.log('Successfully logged in!', user.id);
          // return user;
        } catch (err) {
          console.error('Failed to log in', err.message);
        }
      }

      // const b = LocalAuthentication.cancelAuthenticate();
    }
  };
  return (
    <>
      <ImageBackground source={LoginImg} />
      <Container>
        <Logo source={LogoImg} />
        <Title>Bem-vindo </Title>
        <Label>Insira sua senha</Label>
        <SenhaInput
          onChangeText={setSenha}
          onSubmitEditing={handleSubmit}
          defaultValue={senha}
        />
        <ButtonsContainer>
          <SubmitButton size="lg" onPress={handleSubmit}>
            Entrar
          </SubmitButton>
          <Button size="lg" ghost onPress={openCamera}>
            Conectar com FaceId
          </Button>
        </ButtonsContainer>
      </Container>
    </>
  );
};
