import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageBackground, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { loadIngredients, ApplicationState, RandomRecipe, recipeDetailState } from '../redux'
import { IngredientCard } from '../components'
import { connect } from 'react-redux'

interface RecipeDetailProps{ 
    // navigation: {}
    navigation: { getParam: Function },
    loadIngredients: Function,
    recipeIngredientsReducer: recipeDetailState
}

export const _RecipeDetailScreen: React.FC<RecipeDetailProps> = (props) => {
    // console.log(props)
    const { getParam } = props.navigation;
    const recipeDetail = getParam('recipe') as RandomRecipe
    const no_info = getParam('noInfo')

    useEffect(() => {
        props.loadIngredients(recipeDetail.id, no_info)
    }, [])
 
    const { recipeIngredients, recipeInfo } = props.recipeIngredientsReducer
    const { ingredients } = recipeIngredients
    // console.log(ingredients)


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ImageBackground source={{ uri: `${recipeDetail.image}`}}
                style={{ width: Dimensions.get('screen').width, height: 250, justifyContent: 'flex-end'}}
                >
                    <View style={{ height: 100, backgroundColor: 'rgba(0,0,0,0.6)', padding: 10}}>
                        <ScrollView 
                            horizontal={true} 
                        >
                            <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '700'}}>{recipeDetail.title}</Text>
                        </ScrollView>
                        
                        <Text style={{ color: '#FFF', fontSize: 25, fontWeight: '700' }}>{ no_info ? recipeInfo.readyInMinutes : recipeDetail.readyInMinutes} minutes</Text>
                    </View>

                </ImageBackground>
                <ScrollView
                    directionalLockEnabled={true}
                >
                    <View style={{ flex: 1}}>
                        <Text style={{ fontSize: 25, fontWeight: '600', paddingLeft: 10, paddingTop: 10}}>Summary</Text>
                        <WebView
                            source={{ html: ( no_info ? recipeInfo.summary : `${recipeDetail.summary}`) }}
                            style={{width: Dimensions.get('screen').width, height:200,backgroundColor:'blue',marginTop:20}}
                        />
                    </View>
                    <View style={{ flex: 1}}>
                        <Text style={{ fontSize: 25, fontWeight: '600', paddingLeft: 10, paddingTop: 10}}>Instructions</Text>
                        <WebView
                            source={{ html: ( no_info ? recipeInfo.instructions :`${recipeDetail.instructions}`) }}
                            style={{width: Dimensions.get('screen').width, height:200,backgroundColor:'blue',marginTop:20}}
                        />
                    </View>
                    

                    {/* <Text style={{ fontSize: 20, fontWeight: '600'}}>Summary</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'justify'}}>{recipeDetail.summary}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '600'}}>Instructions</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'justify',}}>{recipeDetail.instructions}</Text> */}

                    <View style={{flex: 1, marginTop: 10}}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={ ingredients }
                            renderItem = {({ item }) => <IngredientCard item={item} />}
                            keyExtractor={(item) => item.name}
                    
                        />
                    </View>
                </ScrollView> 
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F2F2F2',
    },
    body: {
        flex: 10,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    footer: {
        flex: 1, 
        backgroundColor: 'cyan'
    },
})

const mapToStateProps = (state: ApplicationState) => ({
    recipeIngredientsReducer: state.recipeIngredientsReducer,
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const RecipeDetailScreen = connect(mapToStateProps, { loadIngredients })(_RecipeDetailScreen)

export { RecipeDetailScreen }