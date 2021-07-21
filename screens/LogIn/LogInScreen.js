import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert,KeyboardAvoidingView, Button, ActivityIndicator } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth'

export const LogInScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
  
    const dispatch = useDispatch();

    const loginHandler = async () => {
      try {
        await dispatch(authActions.login(email, pass));
      } catch (err) {
        setIsLoading(false);

      }
    }

    return (
        <LinearGradient colors={['rgb(1,10,11)', 'rgb(14,23,46)']} style={styles.gradient}>            
            <Image 
                style={{  
                    top: '-25%',
                    position: 'absolute',
                    width: '100%',
                    resizeMode: 'contain'
                }}
                source={require('../../assets/login1.png')}
            />
            <Image 
                style={{  
                    bottom: '-20%',
                    position: 'absolute',
                    width: '100%',
                    resizeMode: 'contain'
                }}
                source={require('../../assets/login2.png')}
            />
            <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <View style={styles.authContainer}>
                <Text style={styles.text}>Авторизация</Text>
                <TextInput 
                    style={styles.textinput}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Please enter a valid email address."
                    //onInputChange={inputChangeHandler}
                    placeholderTextColor='rgba(255, 255, 255, 0.7)' 
                    placeholder='Логин или e-mail'/>
                <TextInput 
                    style={styles.textinput} 
                    onChangeText={text => setPass(text)}
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={5}
                    autoCapitalize="none"
                    errorText="Please enter a valid password."
                    //onInputChange={inputChangeHandler}
                    placeholderTextColor='rgba(255, 255, 255, 0.7)' 
                    placeholder='Пароль'/>
                <View style={styles.ButtonContainer}>      
                    <TouchableOpacity onPress={() => loginHandler()}>
                        <View style={styles.enterButton}>
                            <Text style={styles.entertext}>Вохд</Text>
                        </View>
                    </TouchableOpacity>                    
                    <TouchableOpacity onPress={() => {console.log('Пароль')}}>
                        <Text style={styles.forgotpass}>Забыли пароль?</Text>
                    </TouchableOpacity>                    
                </View>                
            </View>
            <View style={styles.SignUp} >
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={styles.SignUpText}>Нет аккаунта?{"\n"}Зарегестрируйтесь!</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}