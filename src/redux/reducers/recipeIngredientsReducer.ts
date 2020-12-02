import { recipeDetailAction } from '../actions'
import { IngredientsContainer } from '../models'

const initialState = {
    recipeIngredients: {  } as IngredientsContainer
}

// randomRecipeReducer calls the homeInitAction, which calls the API and gives us a payload data for randomrecipes
// the initial state is shown above, which is empty, but it will call an action: homeInitAction, to change the state.
// shopping action will call a dispatch function, to change the state. 

const recipeIngredientsReducer = (state = initialState, action: recipeDetailAction) => {
    switch(action.type) {
        case 'ON_INGREDIENTS':
            return {
                ...state,
                recipeIngredients: action.payload
            }
        default: 
            return state
    }
}

export { recipeIngredientsReducer }