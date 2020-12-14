import React , {Dispatch} from 'react'
//action

export interface addingToFolder{
    type: 'recipeAdded',
    payload: number
}


export const addToFolder = (saved : number) =>{
    return async (dispatch: Dispatch<addingToFolder>) => {
    dispatch({   
    type: 'recipeAdded',
    payload: saved
    })
    }
};

export interface newFolder{
    type: 'newFolder'
}
export const newFolderAction = () => {
    console.log("ran insde newfolderaction")
    return async (dispatch: Dispatch<newFolder>) => {
        dispatch({
            type: 'newFolder'
        })
    }
}


// export const newFolderAction = () => (
//     {
//         type: 'newFolder'
//     }
// );
// //this changes the state entered name for use by newFolder
export interface enteredName{
    type: 'enteredName',
    payload: string
}
export const enteredNameAction = (name: string) => {
    return async (dispatch: Dispatch<enteredName>) => {
        dispatch({
            type: 'enteredName',
            payload: name
        })
    }
}

// export const enteredNameAction = (name: string) => ({
//     type: 'enteredName',
//     payload: name
// });
export interface openFolder{
    type: 'openFolder',
    payload: number
}

export const openFolderAction = (index: number) => {
    return async (dispatch: Dispatch<openFolder>) => {
        dispatch({
            type: 'openFolder',
            payload: index
        })
    }
}

// export const openFolderAction = (index: number) => ({
//     type: 'openFolder',
//     payload: index
// });