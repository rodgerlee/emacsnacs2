// randomRecipe
export interface RandomRecipe{
    title: String,
    icon: String
}

//online food order app part2, 11:23 bookmark
export interface FoodAvailability{
    randomRecipies: [RandomRecipe]
}

//User model

export interface UserModel{
    firstName: String;
    lastName: String;
    token: String
}   

export interface UserState{
    user: UserModel;
    error: string | undefined
}

export interface ShoppingState {
    availability: FoodAvailability,
}

