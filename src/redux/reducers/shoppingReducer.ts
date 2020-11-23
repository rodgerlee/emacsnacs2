import { ShoppingAction } from '../actions'
import { FoodAvailability, ShoppingState } from '../models'


const initialState = {
    availability: {  } as FoodAvailability
}

const ShoppingReducer = (state: ShoppingState = initialState, action: ShoppingAction) => {

    switch(action.type) {
        case 'ON_AVAILABILITY':
            return {
                ...state,
                availability: action.payload
            }
        default: 
            return state
    }
}


export { ShoppingReducer }