import { RandomAction } from '../actions'
import { RandomRecipeContainer, RandomRecipeState } from '../models'

const initialState = {
    randomrecipes : {  } as RandomRecipeContainer
}

// randomRecipeReducer calls the RandomAction, which calls the API and gives us a payload data for randomrecipes
// the initial state is shown above, which is empty, but it will call an action: RandomAction, to change the state.
// shopping action will call a dispatch function, to change the state. 

const randomRecipeReducer = (state: RandomRecipeState = initialState, action: RandomAction) => {

    switch(action.type) {
        case 'ON_AVAILABILITY':
            return {
                ...state,
                randomrecipes: action.payload
            }
        default: 
            return state
    }
}


export { randomRecipeReducer }