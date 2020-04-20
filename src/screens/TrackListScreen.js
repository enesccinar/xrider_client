// import '../_mockLocation'

import React, { useContext, useCallback } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents, withNavigationFocus } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'


const TrackListScreen = ({ isFocused }) => {

    const { state: { tracks }, fetchTracks } = useContext(TrackContext)
    const { state: { recording }, addLocation } = useContext(LocationContext)

    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])

    const [err] = useLocation(isFocused || recording, callback)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Map height="100%" tracks={tracks} followsUserLocation={false} />
            {err ? <Text>Please enable location services!</Text> : null}
            <FlatList
                horizontal={true}
                style={styles.bottom}
                data={tracks}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.trackListItem}>
                                <Image source={require('../../assets/sample-photo.png')} />
                                <View style={styles.cardTexts}>
                                    <Text style={styles.cardHeader}>{item.trackName}</Text>
                                    <Text style={styles.cardText}>{item.trackType}</Text>
                                    <Text style={styles.cardText}>{item.locations[0].coords.latitude}, {item.locations[0].coords.longitude}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Trails',
    tabBarOptions: {
        activeTintColor: '#6540F5',
    },
    tabBarIcon: ({ focused }) => (
        focused
            ? <Image source={require('../../assets/home.png')} />
            : <Image source={require('../../assets/home-inactive.png')} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        height: '100%',
        zIndex: 1
    },
    bottom: {
        position: 'absolute',
        left: (100 % - 327) / 2,
        bottom: 32,
        zIndex: 2
    },
    trackListItem: {
        backgroundColor: 'white',
        height: 88,
        width: 327,
        marginRight: 10,
        flexDirection: 'row',
        padding: 8
    },
    cardTexts: {
        marginLeft: 16
    },
    cardHeader: {
        fontWeight: 'bold',
        marginBottom: 8
    },
    cardText: {
        marginBottom: 8
    }
})

export default withNavigationFocus(TrackListScreen)