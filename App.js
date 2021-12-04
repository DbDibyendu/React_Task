import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyDeW70D7I1e7Xc9XNP6BeCWTXZr8aQBgN8",
  authDomain: "fir-app-aba73.firebaseapp.com",
  databaseURL: "https://fir-app-aba73-default-rtdb.firebaseio.com",
  projectId: "fir-app-aba73",
  storageBucket: "fir-app-aba73.appspot.com",
  messagingSenderId: "645027198963",
  appId: "1:645027198963:web:d85311901a48a7a1e00486"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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




