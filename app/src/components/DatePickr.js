import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {WheelPicker} from 'react-native-wheel-picker-android';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../config/COLORS';
import {fonts} from '../../config/Fonts';
import CustomButton from './CustomButton';

const DatePickr = ({date, setDate, toggleModal}) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedYear, setSelectedYear] = useState(2000);

  const days = Array.from({length: 31}, (_, i) => (i + 1).toString());
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const years = Array.from({length: 200}, (_, i) => (1900 + i).toString());

  // console.log(selectedDay, selectedMonth, selectedYear);
  // setDate(`${selectedDay}-${selectedMonth}-${selectedYear}`);
  console.log(years.indexOf(selectedYear.toString()));

  return (
  <View>

    <View style={styles.pickerContainer}>
      <WheelPicker
        selectedItem={selectedDay - 1}
        data={days}
        onItemSelected={index => setSelectedDay(index + 1)}
        style={styles.wheelPicker}
        itemTextFontFamily={fonts.Regular}
        selectedItemTextFontFamily={fonts.Regular}
        selectedItemTextColor={COLORS.blackTxtColor}
        isCyclic={true}
        indicatorColor={COLORS.primary1}
        indicatorWidth={wp(1)}
        itemTextSize={wp(5)}
        selectedItemTextSize={wp(5)}
      />
      <WheelPicker
        selectedItem={selectedMonth-1}
        data={months}
        onItemSelected={index => setSelectedMonth(index+1)}
        style={styles.wheelPicker}
        itemTextFontFamily={fonts.Regular}
        selectedItemTextFontFamily={fonts.Regular}
        selectedItemTextColor={COLORS.blackTxtColor}
        isCyclic={true}
        indicatorColor={COLORS.primary1}
        indicatorWidth={wp(1)}
        itemTextSize={wp(5)}
        selectedItemTextSize={wp(5)}
      />
      <WheelPicker
        selectedItem={years.indexOf(selectedYear.toString())}
        data={years}
        onItemSelected={index => setSelectedYear(years[index])}
        style={styles.wheelPicker}
        itemTextFontFamily={fonts.Regular}
        selectedItemTextFontFamily={fonts.Regular}
        selectedItemTextColor={COLORS.blackTxtColor}
        isCyclic={true}
        indicatorColor={COLORS.primary1}
        indicatorWidth={wp(1)}
        itemTextSize={wp(5)}
        selectedItemTextSize={wp(5)}
        
        />
    </View>
    <CustomButton
        containerStyle={styles.button}
        text={'Save'}
        textStyle={{
          fontFamily: fonts.Medium,
          color: COLORS.blackTxtColor,
        }}
        onPress={() => {
          console.log(selectedDay, selectedMonth, selectedYear);
          setDate(`${selectedDay}-${selectedMonth}-${selectedYear}`);
          toggleModal()
        }}
      />
        </View>
  );
};

export default DatePickr;

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
    paddingHorizontal: wp(8),
    // marginBottom: 20,
  },
  wheelPicker: {
    width: wp('15%'),
    height: hp('20%'),
  },
  button: {
    backgroundColor: COLORS.primary1,
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('4%'),
  },
});
