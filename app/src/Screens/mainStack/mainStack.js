import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../BottomTabs/Tabs'
import Chat from './Screens/Others/Chat'
import Map from './Screens/Others/Map'
import UserDetails from './Screens/Others/UserDetails'
import Report from './Screens/Others/Report'
import DescribeReport from './Screens/Others/DescribeReport'
import AudioCall from './Screens/Others/AudioCall'
import Search from './Screens/Others/Search'
import Details from './Screens/Others/Details'

const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='tabs' screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name='tabs' component={Tabs} />
      <Stack.Screen name='chat' component={Chat} />
      <Stack.Screen name='audioCall' component={AudioCall} />
      <Stack.Screen name='map' component={Map} />
      <Stack.Screen name='report' component={Report} />
      <Stack.Screen name='describe' component={DescribeReport} />
      <Stack.Screen name='userDetails' component={UserDetails} />
      <Stack.Screen name='search' component={Search} />
      <Stack.Screen name='details' component={Details} />
      
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})