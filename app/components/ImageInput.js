import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";


import colors from '../config/colors';

export default function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPersmission();
    }, []);
    const requestPersmission = async () => {

        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted) alert('Please give photo access persmission ');
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this message?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No' }
        ])
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log('Error Reading an Image', error);
        }
    }




    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        height: '100%',
        width: '100%',

    }
})
