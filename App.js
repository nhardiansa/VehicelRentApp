import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ForgotPassword from './src/screens/ForgotPassword';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import {
  FORGOT_PASSWORD_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
} from './src/helpers/destinationConstants';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={LOGIN_SCREEN}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={REGISTER_SCREEN}
          component={Register}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={FORGOT_PASSWORD_SCREEN}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
