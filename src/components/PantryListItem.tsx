import React from "react";
import { Text } from "react-native";

interface PantryListItemProps {
    item: string;
}

export const PantryListItem: React.FC<PantryListItemProps> = ({ item }) => {
    return (
        <Text>
        
            {item}
        
        </Text>
    );
};