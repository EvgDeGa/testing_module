import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { LogInScreen } from './screens/LogIn/LogInScreen';
import { SingUpScreen } from './screens/SignUp/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import {HeaderModule} from './components/header/header'
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { createStore, combineReducers } from "redux";
import { userReducer } from "./store/reducers/user";
import AppNavigator from './navigation/AppNavigator'

const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(rootReducer);



async function loadApplication(){
  await Font.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat/Montserrat-SemiBold.ttf')
  })
};



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
    <Provider store={store}>
      
        <AppNavigator/>
     
    </Provider>
  );
}

