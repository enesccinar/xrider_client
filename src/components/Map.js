import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator, Image } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = ({ tracks }) => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation)
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />

    console.log(tracks)
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 34.18656, longitude: -118.624184,
                // 34.187146, -118.623476
                // ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
            <Marker coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            }}>
                <Image source={require('../../assets/cursor.png')} style={{ height: 50, width: 50 }} />
            </Marker>
            {tracks.map((t) => {
                return <Polyline strokeColor="#6540F5" strokeWidth={3} key={t._id} coordinates={t.locations.map(loc => loc.coords)} />
            })}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})

export default Map