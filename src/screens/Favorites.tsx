// import React, { useEffect, useState , Dispatch} from 'react'
// import { View, Text, StyleSheet, Dimensions , Image , TouchableOpacity, Button, TextInput} from 'react-native'
// import { onChange } from 'react-native-reanimated'

// import { connect } from 'react-redux'
// import { NextRecipeCard , noNextRecipeDisplay} from '../components/Fav_RecipeCard'
// //import { NextRecipeCard, noNextRecipeDisplay } from '../components/Fav_RecipeCard'
// import {NextRecipeState} from '../redux'
// import {favoriteInit, startPage} from '../redux/actions/favoriteInitAction'
// import {FolderContainer, NextRecipeContainer} from '../redux/models'
// // class FavoriteScreen extends React.Component{
// //     render(){
// //         return (
// //             <View style = {styles.container}>
// //                 <Text style={styles.title}>Favorites</Text>
// //                 <Text style={styles.header}>Next Recipe to Make </Text>
               
// //             </View>
            
// //         )
// //     }
// // }

// // const mapStateToProps = (state) => {
// //     const {nextFavorite} = state
// //     return {nextFavorite}
// // };

// // export default connect(mapStateToProps)(FavoriteScreen)
// // interface FavoriteProps{
// //     breakUpReducer : NextRecipeState,
// //     startPage: Function,
// // }
// //breakUpReducer :NextRecipeState, startPage: Function

// export const _Favorites: 
// function _Favorites () {

//     //const { nextrecipe} = breakUpReducer
    
   
//    // const { text } = noNextRecipe
//    // const { results } = nextrecipe

//     // useEffect(() => {
//     //     startPage() 
        
//     // }, [])


//     const [value, onChangeText] = useState(' ');
//     const [Folders, setFolders] = useState(['Main Dish']);
//    // Array currentFolders = [{key: Math.random().toString(), item: "Main Dish"}, {key: Math.random().toString(), item: "Side Dish"}, {key: Math.random().toString(), item: "Dessert"}];
//    // {currentFolders.map(() => <Text>newName</Text>)}
//     const addFolderHandler = () => {
//         // currentFolders.concat({key: value})
//         // alert(currentFolders)
//         Folders.push(value)
//         alert(Folders)
//     }
//     //const {results } = NextRecipeContainer;
//     useEffect(() => {
//        startPage();
//       // alert('ran')
//     }) 
//     return (

//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.title}>Favorites</Text>
//                 <Text style={styles.header}>Next Recipe to Make</Text>
//             </View>
//             <TextInput
//             placeholder = "Folder Name"
//             style = {styles.header}
//             onChangeText = {text => onChangeText(text)}
//             value = {value}
//             />
//             <Button title = "Add Folder" onPress = {addFolderHandler}/>
//            <View>
//                {Folders.map((name) => <Text >
//                {name}</Text>)}
//            </View>  
//         </View>
//     );
// }

// const styles = StyleSheet.create({
// title:{
//     fontSize: 30,
//     fontWeight: '700',
//     color: '#f15b5d',
//     textAlign: 'center'
//     },
// header:{
//     fontSize: 25, 
//     fontWeight: '600', 
//     color: '#f15b5d', 
//     textAlign: 'center'
// },
// container: {
//     flex: 1,
//     backgroundColor: '#FFF'
// },
// top: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// middle: {
//     flex: 8,
//     justifyContent: 'center',
//     alignItems: 'center'

// },
// bottom: {
//     flex: 1,
//     backgroundColor: 'cyan'
// },

// })
//  const Favorites = connect()(_Favorites)

//  export {Favorites}

//  //renderItem = {({item}) => <NextRecipeCard item = {item} onTap={() => {alert('recipe tapped')} } />}