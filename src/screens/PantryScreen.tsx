import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'
import { AddPantryItem } from "../components/AddPantryItem";
import { PantryList } from "../components/PantryList";

const initialItems: string[] = [];

export const PantryScreen: React.FC = () => {

    const [items, setItems] = useState(initialItems);

    const addItem = ( newItem: string) => {
        newItem.trim() !== "" && setItems([...items, newItem]);
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

})