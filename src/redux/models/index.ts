// randomRecipe
export interface RandomRecipe{
    id: string,
    title: string,
    image: string,
    summary: string,
    readyInMinutes: string,
    instructions: string
}

export interface SearchedRecipe{
    id: string,
    title: string,
    image: string,
}

export interface ReadyInThirtyRecipe{
    id: string,
    title: string,
    image: string,
    noInfo: true
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

export interface IngredientsContainer {
    ingredients: [RecipeIngredient]
}

export interface RandomRecipeContainer{
    recipes: [RandomRecipe]
}

export interface ReadyInThirtyContainer{
    results: [ReadyInThirtyRecipe]
}

export interface SearchedRecipeContainer{
    results: [SearchedRecipe]
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
    readyInThirties: ReadyInThirtyContainer
}

export interface recipeDetailState {
    recipeIngredients: IngredientsContainer
    recipeInfo: RandomRecipe
}