import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { TextInput,  SafeAreaView, StyleSheet, Text,Linking , TouchableOpacity, View, Image, KeyboardAvoidingView} from 'react-native'


const ReviewScreen = () => {
    const navigation = useNavigation()

    const handleSignOut = () => {
        Linking.openURL('https://image.shutterstock.com/image-vector/thank-you-vector-typography-banner-260nw-1418233781.jpg')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Please Give Us Your Feedback</Text>

            <TextInput 
            multiline
            style = {styles.input} />

            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          
            
        </SafeAreaView>
    )
}

export default ReviewScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#202020'
    },
    input:{
        color:'white',
        backgroundColor: 'grey',
        paddingHorizontal: 90,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 5,
    },
    button: {
        textShadowColor:'grey',
        backgroundColor: '#4C0099',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    textStyle: {
        color:'white',
        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})