import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, View, Text } from 'react-native';
import * as authActions from '../../store/actions/auth'

import styles from './styles';

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout())
    }

    return (
    <View style={styles.center}>
        <Text>Вы авторезированы</Text>
        <Button title='Выйти' onPress={() => logout()}/>
    </View>
    )
}




