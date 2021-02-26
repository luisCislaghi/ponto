import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconLib from 'react-native-vector-icons/Feather';
import Main from '~/pages/Main';

const Routes = () => {
  const Tab = createBottomTabNavigator();
  const Icon = (name) => ({
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
      <Tab.Screen name="Ponto" component={Main} options={{...Icon('clock')}} />
      {/* <Tab.Screen
        name="Perfil"
        component={() => {}}
        options={{...Icon('user')}}
      /> */}
    </Tab.Navigator>
  );
};
export default Routes;
