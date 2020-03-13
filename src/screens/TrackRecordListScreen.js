import React, { useContext } from 'react'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents, SafeAreaView } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackRecordContext } from '../context/TrackRecordContext'
import Spacer from '../components/Spacer'

const TrackRecordListScreen = ({ navigation }) => {
    const { state, fetchTrackRecords } = useContext(TrackRecordContext)

    return (
        <>
            <NavigationEvents onWillFocus={fetchTrackRecords} />
            <Spacer>
                <Text style={styles.header}>Trail Records</Text>
            </Spacer>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('trackRecordDetail', { _id: item._id })
                        }}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                }} />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20,
        marginLeft: 24
    }
})

export default TrackRecordListScreen