import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions , Image , TouchableHighlight, Button} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'

import { connect } from 'react-redux'
import { onAvailability, UserState, ApplicationState, RandomRecipeState } from '../redux'
import { BASE_URL, APIKEY } from '../utils'

import { ButtonWithIcon, RecipeCard } from '../components'

interface HomeProps{
    randomRecipeReducer: RandomRecipeState,
    onAvailability: Function
}


// react function component
export const _HomeScreen: React.FC<HomeProps> = (props) => {
    
    const { randomrecipes } = props.randomRecipeReducer;
    const { recipes } = randomrecipes;

    useEffect(() => {
        props.onAvailability()
    }, [])
    
    return (
 
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.header}>Random Recipes of the Day</Text>
                </View>
                <ScrollView>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={ recipes }
                        renderItem = {({ item }) => <RecipeCard item={item} onTap={() => { alert('recipe tapped')}} /> }
                        keyExtractor={(item) => item.id}
                    />
                </ScrollView>

            </View>
            <View style={styles.middle}>
                <View>
                    <Text style={styles.header}>Breakfast</Text>
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
    randomRecipeReducer: state.randomRecipeReducer
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const HomeScreen = connect(mapToStateProps, { onAvailability })(_HomeScreen)

export { HomeScreen }