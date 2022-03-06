import { StyleSheet, Platform } from 'react-native';


const styles = StyleSheet.create({
    text: {
        // fontSize: 2 * 18,
        // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", // this is unmaintainable for large codeBase
        color: "dodgerblue",
        ...Platform.select({    //here we use spread operator
            ios: {
                fontSize: 16,
                fontFamily: 'Avenir'
            },
            android: {
                fontSize: 16,
                fontFamily: 'Roboto',
            }
        })
    }
})

export default styles;