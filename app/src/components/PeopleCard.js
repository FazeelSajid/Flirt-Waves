import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Chat from '../assets/svgs/chat.svg';
import {COLORS} from '../../config/COLORS';
import CustomButton from './CustomButton';
import {fonts} from '../../config/Fonts';
import Verified from '../assets/svgs/verified.svg';
import Icon from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';

const PeopleCard = ({
  img,
  isFavourite,
  favIconPress,
  chatIconPress,
  isVerified,
  distance,
  name,
  age,
  activeNow,
  onPress
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress} >
      <ImageBackground source={img} style={styles.img} >
        <LinearGradient start={{x: 0, y: 0.6}} 

          end={{x: .0, y: .0}}
          locations={[0, 0.5]}
          colors={['#00000090', 'rgba(50, 29, 58, 0)']}
          style={styles.gradientOverlay} >
          <View style={styles.txtNiconContainer}>
            <View style={styles.txtContainer}>
              <Text style={styles.distanceTxt}>{distance}</Text>
            </View>
            <CustomButton
              onPress={favIconPress}
              icon={isFavourite ?  'cards-heart'  : 'cards-heart-outline'}
              containerStyle={styles.iconContainer}
              iconSize={wp(5)}
              iconColor={COLORS.primary1}
              pressedRadius={wp('5%')}
            />
          </View>
          <View style={styles.infoContainer}>
            <View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.nameTxt}>{name}, {age}</Text>
                {isVerified && <Verified width={wp('6%')} height={hp('5%')} />}
              </View>
              <View style={[styles.activeNowContainer]}>
                <Icon
                    name={'dot-fill'}
                    size={wp(3)}
                    color={COLORS.activeNowBorder}
                  />
                <Text style={styles.activeNow}>
                  {activeNow ?'Active Now' : 'Now Offline'}
                </Text>
              </View>
            </View>

            <View style={{justifyContent: 'flex-end'}}>
              <CustomButton
                svg={<Chat width={wp(6)} height={wp(6)} />}
                containerStyle={[
                  styles.iconContainer,
                  {backgroundColor: COLORS.primary1}
                 
                ]}
                onPress={chatIconPress}
                pressedRadius={wp('5%')}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PeopleCard;

const styles = StyleSheet.create({
  img: {
    width: wp('85%'),
    height: wp('90%'),
  },
  container: {
    borderRadius: wp(5),
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: wp(3),
  },
  txtNiconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtContainer: {
    backgroundColor: COLORS.lightBlackColor,
    color: COLORS.white,
    paddingHorizontal: wp(3),
    // paddingVertical: wp(0),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  distanceTxt: {
    color: COLORS.white,
    fontSize: wp(3),
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
  },
  nameTxt: {
    fontSize: wp(5.5),
    color: COLORS.white,
    fontFamily: fonts.Regular,
    marginRight: wp(3),
  },
  activeNow: {
    fontFamily: fonts.Regular,
    color: COLORS.white,
    // padding: wp(1),
    marginLeft: wp(2),
    fontSize: wp(3),

  },
  activeNowContainer: {
    padding: wp(1),
    paddingLeft: wp(2),
    borderRadius: wp(2),
    borderColor: COLORS.activeNowBorder,
    borderWidth: 1,
    backgroundColor: COLORS.activeNowBg,
    width: wp(25),
    flexDirection: 'row',
    alignItems: 'center'
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between', 
    borderRadius: wp(3),
    padding: wp('3%'),
  }
});
