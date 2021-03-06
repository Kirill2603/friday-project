import {appReducer} from "./app-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    app: appReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
