import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Button,
    Alert,
    Animated
} from 'react-native'
import { RandomRecipe, SearchedRecipe } from '../redux'
import { LikeButton } from './ButtonWithIcon'
// import LikeButton from './LikeButton'
import React from 'react'

interface RandomRecipeProps{
    item: RandomRecipe;
    onTap: Function;
}

interface ReadyInThirtyRecipeProps{
    item: SearchedRecipe;
    onTap: Function;
}

interface SearchedRecipeProps{
    item: SearchedRecipe;
    onTap: Function;
}


const RandomRecipeCard: React.FC<RandomRecipeProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.randomContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ReadyInThirtyCard: React.FC<ReadyInThirtyRecipeProps> = ({ item, onTap }) => {
    return (
        <TouchableOpacity style={styles.readyInThirtyContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image source={{ uri: `${item.image}`}} style={{width: 380, height: 360, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
                <Text style={{ fontSize: 20, marginTop: 15, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

var liked = [657011]
const SearchedRecipeCard: React.FC<SearchedRecipeProps> = ({item, onTap}) => {
    const look = () => {
        console.log("look: " + liked.indexOf(item.id))
        return liked.indexOf(item.id) === -1
    }
    const like = (id:string)=>{
        // console.log(liked.indexOf(item.id))
        // let likeState = await look()
        // console.log("likeState: " + likeState)
        // if (likeState){
        //     Alert.alert("you've already liked this")
        // }
        // else {
        //     liked.push(item.id)
        //     console.log(liked)
        // }
        // console.log("done liking")
        Alert.alert("liked " + item.id)
    }
    let icon = look() ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
    console.log(icon)
    return (
        <TouchableOpacity style={styles.searchedRecipeContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                <Image
                    source={{uri: `${item.image}`}}
                    style={{width: 380, height: 200, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                />
                <LikeButton
                    onTap={like}
                    icon={icon}
                />
                <Text style={{ fontSize: 20, marginTop: 15, color: '#858585', flex: 3, alignItems:'flex-end'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
    // console.log("searchedrecipecard")
    // return (
    //     <TouchableOpacity style={styles.searchedRecipeContainer} onPress={() => onTap(item)}>
    //         <View style={{ marginLeft: 10, marginRight: 15}}>
    //             <Image
    //                 source={{uri: `${item.image}`}}
    //                 style={{width: 380, height: 200, borderRadius: 20, backgroundColor: '#EAEAEA'}}
    //             />
    //             <LikeButton id={item.id}/>
    //             <Text style={{ fontSize: 20, marginTop: 15, color: '#858585', flex: 3, alignItems:'flex-end'}}>{item.title}</Text>
    //         </View>
    //     </TouchableOpacity>
    // );
}

const styles = StyleSheet.create({
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
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
    searchedRecipeContainer: {
        width: 400,
        height: 250,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
})

export { RandomRecipeCard, ReadyInThirtyCard, SearchedRecipeCard }
