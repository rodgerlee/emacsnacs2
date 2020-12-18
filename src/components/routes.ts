import FavoriteScreen from '../screens/FavoriteScreen'
import {RecipeDetailScreen }from '../screens/RecipeDetailScreen'
import React  from 'react'

import {addNavigationHelpers, StackNavigation} from 'react-navigation'

export const Routes = ({
    FavoriteScreen: {
        screen: FavoriteScreen
    },
    RecipeDetailScreen: {
        screen: RecipeDetailScreen
    }
});


export const FavNavigation  = StackNavigation(
    Routes
);

const FavNavigationState = ({navigation}) => (
    <FavNavigation navigation = {navigation}/>
);