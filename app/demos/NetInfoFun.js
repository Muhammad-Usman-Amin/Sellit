import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import Screen from '../components/Screen';


export default function NetInfoFun() {

    NetInfo.fetch().then(netInfo => console.log(netInfo));
    const unsubscribe = NetInfo.addEventListener(netInfo => console.log(netInfo));
    const netInfoHook = useNetInfo();

    return netInfoHook.isInternetReachable ?
        <Screen>
            <Text>Internet Reachable</Text>
        </Screen>
        :
        <Screen>
            <Text>No Internet Available</Text>
        </Screen>

}

const styles = StyleSheet.create({})
