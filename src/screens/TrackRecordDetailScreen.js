import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Context as TrackRecordContext } from '../context/TrackRecordContext'
import MapView, { Polyline } from 'react-native-maps'

import BackButton from '../components/BackButton'

const TrackRecordDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackRecordContext)
    const _id = navigation.getParam('_id')

    const trackRecord = state.find(t => t._id === _id)
    const initialCoords = trackRecord.locations[0].coords

    return (
        <>
            <Text style={styles.header}>{trackRecord.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline strokeColor="#6540F5" strokeWidth={6} coordinates={trackRecord.locations.map(loc => loc.coords)} />
            </MapView>
        </>
    )
}

TrackRecordDetailScreen.navigationOptions = ({ navigation }) => ({
    headerStyle: {
        borderBottomWidth: 0
    },
    headerLeft: () => <BackButton click={() => navigation.goBack()} />
})

const styles = StyleSheet.create({
    map: {
        height: 300,
        marginTop: 24
    },
    header: {
        marginTop: 20,
        marginLeft: 24,
        fontSize: 24,
        lineHeight: 29,
        color: '#000000',
        // fontFamily: 'Proxima Nova'
    }
})

export default TrackRecordDetailScreen