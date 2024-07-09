import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../config/Fonts';
import CustomHeader from '../../../../components/CustomHeader';
import Logos from '../../../../components/subComp/Logos';
import TxtInput from '../../../../components/TxtInput';
import CustomButton from '../../../../components/CustomButton';

const Feedback = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={() => navigation.goBack()}
      />
      <Logos />

<View style={styles.inputContainer} >
  <Text style={styles.heading}>What do you think of Flirt Waves?</Text>
  <TxtInput containerStyle={styles.TxtInput} multiline={true} placeholder={'Add message'} placeholderTextColor={COLORS.darkGrayColor} />
</View>

<View style={{flex:1, justifyContent: 'flex-end'}} >
        <CustomButton
        text={'Submit'}
        containerStyle={styles.btn}
        textStyle={styles.btnText}
        pressedRadius={wp(3)}
        // onPress={handleSubmit}
      />
        </View>
  
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('4%'),
    paddingHorizontal: wp('6%'),
  },
  TxtInput: {
    borderColor: COLORS.lightGrayColor,
    borderWidth: wp(0.3),
    height: wp(30),
    // marginTop: wp(15),
  },
  heading: {
    fontSize: wp(4),
    color: COLORS.primary1,
    fontFamily: fonts.SemiBold,
    // marginVertical: wp(3),
    // textAlign: '/',
    marginBottom: wp(3.5),
    // marginTop: wp(0),
    // marginHorizontal: wp(7),
  },
  inputContainer:{
    marginVertical: hp(15)
  },
  btn: {
    // flex: 1,
    // alignSelf: 'flex-end',
    backgroundColor: COLORS.primary1,
    paddingVertical: wp(3),
    marginBottom: wp(20)
    // justifyContent: 'flex-end'
  },
  btnText: {
    fontSize: wp(4),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
