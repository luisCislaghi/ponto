import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import {Provider as AntProvider} from '@ant-design/react-native';
import Toast from 'react-native-toast-message';

const App = () => (
  <>
    <AntProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        <Routes />
      </NavigationContainer>
    </AntProvider>
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </>
);

export default App;
