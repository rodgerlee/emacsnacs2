import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils'
import { FoodAvailability } from '../models'

//availability Action

export interface AvailabilityAction{
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}

export interface ShoppingErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction

//Trigger actions from components

export const onAvailability = () => {
    
    return async ( dispatch: Dispatch<ShoppingAction>) => {

        try {
            
            const response = await axios.get<FoodAvailability>(`${BASE_URL}/recipe/random?number=1&tags=vegetarian%252Cdessert`)

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