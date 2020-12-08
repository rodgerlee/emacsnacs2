// randomRecipe
export interface RandomRecipe{
    id: string,
    title: string,
    image: string,
    summary: string,
    readyInMinutes: string,
}

export interface SearchedRecipe{
    id: string,
    title: string,
    image: string,
}

export interface IngredientAmounts {
    us: {
        value: string,
        unit: string
    },
    metric: {
        value: string,
        unit: string
    }
}

export interface RecipeIngredient{
    name: string,
    image: string,
    amount: IngredientAmounts
}

export interface SavedRecipe{
    id: string
}

export interface IngredientsContainer {
    ingredients: [RecipeIngredient]
}

export interface RandomRecipeContainer{
    recipes: [RandomRecipe]
}

export interface SearchedRecipeContainer{
    results: [SearchedRecipe]
}

export interface FolderContainer {
    name: string,
    saved?: [SavedRecipe]
}


//online food order app part2, 11:23 bookmark

//User model

export interface UserModel{
    firstName: string;
    lastName: string;
    token: string
}   

export interface UserState{
    user: UserModel;
    error: string | undefined
}

export interface homeRecipeState {
    randomrecipes: RandomRecipeContainer,
    readyInThirties: SearchedRecipeContainer
}

export interface recipeDetailState {
    recipeIngredients: IngredientsContainer
    recipeInfo: RandomRecipe
}

export interface favoriteState{
    folders: [FolderContainer]
}