import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {MainScreen} from './screens/MainScreen/MainScreen'
import { LogInScreen } from './screens/LogIn/LogInScreen';
import { SingUpScreen } from './screens/SignUp/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="SignUp" component={SingUpScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

