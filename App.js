import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { LogInScreen } from './screens/LogIn/LogInScreen';
import { SingUpScreen } from './screens/SignUp/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import {HeaderModule} from './components/header/header'

import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'

async function loadApplication(){
  await Font.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf')
  })
};

const Stack = createStackNavigator();


export default function App() {
  const [isReady, setIsReady] = useState(false);
  
  if(!isReady){
    return(
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
      
    )
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LogIn" headerMode='none'>
          <Stack.Screen name="SignUp" component={SingUpScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="Header" component={HeaderModule} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

