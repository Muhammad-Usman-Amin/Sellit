import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import Screen from './Screen';
import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {

    // const [firstName, setFirstName] = useState('');
    // const [isNew, setIsNew] = useState(false);

    return (
        <View style={[styles.container, { width }]}>

            {icon && <MaterialCommunityIcons name={icon} size={20}
                color={defaultStyles.colors.medium} style={styles.icon}
            />}

            <TextInput style={defaultStyles.text} {...otherProps}
                placeholderTextColor={defaultStyles.colors.medium}
            />

        </View>
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
    }
});

/* <Switch value={isNew} onValueChange={isNew => setIsNew(isNew)} />
<Text>Is New: {isNew.toString()}</Text> */