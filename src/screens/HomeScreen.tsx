import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight, Button} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, homeRecipeState, RandomRecipe, ReadyInThirtyRecipe} from '../redux'

import { ButtonWithIcon, RandomRecipeCard, ReadyInThirtyCard } from '../components'
import { useNavigation } from '../utils'

interface HomeProps{
    homeRecipeReducer: homeRecipeState,
    onAvailability: Function,
}

// react function component
export const _HomeScreen: React.FC<HomeProps> = (props) => {

    const { navigate } = useNavigation()

    const { randomrecipes, readyInThirties } = props.homeRecipeReducer;
    const { recipes } = randomrecipes;
    const { results } = readyInThirties;

    // console.log(recipes)
    useEffect(() => {
        props.onAvailability()
    }, [])

    const onTapRandomRecipe = (item: RandomRecipe) => {
        navigate('RecipeDetailPage', { recipe: item})
    }
    const onTapReadyInThirtyRecipe = (item: ReadyInThirtyRecipe) => {
        navigate('RecipeDetailPage', { recipe: item})
    }

    return (

        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.header}>Random Recipes of the Day</Text>
                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ recipes }
                    renderItem = {({ item }) => <RandomRecipeCard item={item} onTap={onTapRandomRecipe} /> }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.middle}>
                <View>
                    <Text style={styles.header}>Ready in 30 min</Text>
                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={ results }
                    renderItem = {({ item }) => <ReadyInThirtyCard item={item} onTap={onTapReadyInThirtyRecipe} /> }
                    keyExtractor={(item) => item.id}
                />

                <ButtonWithIcon
                    icon={require('../images/refresh-button.png')}
                    width={40}
                    height={40}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: '600',
        color: '#f15b5d',
        marginLeft: 20,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    top: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottom: {
        flex: 1,
        backgroundColor: 'cyan'
    },

})


const mapToStateProps = (state: ApplicationState) => ({
    homeRecipeReducer: state.homeRecipeReducer,
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)


export { HomeScreen }