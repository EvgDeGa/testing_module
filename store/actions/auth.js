export const LOGIN = 'LOGIN'
const urlLogin = 'https://back.yourtar.ru/api/security/login';
var fdata = new FormData();

export const login = (email, password) =>{
    return async dispatch => {
        fdata.append('email',email);
        fdata.append('pass',password);

        try {
            const response = await fetch(urlLogin, {
                method: 'POST', 
                body: fdata,
                headers: {
                'Content-Type': 'application/json'
                }
            });
            const result = await response.json()
            console.log(result)
            Alert.alert(result.message)
        } catch (e) {
            console.error('Ошибка:', e);
        }

        dispatch({ type: LOGIN})
    }
}