import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../config/COLORS';
import CustomHeader from '../../../components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Privacy from '../../../assets/svgs/privacy.svg';
import {fonts} from '../../../../config/Fonts';
import CustomButton from '../../../components/CustomButton';

const ReviewNaccept = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('8%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}
      />
      <View style={styles.headingContainer}>
        <Privacy />
        <Text style={styles.heading}>Review and accept our privacy policy</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: wp('4%')}}>
        <Text style={styles.policy}>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information. If you
          contact us directly, we may receive additional information about you
          such as your name, email address, phone number, the contents of the
          message and/or attachments you may send us, and any other information
          you may choose to provide. When you register for an Account, we may
          ask for your contact information, including items such as name,
          company name, address, email address, and telephone number.{'\n'}Like any
          other website, mtechub llc uses 'cookies'. These cookies are used to
          store information including visitors' preferences, and the pages on
          the website that the visitor accessed or visited. The information is
          used to optimize the users' experience by customizing our web page
          content based on visitors' browser type and/or other information. You
          may consult this list to find the Privacy Policy for each of the
          advertising partners of mtechub llc. Third-party ad servers or ad
          networks uses technologies like cookies, JavaScript, or Web Beacons
          that are used in their respective advertisements and links that appear
          on mtechub llc, which are sent directly to users' browser. They
          automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit.{'\n'}Note that mtechub llc has no
          access to or control over these cookies that are used by third-party
          advertisers. The personal information that you are asked to provide,
          and the reasons why you are asked to provide it, will be made clear to
          you at the point we ask you to provide your personal information. If
          you contact us directly, we may receive additional information about
          you such as your name, email address, phone number, the contents of
          the message and/or attachments you may send us, and any other
          information you may choose to provide. When you register for an
          Account, we may ask for your contact information, including items such
          as name, company name, address, email address, and telephone number.
          Like any other website, mtechub llc uses 'cookies'.{'\n'}These cookies are
          used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information. You may consult this list to find the Privacy Policy for
          each of the advertising partners of mtechub llc. Third-party ad
          servers or ad networks uses technologies like cookies, JavaScript, or
          Web Beacons that are used in their respective advertisements and links
          that appear on mtechub llc, which are sent directly to users' browser.
          They automatically receive your IP address when this occurs{'.\n'}These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit. Note that mtechub llc has no
          access to or control over these cookies that are used by third-party
          advertisers.
        </Text>
       
      </ScrollView>
      <View style={{marginTop: wp(2)}} >
          <CustomButton
            containerStyle={[styles.btn, {backgroundColor: COLORS.primary1}]}
            text={'Accept'}
            textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
            onPress={()=> navigation.navigate('signup')}
            pressedRadius={wp(3)}
          />
          <CustomButton
            containerStyle={[
              styles.btn,
              {backgroundColor: COLORS.primary2, marginBottom: wp('5%')},
            ]}
            text={'Continue without accepting'}
            textStyle={[styles.btnText, {color: COLORS.primary1}]}
            pressedRadius={wp(3)}
            onPress={()=> navigation.navigate('signup')}
          />
        </View>
    </View>
  );
};

export default ReviewNaccept;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('4%'),
    paddingHorizontal: wp('6%'),
  },
  headingContainer: {
    paddingHorizontal: wp('10%'),
    overflow: 'hidden',
    alignItems: 'center',
  },
  heading: {
    fontFamily: fonts.SemiBold,
    fontSize: wp('6%'),
    textAlign: 'center',
    paddingTop: wp('3%'),
    color: COLORS.blackTxtColor,
  },
  policy: {
    fontFamily: fonts.Regular,
    lineHeight: wp('7%'),
    color: COLORS.darkGrayColor
  },
  btn: {
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('5%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
});
