import React, { useContext, useCallback } from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
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
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.innerContainer}>
                <ScrollView style={styles.scrollview}>
                    <Spacer>
                        <Text style={styles.header}>Create a Trail Record</Text>
                    </Spacer>
                    <Map height='70%' followsUserLocation={true} />
                    {err ? <Text>Please enable location services!</Text> : null}
                    {/* <Spacer>
                        <TrackForm />
                    </Spacer> */}
                    <View style={styles.form}>
                        <TrackForm />
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}

TrackRecordCreateScreen.navigationOptions = {
    title: 'Create Record',
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
        flex: 1
    },
    scrollview: {
        height: '100%'
    },
    innerContainer: {
        marginTop: 32,
        justifyContent: 'center'
    },
    header: {
        fontSize: 24,
        lineHeight: 29,
        marginLeft: 24,
        marginBottom: 20
    },
    form: {
        marginLeft: 24,
        marginRight: 24
    }
})

export default withNavigationFocus(TrackRecordCreateScreen)