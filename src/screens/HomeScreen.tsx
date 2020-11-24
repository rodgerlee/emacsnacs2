import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight, Button} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, ShoppingState } from '../redux'
import { BASE_URL } from '../utils'

import { ButtonWithIcon, RecipeCard } from '../components'

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
            <View style={styles.top}>
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

            </View>
            <View style={styles.middle}>
                <View style={styles.header}>
                    <Text style={{fontSize: 25, fontWeight: '600', color: '#f15b5d', marginLeft: 20, padding: 10, }}>Breakfast</Text>
                </View>
                <ScrollView>
                    <FlatList
                        // horizontal
                        // showsHorizontalScrollIndicator={false}
                        // showsVerticalScrollIndicator={false}
                        data={ recipes }
                        renderItem = {({ item }) => <RecipeCard item={item} onTap={() => { alert('recipe tapped')}} /> }
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>
                <ButtonWithIcon
                    icon={require('../images/refresh-button.png')}
                    width={50} 
                    height={50}
                />

            </View>
            {/* <View style={styles.bottom}>
                <Text> Footer </Text>
            </View> */}
            {/* <View style={{flex:1}}>
                <View style={{borderWidth:1,position:'absolute',bottom:0,alignSelf:'flex-end'}}>
                    <Button
                        title="Refresh"
                        onPress={() => alert('Simple Button pressed')}
                    />
                </View>
            </View> */}
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
    top: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottom: {
        flex: 1,
        backgroundColor: 'cyan'
    },
    buttonStyle : {
        backgroundColor: '#fc454e',
        width: 66,
        height: 66,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    buttonTextStyle : {
        color:'white',
        fontSize: 45,
        marginBottom: 6
    }

})


const mapToStateProps = (state: ApplicationState) => ({
    shoppingReducer: state.shoppingReducer
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }