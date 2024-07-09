import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {imgs} from '../assets/Imgs/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../config/Fonts';
import {COLORS} from '../../config/COLORS';
import CustomButton from './CustomButton';
import Call from '../assets/svgs/phone';
import Video from '../assets/svgs/video';

const CallHistoryComponent = ({
  name,
  callType,
  duration,
  phoneOnpress,
  videoOnpress,
  img,
}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.borderContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>
            {callType} - {duration}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <CustomButton
            svg={<Call width={wp('6%')} height={wp('6%')} />}
            onPress={phoneOnpress}
          />
          <CustomButton
            svg={<Video width={wp('9')} height={wp('9%')} />}
            onPress={videoOnpress}
          />
        </View>
      </View>
    </View>
  );
};

export default CallHistoryComponent;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    marginBottom:wp(5) 
  },
  img: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
  },
  name: {
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
    fontSize: wp('4.5%'),
    // marginLeft: wp('2%'),
  },
  time: {
    color: COLORS.lightTxtColor,
    fontFamily: fonts.Regular,
    fontSize: wp('3.7%'),
    marginTop: hp('0.5%'),
  },
  nameContainer: {
    marginLeft: wp('4.5%'),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    // marginTop: hp('1%'),
    alignItems: 'center',
    paddingLeft: wp(14),
    // marginLeft: wp('2%'),
  },
  borderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: wp(0.3),
    borderBottomColor: COLORS.lightGrayColor,
    paddingBottom: wp(5)
  },
});
