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
    width: number;
    height: number;
    icon: ImageSourcePropType;
    searchEntry: string;
}


const RefreshButton: React.FC<RefreshButtonProps> = ({ icon, width, height }) => {

    const dispatch = useDispatch();

    return (
        <View style={{position: 'absolute', bottom: 10, right: 18, alignSelf: 'flex-end'}}>
            <TouchableOpacity style={[styles.btn, { width, height }]}
                onPress={ () => dispatch(ReadyInThirty())}
            >
                <Image style={{ width: width, height: height}} source={icon}  />
            </TouchableOpacity>
        </View>

    )
}
const SearchButton: React.FC<SearchButtonProps> = ({ icon, width, height , searchEntry, onTap}) => {
    
    return (
        <View style={{position: 'absolute', marginLeft: 10, bottom: 10, right: 0, alignSelf: 'flex-end'}}>
            <TouchableOpacity style={[styles.btn, { width, height }]}
                onPress={ () => onTap(searchEntry)}
            >
                <Image style={{ width: (width-2), height: (height-2)}} source={icon}  />
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

})

export { RefreshButton, SearchButton }