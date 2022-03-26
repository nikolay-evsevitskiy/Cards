import {Dispatch} from "redux";
import {loginUser, UpdateUserModelType} from "../m3-api/login-api";
import {AxiosError} from "axios";

const initialState = {
    name: '',
    avatar: '',
    loader: false,
    error: '',
    isLoggedIn: false,
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case 'PROFILE/SET-USER':
        case 'PROFILE/UPDATE-NAME':
        case "PROFILE/UPDATE-AVATAR":
        case "PROFILE/SET-ERROR":
        case "PROFILE/IS-LOGGED-IN":
        case "PROFILE/SET-LOADER":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state

    }
}

export const setUser = (name: string, avatar: string) => ({
    type: 'PROFILE/SET-USER',
    payload: {name, avatar}
} as const)
export const updateName = (name: string) => ({
    type: 'PROFILE/UPDATE-NAME',
    payload: {name}
} as const)
export const updateAvatar = (avatar: string) => ({
    type: 'PROFILE/UPDATE-AVATAR',
    payload: {avatar}
} as const)
export const setError = (error: string) => ({
    type: 'PROFILE/SET-ERROR',
    payload: {error}
} as const)
export const setLoader = (loader: boolean) => ({
    type: 'PROFILE/SET-LOADER',
    payload: {loader}
} as const)
export const isLoggedIn = (isLoggedIn: boolean) => ({
    type: 'PROFILE/IS-LOGGED-IN',
    payload: {isLoggedIn}
} as const)

export const fetchUser = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoader(true))
    loginUser.auth()
        .then((res) => {
            if (res.data) {
                dispatch(setUser(res.data.addedUser.name, res.data.addedUser.avatar = ''))
                dispatch(isLoggedIn(true))
            }
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setLoader(false))
        })
}
export const updateUserName = (update: UpdateUserModelType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoader(true))
    loginUser.changeUserProfile(update)
        .then((res) => {
            dispatch(updateName(res.data.updatedUser.name))
            dispatch(updateAvatar(res.data.updatedUser.avatar = ''))
        })
        .catch((e: AxiosError) => {
            const error = e.response ? e.response.data.errors : (e.message + ', more details in the console')
            dispatch(setError(error))
        })
        .finally(() => {
            dispatch(setLoader(false))
        })
}

type ProfileInitialStateType = {
    name: string
    avatar: string
    loader: boolean
    error: string
    isLoggedIn: boolean
}

type ActionsType =
    ReturnType<typeof setUser>
    | ReturnType<typeof updateName>
    | ReturnType<typeof updateAvatar>
    | ReturnType<typeof setError>
    | ReturnType<typeof setLoader>
    | ReturnType<typeof isLoggedIn>
