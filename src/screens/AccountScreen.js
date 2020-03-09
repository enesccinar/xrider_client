import React, { useContext } from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {

    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>Account</Text>
            <Spacer>
                <Button title="Sign out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: ({focused}) => (
        focused
        ? <Image source={require('../../assets/account.png')} />
        : <Image source={require('../../assets/account-inactive.png')} />
    )
}

const styles = StyleSheet.create({})

export default AccountScreen