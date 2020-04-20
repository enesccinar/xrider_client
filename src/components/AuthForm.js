import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Text, Button } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Text style={styles.header}>{headerText}</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.input}
                placeholder="Email"
            />
            <Spacer />
            <TextInput
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                placeholder="Password"
            />
            <Spacer />
            {errorMessage ? <Text style={styles.errorMessage}> {errorMessage}</Text> : null}
            <Spacer>
                <Button
                    titleStyle={styles.submitText}
                    buttonStyle={styles.submit}
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 50
    },
    submit: {
        backgroundColor: '#5D3EA8',
        height: 60
    },
    submitText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'
    },
    input: {
        borderColor: '#B1ABAB',
        borderRadius: 3,
        borderWidth: 1,
        height: 50,
        paddingLeft: 16
    }
})

export default AuthForm