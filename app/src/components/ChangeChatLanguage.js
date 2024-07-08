import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { COLORS } from './config/COLORS'; // Adjust the import path as needed
import { fonts } from './config/Fonts'; // Adjust the import path as needed
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const languages = [
  'Afrikaans',
  'Albanian',
  'Amharic',
  'Arabic',
  'Armenian',
  'Azerbaijani',
  'Basque',
  // Add more languages as needed
];

const ChangeChatLanguage = ({ navigation }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const toggleLanguage = (language) => {
    setSelectedLanguages((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(language)) {
        return prevSelectedLanguages.filter((item) => item !== language);
      } else {
        return [...prevSelectedLanguages, language];
      }
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.languageContainer}>
      <Text style={styles.languageText}>{item}</Text>
      <CheckBox
        checked={selectedLanguages.includes(item)}
        onPress={() => toggleLanguage(item)}
        checkedColor={COLORS.primary1}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Change Chat Language</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
      <TouchableOpacity style={styles.changeButton} onPress={() => alert('Language changed!')}>
        <Text style={styles.changeButtonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangeChatLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: wp('5%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  heading: {
    fontFamily: fonts.Medium,
    fontSize: wp('5%'),
    color: COLORS.blackTxtColor,
  },
  closeButton: {
    fontSize: wp('5%'),
    color: COLORS.blackTxtColor,
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrayColor,
    paddingVertical: hp('1%'),
  },
  languageText: {
    fontSize: wp('4%'),
    color: COLORS.blackTxtColor,
  },
  changeButton: {
    backgroundColor: COLORS.primary1,
    borderRadius: wp('2%'),
    paddingVertical: hp('2%'),
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  changeButtonText: {
    color: COLORS.white,
    fontSize: wp('4%'),
    fontFamily: fonts.Medium,
  },
});
