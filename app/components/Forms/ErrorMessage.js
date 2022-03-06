import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppText from '../AppText/AppText';

export default function ErrorMessage({ error, visible }) {

    if (!error || !visible) return null;

    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})