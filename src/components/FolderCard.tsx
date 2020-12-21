//import { Row } from 'native-base';
import React, { useState, memo , Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert, TextInput} from 'react-native'
import { WIDTH } from '../utils';
import {FolderContainer, SearchedRecipe} from '../redux/models'
import {ImageBackground} from 'react-native'
import axios from 'axios'
import {BASE_URL, APIKEY_5, APIKEY_6, APIKEY_7, useNavigation} from '../utils'
import { createNativeWrapper } from 'react-native-gesture-handler';
import { hambar } from '';


 export const ListFolder = ({item, Display}) => {
    console.log("inside list folder")
    return (
        <TouchableOpacity  onPress = {() => Display(item.key) } >
            <View style = {styles.box}>
                <Text style = {styles.name}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export const CustomButton = ({item, press}) => {
    return (
        <TouchableOpacity  onPress = {() => press()}>
            <View style = {styles.textbox}>
            <Text style = {styles.name}>{item}</Text>
            </View>
        </TouchableOpacity>
    );
};

export class outSource extends Component {
    state = {
        loadedRecipe: { } as SearchedRecipe,
        
    }

    getRecipe = ({item}) => {
   console.log("called")
    axios.get<SearchedRecipe>(`${BASE_URL}/recipes/${item}/information`, {
        params: {
            apiKey: APIKEY_6
        } 
    })
    .then(response => {
        const recipe =  response.data
        console.log("recipe is", recipe)
        this.state.loadedRecipe = recipe
        console.log("loadeed", this.state.loadedRecipe)
    })
    .catch(error => {
        alert("api key has met limit")
        //this.state.loadedRecipe = {id: "0", title: "API has met limit", image: null}
    })
    
}


 showRecipe = ({item}) => {
    console.log("here")
    console.log("item", item)
    console.log("loaded", this.state.loadedRecipe)
    const numofCols = 2
    this.getRecipe(item)
   
    return(
<View>
             <TouchableOpacity style={{marginTop:15}} onPress={() =>
                                                   alert("pressed") }>
                <ImageBackground
                    source={{uri: `${this.state.loadedRecipe.image}`}}
                    style={styles.searchedRecipeContainer}
                    imageStyle={styles.img}
                                            >
                 <View style={styles.titleContainer}>
                         <Text style={styles.title}>{this.state.loadedRecipe.title}</Text>
                                                
                                                    
                </View>
                 </ImageBackground>
             </TouchableOpacity>
        
             
            </View>
            )
            }


render(){
return(
    <Text>hi there </Text>
)
}
}
const item = 0

export const showRecipeInstance = new outSource({item})

//export const MemiozedRecipe = React.memo(outSource)


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
        backgroundColor: 'lightcoral',
        //width: 120,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        alignItems: 'stretch',
        borderColor: '#f5f4e1',
       // alignContent: 'stretch', 
        
                 
    },
    textbox:{
        color: "black",
        backgroundColor: "ivory",
        height: 50,
        width: 230,
        fontSize: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3
        },shadowOpacity:0.34,
        shadowRadius: 1.27,
        elevation:2,
        margin: 10

    },
    button: {
        backgroundColor: 'navy',
        height: 50,
        width: 100,
        marginTop: 10
    },
    buttonText: {
        color: "ivory",
        fontSize: 15
    },
    container: {
        flex: 1,
        marginVertical: 10, 
      //  alignContent: 'center',
      //  justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        color: 'black',

    
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