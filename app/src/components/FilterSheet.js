import { StyleSheet, Text, View } from 'react-native'
import React, {useRef} from 'react'
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


const FilterSheet = ({bottomSheet}) => {
    
  return (
    <BottomSheet  hasDraggableIcon ref={bottomSheet} height={hp(90)} >
      <Text>FilterSheet</Text>
    </BottomSheet>
  )
}

export default FilterSheet

const styles = StyleSheet.create({})