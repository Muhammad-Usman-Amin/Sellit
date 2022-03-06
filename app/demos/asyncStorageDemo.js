import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screen from '../components/Screen';


export default function AsyncStorageDemo() {

    const demo = async () => {
        try {
            await AsyncStorage.setItem('person', JSON.stringify({
                id: 1,
                name: 'usman',
                address: 'Pakistan Asia'
            }));

            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log(person);

        } catch (error) {
            console.log(error);
        }
    }


    demo();

    return (
        <Screen style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ alignItems: 'center', color: 'white', backgroundColor: 'black' }}>Async Storage Demo</Text>
            <StatusBar
                StatusBarStyle='dark-content'
                backgroundColor='#990000'
            />
        </Screen>
    )
}
