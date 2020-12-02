import { combineReducers } from 'redux'
// import { UserReducer } from './userReducer'
import { homeRecipeReducer} from './homeRecipeReducer'


// rootReducer combines reducers
// Reducers are functions that take the current state and an action as arguments, and return a new state result.

const rootReducer = combineReducers({
    // userReducer: UserReducer,
    homeRecipeReducer: homeRecipeReducer,
    
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer };