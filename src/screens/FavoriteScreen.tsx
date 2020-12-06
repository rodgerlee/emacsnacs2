// //plan: make folder container that has title and array that holds recipe ids -> DONE
// //when page starts load these recipes and display folder as button
// //we can do this through reducer and action, call the action function here
// //in action function we call recipeloader

// //we have a fxn that displays the recipes, called when folder is clicked

// import React, { useEffect, useState } from 'react'
// import {View, Text, StyleSheet, Button, Alert, FlatList, } from 'react-native'
// import { connect } from 'react-redux'
// import { ApplicationState} from '../redux'
// import {addFolder} from '../redux/actions/addFolder'
// import {bindActionCreators} from 'redux'
// import { favoriteReducer } from '../redux/reducers/favoriteReducer'
// import {FolderContainer, SavedRecipe, favoriteState} from '../redux/models'
// interface FavoriteProps{
//     favoriteReducer: favoriteState
//     addFolder: Function
// }

//  export const _FavoriteScreen: React.FC<FavoriteProps> = (props) =>{
//     const {folders} = props.favoriteReducer
//    // const {name} = folders.map
//     //const [enteredName, setEnteredName] = useState(name)
//     //const [folderName, setFolder] = useState(folders)

// // useEffect(()=>
// // {
// //  props.addFolder("First")
// //  props.addFolder('second')
// // }, [])
// // const getText = (gettingText) => {
// //     setEnteredName(gettingText);
// // }


// }
// return (
//     <View style = {styles.container}>
//         <Text style = {styles.header}>
//             Favorites
//         </Text>
        
//         <Button 
//             title = "New Folder"
//             onPress = {() => props.addFolderHere("name") }
//         />
//     <Text>
//         {folders.length}
//     </Text>
//     </View>
// );


// }
// const styles = StyleSheet.create({
//     header:{
//         fontSize: 25,
//         fontWeight: '600',
//         color: '#f15b5d',
//         textAlign: 'center'
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#FFF'
//     },
//     top: {
//         flex: 4,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     middle: {
//         flex: 8,
//         justifyContent: 'center',
//         alignItems: 'center'

//     },
//     bottom: {
//         flex: 1,
//         backgroundColor: 'cyan'
//     },

// })


// const mapStateToProps = (state: ApplicationState) => ({

//     favoriteReducer: state.favoriteReducer,
   
// });

// const mapDispatchtoProps = {
//     addFolder,
// };

// const FavoriteScreen= connect(mapStateToProps, mapDispatchtoProps)(_FavoriteScreen)
// export {FavoriteScreen}
