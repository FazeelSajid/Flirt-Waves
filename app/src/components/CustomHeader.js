import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from './CustomButton';
import { fonts } from '../../config/Fonts';

const CustomHeader = ({
  right,
  heading,
  left,
  iconSize,
  leftOnpress,
  rightOnPress,
  leftIconColor,
  rightIconColor,
  rightText,
  rightTextStyle,
  headingStyle,
  leftSvg,
  rightSvg,
  
  
}) => {
  return (
    <View style={styles.container}>
      { left &&
      <CustomButton
        icon={left}
        svg={leftSvg}
        iconSize={iconSize}
        iconColor={leftIconColor}
        onPress={leftOnpress}
        style={styles.iconBtn}
      />}
      <Text style={[styles.heading, headingStyle]}>
        {heading}
      </Text>
      <CustomButton
        icon={right}
        svg={rightSvg}
        iconSize={iconSize}
        iconColor={rightIconColor}
        onPress={rightOnPress}
        text={rightText}
        textStyle={rightTextStyle}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: hp(2.5),
    // backgroundColor:'green'
  },
  heading: {
    color: COLORS.bgColor,
    fontSize: hp(3),
    fontWeight: '600',
    // lineHeight: wp(6),
    fontFamily: fonts.Regular
  },
  iconBtn: {},
});
