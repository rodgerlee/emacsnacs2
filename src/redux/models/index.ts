// randomRecipe
export interface Recipe{
    id: string,
    title: string,
    image: string,
    summary: string,
    readyInMinutes: string,
    instructions: string
}

export interface RecipeContainer{
    recipes: [Recipe]
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

export interface ShoppingState {
    randomrecipes: RecipeContainer,
}

