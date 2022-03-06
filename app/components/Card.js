import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from './AppText/AppText';

export default function Card({ title, subTitle, imageURL, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {/* <Image style={styles.image} source={{ uri: imageURL }} /> */}
                <Image
                    style={styles.image}
                    preview={{ uri: thumbnailUrl }}
                    tint='light'
                    uri={imageURL}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.primary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7
    }
})
