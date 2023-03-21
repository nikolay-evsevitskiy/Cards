import axios from "axios";

const instance = axios.create({
    // baseURL:process.env.REACT_APP_BACK_URL_CARDS|| 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const packApi = {
    getPacks(packsFetchData = {} as PacksFetchDataType) {
        return instance.get<PacksDataType>('/cards/pack', {params: packsFetchData})
    },
    addPack() {
        return instance.post('/cards/pack', {cardsPack: {name: 'myPack'}})
    },
    changePack(packId: string) {
        return instance.put('/cards/pack',
            {
                cardsPack: {
                    _id: packId,
                    name: 'my new pack'
                }
            }
        )
    },
    deletePack(packId: string) {
        return instance.delete(`/cards/pack?id=${packId}`)
    }
}

export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: Date
    updated: Date
    user_name: string
}
export type PacksDataType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
export type PacksFetchDataType = {
    packName: string
    min: number
    max: number
    sortPacks: string
    page: number
    pageCount: number
    user_id: string
}
