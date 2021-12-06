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

        <Tab.Navigator

            screenOptions={

                ({ route }) => ({
                header: ()=> null,
                tabBarShowLabel: false,
                tabBarStyle: {
                    elevation: 5,
                    backgroundColor: 'white',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Bookmark') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }


                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.darkGreen,
                tabBarInactiveTintColor: COLORS.lightGray2,
            })}
        >

            <Tab.Screen name="Home"
                component={Home} />
            <Tab.Screen
                name="Search"
                component={Search} />
            <Tab.Screen
                name="Bookmark"
                component={Bookmark} />
            <Tab.Screen
                name="Settings"
                component={Settings} />

        </Tab.Navigator >

    );
};

export default Tabs;
