import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../config/COLORS';
import {fonts} from '../../config/Fonts';
import ContinueWith from './ContinueWith';
import CustomHeader from './CustomHeader';
import CustomButton from './CustomButton';

const EditQuestion = ({navigation, route}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const {question} = route.params;

  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={navigation.goBack}
      />
      {/* <Text style={styles.questionText}>{question.question}</Text> */}
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <Text
          style={{
            fontFamily: fonts.SemiBold,
            color: COLORS.blackTxtColor,
            fontSize: wp(6),
            textAlign: 'center',
          }}>
          {question.question}
        </Text>

        <View>
          {question.options.map((option, index) => (
            <ContinueWith
              key={option}
              containerStyle={[
                styles.optionButton,
                selectedOption === option && styles.selectedOptionButton,
              ]}
              onPress={() => handleOptionSelect(option)}
              text={option}
              textStyle={styles.optionText}
            />
          ))}
        </View>
        <CustomButton
          text={'Save Changes'}
          containerStyle={styles.btnContainer}
          textStyle={{fontFamily: fonts.Medium, color: COLORS.blackTxtColor}}
        />
      </View>
    </View>
  );
};

export default EditQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    paddingTop: wp(15),
    backgroundColor: COLORS.primary2,
  },
  optionButton: {
    borderWidth: wp('0.5%'),
    borderColor: COLORS.white,
    borderRadius: wp('1.5%'),
    // padding: wp('2%'),
    marginVertical: wp('3%'),
    paddingVertical: wp('3%'),
    backgroundColor: COLORS.white,
  },
  selectedOptionButton: {
    borderColor: COLORS.primary1,
    borderWidth: wp('0.5%'),
    // borderBlockEndColor: COLORS.primary1,
  },
  optionText: {
    textAlign: 'center',
    color: COLORS.darkGrayColor,
  },
  btnContainer: {
    justifyContent: 'center',
    // padding: wp(2),
    borderRadius: wp('3%'),
    backgroundColor: COLORS.primary1,
    paddingVertical: wp(2.5),
    marginVertical: wp(3),
    marginBottom: hp(8),
  },
});
