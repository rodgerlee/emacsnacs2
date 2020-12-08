import { Row } from 'native-base';
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import { WIDTH } from '../utils';

 export const ListFolder = ({item, Display}) => {
    console.log("inside list folder")
    return (
        <TouchableOpacity onPress = {() => Display(item.key) } >
            <View style = {styles.box}>
                <Text style = {styles.name}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};


export const ListRecipe = ({item}) => {
    //getRecipe by id
    const numofcols = 2;
    const WIDTH = Dimensions.get("window").width;
    console.log("inside list recipe item =", item)
    return (
        
             <FlatList
                data = {item}
                numColumns = {numofcols}
                style = {styles.container}
                renderItem ={({item}) => (
                  
                    <TouchableOpacity>
                        <Text style = {styles.recipeCard}>{item}</Text>
                    </TouchableOpacity>
                )}
                                    />
            /* <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text> */
        
    )
}
const styles = StyleSheet.create({

    top:{ 
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        //direction: 'ltr',
        alignContent: 'center',
        backgroundColor: '#FFF'
    },
    box: {
        flex: 1,
        height: 60,
        backgroundColor: '#f2f2f2',
        //width: 120,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        alignItems: 'stretch',
        borderColor: '#FFF',
       // alignContent: 'stretch', 
        
                 
    },
    container: {
        flex: 1,
        marginVertical: 10, 
      //  alignContent: 'center',
      //  justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        color: '#C70039',

    
    },
    recipeCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 160,
        backgroundColor: 'lemonchiffon',
        flex: 1,
        margin: 8
    }
})