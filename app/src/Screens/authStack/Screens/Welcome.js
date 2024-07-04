import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {imgs} from '../../../assets/Imgs/Img';
import {COLORS} from '../../../../config/COLORS';
import Logo from '../../../assets/svgs/logo.svg';
import Apple from '../../../assets/svgs/apple.svg';
import Google from '../../../assets/svgs/google.svg';
import Facebook from '../../../assets/svgs/facebook.svg';

// import Img from '../../../assets/Imgs'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ContinueWith from '../../../components/ContinueWith';
import {fonts} from '../../../../config/Fonts';
import LinearGradient from 'react-native-linear-gradient';
import Logos from '../../../components/subComp/Logos';

const Welcome = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Review');
    console.log('press');
  };
  return (
    <LinearGradient colors={['#F5BF03', '#F9D353']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground source={imgs.welcomeScreen} style={styles.bgImg}>
        
          <Logos />
        
      </ImageBackground>
      <View style={{paddingHorizontal: wp('6%'), flex: 1}}>
        <Text style={[styles.heading, {marginTop: hp('2%')}]}>
          Make friends with the {'\n'} people like you
        </Text>
        <Text style={styles.descriptiveTxt}>
          We created to bring together amazing singles who want to find love,
          laughter and happily ever after!{' '}
        </Text>
        <View style={styles.innerContainer}>
          <ContinueWith
            text={'Continue with Email'}
            onPress={handlePress}
            containerStyle={styles.continueWith}
          />
          <ContinueWith
            text={'Continue with Google'}
            onPress={handlePress}
            icon={<Google width={wp('5%')} height={hp('5%')} />}
            containerStyle={styles.continueWith}
          />
          <ContinueWith
            text={'Continue with Facebook'}
            onPress={handlePress}
            icon={<Facebook width={wp('5%')} height={hp('5%')} />}
            containerStyle={styles.continueWith}
          />
          {Platform.OS === 'ios' && (
            <ContinueWith
              text={'Continue with Apple'}
              onPress={handlePress}
              icon={<Apple width={wp('5%')} height={hp('5%')} />}
              containerStyle={styles.continueWith}
            />
          )}
        </View>
        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <ContinueWith
            text={'Connection Problem?'}
            textStyle={styles.Problem}
            containerStyle={{marginBottom:wp(2) }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
    // alignItems: 'center',
    // overflow: 'hidden'
  },
  bgImg: {
    resizeMode: 'contain',
    width: wp('100%'),
    height: hp('40%'),
    paddingTop: hp('10%'),
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    marginTop: hp('5%'),
    // height: wp('48%'),
    // justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Lexend-SemiBold',
    color: COLORS.blackTxtColor,
    fontSize: wp('6.2%'),
    // fontWeight: 'bold',
    textAlign: 'center',

    // marginTop: hp('2%'),
    // marginBottom: hp('2%'),
  },
  descriptiveTxt: {
    fontFamily: fonts.Regular,
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    // fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: wp('3%'),
    marginTop: hp('2%'),
    // marginBottom: hp('2%'),
  },
  continueWith: {
    backgroundColor: COLORS.white,
    marginTop: wp('5%'),
    paddingVertical: wp('4%'),

  },
  Problem: {
    fontFamily: fonts.SemiBold,
  },
  linearGradient: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
