import { searchAction } from '../actions'
import { SearchedRecipeContainer  } from '../models'

const initialState = {
    searchResults: {  } as SearchedRecipeContainer
}

const searchReducer = (state = initialState, action: searchAction) => {
    switch(action.type) {
        case 'ON_SEARCH':
            return {
                ...state,
                searchResults: action.payload
            }
        default:
            return state
    }
}

export { searchReducer }