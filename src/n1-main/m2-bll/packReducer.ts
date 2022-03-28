import {PacksDataType, PacksFetchDataType, PackType} from "../m3-api/pack-api";


const initialPacksState = {
    packs: {
        cardPacks: [] as PackType[],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 0,
    },
    packsFetchData: {
        packName: '',
        min: 0,
        max: 0,
        sortPacks: '1cardsCount',
        page: 1,
        pageCount: 10,
        user_id: '',
    },
    error: '',
    isFetching: false,
}

export const packReducer = (state = initialPacksState, actions: ActionPacksType): InitialPacksStateType => {
    return state

}

export const setPacks = (packs: PacksDataType) => ({
    type: 'PACKS/SET-PACKS',
    payload: {packs},
} as const)

export const setError = (error: string) => ({
    type: 'PACKS/SET-ERROR',
    payload: {error}
} as const)

export const setPacksFetchData = (packsFetchData: PacksFetchDataType) => ({
    type: 'PACKS/SET-PACKS-FETCH-DATA',
    payload: {packsFetchData}
} as const)

export const setFetching = (isFetching: boolean) => ({
    type: 'PACKS/SET-FETCHING',
    payload: {isFetching}
} as const)

type ActionPacksType =
    ReturnType<typeof setPacks>
    | ReturnType<typeof setPacksFetchData>
    | ReturnType<typeof setFetching>
    | ReturnType<typeof setError>

type InitialPacksStateType = {
    packs: PacksDataType
    packsFetchData: PacksFetchDataType
    error: string
    isFetching: boolean
}
