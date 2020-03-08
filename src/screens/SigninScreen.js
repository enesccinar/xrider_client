import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText="Login"
                errorMessage={state.errorMessage}
                submitButtonText="Login"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don’t have an account? Sign up now!"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        marginLeft: 24,
        marginRight: 24
    }
})

export default SigninScreen