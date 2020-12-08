import { addFolder, addingFolder} from '../actions/addFolder'
import {combineReducers} from 'redux'
import {FolderContainer, favoriteState} from '../models'


const initialstate = {
   folders : { } as [FolderContainer]
};


const favoriteReducer = (state = initialstate, action: addingFolder) =>{
    //want it to load the next recipe or the string "no recipe chosen"
    switch(action.type){

     case'ADD':
           const {
               folders
           } = state;
           const addedName = action.payload
          
           state.folders.push({name: addedName })

          
           return state.folders
    default:
        return state
        }

    }

    export {favoriteReducer}