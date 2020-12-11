import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'
import { AddPantryItem } from "../components/AddPantryItem";
import { PantryList } from "../components/PantryList";

const initialItems = ["flour", "basil", "pepper"];

export const PantryScreen: React.FC = () => {

    const [items, setItems] = useState(initialItems);

    const addItem = ( newItem: string) => {
        setItems([...items, newItem])
        console.log(items)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Pantry</Text>
            <React.Fragment>
                <AddPantryItem addItem={addItem}/>
                <PantryList items={items} />
            </React.Fragment>
        </View>
    );
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