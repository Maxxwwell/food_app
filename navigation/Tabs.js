/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { COLORS } from '../constants/theme/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../screens/tabs/Search';
import Bookmark from '../screens/tabs/Bookmark';
import Settings from '../screens/tabs/Settings';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        < Tab.Navigator
            initialRouteName="Home"
            
            screenOptions={({ route }) => ({
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
                component={Search} options={{ headerShown: false }} />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark} options={{ headerShown: false }} />
            <Tab.Screen
                name="Settings"
                component={Settings} options={{ headerShown: false }} />

        </Tab.Navigator >

    );
};

export default Tabs;
