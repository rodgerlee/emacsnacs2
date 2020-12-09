//plan: make folder container that has title and array that holds recipe ids -> DONE
//when page starts load these recipes and display folder as button
//we can do this through reducer and action, call the action function here
//in action function we call recipeloader

import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, Button, Alert, FlatList, } from 'react-native'
import { connect } from 'react-redux'
import { ApplicationState} from '../redux'
import {addFolder} from '../redux/actions/addFolder'
import {bindActionCreators} from 'redux'
import { favoriteReducer } from '../redux/reducers/favoriteReducer'
import {FolderContainer, SavedRecipe, favoriteState} from '../redux/models'
import { TextInput } from 'react-native-gesture-handler'
import {ListFolder, ListRecipe} from '../components/FolderCard'

export class FavoriteScreen extends React.Component {
state = {
    folderNames: [{
        key: 0,
        name: "All Favorites",
        saved: ["0", "1", "2"],
        open: false
    }],
    enteredName: "",
    showFavorites: false,
    index:null
}
newFolder = () => {
    if (this.state.enteredName != "")
    {
     this.setState({ folderNames: [...this.state.folderNames, {key: this.state.folderNames.length +1, name: this.state.enteredName, saved: ["0"] }]});
    this.state.enteredName = "";
    }
    else
    this.state.enteredName = "";
}
showRecipes = (index) => {
    const folders = this.state.folderNames.filter((item) => item.key == index ).map(fN => fN.saved);
    console.log("run inside showrecipes")
    console.log(folders.length)
    console.log(folders[0].length)
    console.log(JSON.stringify(folders))
        return (
            <View>
                <Text>{JSON.stringify(folders)}</Text>
</View>
               // <FlatList
               // data = {folders}
                // renderItem ={({item}) => {
                //   console.log(item)
                //   console.log('printing')
                //   return(
                //     <ListRecipe item = {item}/>)
                // }}/>
            
        )
    }

render(){
    const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
    return(
    <View style={styles.container}>
            <Text style={styles.header}> Favorite Folders</Text>
            <View >
                <FlatList 
                data = {this.state.folderNames}
                renderItem = {({item})=> (
                    <ListFolder item ={item}
                     Display = {(index) => this.setState({showFavorites: true, index: index})}/>
                )}/>
            {this.state.showFavorites == true &&  <View>
                <FlatList
                data = {folders}
                renderItem = {({item}) =>(
                <ListRecipe item = {item}/>
                )}/>
                </View>}
               
            </View>
            <TextInput
                placeholder = "New Folder Name"
                onChangeText={(enteredName)=>this.setState({enteredName:enteredName})}
                value = {this.state.enteredName}
            >
            </TextInput>
            <Button title="New Folder" onPress={() => this.newFolder()} />
          
               
                
           
        </View>
          
    )
}
}

const styles = StyleSheet.create({
        header:{
            fontSize: 25,
            fontWeight: '600',
            color: '#f15b5d',
            textAlign: 'center'
        },
        container: {
           flex: 1,
            backgroundColor: '#FFF'
        },
        top: {
            flex: 4,
           // direction: 'ltr',
            flexDirection: 'row',
            // justifyContent: 'flex-start',
            //alignItems: 'stretch',
            //alignContent: 'stretch'
        },
        middle: {
          //  flex: 8,
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        bottom: {
           // flex: 1,
            backgroundColor: 'cyan'
        },
    
    })