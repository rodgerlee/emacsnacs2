import axios from 'axios'
import { Dispatch, useState, push } from 'react'
import {StyleSheet, View} from 'react-native'
import {FolderContainer, SavedRecipe} from '../models'

interface LoadRecipesAction{
    type: 'LOAD',
    payload: FolderContainer
}

interface NothingSavedAction{
    type: 'NOTHING SAVED',
    payload: FolderContainer
}
//favorite init action will deal with if we have the next recipe or not 
export type favoriteInit = LoadRecipesAction | NothingSavedAction;
export const  startPage =() =>{ 

    return async ( dispatch : Dispatch<favoriteInit>) =>{
        
        try{
       //get information from mongo 
        const createInital = (folder: FolderContainer, saved: SavedRecipe)=>{
            saved.id = '716429'
            folder.name = 'All Favorites',
            folder.saved.push(saved)
            return (folder)
        }
       // console.log(nextRecipeResponse);
       // if(nextRecipeResponse){     
        dispatch ({
        type : 'NOTHING SAVED',
        payload: createInital()
        });
        // dispatch({

        //     type: 'favorite/NoRecipe',
        //     render: noNextRecipeDisplay, })
       
        // }
    //     }
    //     else {
    //     let object :noNextRecipe = {text: true};
    //     object.text = true;
    //     dispatch ({
    //         type : 'favorite/NoRecipe',
    //         payload: noNextRecipeDisplay(object) })
        
    //     }
    // }
        }
    catch(error){
        dispatch({
            type: 'ON_SHOPPING_ERROR',
            payload: error,
        })
    
}
}}
    
//export const 
//'No recipe selected to make next.  Please search for recipes, find one you like, click the heart and select "Make recipe next"'
const styles = StyleSheet.create({
    NextRecipe: {
        width: 160,
            height: 450,
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: 5},
    Text: {
        fontSize: 15,
        fontWeight: '400',
        color: '#BDB9B3',
        marginLeft: 20, 
        padding: 10
    
    }
    })