import axios from "axios";


const instance = axios.create({
    baseURL:
    //'https://neko-back.herokuapp.com/2.0'
        process.env.REACT_APP_BACK_URL_CARDS
        || 'http://localhost:7542/2.0/'
})

export const loginUser = {
    pingServer(date: Date = new Date()) {
        return instance.get<PingServerType>(`/ping?frontTime=${date}`)
    },
    login(userData: UserDataType) {
        return instance.post<UserType>('/auth/login', userData)
    },
    registration(data: RegistrationDataType) {
        return instance.post<RegistrationApiType>('/auth/register', data)
    },
    auth() {
        return instance.post<RegistrationApiType>('/auth/me', {})
    },
    changeUserProfile(model: UpdateUserModelType) {
        return instance.put<ChangeUserProfileType>('/auth/me', model)
    },
    logOut() {
        return instance.delete<CommonResponseChangesType>('/auth/me')
    },
    forgotPassword(forgotData: ForgotDataType) {
        return instance.post<CommonResponseChangesType>('/auth/forgot', forgotData)

    },
    setNewPassword(data: SetNewPasswordDataType) {
        return instance.post<CommonResponseChangesType>('/auth/set-new-password', data)

    }
}
export type UpdateUserModelType = {
    name: string, avatar: string
}

export type UserDataType = {
    email: string
    from: string
    rememberMe: boolean
}
export type ForgotDataType = {
    email: string
    password: string
    message: string
}
export type RegistrationDataType = {
    email: string
    password: string
}
export type SetNewPasswordDataType = {
    password: string
    resetPasswordToken: string
}

type PingServerType = {
    ping: number
    backTime: number
    frontTime: number
    info: string
}

export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}

export type RegistrationApiType = {
    addedUser: AddedUserType
    error?: string
}
export type AddedUserType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified?: boolean
    avatar?: string
    __v: number
    _id: string
}

export type ChangeUserProfileType = {
    updatedUser: UserType
    error?: string
}

export type CommonResponseChangesType = {
    info: string
    error: string
}

