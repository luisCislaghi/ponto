import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '~/routes';

const App = () => (
  <NavigationContainer>
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />
    <Routes />
  </NavigationContainer>
);

export default App;
