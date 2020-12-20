import React, {setState} from 'react'
import { newFolder, addingToFolder, enteredName, openFolder} from '../actions/addFolder'
import {FolderContainer} from '../models'

const favstate = {
   
    folderNames: [{
        key: 0,
        name: "All Favorites",
        saved: [0, 1, 2],
        open: false
    }],
    enteredName: "",
    index:-1
// const favstate = {
//     folderNames: { } as [FolderContainer],
//     enteredName: { } as string,
//     index: { } as number

};

export type favAction = addingToFolder|newFolder|enteredName|openFolder;
const favoriteReducer = (state = favstate, action: favAction) =>{
    //want it to load the next recipe or the string "no recipe chosen"
    switch(action.type){

    case'recipeAdded':
        //adding a recipe to all favorites 
        let {folderNames} = state
        console.log("state is", state)
        folderNames[0].saved.push(action.payload) 
        const newState = {folderNames};
        console.log("newstat is", newState)
        return newState
    case 'enteredName':
        //changing enterName state
        let {enteredName} = state
        enteredName = action.payload
        const newState3 = {enteredName}
        return newState3
    case'newFolder':
    //adding a new folder to folderNames [] with enteredName
        setState({ folderNames: [...state.folderNames, {key: state.folderNames.length +1, name: state.enteredName, saved: [0] }]});
        console.log("inside reducer new folder")
        const newState2 = {folderNames};
        return newState2
    case 'openFolder':
        const index = action.payload
        //change open status and set index 
        state.folderNames[index].open = !state.folderNames[index].open
        state.index = index
    default:
        return state
    }
}
    export {favoriteReducer}