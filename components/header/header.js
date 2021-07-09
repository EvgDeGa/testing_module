import React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';


export const HeaderModule = ({}) => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/Logo.png')} />
    </View>
    )
}