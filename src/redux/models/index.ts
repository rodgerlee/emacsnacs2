// randomRecipe
export interface RandomRecipe{
    id: string,
    title: string,
    image: string,
    summary: string,
    readyInMinutes: string,
    instructions: string
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

export interface RandomRecipeState {
    randomrecipes: RandomRecipeContainer,
    readyInThirties: ReadyInThirtyContainer
}


