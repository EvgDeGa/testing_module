import {Alert } from 'react-native';
import  {AsyncStorage}  from 'react-native';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
  };

export const authenticate = (token, email, userId, roles) => {
    return dispatch => {
      dispatch({ type: AUTHENTICATE, token: token, email: email, userId: userId, roles: roles });
    };
};

export const login = (email, password) => {
    return async dispatch => {
        var fdata = new FormData();
        fdata.append('email',email);
        fdata.append('pass',password);
        try {
            const response = await fetch('https://back.yourtar.ru/api/security/login', {
                method: 'POST', 
                body: fdata,
                headers: {
                'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            console.log(result)

            if(typeof result.message == 'undefined'){
                dispatch(
                    authenticate(
                        result.token,
                        result.user.email,
                        result.user.id,
                        result.user.roles
                    )
                );
                console.log(result)
                saveDataToStorage(result.token, result.user.email, result.user.id, result.user.roles);
            }else{
                Alert.alert(result.message)
            }
        } catch (e) {
            console.error('Ошибка:', e);
        }
    };
  };

  const saveDataToStorage = (token, email, userId, roles) => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        token: token,
        email: email,
        userId: userId,
        roles: roles
      })
    );
    console.log('sds')
  };

  export const logout = () => {
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
  };