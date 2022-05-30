import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    RESET_REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL
} from './types'

export const register = (
    first_name,
    last_name,
    username,
    password,
    re_password
) => async dispatch => {
    const body = JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        re_password
    })
    dispatch({
        type: SET_AUTH_LOADING
    })
    try{
        const res = await fetch('api/account/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            body: body
            
        })
        if (res.status === 201){
            dispatch({
                type: REGISTER_SUCCESS
            })
        }
        else{
            dispatch({
                type: REGISTER_FAIL
            })
        }
    }
        
    catch (err){
        dispatch({
            type: REGISTER_FAIL
        })
    }
    dispatch({
        type: REMOVE_AUTH_LOADING
    })
}

export const reset_register_success =() => dispatch =>{
    dispatch({
        type: RESET_REGISTER_SUCCESS
    });
}
export const login = (
    
    username,
    password
) => async dispatch => {
    const body = JSON.stringify({
        
        username,
        password,
        
    })
     
    dispatch({
        type: SET_AUTH_LOADING
    })
    try{
        const res = await fetch('api/account/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            body: body    
        })
        
        if (res.status === 200){
            
            dispatch({
                type: LOGIN_SUCCESS
            })
        }
        else{
            
            dispatch({
                type: LOGIN_FAIL
            })
        }
    }
        
    catch (err){
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
    dispatch({
        type: REMOVE_AUTH_LOADING
    })
}

export const logout = () => async dispatch => {
    try{
        const res = await fetch('api/account/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (res.status === 200){
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }
        else{
            dispatch({
                type:LOGOUT_FAIL
            })
        }
    }
    catch{
        dispatch({
            type:LOGOUT_FAIL
        })
    }
}

export const check_auth_status = () => async dispatch => {
    try {
        const res = await fetch('/api/account/verify', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        if (res.status === 200 ){
            dispatch({
                type:AUTHENTICATION_SUCCESS
            })
        }
        else{
            dispatch({
                type:AUTHENTICATION_FAIL
            })
        }
    } catch (error) {
        dispatch({
            type:AUTHENTICATION_FAIL
        })
    }
}