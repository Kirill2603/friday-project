export type InitialStateType = {
    test: string
}

const initialState: InitialStateType = {
    test: 'test',
}

export const appReducer = (state: InitialStateType, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'TEST':
            return {...state}
        default:
            return state
    }
}

export const TestAC = (test: string) =>
    ({type: 'TEST', test} as const)

export type ActionsTypes = ReturnType<typeof TestAC>