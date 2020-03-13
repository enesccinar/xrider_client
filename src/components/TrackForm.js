import React, { useContext } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrackRecords from '../hooks/useSaveTrackRecords'
// import Moment from 'react-moment'

const TrackForm = () => {
    const { state: { name, recording, locations, startTime, stopTime },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)

    const [saveTrackRecord] = useSaveTrackRecords()

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder="Enter record name" />
            </Spacer>
            <Spacer>
                {recording
                    ? <Button buttonStyle={styles.button} title="Stop" onPress={stopRecording} />
                    : <Button buttonStyle={styles.button} title="Start Recording" onPress={startRecording} />
                }
            </Spacer>
            <Spacer>
                {
                    !recording && locations.length ? (
                        <Button buttonStyle={styles.button} title="Save Recording" onPress={saveTrackRecord} />
                    ) : null
                }
            </Spacer>
            {
                startTime
                    ? (
                        <View style={styles.time}>
                            <Image source={require('../../assets/clock.png')} />
                            <Text style={styles.timetext}>Riding Time: {stopTime ? stopTime : new Date().getTime() - startTime}</Text>
                        </View>
                    )
                    : null
            }
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        marginLeft: 0,
        // marginTop: 50,
        backgroundColor: '#5D3EA8',
        height: 60
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    timetext: {
        marginLeft: 5
    }
})

export default TrackForm