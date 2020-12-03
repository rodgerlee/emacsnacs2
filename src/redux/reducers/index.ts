import { combineReducers } from 'redux'
// import { UserReducer } from './userReducer'
import { ShoppingReducer } from './shoppingReducer'

import authReducer from './authReducers';

import errorReducer from './authErrorReducers';

// rootReducer combines reducers

const rootReducer = combineReducers({
    // userReducer: UserReducer,
    shoppingReducer: ShoppingReducer,
    auth: authReducer,
    authError: errorReducer

})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer };