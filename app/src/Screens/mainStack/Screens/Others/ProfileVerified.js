import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../../../../config/COLORS';
import svg from '../../../../assets/svgs/Svg';
import Check from '../../../../assets/svgs/check.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../config/Fonts';
import CustomHeader from '../../../../components/CustomHeader';
import * as Progress from 'react-native-progress';
import CircularProgress from '../../../../components/CircularProgress';

const ProfileVerified = ({navigation}) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleProgressComplete = () => {
    setIsVerified(true);
  };

  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  useEffect(() => {
    let interval;
    const timer = setTimeout(() => {
      setIndeterminate(false);
      interval = setInterval(() => {
        setProgress(prevProgress =>
          Math.min(1, prevProgress + Math.random() / 5),
        );
      }, 500);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
    console.log(progress);
  }, []);
  return (
    <View
      style={[
        styles.container,
        isVerified
          ? {backgroundColor: COLORS.white}
          : {backgroundColor: COLORS.primary2},
      ]}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={navigation.goBack}
      />
      {isVerified && (
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Check width={wp(30)} height={hp(22)} />

          <Text
            style={{
              fontFamily: fonts.SemiBold,
              color: COLORS.blackTxtColor,
              fontSize: wp(5),
            }}>
            Profile Verified
          </Text>
          <Text
            style={{
              paddingHorizontal: wp(6.5),
              textAlign: 'center',
              fontFamily: fonts.Regular,
              marginTop: wp(4),
              fontSize: wp(3.5),
              color: COLORS.darkGrayColor
            }}>
            Congratulations! Your profile is now verified with a verification
            badge. Enjoy all the platform's features and benefits with
            confidence!
          </Text>
        </View>
      )}
      {!isVerified && (
        <View style={styles.VerifyingContainer}>
          <CircularProgress
            onComplete={handleProgressComplete}
            setIsVerified={setIsVerified}
          />
          <Text style={styles.Verifying}>Verifying</Text>
          <Text style={styles.message}>It will just take a few minutes</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileVerified;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp(8),
  },
  Verifying: {
    fontSize: wp(5),
    fontFamily: fonts.SemiBold,
    color: COLORS.blackTxtColor,
    marginTop: wp(10),
  },
  VerifyingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(10),
    flex: 1
  },
  message: {
    fontFamily: fonts.Regular,
    marginTop: wp(4),
    color: COLORS.darkGrayColor,
  },
});
