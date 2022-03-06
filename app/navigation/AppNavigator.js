import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingsScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {//(

    useNotifications();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                }}
            />
            <Tab.Screen name="ListingEdit" component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (<NewListingButton onPress={() => navigation.navigate("ListingEdit")} />),
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
                })}
            />
            <Tab.Screen name="Account" component={AccountNavigator}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};//);

export default AppNavigator;