import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Logos from '../../../components/subComp/Logos';
import svg from '../../../assets/svgs/Svg';
import Facebook from '../../../assets/svgs/facebook.svg';
import {COLORS} from '../../../../config/COLORS';
import CustomHeader from '../../../components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {fonts} from '../../../../config/Fonts';
import TxtInput from '../../../components/TxtInput';
import CustomButton from '../../../components/CustomButton';
import ContinueWith from '../../../components/ContinueWith';
import Apple from '../../../assets/svgs/apple.svg';
import Google from '../../../assets/svgs/google.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('6%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}
      />
      <Logos />
      <Text style={styles.heading}>Sign In</Text>
      <Formik
        initialValues={{email: 'fazeel@gmail.com', password: 'fazeel'}}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('QA');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inputContainer}>
            <TxtInput
              placeholder={'Email Address'}
              style={{marginBottom: wp('6%')}}
              value={values.email}
              onChangeText={handleChange('email')}
              // onBlur={handleBlur('email')}
              error={
                touched.email &&
                errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )
              }
            />

            <TxtInput
              placeholder={'Password'}
              style={{marginBottom: wp('6%')}}
              value={values.password}
              onChangeText={handleChange('password')}
              // onBlur={handleBlur('password')}
              error={
                touched.password &&
                errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )
              }
              secureTextEntry={true}
            />
            <View style={styles.forgetBtnContainer}>
              <CustomButton
                text={'Forget Password?'}
                textStyle={styles.forgetTxt}
                onPress={() =>
                  navigation.navigate('forgetPass', {screen: 'forget'})
                }
              />
            </View>

            <CustomButton
              containerStyle={[
                styles.btn,
                {backgroundColor: COLORS.primary1, marginBottom: wp('5%')},
              ]}
              text={'Continue'}
              textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <ContinueWith
        text={'Continue with Facebook'}
        // onPress={handlePress}
        icon={<Facebook width={wp('5%')} height={hp('5%')} />}
        containerStyle={styles.continueWith}
      />
      <ContinueWith
        text={'Continue with Google'}
        // onPress={handlePress}
        icon={<Google width={wp('5%')} height={hp('5%')} />}
        containerStyle={styles.continueWith}
      />
      {Platform.OS === 'ios' && (
        <ContinueWith
          text={'Continue with Apple'}
          // onPress={handlePress}
          icon={<Apple width={wp('5%')} height={hp('5%')} />}
          containerStyle={styles.continueWith}
        />
      )}
      <View style={styles.alreadyContainer}>
        <Text style={styles.already}>Don't Have An Account?</Text>
        <CustomButton
          text={'Sign Up'}
          textStyle={styles.loginBtn}
          onPress={() => navigation.navigate('signup')}
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: COLORS.primary2,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
  },
  heading: {
    marginTop: hp('8%'),
    fontFamily: fonts.SemiBold,
    fontSize: wp('6%'),
    color: COLORS.blackTxtColor,
  },
  inputContainer: {
    // justifyContent:'space-between',
    marginTop: wp('8%'),
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  btn: {
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('8%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
  continueWith: {
    backgroundColor: COLORS.white,
    marginTop: wp('5%'),
  },
  alreadyContainer: {
    marginTop: wp('8%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: wp('8%'),
  },
  already: {
    fontFamily: fonts.SemiBold,
    color: COLORS.blackTxtColor,
    textAlign: 'center',
  },
  loginBtn: {
    fontFamily: fonts.SemiBold,
    color: COLORS.primary1,
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
    textDecorationLine: 'underline',
  },
  forgetBtnContainer: {flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  forgetTxt: {
    color: COLORS.primary1,
    fontFamily: fonts.SemiBold,
  },
});
