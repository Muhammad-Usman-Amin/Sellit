import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import Card from "../components/Card.js";
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import AppText from '../components/AppText/AppText.js';
import useApi from '../hooks/useApi';

// const listings = [
//     {
//         id: 1,
//         title: 'Red Jacket for SALE!',
//         price: 100,
//         image: require('../assets/jacket.jpg'),
//     },
//     {
//         id: 2,
//         title: 'Couch in great conditions!',
//         price: 1000,
//         image: require('../assets/couch.jpg'),
//     },
// ]

export default function ListingsScreen({ navigation }) {

    // const getListingsApi = useApi(listingsApi.getListings); //no object destructurng if we want to call multiple apis within one component
    const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings();
        // loadListings(1, 2, 3); prameterized call
    }, []);





    return (
        <>
            <ActivityIndicator
                visible={loading}
            />
            <Screen style={styles.screen}>

                {/* <ActivityIndicator   //default activity loader from reat-native
                animating={loading}
                size={50}
                color="#994009"
                style={{ opacity: 1 }}
            /> */}

                {error && (<>
                    <AppText>Couldn't retrieve the listigns</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>)}


                <FlatList
                    data={listings}
                    keyExtractor={list => list.id.toString()} //toString is mandatory (type: string by flatlist)
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            imageURL={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})
