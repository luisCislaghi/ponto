import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IconLib from 'react-native-vector-icons/Feather';
import Main from '~/pages/main/index';
import SignIn from '~/pages/signin';
import SignUp from '~/pages/signup';
import Pontos from '~/pages/pontos';

const Routes = () => {
  const BottomTab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const DefaultOptions = (iconName) => ({
    tabBarIcon: ({color}) => {
      // You can return any component that you like here!
      return <IconLib name={iconName} color={color} size={24} />;
    },
  });
  return Boolean(true) ? (
    <BottomTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Quicksand',
          marginBottom: 5,
        },
        activeTintColor: '#0ab368',
        inactiveTintColor: 'rgba(0,0,0,0.85)',
      }}>
      <BottomTab.Screen
        name="Ponto"
        component={Main}
        options={DefaultOptions('clock')}
      />
      <BottomTab.Screen
        name="Pontos"
        component={Pontos}
        options={DefaultOptions('list')}
      />
    </BottomTab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default Routes;
