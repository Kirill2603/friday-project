export type InitialStateType = {
    test: string
}

const initialState: InitialStateType = {
    test: 'Initial state',
}

export const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'TEST':
            return {...state, test: action.test}
        default:
            return state
    }
}

export const TestAC = (test: string) =>
    ({type: 'TEST', test} as const)

export type ActionsTypes = ReturnType<typeof TestAC>