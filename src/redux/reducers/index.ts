import { combineReducers } from 'redux'
import { UserReducer } from './userReducer'


// rootReducer combines reducers

const rootReducer = combineReducers({
    userReducer: UserReducer,

})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer };