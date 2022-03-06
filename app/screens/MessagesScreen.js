import Constants from 'expo-constants';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Mosh Hamedani',
        discription: 'I\'m Here',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'Usman Hello buddiesHello buddiesHello buddies',
        discription: 'Hello buddies Hello buddies Hello buddiesHello buddies!',
        image: require('../assets/usman.jpg'),
    }
]
function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the messages for messages
        setMessages(messages.filter((m) => m.id !== message.id));
    }


    return (
        <Screen style={{ backgroundColor: '#919149' }}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                (<ListItem
                    title={item.title}
                    subTitle={item.discription}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />
                    )}
                />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'Play U2U',
                            discription: 'A Youtube channel made for short tutorials',
                            image: require('../assets/splash.png'),
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,  //or do like below
        paddingTop: Constants.statusBarHeight,
    }
});

export default MessagesScreen;
