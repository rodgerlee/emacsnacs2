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

export class FavoriteScreen extends React.Component {
state = {
    folderNames: [{
        name: "All Favorites",
        saved: ["0"]
    }],
    enteredName: ""
}
newFolder = () => {
    this.setState({ folderNames: [...this.state.folderNames, {name: this.state.enteredName, saved: ["0"] }]});
    this.state.enteredName = "";
}
render(){
    
    return(
    <><View style={styles.container}>
            <Text style={styles.header}> Favorites</Text>
            <TextInput
                placeholder = "New Folder Name"
                onChangeText={(enteredName)=>this.setState({enteredName:enteredName})}
                value = {this.state.enteredName}
            >
            </TextInput>
            <Button title="New Folder" onPress={() => this.newFolder()} />
            <TextInput
               
                >
            </TextInput>
        </View>
            <View style={styles.middle}>
                <FlatList 
                data = {this.state.folderNames}
                renderItem = {({item})=> (
                    <Text>{item.name}</Text>
                )}/>
            </View></>
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
            justifyContent: 'center',
            alignItems: 'center',
        },
        middle: {
            flex: 8,
            justifyContent: 'center',
            alignItems: 'center'
    
        },
        bottom: {
            flex: 1,
            backgroundColor: 'cyan'
        },
    
    })