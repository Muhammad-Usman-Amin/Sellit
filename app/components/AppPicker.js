import React, { useState } from 'react';
import { Button, FlatList, Modal, Platform, StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText/AppText';
import PickerItem from './PickerItem';

export default function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%" }) {

    const [firstName, setFirstName] = useState('');
    const [isNew, setIsNew] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
                <View style={[styles.container, { width }]}>

                    {icon && <MaterialCommunityIcons name={icon} size={20}
                        color={defaultStyles.colors.medium} style={styles.icon}
                    />}

                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                    {/* <AppText style={defaultStyles.text, styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText> */}

                    <MaterialCommunityIcons name="chevron-down" size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide'>
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                onSelectItem(item);
                            }}
                        />)}
                />
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{ alignSelf: 'center', marginBottom: 10 }} name="close-circle" size={40} onPress={() => setModalVisible(!modalVisible)} />
                </TouchableOpacity>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center',
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
    },
    text: {
        flex: 1
    }
});
