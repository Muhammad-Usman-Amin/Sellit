import React from 'react';
import { Text, StyleSheet } from 'react-native';


export default function AppText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}


const styles = StyleSheet.create({
    text: {
        // fontSize: 2 * 18,
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", // this is unmaintainable for large codeBase
        color: "dodgerblue",
        fontSize: 16,
        fontFamily: 'Avenir',
    }
});