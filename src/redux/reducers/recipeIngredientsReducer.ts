import { recipeDetailAction } from '../actions'
import { IngredientsContainer, RandomRecipe } from '../models'

const initialState = {
    recipeIngredients: {  } as IngredientsContainer,
    recipeInfo: {   } as RandomRecipe
}

const recipeIngredientsReducer = (state = initialState, action: recipeDetailAction) => {
    switch(action.type) {
        case 'ON_INGREDIENTS':
            return {
                ...state,
                recipeIngredients: action.payload
            }
        case 'ON_RECIPE_INFO':
            return {
                ...state,
                recipeInfo: action.payload
            }
        default:
            return state
    }
}

export { recipeIngredientsReducer }