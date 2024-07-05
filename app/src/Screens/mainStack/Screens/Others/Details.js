import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../../../../components/CustomHeader'
import { ScrollView } from 'react-native-gesture-handler'
import PeopleCard from '../../../../components/PeopleCard'
import { imgs } from '../../../../assets/Imgs/Img'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../../../../config/COLORS'


const Details = ({navigation}) => {

  const [isFavourite, setIsfavorite] = useState(false);

  
  const toggle = (state, setFuntion) => {
    setFuntion(!state);
    console.log(isFavourite);
  };
  const navigateTo = (screen, params) => {
    navigation.navigate(screen, params);
  };
  
  return (
    <View style={styles.container} >
      <CustomHeader left={'chevron-left'} iconSize={wp(10)} leftIconColor={COLORS.blackTxtColor}leftOnpress={navigation.goBack} />
      <ScrollView
            showsVerticalScrollIndicator={false}
            style={{paddingRight: wp(3)}}>
            <PeopleCard
              img={imgs.user1}
              favIconPress={() => toggle(isFavourite, setIsfavorite)}
              isFavourite={isFavourite}
              chatIconPress={() => navigateTo('chat', {img: imgs.user1})}
              isVerified={true}
              distance={'1.3 km away'}
              name={'Rosie'}
              age={'20'}
              onPress={() => navigateTo('userDetails')}
              // activeNow={true}
            />
            <PeopleCard
              img={imgs.user2}
              favIconPress={() => toggle(isFavourite, setIsfavorite)}
              isFavourite={isFavourite}
              chatIconPress={() => navigateTo('chat', {img: imgs.user2})}
              // isVerified={true}
              distance={'1.3 km away'}
              name={'Olivia'}
              age={'22'}
              onPress={() => navigateTo('userDetails')}
              activeNow={true}
            />
            <PeopleCard
              img={imgs.user3}
              favIconPress={() => toggle(isFavourite, setIsfavorite)}
              isFavourite={isFavourite}
              chatIconPress={() => navigateTo('chat', {img: imgs.user3})}
              isVerified={true}
              distance={'1.3 km away'}
              name={'Sophia'}
              onPress={() => navigateTo('userDetails')}
              age={'26'}
            />
            <PeopleCard
              img={imgs.user4}
              favIconPress={() => toggle(isFavourite, setIsfavorite)}
              isFavourite={isFavourite}
              chatIconPress={() => navigateTo('chat', {img: imgs.user4})}
              isVerified={true}
              distance={'1.3 km away'}
              name={'Emily'}
              age={'30'}
              onPress={() => navigateTo('userDetails')}
              activeNow={true}
            />
          </ScrollView>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: hp('4%'),
    paddingHorizontal: wp('7%'),
  }
})