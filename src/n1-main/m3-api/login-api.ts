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
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<UserType>('/auth/login', {email, password, rememberMe})
    },
    registration(email: string, password: string) {
        return instance.post<RegistrationApiType>('/auth/register', {email, password})
    },
    auth() {
        return instance.post<RegistrationApiType>('/auth/me', {})
    },
    changeUserProfile(name: string, avatar: string) {
        return instance.put<ChangeUserProfileType>('/auth/me', {name, avatar})
    },
    logOut() {
        return instance.delete<CommonResponseChangesType>('/auth/me')
    },
    forgotPassword(email: string, from: string, message: string) {
        return instance.post<CommonResponseChangesType>('/auth/forgot', {email, from, message})

    },
    setMewPassword(password: string, resetPasswordToken: string) {
        return instance.post<CommonResponseChangesType>('/auth/set-new-password', {password, resetPasswordToken})

    }
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
    addedUser: UserType
    error?: string
}

export type ChangeUserProfileType = {
    updatedUser: UserType
    error?: string
}

export type CommonResponseChangesType = {
    info: string
    error: string
}

