import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { RandomRecipe, ReadyInThirtyRecipe } from '../redux'
import React from 'react'

interface RandomRecipeProps{
    item: RandomRecipe;
    onTap: Function;

}
interface ReadyInThirtyRecipeProps{
    item: ReadyInThirtyRecipe;
    onTap: Function;

}

const RandomRecipeCard: React.FC<RandomRecipeProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.randomContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const ReadyInThirtyCard: React.FC<ReadyInThirtyRecipeProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.readyInThirtyContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 380, height: 360, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 20, marginTop: 15, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    randomContainer: {
        width: 160,
        height: 450,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5
    },
    readyInThirtyContainer: {
        width: 400,
        height: 400,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
})

export { RandomRecipeCard, ReadyInThirtyCard }
