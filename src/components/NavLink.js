import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32
    },
    link: {
        color: '#000000',
        fontSize: 16
    }
})

export default withNavigation(NavLink)