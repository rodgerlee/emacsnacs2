import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY_2, APIKEY } from '../../utils'
import { IngredientsContainer } from '../models'

//availability Action

interface IngredientsAction{
    readonly type: 'ON_INGREDIENTS',
    payload:  IngredientsContainer
}

interface ErrorAction{
    readonly type: 'ON_ERROR',
    payload: any
}

export type recipeDetailAction = IngredientsAction | ErrorAction

//Trigger actions from components

export const loadIngredients = (RECIPE_ID: string) => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.

    return async ( dispatch: Dispatch<recipeDetailAction>) => {
        
        try {
            // ?apiKey=${APIKEY}&number=5&tags=vegetarian%252Cdessert
            const ingredientsResponse = await axios.get<IngredientsContainer>(`${BASE_URL}/recipes/${RECIPE_ID}/ingredientWidget.json`, {
                params: {
                    apiKey: APIKEY_2,
                }
            })
            // console.log(ingredientsResponse.data)
            // console.log('homeInitAction')
            if(!ingredientsResponse){
                dispatch({
                    type: 'ON_ERROR',
                    payload: 'Recipe Ingredients fetch error'
                })
            } else {
                dispatch({
                    type: 'ON_INGREDIENTS',
                    payload: ingredientsResponse.data
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


