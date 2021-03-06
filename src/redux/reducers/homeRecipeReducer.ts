import { homeInitAction } from '../actions'
import { RandomRecipeContainer, SearchedRecipeContainer  } from '../models'

const initialState = {
    randomrecipes : {  } as RandomRecipeContainer,
    readyInThirties : {  } as SearchedRecipeContainer,
}

// randomRecipeReducer calls the homeInitAction, which calls the API and gives us a payload data for randomrecipes
// the initial state is shown above, which is empty, but it will call an action: homeInitAction, to change the state.
// shopping action will call a dispatch function, to change the state. 

const homeRecipeReducer = (state = initialState, action: homeInitAction) => {
    switch(action.type) {
        case 'ON_AVAILABILITY':
            return {
                ...state,
                randomrecipes: action.payload
            }
        case 'ON_READYTHIRTY':
            return {
                ...state,
                readyInThirties: action.payload
            }
        default: 
            return state
    }
}

export { homeRecipeReducer }