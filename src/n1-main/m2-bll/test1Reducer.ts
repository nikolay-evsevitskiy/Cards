const initialState: InitialStateType = {
    test1: true
}

export const test1Reducer = (state = initialState, actions: ChangeTest1Type): InitialStateType => {
    switch (actions.type) {
        case "CHANGE-TEST1": {
            return state
        }
        default:
            return state
    }

}

export const ChangeTest1AC = (value: boolean) => ({
    type: 'CHANGE-TEST1',
    value
} as const)

type InitialStateType = {
    test1: boolean
}
type ChangeTest1Type = ReturnType<typeof ChangeTest1AC>
