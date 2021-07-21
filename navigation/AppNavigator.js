import React from 'react'
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native' 

import { MainNavigator, AuthNavigator } from './StartNavigator';
import StartScreen from '../screens/StartScreen/StartScreen'

const AppNavigator = props => {
    const isAuth = useSelector(state => !!state.auth.token);
    const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
 
    return (
      <NavigationContainer>
        {isAuth && <MainNavigator />}
        {!isAuth && didTryAutoLogin && <AuthNavigator />}
        {!isAuth && !didTryAutoLogin && <StartScreen />}
      </NavigationContainer>
    );
  };

export default AppNavigator;