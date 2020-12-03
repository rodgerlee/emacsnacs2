import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import { WebView } from 'react-native-webview'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { loadIngredients, ApplicationState, RandomRecipe, recipeDetailState } from '../redux'
import { IngredientCard } from '../components'
import { connect } from 'react-redux'
import { WIDTH } from '../utils'

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

    const styleHTML = `
        document.body.style.font = "normal normal 15px arial,serif";
        document.body.style.bold = "normal normal 20px arial,serif";
        document.body.style.fontSize="40";
        document.body.style.color="#5e5e5e";
        ocument.body.style.lineHeight="3";
    `;
    // console.log(recipeDetail.instructions)

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ImageBackground
                    source={{ uri: `${recipeDetail.image}`}}
                    style={{ width: WIDTH, height: 250, justifyContent: 'flex-end'}}
                >
                    <View style={{ height: 100, backgroundColor: 'rgba(0,0,0,0.4)', padding: 10}}>
                        <ScrollView horizontal={true}>
                            <Text style={styles.title}>{recipeDetail.title}</Text>
                        </ScrollView>
                        <Text style={styles.subtitle}>{ no_info ? recipeInfo.readyInMinutes : recipeDetail.readyInMinutes} minutes</Text>
                    </View>
                </ImageBackground>
                <ScrollView
                    directionalLockEnabled={true}
                >
                    <View style={{flex: 1, marginTop: 10}}>
                        <Text style={styles.header}>Ingredients</Text>
                        <FlatList
                            data={ ingredients }
                            renderItem = {({ item }) => <IngredientCard item={item} />}
                            keyExtractor={(item) => item.name}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.header}>Summary</Text>
                        <WebView
                            source={{ html: ( no_info ? recipeInfo.summary : `${recipeDetail.summary}`)}}
                            style={styles.htmlcontainer}
                            injectedJavaScript={styleHTML}
                            onMessage={(event)=>{}}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.header}>Instructions</Text>
                        <WebView
                            source={{ html: ( no_info ? recipeInfo.instructions :`${recipeDetail.instructions}`) }}
                            style={styles.htmlcontainer}
                            injectedJavaScript={styleHTML}
                            onMessage={(event)=>{}}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: '700'
    },
    subtitle:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: '500'
    },
    header:{
        fontSize: 25,
        fontWeight: '600',
        paddingLeft: 10,
        paddingTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    body: {
        flex:10,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    htmlcontainer:{
        height:300,
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
})

const mapToStateProps = (state: ApplicationState) => ({
    recipeIngredientsReducer: state.recipeIngredientsReducer,
})

// connect will call the API and all for the Applicationstate to access the data through the reducers.
const RecipeDetailScreen = connect(mapToStateProps, { loadIngredients })(_RecipeDetailScreen)

export { RecipeDetailScreen }