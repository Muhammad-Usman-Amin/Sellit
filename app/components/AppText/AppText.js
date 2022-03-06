import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default function AppText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}

// INSTEAD OF THIS COMPONENT, WE WILL USE APPTEXT.IOS.JS AND APPTEXT.ANDROID.JS WHICH WILL WORK BASED ON PLATFORM USED




