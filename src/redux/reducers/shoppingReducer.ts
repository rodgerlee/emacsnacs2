import { ShoppingAction } from '../actions'
import { RecipeContainer, ShoppingState } from '../models'

const initialState = {
    randomrecipes : {  } as RecipeContainer
}

// shoppingReducer calls the shoppingAction, which calls the API and gives us a payload data for randomrecipes
// the initial state is shown above, which is empty, but it will call an action: shoppingaction, to change the state.
// shopping action will call a dispatch function, to change the state. 

const ShoppingReducer = (state: ShoppingState = initialState, action: ShoppingAction) => {

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


export { ShoppingReducer }