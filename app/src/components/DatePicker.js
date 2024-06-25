import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { COLORS } from '../../config/COLORS';

const DatePickerCom = ({ value, onChange }) => {
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || value;
    setShow(false);
    onChange(currentDate);
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setShow(true)} title="Select Date" />
      {show && (
        <DatePicker
        modal
        open={show}
        // date={date}
        // onConfirm={(date) => {
        //   setOpen(false)
        //   setDate(date)
        // }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      )}
      <Text style={styles.dateText}>{value.toDateString()}</Text>
    </View>
  );
};

export default DatePickerCom;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dateText: {
    marginTop: 10,
  },
});
