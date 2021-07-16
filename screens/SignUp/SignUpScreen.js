import React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {HeaderModule} from '../../components/header/header'

export const SingUpScreen = ({navigation}) => {
    return (
        <LinearGradient colors={['rgb(1,10,11)', 'rgb(14,23,46)']} style={styles.gradient}>
            <Image 
                style={{  
                    bottom: '-20%',
                    position: 'absolute',
                    //transform: [{ scale: 0.7 }],
                    width: '100%',
                    resizeMode: 'contain'
                }}
                source={require('../../assets/signup.png')}
            />
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={50}
                style={styles.screen}
            > 
            
                    <View style={styles.SignUpContainer}>
                        <Text style={styles.text}>Регистрация</Text>
                        <TextInput style={styles.textinput} autoCorrect={false} clearButtonMode='always' placeholderTextColor='rgba(0, 0, 0, 0.5)' placeholder='Имя'/>
                        <TextInput style={styles.textinput} autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(0, 0, 0, 0.5)' placeholder='Фамилия'/>
                        <TextInput style={styles.textinput} autoCompleteType='email' textContentType='emailAddress' autoCorrect={false} clearButtonMode='always' placeholderTextColor='rgba(0, 0, 0, 0.5)' placeholder='E-mail'/>
                        <TextInput style={styles.textinput} autoCompleteType='password' textContentType='password' autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(0, 0, 0, 0.5)' placeholder='Пароль'/>
                        <TextInput style={styles.textinput} autoCompleteType='password' textContentType='password' autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(0, 0, 0, 0.5)' placeholder='Повторите пароль'/>
                        <TouchableOpacity style={styles.clickButton} onPress={() => {console.log('Завершить регистрацию')}}>
                            <View style={styles.ButtonContainer}>
                                    <Text style={styles.entertext}>Зарегистрироваться</Text>
                            </View>
                        </TouchableOpacity>
                    </View>      
                
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

// всем привет сегоднея мой день прошел хорошо :*  и всем пока !!!
