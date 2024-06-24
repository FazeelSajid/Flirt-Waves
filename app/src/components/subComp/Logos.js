import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import svg from '../../assets/svgs/Svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../../assets/svgs/logo.svg';
import {COLORS} from '../../../config/COLORS';
import {fonts} from '../../../config/Fonts';

const Logos = () => {
  return (
    <View style={styles.container}>
      <Logo width={wp('15%')} height={hp('15%')} />
      <Text style={styles.heading}> Flirt Waves</Text>
    </View>
  );
};

export default Logos;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: wp('15%'),
    overflow: 'hidden',
    justifyContent: 'center'
  },
  heading: {
    fontFamily: fonts.SemiBold,
    color: COLORS.blackTxtColor,
    fontSize: wp('6.2%'),
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
