import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {loginUser} from "../m3-api/login-api";

const initialState = {
    successMessage: false,
    loader: false,
    error: ''
}

export const registrationReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "REGISTRATION/SET_LOADER":
        case "REGISTRATION/SET_SUCCESS_MESSAGE":
        case "REGISTRATION/SET_ERROR":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
// action creators
export const setSuccessMessage = (successMessage: boolean) => ({
    type: 'REGISTRATION/SET_SUCCESS_MESSAGE',
    payload: {successMessage}
} as const)
export const setLoader = (loader: boolean) => ({
    type: 'REGISTRATION/SET_LOADER',
    payload: {loader}
} as const)
export const setError = (error: string) => ({
    type: 'REGISTRATION/SET_ERROR',
    payload: {error}
} as const)

//thunks
export const setRegistration = (email: string, password: string, confirmPassword: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoader(true))
    if (password !== confirmPassword) {
        dispatch(setError('passwords don\'t match!'))
        dispatch(setLoader(false))
    } else {
        loginUser.registration({email, password})
            .then((response) => {
                if (response.data.error) {
                    dispatch(setError(response.data.error))
                    dispatch(setSuccessMessage(true))
                } else {
                    dispatch(setError(''))
                    dispatch(setSuccessMessage(true))
                    console.log(response.data.addedUser)
                }
            })
            .catch((error: AxiosError) => {
                dispatch(setError(error.response?.data.error ? error.response?.data.error : 'Some error occurred...'))
            })
            .finally(() => {
                dispatch(setLoader(false))
            })
    }
}

//types
type SetSuccessMessageActionType = ReturnType<typeof setSuccessMessage>
type LoaderActionType = ReturnType<typeof setLoader>
type SetErrorActionType = ReturnType<typeof setError>
export type InitialStateType = typeof initialState
type ActionsType = SetSuccessMessageActionType | LoaderActionType | SetErrorActionType
