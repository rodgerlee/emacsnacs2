import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { RecipeIngredient } from '../redux'
import React from 'react'
import { INGREDIENT_PIC_URL } from '../utils'

interface RecipeIngredientProps{
    item: RecipeIngredient;
}

const IngredientCard: React.FC<RecipeIngredientProps> = ({ item }) => {
    return (
        <View style={styles.container} >
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${INGREDIENT_PIC_URL}/${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                {/* <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}></Text> */}
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.name}: {item.amount.us.value} {item.amount.us.unit}</Text>
            </View>
        </View>
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

export { IngredientCard }
