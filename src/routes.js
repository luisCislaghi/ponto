import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconLib from 'react-native-vector-icons/Feather';
import Main from '~/pages/main/index';
import Pontos from '~/pages/pontos';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  const DefaultOptions = (name) => ({
    showLabel: false,
    tabBarIcon: ({color}) => {
      // You can return any component that you like here!
      return <IconLib name={name} color={color} size={24} />;
    },
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#0ab368',
        inactiveTintColor: 'rgba(0,0,0,0.85)',
      }}>
      <Tab.Screen
        name="Ponto"
        component={Main}
        options={DefaultOptions('clock')}
      />
      <Tab.Screen
        name="Pontos"
        component={Pontos}
        options={DefaultOptions('list')}
      />
    </Tab.Navigator>
  );
};
export default Routes;
