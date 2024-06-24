import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, IconButton } from 'react-native-paper';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NotificationCard = ({ notification, icon }) => {
  return (
    <View style={styles.card}>
      <IconButton icon={icon} containerColor='#FF572240' iconColor={COLORS.bgColor} />
      <View style={styles.contentContainer} >
        <View style={styles.titleContainer } >
      <Text style={styles.title}>{notification.title}</Text>
      <Text style={styles.time}>{notification.time}</Text>
        </View>
      <Text style={styles.message}>{notification.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    padding: wp('1.25%'), 
    marginVertical: hp('0.5%'), 
    marginHorizontal: wp('4%'), 
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp('4%'), 
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: wp('3.75%'), 
    fontWeight: 'bold',
    marginBottom: hp('0.5%'), 
  },
  message: {
    fontSize: wp('3.25%'), 
    color: COLORS.grayTextColor,
    fontWeight: '400',
    marginBottom: hp('0.5%'), 
  },
  time: {
    fontSize: wp('3%'), 
    color: COLORS.grayTextColor,
  },
});

export default NotificationCard;
