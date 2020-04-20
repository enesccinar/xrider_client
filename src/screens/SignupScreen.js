import React, { useContext } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.innerContainer}>
                <NavigationEvents onWillBlur={clearErrorMessage} />
                <AuthForm
                    headerText="Sign Up"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Have an account? Sign in now!"
                />
            </View>
        </KeyboardAvoidingView>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 24,
        marginRight: 24
    }
})

export default SignupScreen