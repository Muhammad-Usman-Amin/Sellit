//react will automatically call this components whenver AppText is called for android mobiles

import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../../config/styles';


export default function AppText({ children, style, ...otherProps }) {
    return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>;
}



const styles = StyleSheet.create({
    // text: {
    //     // fontSize: 2 * 18,
    //     // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", // this is unmaintainable for large codeBase
    //     color: "#141414",
    //     fontSize: 16,
    //     fontFamily: 'Roboto',
    // }
});