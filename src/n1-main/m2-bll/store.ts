import {combineReducers, createStore} from "redux";
import {test1Reducer} from "./test1Reducer";


const reducers = combineReducers({
    test1: test1Reducer
})

export const store = createStore(reducers)
