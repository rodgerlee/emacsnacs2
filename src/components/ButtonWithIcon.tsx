import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native'
import { onAvailability } from '../redux'
import { useDispatch } from 'react-redux'

interface ButtonProps{ 
    width: number;
    height: number;
    icon: ImageSourcePropType
}
const ButtonWithIcon: React.FC<ButtonProps> = ({ icon, width, height }) => {

    const dispatch = useDispatch();

    return (
        <View style={{position: 'absolute', bottom: 10, right: 10, alignSelf: 'flex-end'}}>
            <TouchableOpacity style={[styles.btn, { width, height }]}
                onPress={ () => dispatch(onAvailability())}
            >
                <Image style={{ width: width, height: height}} source={icon}  />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    btn: { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor: 'yellow', 
        width: 60, 
        height: 40
    },

})

export { ButtonWithIcon }