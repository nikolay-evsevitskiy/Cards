import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import thunk from "redux-thunk";
import {loginReducer} from "./loginReducer";


const reducers = combineReducers({
    app: appReducer,
    login: loginReducer,
})
export type RootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store
