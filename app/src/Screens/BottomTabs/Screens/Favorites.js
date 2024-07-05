import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../config/Fonts';
import TxtInput from '../../../components/TxtInput';
import FavoritesCard from '../../../components/FavoritesCard';
import {imgs} from '../../../assets/Imgs/Img';
import PopUpModal from '../../../components/PopUpModal';
import svg from '../../../assets/svgs/Svg';
import Warning from '../../../assets/svgs/Warning.svg';

const Favorites = ({navigation}) => {
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
      contentContainerStyle={styles.container}
        // contentContainerStyle={styles.FavoritesContainer}
        showsVerticalScrollIndicator={false}>
        <PopUpModal
          svg={<Warning width={wp(20)} height={wp(20)} />}
          visible={FavoritesModal}
          heading={'Remove'}
          message={'Do you want to remove Rosie from favorites?'}
          textStyle={styles.popUpText}
          row={true}
          btn1Txt={'Cancel'}
          btn1style={{backgroundColor: '#F5BF0333'}}
          btn1TxtStyle={{color: COLORS.primary1}}
          btn2Txt={'Yes, Remove'}
          btnsContainer={{
            flexDirection: 'row',
            paddingHorizontal: wp(20),
            marginTop: wp(8),
          }}
          btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(4)}}
          btn2TxtStyle={{fontSize: wp(4)}}
          btn1Press={() => setFavoritesModal(false)}
          btn2Press={() => {
            setIsfavorite(false);
            setFavoritesModal(false);
          }}
        />
              <View>
              <Text style={styles.heading}>Favorites</Text>

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
            <FlatList
              data={filteredData}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.item}>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </View>
      <View style={styles.FavoritesContainer} >
      <FavoritesCard
          img={imgs.user1}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user1}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user1}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user3}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
          name={'Rosie'}
          age={'20'}
          distance={'1.5 km'}
          isVerified={true}
          onPress={() => navigation.navigate('userDetails')}
        />
        <FavoritesCard
          img={imgs.user2}
          isFavourite={isFavourite}
          favIconPress={() => handleFavorite()}
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

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('7%'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontSize: hp(3),
    fontFamily: fonts.SemiBold,
    color: COLORS.primary1,
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
    top: hp('10.7%'),
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
