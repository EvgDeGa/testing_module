import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './styles';


export function MainScreen({navigation}) {
    return <View style={styles.center}>
        <Button title="LogIn" onPress={() => navigation.navigate('LogIn')}/>
        <Button title="SignUp" onPress={() => navigation.navigate('SignUp')}/>
    </View>
}




