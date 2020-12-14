import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY_2, APIKEY, APIKEY_3, APIKEY_6 } from '../../utils'
import { IngredientsContainer, RandomRecipe } from '../models'

//availability Action

interface IngredientsAction{
    readonly type: 'ON_INGREDIENTS',
    payload:  IngredientsContainer
}

interface RecipeInfoAction{
    readonly type: 'ON_RECIPE_INFO',
    payload: RandomRecipe
}

interface ErrorAction{
    readonly type: 'ON_ERROR',
    payload: any
}

export type recipeDetailAction = IngredientsAction | RecipeInfoAction | ErrorAction;

//Trigger actions from components

export const loadIngredients = (RECIPE_ID: string, no_info: boolean) => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.

    return async ( dispatch: Dispatch<recipeDetailAction>) => {

        try {
            // ?apiKey=${APIKEY}&number=5&tags=vegetarian%252Cdessert
            const ingredientsResponse = await axios.get<IngredientsContainer>(`${BASE_URL}/recipes/${RECIPE_ID}/ingredientWidget.json`, {
                params: {
                    apiKey: APIKEY_6,
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
            if (no_info) {
                // console.log('no info')
                const recipeInfoResponse = await axios.get<RandomRecipe>(`${BASE_URL}/recipes/${RECIPE_ID}/information`, {
                    params: {
                        apiKey: APIKEY_6,
                    }
                })
                if(!recipeInfoResponse){
                    dispatch({
                        type: 'ON_ERROR',
                        payload: 'Recipe Ingredients fetch error'
                    })
                } else {
                    dispatch({
                        type: 'ON_RECIPE_INFO',
                        payload: recipeInfoResponse.data
                    })
                }
            }
        } catch(error) {
            dispatch({
                type: 'ON_ERROR',
                payload: error
            })
        }
    }
}


