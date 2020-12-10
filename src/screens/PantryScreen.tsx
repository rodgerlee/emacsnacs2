import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'
import { AddPantryItem } from "../components/AddPantryItem";
import { PantryList } from "../components/PantryList";



export const PantryScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Pantry</Text>
            <React.Fragment>
                 <PantryList items={["flour", "basil", "pepper"]} />
                 <AddPantryItem />
            </React.Fragment>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 30,
        fontWeight: '600',
        color: '#bb2a26',
        marginLeft: 20,
        padding: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f4e1'
    },
    top: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middle: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bottom: {
        flex: 1,
        backgroundColor: 'cyan'
    },

})