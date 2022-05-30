import {
    DARK_THEME,
    LIGHT_THEME
} from './types'

export const light_theme = ()=> dispatch =>{
    dispatch({
        type: LIGHT_THEME
    })
}

export const dark_theme = ()=> dispatch =>{
    dispatch({
        type: DARK_THEME
    })
}

