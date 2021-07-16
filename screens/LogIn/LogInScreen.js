import React, { useReducer, useCallback } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert,KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {HeaderModule} from '../../components/header/header'
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../store/actions/auth'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

export const LogInScreen = ({navigation}) => {
    // const urlLogin = 'https://back.yourtar.ru/api/security/login';
    // var fdata = new FormData();

    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')
    
    

    // const authUser = useSelector(state => state.users.authUser)
    // console.log(authUser)
    
    // const enterHandler = () => {
    //     console.log(pass)
    //     console.log(email)
    //     if((pass.trim())&&(email.trim())){
    //         fdata.append('email',email);
    //         fdata.append('pass',pass);
    //         post()
    //     }
    //     else{
    //         Alert.alert('Заполните оба поля!')
    //     }
    // }    

    // const post = async () => {
    //     try {
    //     const response = await fetch(urlLogin, {
    //         method: 'POST', 
    //         body: fdata,
    //         headers: {
    //         'Content-Type': 'application/json'
    //         }
    //     });
    //     const result = await response.json()
    //     console.log(result)
    //     Alert.alert(result.message)
    //     } catch (e) {
    //         console.error('Ошибка:', e);
    //     }
    // }

    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
          email: '',
          password: ''
        },
        inputValidities: {
          email: false,
          password: false
        },
        formIsValid: false
      });

    const loginHandler = () => {
        // dispatch(authActions.login(
        //     formState.inputValues.email,
        //     formState.inputValues.password
        // )
        // )
    }

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
          dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
          });
        },
        [dispatchFormState]
      );

    return (
        <LinearGradient colors={['rgb(1,10,11)', 'rgb(14,23,46)']} style={styles.gradient}>            
            <Image 
                style={{  
                    top: '-25%',
                    position: 'absolute',
                    //transform: [{ scale: 0.7 }],
                    width: '100%',
                    resizeMode: 'contain'
                }}
                source={require('../../assets/login1.png')}
            />
            <Image 
                style={{  
                    bottom: '-20%',
                    position: 'absolute',
                    //transform: [{ scale: 0.7 }],
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
                    //onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    required
                    email
                    autoCapitalize="none"
                    errorText="Please enter a valid email address."
                    onInputChange={inputChangeHandler}
                    placeholderTextColor='rgba(255, 255, 255, 0.7)' 
                    placeholder='Логин или e-mail'/>
                <TextInput 
                    style={styles.textinput} 
                    //onChangeText={text => setPass(text)}
                    keyboardType="default"
                    secureTextEntry
                    required
                    minLength={5}
                    autoCapitalize="none"
                    errorText="Please enter a valid password."
                    onInputChange={inputChangeHandler}
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