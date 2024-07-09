import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../../components/CustomHeader';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../config/Fonts';
import Premium from '../../../../assets/svgs/premium.svg';
import Password from '../../../../assets/svgs/password.svg';
import Feedback from '../../../../assets/svgs/feedback.svg';
import FAQS from '../../../../assets/svgs/faqs.svg';
import Privacy from '../../../../assets/svgs/privacy.svg';
import Support from '../../../../assets/svgs/support.svg';
import Warning from '../../../../assets/svgs/Warning.svg';
import LogOut from '../../../../assets/svgs/LogOut.svg';
import ContinueWith from '../../../../components/ContinueWith';
import PopUpModal from '../../../../components/PopUpModal';
import CustomButton from '../../../../components/CustomButton';

const Setting = ({navigation}) => {
  const [ContactPopUp, setContactPopUp] = useState(false);
  const [LogOutPopUp, setLogOutPopUp] = useState(false);

  const options = [
    {
      title: 'Go Premium',
      svg: <Premium width={wp(5)} height={wp(5)} />,
      navigateTo: 'premium',
    },
    {
      title: 'Change Password',
      svg: <Password width={wp(5)} height={wp(5)} />,
      navigateTo: 'password',
    },
    {
      title: 'Give Feedback',
      svg: <Feedback width={wp(5)} height={wp(5)} />,
      navigateTo: 'feedback',
    },
    {
      title: 'Privacy Policy',
      svg: <Privacy width={wp(5)} height={wp(5)} />,
      navigateTo: 'policy',
    },
    {
      title: 'FAQS',
      svg: <FAQS width={wp(5)} height={wp(5)} />,
      navigateTo: 'faqs',
    },
  ];

  const navigateTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        headingStyle={styles.heading}
        heading={'Settings'}
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={()=> navigation.goBack()}
      />
      <View style={{marginTop: wp(10)}}>
        {options.map((option, index) => (
          <ContinueWith
            icon={option.svg}
            text={option.title}
            key={index}
            containerStyle={styles.optionContainer}
            textStyle={{
              color: COLORS.blackTxtColor,
              fontSize: wp(4),
              marginLeft: wp(4),
            }}
            onPress={() => navigateTo(option.navigateTo)}
          />
        ))}
        <ContinueWith
          icon={<Support width={wp(5)} height={wp(5)} />}
          text={'Contact Support'}
          // key={index}
          containerStyle={styles.optionContainer}
          textStyle={{
            color: COLORS.blackTxtColor,
            fontSize: wp(4),
            marginLeft: wp(4),
          }}
          onPress={() => setContactPopUp(true)}
        />
      </View>
      <PopUpModal
        visible={ContactPopUp}
        svg={<Support width={wp('20%')} height={hp('10%')} />}
        btn1Press={() => {
          setContactPopUp(false);
        }}
        message="If you require support, please feel free to reach out to us at [supportwaves@gmail.com]."
        btn1Txt="Ok"
        btn1style={{backgroundColor: COLORS.primary1}}

        textStyle={{
          marginBottom: hp(5),
          marginTop: hp(2),
          textAlign: 'center',
          fontFamily: fonts.Regular,
          fontSize: wp(3.6),
          color: COLORS.lightTxtColor
        }}
        btn2TxtStyle={{color: COLORS.primary1}}
        heading={'Contact Support'}
        btnsContainer={{flexDirection: 'row'}}
      />
      <PopUpModal
        visible={LogOutPopUp}
        svg={<Warning width={wp('20%')} height={hp('10%')} />}

        btn1Press={() => {
          setLogOutPopUp(false);
        }}
        btn2Press={()=> {
          setLogOutPopUp(false);
        }}
        // message="Logout"
        btn1Txt="Cancel"
        btn1style={{backgroundColor: COLORS.primary2}}
        textStyle={{
          // marginBottom: hp(5),
          // marginTop: hp(2),
          textAlign: 'center',
          fontFamily: fonts.Regular,
          // fontSize: wp(3.6),
          color: COLORS.lightTxtColor
        }}
        message={'Are you sure you want to Logout'}
        btn2TxtStyle={{color: COLORS.blackTxtColor}}
        btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(3)}}
        btn2Txt={'Yes,Logout'}
        heading={'Logout'}
        btnsContainer={{
          flexDirection: 'row',
          paddingHorizontal: wp(20),
          marginTop: wp(8),
        }}
      />

<View style={{flex:1, justifyContent: 'flex-end'}} >
        <CustomButton
        svg={<LogOut width={wp(5)} height={wp(5)} />}
        text={'Logout'}
        containerStyle={styles.btn}
        textStyle={styles.btnText}
        onPress={()=> setLogOutPopUp(true)}
        pressedRadius={wp(3)}
      />
        </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('4'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
  },
  optionContainer: {
    borderWidth: wp('0.2%'),
    borderColor: COLORS.lightGrayColor,
    marginVertical: wp('2.6%'),
    borderRadius: wp(2),
    padding: wp(3.8),
    // alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // paddingVertical: wp('100%'),
  },
  btn: {
    // flex: 1,
    // alignSelf: 'flex-end',
    backgroundColor: COLORS.primary1,
    paddingVertical: wp(3),
    marginBottom: wp(10)
    // justifyContent: 'flex-end'
  },
  btnText: {
    fontSize: wp(4),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    // fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: wp(2)
  },
});
