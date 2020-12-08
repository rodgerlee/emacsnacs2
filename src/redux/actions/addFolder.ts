import React , {Dispatch} from 'react'
import {FolderContainer} from '../models'

export interface addingFolder{
    type: 'ADD',
    payload: string
}


export const addFolder = (name: string) =>{
    return async (dispatch: Dispatch<addingFolder>) => {
    dispatch({   
    type: 'ADD',
    payload: name
})
    }
};