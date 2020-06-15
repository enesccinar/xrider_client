import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import BackIcon from '../assets/BackIcon'

const BackButton = ({ click }) => {
    return (
        <TouchableOpacity onPress={() => click()} style={styles.container}>
            <BackIcon />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default BackButton