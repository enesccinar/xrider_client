import React, { useContext } from 'react'
import { Text, StyleSheet, Image, Linking } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <Text style={styles.header}>This is an open-source project.</Text>
            <Text style={styles.url} onPress={() => Linking.openURL('mailto:enescihancinar@gmail.com')}>
                If you have any question or feedback, feel free to send me an email. enescihancinar@gmail.com
            </Text>
            <Spacer>
                <Button buttonStyle={styles.submit} title="Sign out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarOptions: {
        activeTintColor: '#6540F5',
    },
    tabBarIcon: ({ focused }) => (
        focused
            ? <Image source={require('../../assets/account.png')} />
            : <Image source={require('../../assets/account-inactive.png')} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginLeft: 24,
        marginRight: 24
    },
    header: {
        fontWeight: 'bold',
        fontSize: 32
    },
    url: {
        fontSize: 12,
        marginTop: 10
    },
    submit: {
        marginLeft: 0,
        marginTop: 50,
        backgroundColor: '#5D3EA8'
    }
})

export default AccountScreen