import React from 'react';
import { View, StyleSheet, Image, TextInput, TextInputProps, Text } from 'react-native';
//import * as icon from '../../images/home_icon.png';
import Button from './components/Button';
import InputText from './components/InputText';

//import { AppNavigation } from "../../App";

import { loginUser } from "../redux/actions/authActions";

import { connect } from "react-redux";

import { useNavigation } from "../utils";

interface State{
    email: string;
    password: string;
}

class LoginPage extends React.Component<{}, State> {
    readonly state: State = {
        email: "",
        password: ""
    };

    handleEmailChange = (email: string) => {
        this.setState({ email: email });
    };

    handlePasswordChange = (password: string) => {
        this.setState({ password: password });
    };

    handleLoginPress = () => {
        this.setState({ password: "" , email: ""})
        let userData = {
            email: this.state.email,
            password: this.state.password
        }
        loginUser(userData);
    };

    handleRegisterPress = () => {
        const { navigate } = useNavigation();
        navigate('register');
    };

    render() {
        let icon = require('../images/account_icon.png') //change this to whatever image we want later
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
                    <View style={styles.buttons}>
                        <Button label={"Login"} onPress={this.handleLoginPress} />
                    </View>
                    <Text>Don't have an account?</Text>
                    <View style={styles.buttons}>
                        <Button label={"Register"} onPress={this.handleRegisterPress} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        alignItems: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 130
        //justifyContent: "space-between"
    },
    tabIcon: {
      width: 100,
      height: 100
    },
    form: {

    }
})

const mapStateToProps = (state:any) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(LoginPage);