import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imgs } from '../../../assets/Imgs/Img'
import { COLORS } from '../../../../config/COLORS'
import Logo from '../../../assets/svgs/logo.svg'
// import Img from '../../../assets/Imgs'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContinueWith from '../../../components/ContinueWith'

const Welcome = () => {
  return (
    <View style={styles.container} >
      <ImageBackground source={imgs.welcomeScreen} style={styles.bgImg} >
        <Logo width={wp('15%')} height={hp('15%')}  />
        <Text style={styles.heading} >Flirt Waves</Text>
      </ImageBackground>
      <Text style={[styles.heading, { marginTop: hp('2%'), marginHorizontal: wp('5%') }]} >Make friends with the {'\n'} people like you</Text>
      <Text style={styles.descriptiveTxt} >We created to bring together amazing singles  who want to find love, laughter and happily ever after! </Text>
      <View style={styles.innerContainer} >
        <ContinueWith  />
        <ContinueWith  />
        <ContinueWith  />
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary1,
    // justifyContent: 'center'
    alignItems: 'center',
    // overflow: 'hidden'
    
  },
  bgImg:{
    resizeMode:'contain',
    width:wp('100%'),
    height:hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  innerContainer:{
    marginTop: hp('2%'),
    // justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    // overflow: 'hidden',
    justifyContent: 'space-between'
    
  },
  heading:{
    fontFamily: 'Lexend',
    color: COLORS.blackTxtColor,
    fontSize: wp('6%'),
    fontWeight: '600',
    textAlign: 'center',
    // marginTop: hp('2%'),
    // marginBottom: hp('2%'),
  },
  descriptiveTxt:{
    fontFamily: 'Lexend',
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
    // marginBottom: hp('2%'),
  }
})