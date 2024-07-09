import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../config/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from './CustomButton';
import {fonts} from '../../config/Fonts';
import svg from '../assets/svgs/Svg';
import Verified from '../assets/svgs/verified.svg';

const FavoritesCard = ({
  img,
  favIconPress,
  isFavourite,
  isVerified,
  distance,
  name,
  age,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.imgWrapper}>
      <ImageBackground style={styles.img} source={img} >
        <LinearGradient
          start={{x: 0, y: 0.6}}
          end={{x: 0.0, y: 0.0}}
          locations={[0, 0.5]}
          colors={['#00000090', 'rgba(50, 29, 58, 0)']}
          style={styles.gradientOverlay}>
          <View style={styles.txtNiconContainer}>
           { favIconPress && <CustomButton
              onPress={favIconPress}
              icon={isFavourite ? 'cards-heart' : 'cards-heart-outline'}
              iconSize={wp(6)}
              iconColor={COLORS.primary1}
              pressedRadius={wp('5%')}
            />}
            
          </View>
          <View>
            <View style={styles.infoContainer}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.nameTxt}>
                  {name}, {age}
                </Text>
                {isVerified && <Verified width={wp('4%')} height={hp('4%')} />}
              </View>

              {/* <View style={{justifyContent: 'flex-end'}}>
              <CustomButton
                svg={<Chat width={wp(6)} height={wp(6)} />}
                containerStyle={[
                  styles.iconContainer,
                  {backgroundColor: COLORS.primary1},
                ]}
                // onPress={chatIconPress}
                pressedRadius={wp('5%')}
              />
            </View> */}
            </View>
            <View style={styles.txtContainer}>
              <Text style={styles.distanceTxt}>{distance} away</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default FavoritesCard;

const styles = StyleSheet.create({
  imgWrapper: {
    height: wp(50),
    width: wp(44),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(6),
    overflow: 'hidden',
    // backgroundColor :COLORS.blackTxtColor,
    marginBottom: 20,
  },
  img: {
    height: wp(50),
    width: wp(40),
    resizeMode: 'contain'
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    borderRadius: wp(3),
    padding: wp('3%'),
  },
  txtNiconContainer: {
    alignItems: 'flex-end',
  },
  txtContainer: {
    backgroundColor: '#FFFFFF4D',
    // color: COLORS.white,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(0.8),
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(20),
  },
  distanceTxt: {
    color: COLORS.white,
    fontSize: wp(2.5),
    fontFamily: fonts.Regular,
  },
  iconContainer: {
    justifyContent: 'center',
    padding: wp(2),
    backgroundColor: COLORS.white,
    borderRadius: wp('5%'),
  },

  infoContainer: {
    color: COLORS.primary1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  nameTxt: {
    fontSize: wp(4),
    color: COLORS.white,
    fontFamily: fonts.Regular,
    marginRight: wp(3),
  },
});
