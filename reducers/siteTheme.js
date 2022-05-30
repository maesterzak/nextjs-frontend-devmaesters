import {
    DARK_THEME,
    LIGHT_THEME
} from '../actions/types'
const initialState = {
    theme: 'dark'
}

const themeReducer = (state = initialState, action) => {
    
    const {type, payload} = action;
    switch(type) {
        case DARK_THEME:
            return{
                ...state,
                theme:'dark'
            }

        case LIGHT_THEME:
            return{
                ...state,
                theme:'light'
            } 
        default:
            return state;
                    
    }   
}
export default themeReducer;