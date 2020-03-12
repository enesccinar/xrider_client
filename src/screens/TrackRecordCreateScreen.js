import React, { useContext, useCallback } from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import Spacer from '../components/Spacer'

const TrackRecordCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addLocation } = useContext(LocationContext)

    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <Spacer>
                <Text style={styles.header}>Create a Trail Record</Text>
            </Spacer>
            <Map height='50%' />
            {err ? <Text>Please enable location services!</Text> : null}
            <Spacer>
                <TrackForm />
            </Spacer>
        </SafeAreaView>
    )
}

TrackRecordCreateScreen.navigationOptions = {
    title: 'Add Record',
    tabBarOptions: {
        activeTintColor: '#6540F5',
    },
    tabBarIcon: ({ focused }) => (
        focused
            ? <Image source={require('../../assets/create.png')} />
            : <Image source={require('../../assets/create-inactive.png')} />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginLeft: 24,
        marginRight: 24
    },
    header: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20
    }
})

export default withNavigationFocus(TrackRecordCreateScreen)