import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './Screens/Welcome'
import SignIn from './Screens/SignIn'
import ReviewNaccept from './Screens/ReviewNaccept'
import SignUp from './Screens/SignUp'
import ForgetPassword from './Screens/ForgetPassword'
import Tellus from './Screens/Welcome/Tellus'
import QA from './Screens/Welcome/QA'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='welcome' screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="Review" component={ReviewNaccept} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="forgetPass" component={ForgetPassword} />
      <Stack.Screen name="tellUs" component={Tellus} />
      <Stack.Screen name="QA" component={QA} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})