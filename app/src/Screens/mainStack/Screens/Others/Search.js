import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../../../../components/CustomButton';
import TxtInput from '../../../../components/TxtInput';
import { fonts } from '../../../../../config/Fonts';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const Search = ({navigation}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const data = [
    'Sofia Rodriguez',
    'Sofia Morales',
    'Sofia Silva',
    'Sofia Hernandez',
  ];

  const handleSearch = text => {
    setSearchText(text);
    if (text) {
      const newData = data.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(newData);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomButton
          icon={'chevron-left'}
          iconColor={COLORS.blackTxtColor}
          iconSize={wp(10)}
          onPress={navigation.goBack}
        />
        <TxtInput 
          style={styles.txtInput} 
          placeholder="Search here"
          value={searchText}
          onChangeText={(text)=> handleSearch(text)}
          rightIcon={'magnify'}
          rightIconSize={wp(6)}
          rightIconFocusColor={COLORS.primary1}
          rightIconColor={COLORS.darkGrayColor}
          selectableColor={COLORS.blackTxtColor}
        />
        {filteredData.length > 0 && (
          <View style={styles.dropdown}>
            <FlatList
              data={filteredData}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
      <Text style={styles.heading} >Search by Preferences</Text>
      <View style={styles.tagsContainer}>
        <Text style={styles.tag}>A Relationship</Text>
        <Text style={styles.tag}>Nothing Serious</Text>
        <Text style={styles.tag}>I'll know when I find it</Text>
        <Text style={styles.tag}>Night owl</Text>
        <Text style={styles.tag}>Junk Food</Text>
        <Text style={styles.tag}>Vegetarian</Text>
        <Text style={styles.tag}>Halal</Text>
        <Text style={styles.tag}>Exercise all the time</Text>
        <Text style={styles.tag}>Occasional Exercise</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('6%'),
    paddingHorizontal: wp('7%'),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  heading:{
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
    fontSize: wp('5%'),
    marginTop:hp(1.5),
    paddingLeft: hp(1)
  },
  txtInput: {
    flex: 1,
    borderWidth: wp(0.3),
    borderColor: COLORS.lightGrayColor,
    // padding: wp(2),
    marginLeft: wp(2),
    borderRadius: wp(2),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp('2%'),
  },
  tag: {
    backgroundColor: COLORS.white,
    color: COLORS.blackTxtColor ,
    fontFamily: fonts.Regular,
    fontSize: wp('3.3%'),
    borderRadius: wp(2),
    padding: wp(2),
    margin: wp(2),
    borderColor:COLORS.lightGrayColor,
    borderWidth: wp(0.2),
    elevation: wp(1)
  },
  dropdown: {
    position: 'absolute',
    paddingHorizontal: wp(3),
    top: hp('8%'),
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderWidth: wp(0.3),
    borderColor: COLORS.lightGrayColor,
    borderRadius: wp(2),
    zIndex: 1,
  },
  item: {
    padding: wp(3),
    borderBottomWidth: wp(0.3),
    borderBottomColor: COLORS.lightGrayColor,
  },
  itemText: {
    fontSize: wp(3.5),
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
  },
  
});
