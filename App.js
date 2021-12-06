/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Tabs from './navigation/Tabs';
import Login from './screens/Login';
import Recipe from './screens/Recipe';
import { theme } from './constants/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={'Login'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
};

export default App;
