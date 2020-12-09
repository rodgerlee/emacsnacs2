import React from 'react';
import { View, StyleSheet, Image, TextInput, TextInputProps, Text } from 'react-native';
//import * as icon from '../../images/home_icon.png';
import Button from './components/Button';
import InputText from './components/InputText';
import { Header } from 'react-navigation-stack';

//import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
//import classnames from "classnames";


//var ConsolePanel = require('react-native-console-panel').displayWhenDev();

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
            let userData = {
                email: this.state.email,
                password: this.state.password,
                password2: this.state.checkPassword
            }
            console.log(userData);
            registerUser(userData);
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
                    <View style={styles.buttons}>
                        <Button label={"Create Account"} onPress={this.handleLoginPress} />
                    </View>
                    <Text style={styles.text}>Already have an account?</Text>
                    <View style={styles.buttons}>
                        <Button label={"Login"} onPress={this.handleAccountPress} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 130
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

const mapStateToProps = (state: any) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(RegisterPage);

//export default RegisterPage;

/*RegisterPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(RegisterPage));*/