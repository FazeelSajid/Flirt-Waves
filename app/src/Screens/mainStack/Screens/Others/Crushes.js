import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInput from '../../../../components/TxtInput';
import FavoritesCard from '../../../../components/FavoritesCard';
import { imgs } from '../../../../assets/Imgs/Img';
import PopUpModal from '../../../../components/PopUpModal';
import svg from '../../../../assets/svgs/Svg';
import Warning from '../../../../assets/svgs/Warning.svg';
import { COLORS } from '../../../../../config/COLORS';
import { fonts } from '../../../../../config/Fonts';
import CustomHeader from '../../../../components/CustomHeader';

const Crushes = ({navigation}) => {
  const [isFavourite, setIsfavorite] = useState(false);
  const [FavoritesModal, setFavoritesModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
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

  const handleFavorite = id => {
    // const id = id
    // setIsfavorite(!isFavourite);
    isFavourite ? setFavoritesModal(!FavoritesModal) : setIsfavorite(true);
  };
  return (
    // <View style={styles.container}>
      
      <ScrollView
      style={styles.container}
        // contentContainerStyle={styles.FavoritesContainer}
        showsVerticalScrollIndicator={false}>
              {/* <View> */}
              <CustomHeader heading={'My Crushes'} left={'chevron-left'} leftIconColor={COLORS.blackTxtColor} leftOnpress={() => navigation.goBack()} iconSize={wp(9)} headingStyle={styles.heading} />
             

        <TxtInput
          value={searchText}
          onChangeText={text => handleSearch(text)}
          containerStyle={styles.TxtInput}
          rightIcon={'magnify'}
          rightIconSize={wp(6)}
          rightIconFocusColor={COLORS.primary1}
          rightIconColor={COLORS.darkGrayColor}
          selectableColor={COLORS.blackTxtColor}
          placeholder={'Search'}
          placeholderTextColor={COLORS.darkGrayColor}
        />
        {filteredData.length > 0 && (
          <View style={styles.dropdown}>
            {filteredData.map((item, index) => (
               <TouchableOpacity key={index} style={styles.item}>
               <Text style={styles.itemText}>{item}</Text>
             </TouchableOpacity>
            ))}
          </View>
        )}
      {/* </View> */}
      <View style={styles.FavoritesContainer} >
      <FavoritesCard
          img={imgs.user1}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user1}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user1}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
      </View>
        
      </ScrollView>
    // </View>
  );
};

export default Crushes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('1'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
  },
  TxtInput: {
    borderWidth: wp(0.3),
    borderColor: COLORS.lightGrayColor,
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  dropdown: {
    position: 'absolute',
    paddingHorizontal: wp(3),
    top: hp('15%'),
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
  FavoritesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // to wrap the items in multiple rows if needed.
  },
  popUpText: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp(3.5),
    marginVertical: wp(3),
  },
});
