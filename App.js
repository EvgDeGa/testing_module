import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import { createStore, combineReducers, applyMiddleware } from "redux";
import AppNavigator from './navigation/AppNavigator'
import ReduxThunk from 'redux-thunk';
import authReducer from './store/reducers/auth'

const rootReducer = combineReducers({
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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

