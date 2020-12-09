import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native'
import { onSearch, ReadyInThirty } from '../redux'
import { useDispatch } from 'react-redux'

interface RefreshButtonProps{
    width: number;
    height: number;
    icon: ImageSourcePropType
}
interface SearchButtonProps{
    onTap: Function;
    icon: ImageSourcePropType;
    searchEntry: string;
}
interface LikeButtonProps{
    onTap: Function;
    icon: ImageSourcePropType
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ icon, width, height }) => {
    const dispatch = useDispatch();
    return (
        <View style={{position: 'absolute', bottom: 10, right: 18, alignSelf: 'flex-end'}}>
            <TouchableOpacity style={[styles.btn, { width, height }]}
                onPress={ () => dispatch(ReadyInThirty())}
            >
                <Image style={styles.btnIcon} source={icon}  />
            </TouchableOpacity>
        </View>

    )
}
const SearchButton: React.FC<SearchButtonProps> = ({ icon, searchEntry, onTap}) => {

    return (
        <View style={{position: 'absolute', marginLeft: 10, bottom: 10, right: 0, alignSelf: 'flex-end'}}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => onTap(searchEntry)}
            >
                <Image style={styles.btnIcon} source={icon}  />
            </TouchableOpacity>
        </View>

    )
}

const LikeButton: React.FC<LikeButtonProps>=({icon, onTap})=>{
    return(
        <View style={styles.likebtn}>
            <TouchableOpacity
                style={styles.likebtn}
                onPress={()=>onTap()}
            >
                <Image style={styles.btnIcon} source={icon}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    likebtn:{
        alignSelf:'flex-end',
        margin:5,
    },
    btnIcon:{
        width:38,
        height:38,
    }
})

export { RefreshButton, SearchButton, LikeButton }