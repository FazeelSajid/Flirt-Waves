import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../../../components/CustomHeader';
import {fonts} from '../../../../config/Fonts';
import TxtInput from '../../../components/TxtInput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../../components/CustomButton';
import VerificationInput from '../../../components/VerificationInput';

const emailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  // password: Yup.string()
  //   .min(6, 'Password must be at least 6 characters')
  //   .required('Password is required'),
});

const resetValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});


const ForgetPassword = ({route, navigation}) => {
  const {screen} = route.params;
  console.log(screen);

  const [verificationCode, setVerificationCode] = useState('');

  const handleVerificationCodeChange = code => {
    setVerificationCode(code);
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('6%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}
      />

      <Text style={styles.heading}>
        {screen === 'forget'
          ? 'Forget Password'
          : screen === 'verification'
          ? 'Verification'
          : 'Reset Password'}
      </Text>
      {screen === 'forget' ? (
        <Formik
          initialValues={{email: ''}}
          validationSchema={emailValidationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.replace('forgetPass', {screen: 'verification'});
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TxtInput
                style={{marginTop: hp('18%')}}
                placeholder={'Enter Email'}
                value={values.email}
                onChangeText={handleChange('email')}
                error={
                  touched.email &&
                  errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )
                }
              />

              <CustomButton
                containerStyle={[
                  styles.btn,
                  {backgroundColor: COLORS.primary1},
                ]}
                text={'Continue'}
                textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      ) : screen === 'verification' ? (
        <>
          <View style={{paddingHorizontal: wp('8%')}}>
            <VerificationInput
              numberOfInputs={4}
              onChange={handleVerificationCodeChange}
              containerStyle={styles.inputContainer}
              inputStyle={styles.input}
            />
          </View>

          <CustomButton
            containerStyle={[styles.btn, {backgroundColor: COLORS.primary1}]}
            text={'Verify'}
            textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
            onPress={() => navigation.replace('forgetPass', {screen: 'reset'})}
          />
        </>
      ) : (
         <Formik
          initialValues={{ password: '', confirmPassword: ''}}
          validationSchema={resetValidationSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('signin');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TxtInput
                style={{marginTop: hp('18%')}}
                placeholder={'Enter Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                error={
                  touched.password &&
                  errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )
                }
              />
              <TxtInput
                style={{marginTop: hp('4%')}}
                placeholder={'Confirm Password'}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
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
                  {backgroundColor: COLORS.primary1},
                ]}
                text={'Reset Password'}
                textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      )}
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
  },
  heading: {
    fontFamily: fonts.SemiBold,
    fontSize: wp('6%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
    paddingTop: hp('7%'),
  },
  btn: {
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('8%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    marginVertical: hp('15%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: COLORS.primary1,
    borderWidth: 2,
  },
});
