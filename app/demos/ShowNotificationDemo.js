import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';


import Screen from '../components/Screen';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const showNotification = () => {
    const content = {
        title: 'Congratulations',
        body: 'Your order was successfully placed!',
    }
    Notifications.scheduleNotificationAsync({ content, trigger: new Date().getTime() + 5000 }); //with scheduling in action
    // Notifications.scheduleNotificationAsync({ content, trigger: null }); //with no schedule
}

export default function ShowNotificationDemo() {
    return (
        <Screen>
            <Button title='Tap Me' onPress={showNotification} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 15,
        margin: 15,
        borderRadius: 250,
        backgroundColor: 'tomato',
        alignContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
    }
})
