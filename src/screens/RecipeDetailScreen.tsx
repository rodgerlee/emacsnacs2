import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

interface RecipeDetailProps{ }

const RecipeDetailScreen: React.FC<RecipeDetailProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View style={styles.navigation}><Text>navigation</Text></View>
            <View style={styles.body}><Text>body</Text></View>
            <View style={styles.footer}><Text>footer</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'green',
    },
    navigation: {
        flex: 2, 
        backgroundColor: 'red',
    },
    body: {
        flex: 10,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1, 
        backgroundColor: 'cyan'
    }
})

export { RecipeDetailScreen }