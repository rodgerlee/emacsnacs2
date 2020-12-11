import React, { useState, useEffect, ChangeEvent } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType, Button } from 'react-native'
import { onAvailability, ReadyInThirty } from '../redux'
import { useDispatch } from 'react-redux'

interface AddPantryItemProps{   

    addItem: (newItem: string) => void;
}

const AddPantryItem: React.FC<AddPantryItemProps> = ({ addItem }) => {

    const [newItem, setNewItem] = useState("");

    
    const handleButtonPress = (itm: string) => {
        addItem(itm);
        setNewItem("");
    }; 

    return(
        <View style={styles.container}>
            <View style={styles.enterTextField}>
                <TextInput

                    style={{ marginLeft: 5, marginRight:10, flex: 9 ,display: 'flex', fontSize: 20, height: 42}}
                    placeholder={'enter an ingredient'}
                    onChangeText={newItem => setNewItem(newItem)}
                    defaultValue={newItem}
                   
                />
            </View>
            <Button title="Go!" onPress={() =>handleButtonPress(newItem)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    enterTextField: {
        display: 'flex',
        height: 35,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ededed',
        alignItems: 'center',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#E5E5E5',
        borderWidth: 2
    }
})

export { AddPantryItem }

