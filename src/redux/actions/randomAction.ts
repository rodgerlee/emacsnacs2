import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY } from '../../utils'
import { RandomRecipeContainer } from '../models'

//availability Action

export interface RandomRecipeAction{
    readonly type: 'ON_AVAILABILITY',
    payload: RandomRecipeContainer
}

export interface RandomRecipeErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type RandomAction = RandomRecipeAction | RandomRecipeErrorAction

//Trigger actions from components

export const onAvailability = () => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.

    return async ( dispatch: Dispatch<RandomAction>) => {
        
        try {

            const response = await axios.get<RandomRecipeContainer>(`${BASE_URL}/recipes/random?apiKey=${APIKEY}&number=5&tags=vegetarian%252Cdessert`)

            if(!response){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            } else {
                dispatch({
                    type: 'ON_AVAILABILITY',
                    payload: response.data
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


// {{baseUrl}}/recipes/complexSearch?query=&number=5&apiKey=013c92878d5b4b198faa13d241b413dd&instructionsRequired=true&maxReadyTime=30