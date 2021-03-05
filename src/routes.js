import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconLib from 'react-native-vector-icons/Feather';
import Main from '~/pages/main/index';
import Pontos from '~/pages/pontos';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  const DefaultOptions = (iconName) => ({
    tabBarIcon: ({color}) => {
      // You can return any component that you like here!
      return <IconLib name={iconName} color={color} size={24} />;
    },
  });
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Quicksand',
          marginBottom: 5,
        },
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
