// randomRecipe
export interface RandomRecipe{
    id: string,
    title: string,
    image: string,
    summary: string,
    readyInMinutes: string,
    instructions: string
}

export interface ReadyinThirtyRecipe{
    id: string,
    title: string,
    image: string,
}

export interface RandomRecipeContainer{
    recipes: [RandomRecipe]
}

export interface ReadyinThirtyContainer{

}


//online food order app part2, 11:23 bookmark
//main menu: randomRecipes
// export interface RandomRecipes{
//     randomRecipes: [RecipeContainer]
// }

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
}

export interface ReadyinThirtyState {

}

