import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokenApi from '../api/expoPushTokens';
// import navigation from './rootNavigation';



Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        // Notifications.addNotificationResponseReceivedListener((response) => {
        //     navigation.navigate('Account');
        //     // console.log(response);
        // })
        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener);
    }, [])

    const registerForPushNotifications = async () => {
        try {
            // const permission = Permissions.askAsync(Permissions.NOTIFICATIONS); This is deprecated...
            // if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            // console.log(token);
            expoPushTokenApi.register(token.data);

        } catch (error) {
            console.log('Error getting a push token', error);
        }
    }
}