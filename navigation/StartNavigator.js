import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import { LogInScreen } from '../screens/LogIn/LogInScreen';
import { SingUpScreen } from '../screens/SignUp/SignUpScreen';
import { MainScreen } from '../screens/MainScreen/MainScreen';

function LogoTitle() {
    return (
      <Image
        style={{  
            transform: [{ scale: 0.7 }],
            resizeMode: 'contain'
        }}
        source={require('../assets/Logo.png')}
      />
    );
  }


const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator >
            <AuthStackNavigator.Screen 
                name="LogIn" 
                component={LogInScreen} 
                options={{ 
                    headerTitle:  <LogoTitle/>,
                    headerLeft: null 
                    }}/>
            <AuthStackNavigator.Screen 
                name="SignUp" 
                component={SingUpScreen} 
                options={{ 
                    headerTitle:  <LogoTitle/>,
                    headerLeft: null 
                    }}/> 
    </AuthStackNavigator.Navigator>
  );
};

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator >
            <MainStackNavigator.Screen 
                name="Main" 
                component={MainScreen} 
                options={{ 
                    headerTitle:  <LogoTitle/>,
                    headerBackImage: LogoTitle()
                    }}/>
    </MainStackNavigator.Navigator>
  );
};
