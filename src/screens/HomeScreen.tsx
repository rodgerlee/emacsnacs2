import React from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ShoppingState } from '../redux'

interface HomeProps{
    shoppingReducer: ShoppingState,
    onAvailability: Function
}


// react function component
export const _HomeScreen: React.FC<HomeProps> = (props) => {
    const [recipesummary, setRecipesummary] = React.useState('')
    const [recipeImage, setRecipeImage] = React.useState('')

    const fetchApiCall = () => {
        async function getRandomRecipe (): Promise<object> {
          const url = new URL('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%252Cdessert');
          // url.search = new URLSearchParams( query ).toString();
          const headers = {
              "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "x-rapidapi-key": "4cfc845398msh8ef01df1a88c5cdp13b6f9jsn39afa8e55c0e",
          };
          const response = await fetch( url.toString(), { headers } );
          return await response.json();
       };
        // const query = {
        //     asset: "BTC",
        //     exchange: "Kraken",
        //     denominator: "USD",
        // };
        (async () => {
            const data = await getRandomRecipe();
            const JSONrecipe = JSON.stringify(data);
            const JSONobject = JSON.parse(JSONrecipe);
            console.log(JSONobject.recipes[0].summary);
            setRecipesummary(JSONobject.recipes[0].summary)
            setRecipeImage(JSONobject.recipes[0].image)
            console.log(JSONobject.recipes[0].image)
            // console.log(JSONobject);

            // setRandomRecipe(data);
            // setRecipesummary(data.recipes)
            // console.log(data);
        })()
          
      }

    const { availability } = props.shoppingReducer;



    return (
        <View style={styles.container}>
            <View style={styles.navigation}> 
                <TouchableHighlight onPress={ fetchApiCall }>
                    <View style={styles.button}>
                        <Text >Console Log Random Recipe</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.body}>
                {/* TODO: put the API call in shoppingReducer, and create RandomRecipeCard */}
                {/* <ScrollView>
                    <FlatList
                        // horizontal
                        // showsHorizontalScrollIndicator={false}
                        data={ randomRecipes }
                        renderItem = {({ item }) => <RandomRecipeCard item={item} onTap={() => { alert('recipe tapped')}} /> }
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView> */}


                <View>
                    <Image 
                        style={{width: 120, height: 120, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                        source={{
                            uri: recipeImage 
                        }}
                    />
                    <Text style={{ fontSize: 14, marginTop: 10, color: '#858585'}}>{ recipesummary }</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text> Footer </Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    image: {

    },
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    navigation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    button: {
        padding: 10,
        marginVertical: 15,
        backgroundColor: 'coral'
      },

})

const maptToStateProps = (state: ApplicationState) => ({
    shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(maptToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }