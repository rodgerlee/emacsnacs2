import { combineReducers } from 'redux'
// import { UserReducer } from './userReducer'
import { ShoppingReducer } from './shoppingReducer'

// rootReducer combines reducers

const rootReducer = combineReducers({
    // userReducer: UserReducer,
    shoppingReducer: ShoppingReducer

})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer };