/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { COLORS } from '../constants/theme/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        < Tab.Navigator
            initialRouteName="Home"
            
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const icons = {
                            Home: 'home',
                            Search: 'search',
                            Bookmark: 'bookmark',
                            Settings: 'settings',
                        };
                        return (
                            <Icon
                            size={24}
                                name={icons[route.name]}
                                color={focused ? COLORS.darkLime : COLORS.gray}
                            />
                        );
                    },
                })


            }
        >
            <Tab.Screen name="Home"
                component={Home} options={{ headerShown: false, showLabel: false }} />
            <Tab.Screen
                name="Search"
                component={Home} options={{ headerShown: false }} />
            <Tab.Screen
                name="Bookmark"
                component={Home} options={{ headerShown: false }} />
            <Tab.Screen
                name="Settings"
                component={Home} options={{ headerShown: false }} />

        </Tab.Navigator >

    );
};

export default Tabs;
