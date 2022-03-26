import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";


const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
})
export type RootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store
