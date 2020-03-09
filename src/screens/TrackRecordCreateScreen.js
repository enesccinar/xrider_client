import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'

const TrackRecordCreateScreen = ({ navigation }) => {
    return (
        <>
            <Text>Text</Text>
        </>
    )
}

TrackRecordCreateScreen.navigationOptions = {
    title: 'Add',
    tabBarIcon: ({focused}) => (
        focused
        ? <Image source={require('../../assets/create.png')} />
        : <Image source={require('../../assets/create-inactive.png')} />
    )
}

const styles = StyleSheet.create({})

export default TrackRecordCreateScreen