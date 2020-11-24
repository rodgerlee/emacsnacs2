import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ShoppingState } from '../redux'
import { BASE_URL } from '../utils'

import { RecipeCard } from '../components'

interface HomeProps{
    shoppingReducer: ShoppingState,
    onAvailability: Function
}


// react function component
export const _HomeScreen: React.FC<HomeProps> = (props) => {
    const [recipesummary, setRecipesummary] = useState('')
    const [recipeImage, setRecipeImage] = useState('')

    const fetchApiCall = () => {
        async function getRandomRecipe (): Promise<object> {
          const url = new URL(`${BASE_URL}/recipes/random?apiKey=013c92878d5b4b198faa13d241b413dd&number=2&tags=vegetarian%252Cdessert`);

          const response = await fetch( url.toString());
            return response.json();
       };

        (async () => {
            const data = await getRandomRecipe();
            const JSONrecipe = JSON.stringify(data);
            const JSONobject = JSON.parse(JSONrecipe);
            setRecipesummary(JSONobject.recipes[0].summary)
            setRecipeImage(JSONobject.recipes[0].image)
        })()   
      }
    const { randomrecipes } = props.shoppingReducer;
    const { recipes } = randomrecipes;

    useEffect(() => {
        props.onAvailability()
    }, [])


    return (
        <View style={styles.container}>
            {/* <View style={styles.navigation}> 
                <TouchableHighlight onPress={ fetchApiCall }> 
                    <View style={styles.button}>
                        <Text >Console Log Random Recipe</Text>
                    </View>
                </TouchableHighlight>
            </View> */}
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={{fontSize: 25, fontWeight: '600', color: '#f15b5d', marginLeft: 20, padding: 10, }}>Random Recipes of the Day</Text>
                </View>
                <ScrollView>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        // showsVerticalScrollIndicator={false}
                        data={ recipes }
                        renderItem = {({ item }) => <RecipeCard item={item} onTap={() => { alert('recipe tapped')}} /> }
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>

                {/* <View>
                    <Image 
                        style={{width: 120, height: 120, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                        source={{
                            uri: recipeImage 
                        }}
                    />
                    <Text style={{ fontSize: 14, marginTop: 10, color: '#858585'}}>{ recipesummary }</Text>
                </View> */}
            </View>
            <View style={styles.footer}>
                <Text> Footer </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // shadowColor: "#000000",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //   height: 1,
        //   width: 1
        // }
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    body: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
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


const mapToStateProps = (state: ApplicationState) => ({
    shoppingReducer: state.shoppingReducer
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }