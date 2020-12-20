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
import {
    TouchableOpacity,
    ImageBackground,
} from 'react-native'


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

    // render(){
    //     const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
    //     return(
    //     <View style={styles.container}>
    //             <Text style={styles.header}> Favorite Folders</Text>
    //             <View>
    //                 <FlatList
    //                     data = {this.state.folderNames}
    //                     renderItem = {({item})=> (
    //                         <ListFolder item ={item}
    //                          Display = {(index) => this.setState({showFavorites: true, index: index})}/>
    //                     )}
    //                 />
    //                 {this.state.showFavorites == true &&
    //                     <View>
    //                         <FlatList
    //                             data = {folders}
    //                             renderItem = {({item}) =>(
    //                                 <ListRecipe item = {item}/>
    //                             )}
    //                         />
    //                     </View>
    //                 }
    //             </View>
    //             <TextInput
    //                 placeholder = "New Folder Name"
    //                 onChangeText={(enteredName)=>this.setState({enteredName:enteredName})}
    //                 value = {this.state.enteredName}
    //             >
    //             </TextInput>
    //             <Button title="New Folder" onPress={() => this.newFolder()} />




    //         </View>

    //     )
    // }
    //FOR DEMO
    render(){
        const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
        return(
        <View style={styles.container}>
                <Text style={styles.header}> Favorite Folders</Text>
                <View>
                    <FlatList
                        data = {this.state.folderNames}
                        renderItem = {({item})=> (
                            <ListFolder item ={item}
                             Display = {(index) => this.setState({showFavorites: true, index: index})}/>
                        )}
                    />
                    {this.state.showFavorites == true &&
                        <View >
                            <TouchableOpacity style={demo.randomContainer} onPress={() => onTap(item)}>
                                <View style={{ marginLeft: 10, marginRight: 15}}>
                                    <ImageBackground
                                        source={{uri: 'https://webknox.com/recipeImages/656971-556x370.jpg'}}
                                        style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                                        imageStyle={demo.img}
                                    >
                                    </ImageBackground>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{"Potato Leek Soup"}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={demo.randomContainer} onPress={() => onTap(item)}>
                                <View style={{ marginLeft: 10, marginRight: 15}}>
                                    <ImageBackground
                                        source={{uri: 'https://webknox.com/recipeImages/657011-556x370.jpg'}}
                                        style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                                        imageStyle={demo.img}
                                    >
                                    </ImageBackground>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{"potato leek soup"}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={demo.randomContainer} onPress={() => onTap(item)}>
                                <View style={{ marginLeft: 10, marginRight: 15}}>
                                    <ImageBackground
                                        source={{uri: 'https://webknox.com/recipeImages/663357-556x370.jpg'}}
                                        style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                                        imageStyle={demo.img}
                                    >
                                    </ImageBackground>
                                    <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{"The Unagi Burger"}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
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

const demo = ({
    randomContainer: {
        width: 160,
        height: 250,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 5
    },
    readyInThirtyContainer: {
        width: 400,
        height: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom:0,
    },
    searchedRecipeContainer: {
        width: 370,
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom:0,
    },
    img:{
        borderRadius: 20,
        backgroundColor: '#EAEAEA',
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
    titleContainer:{
        flexDirection:'row',
        height:'20%',
        backgroundColor:'rgba(0,0,0,0.4)',
        // borderRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
})
