import { combineReducers } from "redux";
import authReducer from './auth';
import themeReducer from "./siteTheme";

export default combineReducers({
    auth:authReducer,
    theme:themeReducer
})