import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import PaperBtn from './PaperButton';

const HeadingCard = ({heading, btnTxt, onpress}) => {
  
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>{heading}</Text>
      <PaperBtn onPress={onpress} textColor={COLORS.orangeTextColor}>
        {btnTxt}
      </PaperBtn>
    </View>
  );
};

export default HeadingCard;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  heading: {
    color: COLORS.darkTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
