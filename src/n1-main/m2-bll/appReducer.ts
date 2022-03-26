import {Dispatch} from "redux";
import {loginUser} from "../m3-api/login-api";
import {AxiosError} from 'axios';

const initialState: InitialStateType = {
    isLogIn: false,
    isInitialisation: false,
    error: null,
}

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/LOGGED-IN':
        case 'APP/INITIALIZATION':
        case 'APP/ERROR':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }

}

export const setLogIn = (isLoggedIn: boolean) => {
    return {
        type: 'APP/LOGGED-IN', payload: {isLoggedIn}
    } as const
}

export const setInitialization = (isInitialization: boolean) => {
    return {
        type: 'APP/INITIALIZATION', payload: {isInitialization}
    } as const
}

export const setError = (error: string | null) => {
    return {type: 'APP/ERROR', payload: {error}} as const
}

export const initialization = () => (dispatch: Dispatch<ActionsType>) => {
    loginUser.auth()
        .then(res => {
            if (res.data.addedUser._id) {
                dispatch(setLogIn(true))
                dispatch(setError(null))
                //dispatch(setUserData(res.data.addedUser))
            }
        })
        .catch((e: AxiosError) => {
            dispatch(setLogIn(false))
            dispatch(setError(e.response?.data.error))
        })
        .finally(() => {
            dispatch(setInitialization(true))
        })
}

type InitialStateType = {
    isLogIn: boolean
    isInitialisation: boolean
    error: null | string
}

type ActionsType =
    ReturnType<typeof setLogIn>
    | ReturnType<typeof setInitialization>
    | ReturnType<typeof setError>
