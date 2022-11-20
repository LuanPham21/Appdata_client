import { combineReducers } from "redux";
import LoginAuthReducer from "containers/AuthPage/LoginPage/reducer";
import RegisAuthReducer from "containers/AuthPage/RegisPage/reducer";

const rootReducer = combineReducers({ LoginAuthReducer, RegisAuthReducer });

export default rootReducer;
