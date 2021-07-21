import React from 'react';
import {View, Image  } from 'react-native';
import styles from './styles';


export const HeaderModule = ({}) => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/Logo.png')} />
    </View>
    )
}