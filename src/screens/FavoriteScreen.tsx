//plan: make folder container that has title and array that holds recipe ids -> DONE
//when page starts load these recipes and display folder as button
//we can do this through reducer and action, call the action function here
//in action function we call recipeloader

import React  from 'react'
import {View, Text, StyleSheet, Button, Alert, FlatList, TouchableOpacity, ImageBackground, Modal} from 'react-native'
import { connect} from 'react-redux'
import { ApplicationState} from '../redux'
import {bindActionCreators} from 'redux'
import { SearchedRecipe} from '../redux/models'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import {ListFolder, CustomButton} from '../components/FolderCard'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import * as actions from '../redux/actions/addFolder'
import {getID} from '../components/RecipeCard'
import {BASE_URL, APIKEY_5, WIDTH, APIKEY_7,APIKEY_6, APIKEY_4,useNavigation} from '../utils'
import axios from 'axios'
import {withNavigation, NavigationInjectedProps} from 'react-navigation'





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
            key: 0,
            loaded:
        [{
             id: "",
             title: "",
             image: ""
        }]
        }],
    
        run: false,
        modalShown: false,
        recipeIndex: 0
    }
    
  
    newFolder = () => {
        if (this.state.enteredName != "")
        {
         this.setState({ folderNames: [...this.state.folderNames, {key: this.state.folderNames.length , 
            name: this.state.enteredName, saved: [0] }],
            loadedRecipes: [...this.state.loadedRecipes, {key: this.state.folderNames.length, 
            loaded: [{
                id: "",
            title: "",
            image: ""
            }]}]
        });
        this.setState({enteredName:  ""});
        }
        else
        this.setState({enteredName:  ""});
    }
     
       
   

        
     
   
    getRecipe = async (item) => {
       const index = this.state.index
        if (this.state.run == true){
            
            try{ const response = await axios.get<SearchedRecipe>(`${BASE_URL}/recipes/${item}/information`, {
            params: {
                apiKey: APIKEY_7
            } 
        })
        const loadedRecipe = response.data
        const checking = this.state.loadedRecipes[index].loaded.filter((item) => item.id == loadedRecipe.id )
        if (checking.length == 0){
       
        this.state.loadedRecipes[index].loaded.push(loadedRecipe)
       this.setState({loadedRecipes: this.state.loadedRecipes })
       }
        }   
        catch(error) {
            console.log("i went here")
            
            if (this.state.loadedRecipes[index].loaded.length ==1 && this.state.index != 0){
                alert("no recipes added")
                this.state.showFolder = !this.state.showFolder
            }
            else{
            alert("api key has met limit")}
        }
    }
    else{}
      
        
    }
   
    reloadID = () =>{
     
        if (this.state.index == 0){
        this.state.folderNames[this.state.index].saved =getID() }
        const folders = this.state.folderNames.filter((item) => item.key == this.state.index ).map(fN => fN.saved);
        const recipes = folders[0].map((id) => {
        
            this.getRecipe(id)
           
        })
      
        this.state.run = false 
       
        return recipes
    }
    
  
   

    
   
    addtoFolder(folderid){
        this.state.folderNames[folderid].saved.push(this.state.recipeIndex)
        
        this.setState({modalShown: !this.state.modalShown})
    }
    render () {
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
            <View
            style = {styles.buttonrow}> 
                <TextInput
                    style = {styles.textbox}
                    placeholder = "New Folder Name"
                    onChangeText={(text) =>this.setState({enteredName: text} )}
                    value = {this.state.enteredName}
                   
                >
                </TextInput>
             
                <View style = {styles.button}>
                <Button  title="New Folder" 
                        onPress={() => this.newFolder()}
                        color = "ivory"
                        
                         />
              
                
                </View>
             </View>
                    {this.state.showFolder == true &&
                       
                        <View>
                            {this.reloadID()}
                            <ScrollView style = {styles.scrollview}>
                           <FlatList
                                
                                data = {this.state.loadedRecipes[this.state.index].loaded.slice(1) }
                                renderItem = {({item}) =>{
                                   // this.getRecipe(item)
                                    return (
                                        
                                   
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
                 <Text style = {{fontSize: 20,margin: 10}}>Select folder to put Recipe in</Text>
                     
                     <FlatList
                    
                     data = {this.state.folderNames}
                     renderItem = {({item}) => (
                        <CustomButton  item = {item.name} press={() => {
                            alert("Recipe added")
                            this.addtoFolder(item.key)
                            }
                            }/> 
                     )}
                     />
                    
                
              
        </View>
        </View>
        </Modal>
        </View>
    </View>
     </View>
   
    )}
    }
 
const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: '600',
        color: '#bb2a26',
        textAlign: 'center', 
        margin: 15
        
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f4e1',
        alignContent: 'center'
    },
    scrollview: {
    
       backgroundColor: '#f5f4e1',
       width: WIDTH-10,
       height: 450
      
    },
  
    buttonrow: {
        flexDirection: 'row',
        alignContent: 'flex-end'
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
        width: 110,
        color: "ivory",
        marginTop: 10,
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 4,
        shadowRadius: 1.27,
        elevation: 4
    },
    modalcenter: {
        justifyContent: "center",
        alignItems: "center",
     
        flex: 2,
        
        
    },
    modalview: {
       
        justifyContent: "center",
      
        alignItems: "center",
         height: 300,
         width: 300, 
        
        backgroundColor: "lightcoral",
        borderColor: "ivory",
        borderWidth: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 3, 
            height: 5
        },
        shadowOpacity: 3,
        shadowRadius: 4.47,
        elevation: 4
    
        
    },
    modalbutton: {
        alignSelf: "center",
        backgroundColor: "blue", 
        flexDirection: 'row'
    },
    folder: {
        backgroundColor: '#f5f4e1',
        color: "pink"
      
    },
    top: {
        flex: 4,
        flexDirection: 'row',
       
    },
    middle: {
     
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottom: {
      
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
       
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        alignItems: 'stretch',
        borderColor: '#FFF',
      
        
                 
    },
    img:{
        borderRadius: 20,
        backgroundColor: '#EAEAEA',
    },
    name: {
        fontSize: 20,
        color: 'black',

    
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
      
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
})





 

const FavoriteScreen = connect()(_FavoriteScreen)
export {FavoriteScreen}
