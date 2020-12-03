import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { RecipeIngredient } from '../redux'
import React from 'react'
import { INGREDIENT_PIC_URL, WIDTH } from '../utils'

interface RecipeIngredientProps{
    item: RecipeIngredient;
}

const IngredientCard: React.FC<RecipeIngredientProps> = ({ item }) => {
    return (
        <View style={styles.container} >
            <View style={{marginLeft:10, marginRight:10}}>
                <Image
                    source={{uri:`${INGREDIENT_PIC_URL}/${item.image}`}}
                    style={styles.ingimg}
                />
            </View>
            <View style={styles.ingtextcontainer}>
                <Text style={styles.ingtext}>
                    {item.amount.us.value} {item.amount.us.unit} {item.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ingimg:{
        flex:1,
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fcfcfc',
    },
    ingtext:{
        fontSize: 16,
        marginTop: 5,
        color: '#858585',
        flexWrap: 'wrap',
    },
    ingtextcontainer:{
        flex:3,
        height:40,
        marginLeft:10,
        marginRight:10,
    },
    container: {
        width: WIDTH,
        height: 40,
        flex:1,
        flexDirection:'row',
        margin: 5,
    },
})

export { IngredientCard }
