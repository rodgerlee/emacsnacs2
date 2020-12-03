import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY_2, APIKEY, APIKEY_3} from '../../utils'
import { RandomRecipeContainer, SearchedRecipeContainer } from '../models'

//availability Action

interface RandomRecipeAction{
    readonly type: 'ON_AVAILABILITY',
    payload:  RandomRecipeContainer
}
interface ReadyInThirtyAction{
    readonly type: 'ON_READYTHIRTY',
    payload:  SearchedRecipeContainer
}
interface RandomRecipeErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type homeInitAction = RandomRecipeAction | ReadyInThirtyAction | RandomRecipeErrorAction

//Trigger actions from components

export const onAvailability = () => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.
    let OFFSET = Math.floor(Math.random() * (450));

    return async ( dispatch: Dispatch<homeInitAction>) => {

        try {
            // ?APIKEY_2=${APIKEY_2}&number=5&tags=vegetarian%252Cdessert
            const randomResponse = await axios.get<RandomRecipeContainer>(`${BASE_URL}/recipes/random`, {
                params: {
                    number: 5,
                    apiKey: APIKEY_3,
                }
            })
            const readyThirtyResponse = await axios.get<SearchedRecipeContainer>(`${BASE_URL}/recipes/complexSearch`, {
                params: {
                    query: "",
                    number: 5,
                    offset: OFFSET,
                    apiKey: APIKEY_3,
                    instructionsRequired: true,
                    maxReadyTime: 30,
                }
            })
            // console.log('homeInitAction')
            if(!randomResponse){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Random Recipe fetch error'
                })
            } else {
                dispatch({
                    type: 'ON_AVAILABILITY',
                    payload: randomResponse.data
                })
            }
            if (!readyThirtyResponse){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Ready in 30 Recipe fetch error'
                })
            } else {
                dispatch({
                    type: 'ON_READYTHIRTY',
                    payload: readyThirtyResponse.data
                })
            }
        } catch(error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }
    }
}


