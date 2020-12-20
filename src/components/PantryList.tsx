import { Right } from "native-base";
import React from "react"
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: 10
    },
    item: {
        flexDirection: 'row',
        padding: 15,
        fontSize: 30,
        marginLeft: 20,
        marginRight: 20,
        height: 60,
        borderColor: '#E5E5E5',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        color: '#bb2a26'
        
    },
});

interface PantryListProps {
    items: Array<string>;
}

export const PantryList: React.FC<PantryListProps> = ({ items }) => {

    const handleDeletePress = () => {
        
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ items }
                renderItem={({ item }) => ( 
                    <View style={styles.item}> 
                        <Text >{item}</Text>
                        <TouchableOpacity  
                            onPress={handleDeletePress}>
                            <Text style={styles.button}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}