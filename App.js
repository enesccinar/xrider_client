import React from 'react'
import { Image } from 'react-native'

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
import TrackRecordDetailScreen from './src/screens/TrackRecordDetailScreen'

import { Provider as AuthProvider } from './src/context/AuthContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackRecordProvider } from './src/context/TrackRecordContext'
import { setNavigator } from './src/navigationRef'

const trackRecordListFlow = createStackNavigator({
  trackRecordList: TrackRecordListScreen,
  trackRecordDetail: TrackRecordDetailScreen
})

trackRecordListFlow.navigationOptions = {
  title: 'Records',
  tabBarOptions: {
    activeTintColor: '#6540F5',
  },
  tabBarIcon: ({ focused }) => (
    focused
      ? <Image source={require('./assets/tracks.png')} />
      : <Image source={require('./assets/tracks.png')} />
  )
}


const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackList: TrackListScreen,
    trackRecordListFlow,
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