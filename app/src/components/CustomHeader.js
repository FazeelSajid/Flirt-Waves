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
  headingColor,
  leftIconColor,
  rightIconColor,
  rightText,
  rightTextStyle
  
}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        icon={left}
        iconSize={iconSize}
        iconColor={leftIconColor}
        onPress={leftOnpress}
        style={styles.iconBtn}
      />
      <Text style={[styles.heading, headingColor && {color: headingColor}]}>
        {heading}
      </Text>
      <CustomButton
        icon={right}
        size={iconSize}
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
    alignItems: 'center',
    paddingVertical: hp(2.5),
  },
  heading: {
    color: COLORS.bgColor,
    fontSize: hp(3),
    fontWeight: '600',
    lineHeight: wp(6),
    fontFamily: fonts.Regular
  },
  iconBtn: {},
});
