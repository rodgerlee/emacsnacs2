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
    key: number,
    name: string,
    saved?: [number],
    open: boolean
}

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
    folderNames: [FolderContainer],
    enteredName: string,
    index: number
}
export interface searchState {
    searchResults: SearchedRecipeContainer
}