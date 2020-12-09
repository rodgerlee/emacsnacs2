import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY_2, APIKEY, APIKEY_3, APIKEY_4} from '../../utils'
import { SearchedRecipeContainer } from '../models'

//availability Action

interface SearchScreenAction{
    readonly type: 'ON_SEARCH',
    payload:  SearchedRecipeContainer
}
interface ErrorAction{
    readonly type: 'ON_ERROR',
    payload: any
}

export type searchAction = SearchScreenAction | ErrorAction

//Trigger actions from components

export const onSearch = (keyword: string) => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.

    return async ( dispatch: Dispatch<searchAction>) => {

        try {
            const searchResponse = await axios.get<SearchedRecipeContainer>(`${BASE_URL}/recipes/complexSearch`, {
                params: {
                    query: keyword,
                    number: 4,
                    instructionsRequired: true,
                    apiKey: APIKEY_4,
                }
            })

            if (!searchResponse){
                dispatch({
                    type: 'ON_ERROR',
                    payload: 'Search Recipe fetch error'
                })
            } else {
                dispatch({
                    type: 'ON_SEARCH',
                    payload: searchResponse.data
                })
            }
        } catch(error) {
            dispatch({
                type: 'ON_ERROR',
                payload: error
            })
        }
    }
}


