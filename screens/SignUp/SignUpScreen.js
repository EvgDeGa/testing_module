import React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {HeaderModule} from '../../components/header/header'

export const SingUpScreen = ({navigation}) => {
    return (
        <View>
        <HeaderModule  style={styles.header}/>
        <View style={styles.center}>
        <LinearGradient
            colors={['rgb(1,10,11)', 'rgb(14,23,46)']}
            style={styles.background}
        />
        <Text style={styles.text}>Регистрация</Text>
        <TextInput style={styles.textinput} autoCorrect={false} clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Имя'/>
        <TextInput style={styles.textinput} autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Фамилия'/>
        <TextInput style={styles.textinput} autoCompleteType='email' textContentType='emailAddress' autoCorrect={false} clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='E-mail'/>
        <TextInput style={styles.textinput} autoCompleteType='password' textContentType='password' autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Пароль'/>
        <TextInput style={styles.textinput} autoCompleteType='password' textContentType='password' autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Повторите пароль'/>

        <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={() => {console.log('Завершить регистрацию')}}>
                <View style={styles.enterButton}>
                    <Text style={styles.entertext}>Завершить регистрацию</Text>
                </View>
            </TouchableOpacity>
        </View>
        
        </View>
    </View>
    )
}

// всем привет сегоднея мой день прошел хорошо :*  и всем пока !!!
