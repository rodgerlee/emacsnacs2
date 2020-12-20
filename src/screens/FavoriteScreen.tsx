//plan: make folder container that has title and array that holds recipe ids -> DONE
//when page starts load these recipes and display folder as button
//we can do this through reducer and action, call the action function here
//in action function we call recipeloader

import React, { useEffect, useState,Dispatch, Component } from 'react'
import {View, Text, StyleSheet, Button, Alert, FlatList, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import { connect} from 'react-redux'
import { ApplicationState} from '../redux'
//import {enteredNameAction, newFolderAction, openFolderAction} from '../redux/actions/addFolder'
import {bindActionCreators} from 'redux'
//import { favAction, favoriteReducer } from '../redux/reducers/favoriteReducer'
import {FolderContainer, favoriteState, SearchedRecipe} from '../redux/models'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import {ListFolder, ListRecipe} from '../components/FolderCard'
//import {outSource, showRecipeInstance} from '../components/FolderCard'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import * as actions from '../redux/actions/addFolder'
import {getID} from '../components/RecipeCard'
import {BASE_URL, APIKEY_5, WIDTH, APIKEY_7,APIKEY_6, APIKEY_4,useNavigation} from '../utils'
import axios from 'axios'
import {withNavigation, NavigationInjectedProps} from 'react-navigation'
import Constants from 'expo-constants'


// export const onTapRecipe: React.FC = (item) => {
//     console.log("slfj")
//     const {navigate} = useNavigation()
//         navigate('RecipeDetailPage', { recipe: item, noInfo: true})
// }


  class _FavoriteScreen  extends React.Component {
     state = {
   
        folderNames: [{
            key: 0,
            name: "All Favorites",
            saved: [0],
            open: false
        }],
        changingText: "",
        enteredName: "",
        index:0,
        showFolder: false,
        loadedRecipeEmpty:  [{
            id: "i",
            title: "i",
            image: "i"
        }],
        loadedRecipes: [{
            id: "",
            title: "",
            image: ""
        }],
        run: false,
        modalShown: false,
        recipeIndex: 0
    }
    
    //console.log("you got to 1")
    //console.log(getID())
  //  let {folderNames, index, enteredName} = props.favoriteReducer;
    
    //console.log("here")
    newFolder = () => {
        if (this.state.enteredName != "")
        {
         this.setState({ folderNames: [...this.state.folderNames, {key: this.state.folderNames.length , 
            name: this.state.enteredName, saved: [0] }]});
        this.setState({enteredName:  ""});
        }
        else
        this.setState({enteredName:  ""});
    }
     
       
    showRecipes = (i) => {
        const folders = this.state.folderNames.filter((item) => item.key == i ).map(fN => fN.saved);
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

        
     
   
    getRecipe = async (item) => {
       
        if (this.state.run == true){
      console.log("called")
            
            try{ const response = await axios.get<SearchedRecipe>(`${BASE_URL}/recipes/${item}/information`, {
            params: {
                apiKey: APIKEY_6
            } 
        })
        const loadedRecipe = response.data
        console.log("gitle", loadedRecipe.title)
        const checking = this.state.loadedRecipes.filter((item) => item.id == loadedRecipe.id )
        if (checking.length == 0){
        this.setState({ loadedRecipes: [...this.state.loadedRecipes, {id: loadedRecipe.id , 
           title: loadedRecipe.title, image: loadedRecipe.image }]});}
       // this.state.loadedRecipes.push(loadedRecipe)
        }
        catch(error) {
            alert("api key has met limit")
        }
    }
    else{}
        // .then(response => {
        //     const loadedRecipe =  response.data
        //     this.setState({loadedRecipe});
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        
    }
   
    reloadID = () =>{
      //  this.state.loadedRecipes = this.state.loadedRecipeEmpty  makes always empty
        console.log("loaded recipes are ", this.state.loadedRecipes)
        console.log("index", this.state.index)
        console.log("should be ", this.state.folderNames[this.state.index])
        if (this.state.index == 0){
        this.state.folderNames[this.state.index].saved =getID() }
        const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
        console.log("folders[0]", folders[0])
        //const len = folders[0].length
        this.setState({loadedRecipes: this.state.loadedRecipeEmpty})
        const recipes = folders[0].map((id) => {
           if (id == 0){
            this.setState({ loadedRecipes: [...this.state.loadedRecipes, {id: 0 , 
                title: "No recipes added", image: null }]});
           }
            console.log(id)
            this.getRecipe(id)
           
        })
        // for (let i =1; i< len; i++){
        //     this.getRecipe(folders[0][i])
        //     recipes[i] = (this.state.loadedRecipe)
        // }
        //console.log(recipes[1].title)
        this.state.run = false 
       
        return recipes
    }
    
  
    // onTapRecipe =(item: SearchedRecipe) => {
    //     console.log("callllleld")

    //    const {navigate} = useNavigation()
    //    const {getParam } = this.props.navigation
    //      navigate('RecipeDetailPage', { recipe: item, noInfo: true})
    // }

    
    componentDidUpdate(prevState){
        if (this.state){
            Object.entries(this.state).forEach(([key, val]) => 
            prevState[key] !== val && console.log('State changed', {key}))
        }
    }
    addtoFolder(){
        //add recipe id to folder saved 
        console.log("folder id", this.state.index)
        this.state.folderNames[this.state.index].saved.push(this.state.recipeIndex)
    }
    render () {
        //const {navigate} = useNavigation()
        const numofCols =2;
        const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
        return(
        <View style={styles.container}>
                <Text style={styles.header}> Favorite Folders</Text>
                <View>
                    <FlatList style = {styles.folder}
                    //displays folders, returns index of folder clicked 
                        data = {this.state.folderNames}
                        renderItem = {({item})=> (
                         <ListFolder item ={item}
                            Display = {(i: number) => 
                                this.setState({ showFolder: !this.state.showFolder, index: i, run: true 
                                    })}
                        />
             
                        )}
                        keyExtractor = {(item) => item.name}
                        />

                <TextInput
                    placeholder = "New Folder Name"
                    onChangeText={(text) =>this.setState({enteredName: text} )}
                    value = {this.state.enteredName}
                >
                </TextInput>
                <Button title="New Folder" onPress={() => this.newFolder()} />
                    
                    {this.state.showFolder == true &&
                       
                        <View>
                            {this.reloadID()}
                            <ScrollView style = {styles.scrollview}>
                           <FlatList
                                
                                data = {this.state.loadedRecipes.slice(1) }
                                renderItem = {({item}) =>{
                                   // this.getRecipe(item)
                                   console.log(item.title)
                                    return (
                                        
                                    // <FlatList
                                    // data = {item}
                                    // numColumns = {numofCols}
                                    // style = {styles.container}
                                    // renderItem ={({item}) => {
                                        
                                    // return ( showRecipeInstance({item}))
                                      // <MemiozedRecipe item = {item} loadedRecipe = {this.state.loadedRecipe}/>
                                      
                                      //  return(
                                            <TouchableOpacity style={{marginTop:15}} onPress = {() => this.setState({
                                                modalShown: true,
                                                recipeIndex: item.id
                                              })}>
                                                  
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
                                        )}} 
                                      
                                   keyExtractor = { (item) => item.title}
                                        //>
                                       
                                   
                          // )}} 
                           />
                           </ScrollView>
                        </View>
                    }
    <View 
               style = {{
                   justifyContent: "center",
                   flex: 1
               }}>
        <Modal
                    transparent = {true}
                    visible = {this.state.modalShown}
                    
                    >
        <View style = {styles.modalcenter}>
         <View style = {styles.modalview}>
                 <Text>hi</Text>
                 <View style = {styles.modalbutton}>
                     <FlatList
                     data = {this.state.folderNames}
                     renderItem = {({item}) => (
                        <Button  title = {item.name} onPress={() => {
                            alert("pressed")
                            this.addtoFolder()
                            this.setState({modalShown: !this.state.modalShown})}
                            }/> 
                     )}
                     />
                    
                
                 </View>
                 </View>
                 </View>
                    </Modal>
                    </View>
                </View>
     </View>
   
    )}
    }
    
  // export default withNavigation(FavoriteScreen);

//     <ListFolder item ={item}
//     Display = {(i: number) => 
//         this.setState({showFolder: !this.state.showFolder, index: i})}
// />
const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: '600',
        color: '#f15b5d',
        textAlign: 'center', 
        
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f4e1',
        alignContent: 'center'
    },
    scrollview: {
      //  flex: .7,
       // marginHorizontal: 20,
      // alignSelf: "flex-end",
       backgroundColor: '#f5f4e1',
       width: WIDTH-10,
       height: 400
       //flex: 1
    },
    modalcenter: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        flex: 2
        
    },
    modalview: {
        //flex:.4,
        //justifyContent: "center",
       // alignItems: "center",
         height: 300,
         width: 300,
        
       
        backgroundColor: "white",
      //  margin: 20,
        
    },
    modalbutton: {
        alignSelf: "center",
        backgroundColor: "blue", 
        flexDirection: 'row'
    },
    folder: {
       // flex: 1,
        //alignSelf: "flex-start"
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
    searchedRecipeContainer: {
        width: WIDTH-30,
        height: 250,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom:0,
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
    img:{
        borderRadius: 20,
        backgroundColor: '#EAEAEA',
    },
    name: {
        fontSize: 20,
        color: '#C70039',

    
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

const mapStateToProps=(state: ApplicationState)=> ({
    favoriteReducer: state.favoriteReducer
})
const ActionCreators = Object.assign(
    {}, actions,
);

const mapDispatchToProps = (dispatch )=> ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

    // return {
    //     openFolderAction: index  => {
    //         dispatch(openFolderAction(index))
    //     },
    //     enteredNameAction: text => {
    //         dispatch(enteredNameAction(text))
    //     },
    //     newFolderAction: () => {
    //         dispatch(newFolderAction)
    //     }
 

const FavoriteScreen = connect()(_FavoriteScreen)
//export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen)
export {FavoriteScreen}
