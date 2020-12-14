import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    Button,
    Alert,
    Animated
} from 'react-native'
import { RandomRecipe, SearchedRecipe } from '../redux'
import { LikeButton } from './ButtonWithIcon'
// import LikeButton from './LikeButton'
import React from 'react'
import { WIDTH } from '../utils'

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

var liked = [657011]
export const getID = () => {
    return liked 
}
const RandomRecipeCard: React.FC<RandomRecipeProps> = ({ item, onTap }) => {
    const look = () => {
        return liked.indexOf(item.id) != -1
    }
    const like = (id:string)=>{
        let likeState = look()
        console.log("likeState: " + likeState)
        if (likeState){
            Alert.alert("you've already liked this!")
        }
        else {
            liked.push(item.id)
            console.log(liked)
            Alert.alert("You have added " + item.title + " to favorites.")
        }
    }
    const icon = () => {
        return look() ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
    }
    return (
        <TouchableOpacity style={styles.randomContainer} onPress={() => onTap(item)}>
            <View style={{ marginLeft: 10, marginRight: 15}}>
                {/* <Image source={{ uri: `${item.image}`}} style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}} /> */}
                <ImageBackground
                source={{uri: `${item.image}`}}
                style={{width: 150, height: 150, borderRadius: 20, backgroundColor: '#EAEAEA'}}
                imageStyle={styles.img}
                >
                    <LikeButton
                        onTap={like}
                        icon={icon}
                    />
                </ImageBackground>
                <Text style={{ fontSize: 14, marginTop: 5, color: '#858585', flex: 1, flexWrap: 'wrap'}}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ReadyInThirtyCard: React.FC<ReadyInThirtyRecipeProps> = ({ item, onTap }) => {
    const look = () => {
        return liked.indexOf(item.id) != -1
    }
    const like = (id:string)=>{
        let likeState = look()
        console.log("likeState: " + likeState)
        if (likeState){
            Alert.alert("you've already liked this!")
        }
        else {
            liked.push(item.id)
            console.log(liked)
            Alert.alert("You have added " + item.title  + " to favorites.")
        }
    }
    const icon = () => {
        return look() ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
    }
    // let icon = look() ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
    return (
        <TouchableOpacity style={styles.readyInThirtyContainer} onPress={() => onTap(item)}>
            <ImageBackground
                source={{uri: `${item.image}`}}
                style={styles.readyInThirtyContainer}
                imageStyle={styles.img}
            >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <LikeButton
                    onTap={like}
                    icon={icon}
                />
            </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}


const SearchedRecipeCard: React.FC<SearchedRecipeProps> = ({item, onTap}) => {
    const look = () => {
        return liked.indexOf(item.id) != -1
    }
    const like = (id:string)=>{
        let likeState = look()
        console.log("likeState: " + likeState)
        if (likeState){
            Alert.alert("you've already liked this!")
        }
        else {
            liked.push(item.id)
            console.log(liked)
            Alert.alert("You've Added " + item.title  + " to favorites")
        }
    }
    const icon = () => {
        return look() ? require('../images/star_icon.png') : require('../images/star_n_icon.png')
    }
    
    return (
        <TouchableOpacity style={{marginTop:15}} onPress={() => onTap(item)}>
            <ImageBackground
                source={{uri: `${item.image}`}}
                style={styles.searchedRecipeContainer}
                imageStyle={styles.img}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <LikeButton
                        onTap={like}
                        icon={icon}
                    />
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10,
        marginBottom:0,
    },
    searchedRecipeContainer: {
        width: WIDTH-30,
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

export { RandomRecipeCard, ReadyInThirtyCard, SearchedRecipeCard }
