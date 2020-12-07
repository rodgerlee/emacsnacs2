import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'
import { PantryListItem } from "../components/PantryListItem";



export const PantryScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Pantry</Text>
            <React.Fragment>
                 <PantryListItem item={"food"} />
                 <PantryListItem item={"sushi"} />
            </React.Fragment>
            {/*<PantryListItem item={"food"} />*/ }
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: '600',
        color: '#bb2a26',
        marginLeft: 20,
        padding: 10,
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