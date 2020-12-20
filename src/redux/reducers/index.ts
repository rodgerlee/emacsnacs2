import { combineReducers } from 'redux'
// import { UserReducer } from './userReducer'
import { homeRecipeReducer} from './homeRecipeReducer'
import { recipeIngredientsReducer } from './recipeIngredientsReducer';
import { favoriteReducer } from './favoriteReducer'
import { searchReducer } from './searchReducer';

import authReducer from './authReducers';
import authErrorReducer from './authErrorReducers';

// rootReducer combines reducers
// Reducers are functions that take the current state and an action as arguments, and return a new state result.

const rootReducer = combineReducers({
    // userReducer: UserReducer,
    homeRecipeReducer: homeRecipeReducer,
    recipeIngredientsReducer: recipeIngredientsReducer,
    favoriteReducer: favoriteReducer,
    searchReducer: searchReducer,
    authReducer: authReducer,
    //authErrorReducer: authErrorReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer };