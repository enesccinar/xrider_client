import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'

const TrackRecordListScreen = ({ navigation }) => {
    return (
        <>
            <Text>Text</Text>
        </>
    )
}

TrackRecordListScreen.navigationOptions = {
    title: 'Records',
    tabBarIcon: ({focused}) => (
        focused
        ? <Image source={require('../../assets/tracks.png')} />
        : <Image source={require('../../assets/tracks.png')} />
    )
}

const styles = StyleSheet.create({})

export default TrackRecordListScreen