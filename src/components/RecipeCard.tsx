import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { Recipe } from '../redux'
import React from 'react'

interface RecipeProps{
    item: Recipe;
    onTap: Function;

}

const RecipeCard: React.FC<RecipeProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    container: {
        width: 160,
        height: 450,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5
    },
})

export { RecipeCard }
