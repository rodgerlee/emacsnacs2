import { ShoppingAction } from '../actions'
import { RecipeContainer, ShoppingState } from '../models'


const initialState = {
    randomrecipes : {  } as RecipeContainer
}

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