import React from 'react';
import { View, StyleSheet, Image, TextInput, TextInputProps, Text } from 'react-native';
import Button from './components/Button';
import InputText from './components/InputText';
import { Header } from 'react-navigation-stack';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
import { createSwitchNavigator } from "react-navigation";

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
            registerUser(userData, this);
            this.setState({ passwordIncorrect: false, password: "", email: "", checkPassword: ""})
        }
        else {
            this.setState({ passwordIncorrect: true })
        }
    };

    handleAccountPress = () => {
        this.props.navigation.navigate('login');
    };

    render() {
        let icon = require('../images/login_pic.png')
        let text = this.state.passwordIncorrect ? "Passwords do not match." : "";
        let errors = this.state.errors;
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
                    <Text style={styles.errorText}>{errors}</Text>
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
    text_input: {
        width: 120,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 130
    },
    tabIcon: {
      width: 178,
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