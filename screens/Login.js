/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Login = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Text>I am ur login</Text>
        </TouchableOpacity>
    );
};

export default Login;
