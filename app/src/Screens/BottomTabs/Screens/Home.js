import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState, useRef} from 'react';
import LocationCard from '../../../components/LocationCard';
import {COLORS} from '../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../config/Fonts';
import PeopleCard from '../../../components/PeopleCard';
import {imgs} from '../../../assets/Imgs/Img';
import Location1 from '../../../assets/svgs/location1.svg';
import Thumb from '../../../assets/svgs/Thumb.svg';
import Filter from '../../../assets/svgs/filter.svg';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Gender from '../../../components/Gender';

import svg from '../../../assets/svgs/Svg';
import TxtInput from '../../../components/TxtInput';
import CustomButton from '../../../components/CustomButton';

const Home = ({navigation}) => {
  const [isFavourite, setIsfavorite] = useState(false);
  const bottomSheet = useRef();
  const [selectedGender, setSelectedGender] = useState(null);
  const [responses, setResponses] = useState({});
  const [ageRange, setAgeRange] = useState([20, 25]);
  const [preference, setPreference] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [distance, setDistance] = useState('');
  const [city, setCity] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      ageRange,
      selectedGender,
      preference,
      isOnline,
      distance,
      city,
    };
    console.log('Applied Filters:', filters);
    // Save or apply filters logic here
  };

  const onValuesChange = values => {
    setAgeRange(values);
  };

  const toggle = (state, setFuntion) => {
    setFuntion(!state);
    console.log(isFavourite);
  };
  const navigateTo = (screen, params) => {
    navigation.navigate(screen, params);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LocationCard
        leftSvg={<Location1 width={wp('5%')} height={hp('4%')} />}
        rightSvg={<Filter width={wp('5%')} height={hp('4%')} />}
        // leftIcon={'map-marker'}
        text1={'Your Location'}
        txt1style={styles.LocationCardText1}
        txt2style={styles.LocationCardText2}
        text2={'12345, New York, USA'}
        // rightIcon={'filter'}
        containerStyle={{marginBottom: hp('5%')}}
        rigntOnpress={() => bottomSheet.current.show()}
      />
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
        />
        <PeopleCard
          img={imgs.user2}
          favIconPress={() => toggle(isFavourite, setIsfavorite)}
          isFavourite={isFavourite}
          chatIconPress={() => navigateTo('chat', {img: imgs.user2})}
          isVerified={true}
          distance={'1.3 km away'}
          name={'Olivia'}
          age={'22'}
        />
        <PeopleCard
          img={imgs.user3}
          favIconPress={() => toggle(isFavourite, setIsfavorite)}
          isFavourite={isFavourite}
          chatIconPress={() => navigateTo('chat', {img: imgs.user3})}
          isVerified={true}
          distance={'1.3 km away'}
          name={'Sophia'}
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
        />
      </ScrollView>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={hp(95)} draggable>
        <ScrollView style={styles.btmSheetContainer}>
          <Text style={styles.btmSheetHeading}>Apply Filter</Text>
          <Text style={styles.label}>Age Range</Text>
          <Text
            style={
              styles.ageRange
            }>{`${ageRange[0]} - ${ageRange[1]} years old`}</Text>
          <MultiSlider
            values={ageRange}
            onValuesChange={onValuesChange}
            min={18}
            max={60}
            step={1}
            selectedStyle={{
              backgroundColor: COLORS.primary1,
            }}
            unselectedStyle={{
              backgroundColor: COLORS.lightGrayColor,
            }}
            trackStyle={{
              height: wp(1),
            }}
            markerStyle={{
              height: 14,
              width: 20,
              backgroundColor: COLORS.primary1,
              borderWidth: 0,
            }}
            customMarkerLeft={
              <Image source={imgs.user1} width={wp(5)} height={hp(4)} />
            }
            customMarkerRight={<Thumb width={wp(5)} height={wp(5)} />}
          />
          <Text style={styles.label}>Gender</Text>

          <View style={styles.genderContainer}>
            <Gender
              gender={'Male'}
              icon={'male'}
              isSelected={selectedGender === 'Male'}
              onPress={gender => {
                setSelectedGender(gender);
              }}
              containerStyle={styles.gender}
            />
            <Gender
              gender={'Female'}
              icon={'female'}
              isSelected={selectedGender === 'Female'}
              onPress={gender => {
                setSelectedGender(gender);
                
              }}
              containerStyle={styles.gender}
            />
          </View>

          <Text style={styles.label}>Preference</Text>
          <View style={styles.preferenceContainer}>
            <TouchableOpacity
              onPress={() => setPreference('relationship')}
              style={[
                styles.preferenceButton,
                preference === 'relationship' &&
                  styles.preferenceButtonSelected,
              ]}>
              <Text style={styles.preferenceTxt}>A Relationship</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPreference('casual')}
              style={[
                styles.preferenceButton,
                preference === 'casual' && styles.preferenceButtonSelected,
              ]}>
              <Text style={styles.preferenceTxt}>Nothing Serious</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPreference('unknown')}
              style={[
                styles.preferenceButton,
                preference === 'unknown' && styles.preferenceButtonSelected,
              ]}>
              <Text style={styles.preferenceTxt}>I'll know when I find it</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.onlineContainer}>
            <Text style={styles.label}>Online</Text>
            <Switch
              value={isOnline}
              onValueChange={setIsOnline}
              trackColor={{false: COLORS.lightGrayColor, true: COLORS.primary1}}
              thumbColor={COLORS.primary2}
            />
          </View>

          <Text style={styles.label}>Distance</Text>
          <TxtInput
            containerStyle={styles.txtInput}
            placeholder={'Enter Distance'}
            placeholderTextColor={COLORS.darkGrayColor}
            onChangeText={setDistance}
            value={distance}
          />

          <Text style={styles.label}>City</Text>
          <TxtInput
            containerStyle={styles.txtInput}
            placeholder={'City Name'}
            placeholderTextColor={COLORS.darkGrayColor}
            onChangeText={setCity}
            value={city}
          />

          <CustomButton
            containerStyle={[
              styles.btn,
              {backgroundColor: COLORS.primary1, marginBottom: wp('5%')},
            ]}
            text={'Continue'}
            textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
            onPress={handleApplyFilters}
          />
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: wp('13%'),
    paddingHorizontal: wp('6%'),

    // overflow: 'hidden'
  },
  LocationCardText1: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp('3'),
  },
  LocationCardText2: {
    fontFamily: fonts.Regular,
    color: COLORS.blackTxtColor,
    fontSize: wp('3.5'),
    paddingTop: hp('0.2%'),
  },
  btmSheetContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  btmSheetHeading: {
    fontSize: wp('5%'),
    color: COLORS.blackTxtColor,
    // fontWeight: 'bold',
    marginBottom: hp('2%'),
    fontFamily: fonts.SemiBold,
  },
  label: {
    fontSize: wp('4%'),
    color: COLORS.primary1,
    fontFamily: fonts.SemiBold,
    marginVertical: hp(1),
  },
  ageRange: {
    fontSize: wp('3.5%'),
    color: COLORS.darkGrayColor,
    fontFamily: fonts.Regular,
    // paddingTop: hp('1%')
  },
  sliderContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: wp('5%'),
    marginBottom: wp(4),
  },
  preferenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  preferenceButton: {
    padding: wp(2.5),
    margin: wp(1.5),
    borderRadius: wp(2),
    borderColor: COLORS.darkGrayColor,
    borderWidth: wp(0.2),
  },
  preferenceTxt: {
    color: COLORS.blackTxtColor,
  },
  preferenceButtonSelected: {
    borderColor: COLORS.primary1,
    borderWidth: wp(0.5),
  },
  onlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtInput: {
    borderColor: COLORS.darkGrayColor,
    borderWidth: wp(0.2),
  },
  btn: {
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('8%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
  },
  gender: {
    // marginTop: hp('2.5%'),
    paddingVertical: wp('5%'),
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('10%'),
  },
});
