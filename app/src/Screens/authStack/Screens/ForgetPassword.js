import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import PopUp from '../../../components/PopUp';
import useAuth from '../../../redux/useAuth';

const emailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
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
  const [verificationCode, setVerificationCode] = useState('');
  const [resetPassSuccess, setResetPassSuccess] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [otpPopUp, setOtpPopUp] = useState(false);
  const [wrongOtpPopUp, setWrongOtpPopUp] = useState(false);

  const {forgetPass, forgetPassState, resetPass, resetPassState} = useAuth();

  const handleVerificationCodeChange = code => {
    setVerificationCode(code);

    // console.log(verificationCode);
  };

  const emailCallBack = status => {
    if (status === 'succeeded') {
      setOtpPopUp(true);
      setTimeout(() => {
        setOtpPopUp(false);
        navigation.replace('forgetPass', {screen: 'verification'});
      }, 4000);
    } else if (status === 'failed') {
      setErrorPopUp(true);
      setTimeout(() => {
        setErrorPopUp(false);
      }, 3000);
    }
  };
  const resetPassCallBack = status => {
    if (status === 'succeeded') {
      setResetPassSuccess(true);
      setTimeout(() => {
        setResetPassSuccess(false);
        navigation.navigate('signin');
      }, 4000);
    }
  };

  const handleEmailSubmit = values => {
    forgetPass(values, emailCallBack);
  };

  const handleResetSubmit = values => {
    // console.log(values);
    resetPass(values, resetPassCallBack);
    // console.log(resetPassState, 'resetPass screen')
  };
  const otp = forgetPassState.data?.otp;
  const userEmail = forgetPassState.data?.userID?.email;
  console.log(otp);
  // console.log(forgetPassState);
  // console.log(userEmail);
  // console.log(forgetPassState, 'forgetPass');

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLORS.primary2}}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {otpPopUp && (
          <PopUp
            color={'#04C200'}
            heading={'Success'}
            message={forgetPassState.success}
          />
        )}
        {errorPopUp && (
          <PopUp
            color={'red'}
            heading={'Failed'}
            message={forgetPassState.error}
          />
        )}
        {wrongOtpPopUp && (
          <PopUp
            color={'red'}
            heading={'Failed'}
            message={'Incorrect Otp Code'}
          />
        )}
        {resetPassSuccess && (
          <PopUp
            color={'#04C200'}
            heading={'Success'}
            message={resetPassState.success}
          />
        )}
        <CustomHeader
          left={'chevron-left'}
          iconSize={wp('10%')}
          leftIconColor={COLORS.blackTxtColor}
          leftOnpress={() =>
            screen === 'verification'
              ? navigation.navigate('forgetPass', {screen: 'forget'})
              : navigation.goBack()
          }
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
            initialValues={{email: 'fazeel.sajid890@gmail.com'}}
            validationSchema={emailValidationSchema}
            onSubmit={handleEmailSubmit}>
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
                  style={{marginVertical: hp('20%')}}
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
                  text={'Send Code'}
                  textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
                  onPress={handleSubmit}
                  pressedRadius={wp(3)}
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
              onPress={() => {
                if (verificationCode === otp) {
                  navigation.replace('forgetPass', {screen: 'reset'});
                } else {
                  setWrongOtpPopUp(true);
                  setTimeout(() => {
                    setWrongOtpPopUp(false);
                  }, 4000);
                }
              }}
              pressedRadius={wp(3)}
            />
          </>
        ) : (
          <Formik
            initialValues={{
              email: userEmail,
              password: '',
              confirmPassword: '',
            }}
            validationSchema={resetValidationSchema}
            onSubmit={handleResetSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={{marginVertical: hp('15%')}}>
                  <TxtInput
                    placeholder={'Enter Password'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
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
                    secureTextEntry={true}
                    error={
                      touched.confirmPassword &&
                      errors.confirmPassword && (
                        <Text style={styles.errorText}>
                          {errors.confirmPassword}
                        </Text>
                      )
                    }
                  />
                </View>

                <CustomButton
                  containerStyle={[
                    styles.btn,
                    {backgroundColor: COLORS.primary1},
                  ]}
                  text={'Reset Password'}
                  textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
                  onPress={handleSubmit}
                  pressedRadius={wp(3)}
                />
              </>
            )}
          </Formik>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
  },
  heading: {
    fontFamily: fonts.SemiBold,
    fontSize: wp('6%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
    marginTop: hp('7%'),
  },
  btn: {
    paddingVertical: wp('3%'),
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
    marginVertical: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: COLORS.primary1,
    borderWidth: 2,
  },
  successContainer: {},
  successText: {
    fontSize: wp('4%'),
    color: '#155724',
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: wp('3.5%'),
    color: '#155724',
    textAlign: 'center',
    marginTop: hp('1%'),
  },
});
