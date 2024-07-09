import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditProfileQuestions = () => {
  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={navigation.goBack}
        heading={'Questionnaire'}
        headingStyle={{ fontFamily: fonts.SemiBold, color: COLORS.blackTxtColor, fontSize: wp(6) }}
      />
      <QuestionWithOptions
        question={question}
        options={options}
        onOptionSelect={handleOptionSelect}
      />
    </View>

  )
}

export default EditProfileQuestions

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.white,
    }
})