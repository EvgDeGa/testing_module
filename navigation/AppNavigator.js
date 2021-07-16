import React from 'react'
import { Button, View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack' 


import { LogInScreen } from '../screens/LogIn/LogInScreen';
import { SingUpScreen } from '../screens/SignUp/SignUpScreen';
import { HeaderModule } from '../components/header/header'
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

const MyStack = createStackNavigator();

const AppNavigator = props => {

    return <NavigationContainer>
        <MyStack.Navigator initialRouteName="LogIn" >
            <MyStack.Screen 
                name="LogIn" 
                component={LogInScreen} 
                options={{ 
                    headerTitle:  <LogoTitle/>,
                   // headerLeft: null,
                    headerBackImage: LogoTitle()
                    }}/>
            <MyStack.Screen 
                name="SignUp" 
                component={SingUpScreen} 
                options={{ 
                    headerTitle:  <LogoTitle/>,
                    headerLeft: null 
                    }}/>
            <MyStack.Screen 
                name="Header" 
                component={HeaderModule}
                options={{ 
                    headerTitle: <LogoTitle/> ,
                    // headerLeft: null
                    }}/>
            <MyStack.Screen 
                name="Main" 
                component={MainScreen}
                options={{ 
                    headerTitle: <LogoTitle/>,
                    // headerLeft: null 
                    }}/>
        </MyStack.Navigator>
    </NavigationContainer>
}

export default AppNavigator;