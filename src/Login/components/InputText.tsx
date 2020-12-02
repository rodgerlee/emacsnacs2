import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps;

class InputText extends React.Component<Props> {
    render() {
        const { style, ...otherProps } = this.props;
        return (
            <TextInput 
                selectionColor={"#100000"}
                style={[styles.textInput, style]}

                {...otherProps}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: "#100000",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20

    }
});

export default InputText;