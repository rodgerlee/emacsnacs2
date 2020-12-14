import axios from 'axios'
import { Dispatch } from 'react'
import { BASE_URL, APIKEY_2, APIKEY, APIKEY_3 ,APIKEY_6} from '../../utils'
import { ReadyInThirtyContainer } from '../models'

//availability Action

interface ReadyInThirtyAction{
    readonly type: 'ON_READYTHIRTY',
    payload: ReadyInThirtyContainer
}

interface ReadyInThirtyErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export type ReadyThirtyAction = ReadyInThirtyAction | ReadyInThirtyErrorAction

//Trigger actions from components

export const ReadyInThirty = () => {
    // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
    // the only way to update the state is to call dispatch.
    let OFFSET = Math.floor(Math.random() * (450));

    return async ( dispatch: Dispatch<ReadyThirtyAction>) => {
        // ?query=&number=5&offset=${OFFSET}&apiKey=${APIKEY}&instructionsRequired=true&maxReadyTime=30
        try {
            const response = await axios.get<ReadyInThirtyContainer>(`${BASE_URL}/recipes/complexSearch`, {
                params: {
                    query: "",
                    number: 5,
                    offset: OFFSET,
                    apiKey: APIKEY_6,
                    instructionsRequired: true,
                    maxReadyTime: 30,
                }
            })
            // console.log('ReadyThirtyAction')
            
            if(!response){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            } else {
                dispatch({
                    type: 'ON_READYTHIRTY',
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