import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ShoppingState } from '../redux'
import { BASE_URL } from '../utils'

import { RecipeContainer } from '../redux/models'
import axios from 'axios'
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
            <View style={styles.navigation}> 
                <TouchableHighlight onPress={ fetchApiCall }> 
                    {/*  */}
                    <View style={styles.button}>
                        <Text >Console Log Random Recipe</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.body}>
                {/* TODO: put the API call in shoppingReducer, and create RecipeCard */}
                {/* <ScrollView> */}
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={ recipes }
                        renderItem = {({ item }) => <RecipeCard item={item} onTap={() => { alert('recipe tapped')}} /> }
                        keyExtractor={(item) => item.id}
                    />
                    <Text>Hello</Text>
                {/* </ScrollView> */}


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

const mapToStateProps = (state: ApplicationState) => ({
    shoppingReducer: state.shoppingReducer
})

const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }