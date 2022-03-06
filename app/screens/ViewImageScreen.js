import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from "../config/colors";

export default function ViewImageScreen(props) {
  return (

    <View style={styles.container}>
      <View style={styles.coloseIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  coloseIcon: {

    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
