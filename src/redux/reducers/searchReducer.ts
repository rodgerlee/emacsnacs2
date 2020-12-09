import { searchAction } from '../actions'
import { SearchedRecipeContainer  } from '../models'

const initialState = {
    searchResults: {  } as SearchedRecipeContainer
}

// randomRecipeReducer calls the homeInitAction, which calls the API and gives us a payload data for randomrecipes
// the initial state is shown above, which is empty, but it will call an action: homeInitAction, to change the state.
// shopping action will call a dispatch function, to change the state. 

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