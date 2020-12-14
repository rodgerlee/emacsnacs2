//import { Row } from 'native-base';
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert} from 'react-native'
import { WIDTH } from '../utils';
import {FolderContainer, SearchedRecipe} from '../redux/models'
import {ImageBackground} from 'react-native'
import axios from 'axios'
import {BASE_URL, APIKEY_5} from '../utils'
import { createNativeWrapper } from 'react-native-gesture-handler';


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
// function wrapper (item) {
//     (async () => {
//         await getRecipe(item);
//     })();
// }

 const getRecipe = (item) => {
   
    axios.get<SearchedRecipe>(`${BASE_URL}/recipes/${item}/information`, {
        params: {
            apiKey: APIKEY_5
        } 
    })
    .then(response => {
        const recipe =  response.data
        return recipe
    })
    .catch(error => {
        console.log(error)
    })
    
}
// const onTapRecipe = (item: SearchedRecipe) => {
//     navigate('RecipeDetailPage', { recipe: item, noInfo: true})
// }
interface SearchedRecipeProps{
    item: SearchedRecipe;
    onTap: Function;
}
const DisplayRecipe= (item : SearchedRecipe, onTap: Function) => {
    console.log(item.id)
    return (
        <TouchableOpacity style={{marginTop:15}} onPress={() => onTap(onTap)}>
        <ImageBackground
            source={{uri: `${item.image}`}}
            style={styles.searchedRecipeContainer}
            imageStyle={styles.img}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
    );
}
export const ListRecipe = ({item}) => {
    //getRecipe by id
    console.log("saved is", item)
    const numofcols = 2;
    //const WIDTH = Dimensions.get("window").width;
    console.log(item[0])
    getRecipe(item[0])
    console.log(getRecipe(item[0]).title)
    return (
            
             <FlatList
                data = {item}
                numColumns = {numofcols}
                style = {styles.container}
                renderItem ={({item}) => {
                   
                    return(
                    <TouchableOpacity onPress={() => alert("pressed")}>
                        <Text>{}</Text>
                    </TouchableOpacity>
                    )}
                    } />
                   
                
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
    titleContainer:{
        flexDirection:'row',
        height:'20%',
        backgroundColor:'rgba(0,0,0,0.4)',
        // borderRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    img:{
        borderRadius: 20,
        backgroundColor: '#EAEAEA',
    },
    recipeCard: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 160,
        backgroundColor: 'lemonchiffon',
        flex: 1,
        margin: 8
    },
    searchedRecipeContainer: {
        width: WIDTH-30,
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom:0,
    },
    title:{
        fontSize:25,
        marginTop:10,
        marginLeft:10,
        color: '#FFF',
        flex: 1,
        fontWeight:'600',
        alignSelf:'flex-start',
        flexWrap:'wrap'
    },
})