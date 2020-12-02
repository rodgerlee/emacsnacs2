import React from 'react';
import { View, StyleSheet, Image, TextInput, TextInputProps, Text } from 'react-native';
//import * as icon from '../../images/home_icon.png';
import Button from './components/Button';
import InputText from './components/InputText';
import { Header } from 'react-navigation-stack';

interface State{
    email: string;
    password: string;
    checkPassword: string;
    passwordIncorrect: boolean;
}

class RegisterPage extends React.Component<{}, State> {
    readonly state: State = {
        email: "",
        password: "",
        checkPassword: "",
        passwordIncorrect: false
    };

    handleEmailChange = (email: string) => {
        this.setState({ email: email });
    };

    handlePasswordChange = (password: string) => {
        this.setState({ password: password });
    };

    handleCheckPasswordChange = (checkPassword: string) => {
        this.setState({ checkPassword: checkPassword });
    };

    handleLoginPress = () => {
        if (this.state.password === this.state.checkPassword){
            this.setState({ passwordIncorrect: false, password: "", email: "", checkPassword: ""})
        }
        else {
            this.setState({ passwordIncorrect: true })
        }
    };

    handleAccountPress = () => {

    };

    render() {
        let icon = require('../images/account_icon.png') //change this to whatever image we want later
        let text = this.state.passwordIncorrect ? "Passwords do not match." : "";
        return (
            <View style={styles.container}>
                <Image source={icon} style={styles.tabIcon}/>
                <View style={styles.form}>
                    <InputText
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        placeholder={"Email"}
                    />
                    <InputText
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry={true}
                        placeholder={"Password"}
                    />
                    <Text style={styles.errorText}>{text}</Text>
                    <InputText
                        value={this.state.checkPassword}
                        onChangeText={this.handleCheckPasswordChange}
                        secureTextEntry={true}
                        placeholder={"Confirm Password"}
                    />
                    <Button label={"Create Account"} onPress={this.handleLoginPress} />
                    <Text style={styles.text}>Already have an account?</Text>
                    <Button label={"Login"} onPress={this.handleAccountPress} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    tabIcon: {
      width: 100,
      height: 100
    },
    text: {
        textAlign: "center",
        height: 30,
        color: "#000000",
        textAlignVertical: "center"
    },
    errorText: {
        textAlign: "center",
        height: 30,
        color: "#FF0000",
        textAlignVertical: "center"
    },
    form: {

    }
})

export default RegisterPage;