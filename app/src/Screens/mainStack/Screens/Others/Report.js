import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../../components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../../../config/COLORS';
import {fonts} from '../../../../../config/Fonts';
import ContinueWith from '../../../../components/ContinueWith';
import CustomButton from '../../../../components/CustomButton';
import PopUp from '../../../../components/PopUp';

const Report = ({user = 'Rosie', navigation}) => {
  const [response, setResponses] = useState(null);
  const [showPopUp, setShowPopup] = useState(false);
  const reasons = [
    'Block for no reason',
    'Commercial profile',
    'Scam',
    'Fake profile',
    'Inappropriate picture',
    'Bad behavior',
    'Underage',
  ];

  console.log(response);

  const handleSubmit = () => {

    setTimeout(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
      }, 2000);
      navigation.navigate('Home')
    console.log('Submit Report', response);
  };

  return (
    <View style={styles.container}>
        {
            showPopUp && (
                <PopUp
                color={'#04C200'}
                heading={'Success'}
                message={'Reason submitted successfully!'}
              />
            )

  
        }
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <CustomHeader
        left={'chevron-left'}
        iconSize={wp(10)}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}

      />

      <Text style={styles.heading}>
        Tell us the reason why are you reporting {user}?
      </Text>
      <Text style={styles.statement}>
        You will no longer see this person or receive any message from them. Let
        us know what happened.
      </Text>

      {reasons.map(option => {
        return (
          <ContinueWith
            key={option}
            containerStyle={[
              styles.optionButton,
              response === option && styles.selectedOptionButton,
            ]}
            onPress={() => setResponses(option)}
            text={option}
            textStyle={styles.optionText}
          />
        );
      })}

      <CustomButton
        containerStyle={styles.btn}
        text={'Report & BLock User'}
        textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
        onPress={() => response ? handleSubmit() : navigation.navigate('describe')}
        pressedRadius={wp(3)}
      />
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp(7),
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.white,
  },
  heading: {
    fontSize: wp(5.5),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.SemiBold,
    marginVertical: wp(3),
    textAlign: 'center',
    marginBottom: wp(3.5),
    marginTop: wp(0),
    marginHorizontal: wp(7),
  },
  statement: {
    fontSize: wp(3.6),
    color: COLORS.darkGrayColor,
    fontFamily: fonts.Regular,
    // marginVertical: wp(3),
    textAlign: 'center',
    marginBottom: wp(5),
    marginTop: wp(0),
    // marginHorizontal: wp(10)
  },
  optionButton: {
    borderWidth: wp('0.2%'),
    borderColor: COLORS.lightGrayColor,
    borderRadius: wp('1.5%'),
    // padding: wp('2%'),
    marginVertical: wp('3%'),
    paddingVertical: wp('3%'),
    backgroundColor: COLORS.white,
    elevation: wp(0.4),
  },
  optionText: {
    textAlign: 'center',
    color: COLORS.darkGrayColor,
  },
  selectedOptionButton: {
    borderColor: COLORS.primary1,
    borderWidth: wp('0.5%'),
    // borderBlockEndColor: COLORS.primary1,
  },
  btn: {
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('4%'),
    backgroundColor: COLORS.primary1, 
    marginBottom: wp('5%')
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
});
