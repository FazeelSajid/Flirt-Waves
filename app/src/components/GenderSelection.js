import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenderSelection = ({ selectedGender, onSelectGender }) => {
  return (
    <View style={styles.container}>
      {['Male', 'Female'].map(gender => (
        <TouchableOpacity
          key={gender}
          style={[
            styles.genderOption,
            selectedGender === gender && styles.selected,
          ]}
          onPress={() => onSelectGender(gender)}
        >
          <Text style={styles.genderText}>{gender}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GenderSelection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  genderOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selected: {
    backgroundColor: '#007bff',
  },
  genderText: {
    color: '#000',
  },
});
