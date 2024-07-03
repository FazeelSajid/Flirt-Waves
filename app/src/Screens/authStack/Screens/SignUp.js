import {StyleSheet, Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp = ({navigation}) => {
  return (
    // <KeyboardAvoidingView style={{flex: 1}} >

    <ScrollView style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('10%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}
      />
      <Logos />
      <Text style={styles.heading}>Sign Up</Text>
      <View style={{flexGrow: 1}} >

      <Formik
        initialValues={{email: 'fazeel@gmail.com', password: 'fazeel', confirmPassword: 'fazeel'}}
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

            <TxtInput
              placeholder={'Confirm Password'}
              style={{marginBottom: wp('6%')}}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              // onBlur={handleBlur('confirmPassword')}
              secureTextEntry={true}
              error={
                touched.confirmPassword &&
                errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )
              }
            />

            <CustomButton
              containerStyle={[
                styles.btn,
                {backgroundColor: COLORS.primary1, marginBottom: wp('5%')},
              ]}
              text={'Continue'}
              textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
              onPress={handleSubmit}
            pressedRadius={wp(3)}

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
      </View>

      <View style={styles.alreadyContainer}>
        <Text style={styles.alreadyTxt}>Already have an account?</Text>
        <CustomButton
          text={'Sign In'}
          textStyle={styles.loginBtn}
          onPress={() => navigation.navigate('signin')}
        />
      </View>
    </ScrollView>
// </KeyboardAvoidingView>
  );
};

export default SignUp;

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
    marginTop: hp('7%'),
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
    paddingVertical: wp('3%'),
    borderRadius: wp('3%'),
    marginTop: wp('8%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
  continueWith: {
    backgroundColor: COLORS.white,
    marginTop: wp('5%'),
    paddingVertical: wp('4%'),
  },
  alreadyContainer: {
    marginTop: wp('8%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: wp('8%'),
  },
  alreadyTxt: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    textAlign: 'center',
  },
  loginBtn: {
    fontFamily: fonts.SemiBold,
    color: COLORS.primary1,
    fontSize: wp('4%'),
    marginLeft: wp('2%'),
    textDecorationLine: 'underline',
  },
});
