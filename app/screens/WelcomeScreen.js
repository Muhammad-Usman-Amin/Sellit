import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton.js';

import colors from "../config/colors.js";

export default function WelcomeScreen({ navigation: { navigate } }) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require('../assets/background.png')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagline}>Just Play it!</Text>
            </View>

            {/* <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View> */}
            <View style={styles.buttonContainer}>
                <AppButton title='login' onPress={() => navigate("Login")} />
                <AppButton title='register' color='secondary' onPress={() => navigate("Register")} />
            </View>


        </ImageBackground>
    );
}

const onLogin = () => {
    console.log('Login Tapped');
}
const onRegister = () => {
    console.log('Register Tapped');
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 10
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary
    },
    tagline: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20,
    }
})
