import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageBackground, Dimensions } from 'react-native'
// import { WebView } from 'react-native-webview'
import { ScrollView } from 'react-native-gesture-handler'
import { RandomRecipe } from '../redux'

interface RecipeDetailProps{ 
    // navigation: {}
    navigation: { getParam: Function }
}

const RecipeDetailScreen: React.FC<RecipeDetailProps> = (props) => {
    // console.log(props)

    const { getParam } = props.navigation;

    const recipeDetail = getParam('recipe') as RandomRecipe

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <ImageBackground source={{ uri: `${recipeDetail.image}`}}
                style={{ width: Dimensions.get('screen').width, height: 250, justifyContent: 'flex-end'}}
                >
                    <View style={{ height: 80, backgroundColor: 'rgba(0,0,0,0.6)', padding: 10}}>
                        <Text style={{ color: '#FFF', fontSize: 30, fontWeight: '700' }}>{recipeDetail.title}</Text>
                        <Text style={{ color: '#FFF', fontSize: 25, fontWeight: '700' }}>{recipeDetail.readyInMinutes} minutes</Text>
                    </View>

                </ImageBackground>
                <ScrollView style={styles.scrollView}>
                    <Text style={{ fontSize: 20, fontWeight: '600'}}>Summary</Text>
                    {/* <WebView>
                        source={{ uri: `${recipeDetail.sourceUrl}`}}
                    </WebView> */}
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'justify'}}>{recipeDetail.summary}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '600'}}>Instructions</Text>
                    <Text style={{ margin: 10, fontSize: 15, textAlign: 'justify'}}>{recipeDetail.instructions}</Text>
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
        alignItems: 'center'
    },
    footer: {
        flex: 1, 
        backgroundColor: 'cyan'
    },
    scrollView: {
        margin: 10,

    }
})

export { RecipeDetailScreen }