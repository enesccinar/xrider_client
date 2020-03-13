import React, { useContext } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Context as TrackRecordContext } from '../context/TrackRecordContext'
import MapView, { Polyline } from 'react-native-maps'

const TrackRecordDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackRecordContext)
    const _id = navigation.getParam('_id')

    const trackRecord = state.find(t => t._id === _id)
    const initialCoords = trackRecord.locations[0].coords

    return (
        <>
            <Text style={{ fontSize: 48 }}>{trackRecord.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={trackRecord.locations.map(loc => loc.coords)} />
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default TrackRecordDetailScreen