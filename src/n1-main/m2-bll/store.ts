import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";


const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
})
export type RootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store
