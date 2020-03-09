import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>Text</Text>
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks',
    tabBarIcon: ({focused}) => (
        focused
        ? <Image source={require('../../assets/home.png')} />
        : <Image source={require('../../assets/home-inactive.png')} />
    )
}

const styles = StyleSheet.create({})

export default TrackListScreen