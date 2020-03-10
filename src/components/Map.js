import React, { useContext } from 'react'
import { StyleSheet, ActivityIndicator, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation)
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />

    console.log(currentLocation.coords)
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 34.532096, longitude: -118.369007,
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
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})

export default Map