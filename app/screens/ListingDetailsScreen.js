import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {

    const listing = route.params;

    return (
        <ScrollView>
            <View>
                {/* <Image style={styles.image} source={{ uri: listing.images[0].url }}></Image> */}
                <Image
                    style={styles.image}
                    preview={listing.images[0].thumbnailUrl}
                    tint='light'
                    uri={listing.images[0].url}
                />
                <View style={styles.detailsContaier}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>${listing.price}</AppText>
                    <View style={styles.userContainer}>

                    </View>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Usman Amin"
                        subTitle="5 Listings"
                    ></ListItem>
                </View>

                <View style={styles.contact}>
                    <ContactSellerForm listing={listing} />
                </View>
            </View>
        </ScrollView >
    )
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    contact: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    detailsContaier: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 30,
    }
});
