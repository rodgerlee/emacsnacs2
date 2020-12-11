import React from "react"
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10
    },
    item: {
        padding: 15,
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 44,
        borderColor: '#E5E5E5',
        borderWidth: 2,
        borderRadius: 10,
    },
});

interface PantryListProps {
    items: Array<string>;
}

export const PantryList: React.FC<PantryListProps> = ({ items }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={ items }
                renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            />
        </View>
    );
}