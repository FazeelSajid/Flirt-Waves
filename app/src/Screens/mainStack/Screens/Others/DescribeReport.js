import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../../components/CustomHeader'
import { COLORS } from '../../../../../config/COLORS'
import { fonts } from '../../../../../config/Fonts'
import CustomButton from '../../../../components/CustomButton'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import TxtInput from '../../../../components/TxtInput'

const DescribeReport = ({navigation}) => {

    const handleSubmit = () => {
        navigation.navigate('Home')
        console.log('Submit Report')
    };

  return (
    <View style={styles.container} >
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
        PLease describe the issue
      </Text>
      <TxtInput containerStyle={styles.TxtInput} multiline={true} />
      <View style={{flex:1,justifyContent: 'flex-end', marginBottom: wp(30)}} >
      <CustomButton
        containerStyle={styles.btn}
        text={'Submit'}
        textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
        onPress={() =>  handleSubmit() }
        pressedRadius={wp(3)}
      />

      </View>
      
    </View>
  )
}

export default DescribeReport

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: wp(7),
        paddingHorizontal: wp(5),
        backgroundColor: COLORS.white,
      },

      btn: {
        paddingVertical: wp('4%'),
        borderRadius: wp('3%'),
        marginTop: wp('4%'),
        backgroundColor: COLORS.primary1, 
        marginBottom: wp('5%'),
      },
      btnText: {
        fontFamily: fonts.Regular,
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
      TxtInput: {borderColor: COLORS.lightGrayColor, borderWidth: wp(0.5), height: wp(30), marginTop: wp(15)}
})