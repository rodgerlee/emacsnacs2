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

export interface SearchScreenState {
    recipeSearch: string;
    searching: string;
    retrieving: string;
    searchData: SearchedRecipeContainer
    
}