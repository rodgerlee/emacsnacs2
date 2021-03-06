import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    label: string;
    onPress: () => void;
}

class Button extends React.Component<Props> {
    render() {
        const { label, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 12,
        paddingVertical: 12,
        minWidth: 100,
        maxWidth: 100,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255, 255, 255, 0.7)",
        backgroundColor: "#1600fe"
    },
    text: {
        textAlign: "center",
        height: 20,
        color: "#FFFFFF"
    }
});

export default Button;