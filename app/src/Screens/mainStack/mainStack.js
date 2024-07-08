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
import Crushes from './Screens/Others/Crushes'
import CallHistory from './Screens/Others/CallHistory'
import Setting from './Screens/Settings/Setting'
import GoPremium from './Screens/Settings/GoPremium'
import ChangePassword from './Screens/Settings/ChangePassword'
import Feedback from './Screens/Settings/Feedback'
import Policy from './Screens/Settings/Policy'
import Faqs from './Screens/Settings/Faqs'
import EditProfile from './Screens/Others/EditProfile'
import ProfileVerified from './Screens/Others/ProfileVerified'
import EditProfileInfo from './Screens/Others/EditProfileInfo'
import EditQuestion from '../../components/EditQuestion'

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
      <Stack.Screen name='crushes' component={Crushes} />
      <Stack.Screen name='callHistory' component={CallHistory} />
      <Stack.Screen name='setting' component={Setting} />
      <Stack.Screen name='premium' component={GoPremium} />
      <Stack.Screen name='password' component={ChangePassword} />
      <Stack.Screen name='feedback' component={Feedback} />
      <Stack.Screen name='policy' component={Policy} />
      <Stack.Screen name='faqs' component={Faqs} />
      <Stack.Screen name='editProfile' component={EditProfile} />
      <Stack.Screen name='verified' component={ProfileVerified} />
      <Stack.Screen name='editProfileInfo' component={EditProfileInfo} />
      <Stack.Screen name='editQuestion' component={EditQuestion} />
      
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})