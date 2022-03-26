import {ForgotDataType, loginUser, SetNewPasswordDataType, UserDataType, UserType} from "../m3-api/login-api";
import {Dispatch} from "redux";
import {AxiosError} from "axios";

const initialState: InitialStateType = {
    user: {} as UserType,
    isFetching: false,
    error: '',
    senMessage: false,
    sendNewPassword: false

}

export const loginReducer = (state = initialState, actions: ActionsType): InitialStateType => {
    switch (actions.type) {
        case 'LOGIN/SET-FETCHING':
        case 'LOGIN/SET-ERROR':
        case "LOGIN/SET-NEW-MESSAGE":
        case "LOGIN/SET-SEND-NEW-PASSWORD":
            return {
                ...state,
                ...actions.payload
            }
        case "LOGIN/SET-USER-DATA":
            return {
                ...state,
                user: {...actions.payload}
            }
        default:
            return state
    }

}

export const setUserData = (data = {} as UserType) => ({
    type: 'LOGIN/SET-USER-DATA',
    payload: {
        ...data
    }
} as const)

export const setFetching = (isFetching: boolean) => ({
    type: 'LOGIN/SET-FETCHING',
    payload: {
        isFetching
    }
} as const)

export const setError = (error: string) => ({
    type: 'LOGIN/SET-ERROR',
    payload: {error}
} as const)

export const setSendMessage = (sendMessage: boolean) => ({
    type: 'LOGIN/SET-NEW-MESSAGE',
    payload: {sendMessage}
} as const)

export const setSendNewPassword = (sendNewPassword: boolean) => ({
    type: 'LOGIN/SET-SEND-NEW-PASSWORD',
    payload: {
        sendNewPassword
    }
} as const)

export const setLoginUser = (userData: UserDataType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setFetching(true))
    loginUser.login(userData)
        .then((res) => {
            dispatch(setUserData(res.data))
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setFetching(false))
        })
}

export const logOutUser = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setFetching(true))
    loginUser.logOut()
        .then(() => {
            dispatch(setUserData())
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setFetching(false))
        })
}

export const forgotUserPassword = (data: ForgotDataType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setFetching(true))
    loginUser.forgotPassword(data)
        .then((res) => {
            console.log(res)
            dispatch(setSendMessage(true))
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setFetching(false))
        })
}

export const setUserPassword = (data: SetNewPasswordDataType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setFetching(true))
    loginUser.setNewPassword(data)
        .then((res) => {
            console.log(res)
            dispatch(setSendNewPassword(true))
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setFetching(false))
        })
}

type InitialStateType = {
    user: UserType
    isFetching: boolean
    error: string
    senMessage: boolean
    sendNewPassword: boolean
}

type ActionsType =
    ReturnType<typeof setUserData>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setError>
    | ReturnType<typeof setSendMessage>
    | ReturnType<typeof setSendNewPassword>

