import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            title: 'Login',
            headerTintColor: '#E0E0E0',
            headerStyle: {
              backgroundColor: '#4C0099'
            }
          }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerTintColor: '#E0E0E0',
          headerStyle: {
            backgroundColor: '#4C0099'
          }
        }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{
          title: 'Review',
          headerTintColor: '#E0E0E0',
          headerStyle: {
            backgroundColor: '#4C0099'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




