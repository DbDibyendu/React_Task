import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text,Linking , TouchableOpacity, View, Image } from 'react-native'
// import { useHistory } from 'react-router';

const HomeScreen = () => {

    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'

    const RatingBar = () => {
        return (
            <View style={styles.RatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgCorner }
                                            : { uri: starImgFilled }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    const navigation = useNavigation()
    const handleSignOut = () => {
        if(defaultRating<=3)
            navigation.navigate("Review")
        else
        Linking.openURL('https://image.shutterstock.com/image-vector/thank-you-vector-typography-banner-260nw-1418233781.jpg')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}>Please Rate Us </Text>
            <RatingBar />
            <Text style={styles.textStyle}>
                {defaultRating + '/' + maxRating.length}
            </Text>
     
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          
            
        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#202020'
    },
    button: {
        backgroundColor: '#4C0099',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    textStyle: {
        color:'white',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    RatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10
    },
    starImgStyle: {
        width: 40,
        height: 30,
        resizeMode: 'cover'

    }
})