import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackRecordListScreen from './src/screens/TrackRecordListScreen'
import TrackRecordCreateScreen from './src/screens/TrackRecordCreateScreen'

import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackRecordProvider } from './src/context/TrackRecordContext'
import { setNavigator } from './src/navigationRef'


const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackList: TrackListScreen,
    trackRecordList: TrackRecordListScreen,
    trackRecordCreate: TrackRecordCreateScreen,
    account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackRecordProvider>
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <App ref={(navigator) => { setNavigator(navigator) }} />
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </TrackRecordProvider>
  )
}