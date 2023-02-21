const initialState: initialStateType = {
    isLoggedIn: false,
    statusLoading: false,
    error: null,
}

export const appReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case "APP/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.isLoggedIn}
        case "APP/SET-STATUS-LOADING":
            return {...state, statusLoading: action.status}
        default:
            return state
    }

}

//action creators
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'APP/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setStatusLoading = (status: boolean) => ({type: 'APP/SET-STATUS-LOADING', status} as const)


export type initialStateType = {
    isLoggedIn: boolean
    statusLoading: boolean
    error: string | null
}
type SetIsLoggedInType = ReturnType<typeof setIsLoggedIn>
type SetErrorType = ReturnType<typeof setError>
type SetStatusLoadingType = ReturnType<typeof setStatusLoading>
type ActionsType = SetIsLoggedInType | SetErrorType | SetStatusLoadingType
