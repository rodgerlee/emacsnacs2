//import { Row } from 'native-base';
import React, {  Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, Alert, TextInput} from 'react-native'
import { WIDTH } from '../utils';
import {SearchedRecipe} from '../redux/models'
import {ImageBackground} from 'react-native'
import axios from 'axios'



 export const ListFolder = ({item, Display}) => {
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