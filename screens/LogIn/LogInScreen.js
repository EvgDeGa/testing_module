import React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import {HeaderModule} from '../../components/header/header'


const fetchTodos = async () => {
    console.log('Fetch data')
    try {
      const response = await fetch(
        'https://back.yourtar.ru/api/security/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "mode": "formdata",
            "formdata": [
                {
                    "key": "email",
                    "value": "vmv@yourtar.ru",
                    "type": "text"
                },
                {
                    "key": "pass",
                    "value": "thvfrTHVFR94",
                    "type": "text"
                }
            ]
        }),
        }
      )
      const data = await response.json()
      console.log('Fetch data', data)
      //const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
      //dispatch({ type: FETCH_TODOS, todos })
    } catch (e) {
      showError('Что-пошло не так...')
      console.log(e)
    }
  }

const url = 'https://back.yourtar.ru/api/security/login';
const data = {
    mode: "formdata",
    formdata: [
        {
            key: "email",
            value: "vmv@yourtar.ru",
            type: "text"
        },
        {
            key: "pass",
            value: "thvfrTHVFR94",
            type: "text"
        }
    ]
};

var fdata = new FormData();
// fdata.append('email', {
//     "value": "vmv@yourtar.ru", //This is how it works :)
//     type: 'text'
// });
// fdata.append('pass', {
//     "value": "thvfrTHVFR94.ru", //This is how it works :)
//     type: 'text'
// });

fdata.append('email', 'vmv@yourtar.ru');
fdata.append('pass','thvfrTHVFR94');


const post = async () => {
    console.log('Fetch data 2')
    try {
    const response = await fetch(url, {
        method: 'POST', 
        body: fdata,
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
    } catch (e) {
        console.error('Ошибка:', e);
    }
    
}

export const LogInScreen = ({navigation}) => {
    return (
    <View>
        <HeaderModule  style={styles.header}/>
        <View style={styles.center}>
        <LinearGradient
            colors={['rgb(1,10,11)', 'rgb(14,23,46)']}
            style={styles.background}
        />
        <Text style={styles.text}>Авторизация</Text>
        <TextInput style={styles.textinput} autoCompleteType='username' textContentType='username' autoCorrect={false} clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Логин или e-mail'/>
        <TextInput style={styles.textinput} autoCompleteType='password' textContentType='password' autoCorrect={false}  clearButtonMode='always' placeholderTextColor='rgba(255, 255, 255, 0.7)' placeholder='Пароль'/>
        <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={() => post()}>
                <View style={styles.enterButton}>
                    <Text style={styles.entertext}>Войти</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log('Пароль')}}>
                <Text style={styles.forgotpass}>Забыли пароль?</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.SignUp} >
            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                <Text style={styles.SignUpText}>Нет аккаунта?{"\n"}Зарегестрируйтесь!</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
    )
}