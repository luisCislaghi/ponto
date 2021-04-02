import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');
import {Provider as AntProvider} from '@ant-design/react-native';
import Toast from 'react-native-toast-message';
import rootReducer from '~/reducers';
const store = createStore(rootReducer);

const NavigationBlock = () => (
  <NavigationContainer>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />
    <Routes />
  </NavigationContainer>
);

const ConnectedNavigationContainer = connect((state) => ({
  username: state.auth.username,
}))(NavigationBlock);

const App = () => (
  <>
    <AntProvider>
      <Provider store={store}>
        <ConnectedNavigationContainer />
      </Provider>
    </AntProvider>
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </>
);

export default App;
