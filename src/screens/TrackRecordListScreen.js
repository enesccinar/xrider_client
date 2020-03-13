import React, { useContext } from 'react'
import { Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents, SafeAreaView } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackRecordContext } from '../context/TrackRecordContext'
import Spacer from '../components/Spacer'

const TrackRecordListScreen = ({ navigation }) => {
    const { state, fetchTrackRecords } = useContext(TrackRecordContext)

    return (
        <SafeAreaView>
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

                        }}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                    )
                }} />
        </SafeAreaView>
    )
}

TrackRecordListScreen.navigationOptions = {
    title: 'Records',
    tabBarOptions: {
        activeTintColor: '#6540F5',
    },
    tabBarIcon: ({ focused }) => (
        focused
            ? <Image source={require('../../assets/tracks.png')} />
            : <Image source={require('../../assets/tracks.png')} />
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