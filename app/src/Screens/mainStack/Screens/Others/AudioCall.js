import {Image, StatusBar, StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../../config/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../../../../components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {imgs} from '../../../../assets/Imgs/Img';
import {fonts} from '../../../../../config/Fonts';
import Volume from '../../../../assets/svgs/volume.svg';
import Call from '../../../../assets/svgs/call.svg';
import Mute from '../../../../assets/svgs/mute.svg';
import CustomButton from '../../../../components/CustomButton';

const AudioCall = ({name = 'Olivia', timmer = '01:00:48 ', navigation}) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <LinearGradient colors={['#F5BF03', '#F9D353']} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <CustomHeader
        left={'chevron-left'}
        iconSize={wp(10)}
        leftIconColor={COLORS.white}
        leftOnpress={() => navigation.goBack()}
      />
      <View style={styles.imgContainer}>
        <View style={styles.imgWrapper}>
          <Image source={imgs.user5} style={styles.img} resizeMode="cover" />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{timmer}</Text>
      </View>
      <View style={styles.callBtns}>
        <View>
          <CustomButton
            svg={<Volume width={wp(6)} height={wp(6)} />}
            containerStyle={[styles.iconContainer]}
            pressedRadius={wp('5%')}
          />
        </View>

        <View>
          <CustomButton
            svg={<Call width={wp(10)} height={wp(10)} />}
            containerStyle={[styles.iconContainer, {borderRadius: wp(10)}]}
            onPress={() => navigation.goBack()}
            pressedRadius={wp('10%')}
          />
        </View>

        <View>
          <CustomButton
            svg={<Mute width={wp(6)} height={wp(6)} />}
            containerStyle={[styles.iconContainer]}
            onPress={toggleMute}
            pressedRadius={wp('5%')}
          />
        </View>
      </View>

      {isMuted && (
        <Modal transparent={true} animationType="fade">
          <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
          <View style={styles.overlay}>
            <View style={styles.mutedView}>
              <Text style={styles.overlayText}>Call Muted</Text>
            </View>
            <View>
              <View style={styles.callBtns}>
                <View>
                  <CustomButton
                    svg={<Volume width={wp(6)} height={wp(6)} />}
                    containerStyle={[styles.iconContainer]}
                    pressedRadius={wp('5%')}
                  />
                </View>

                <View>
                  <CustomButton
                    svg={<Call width={wp(10)} height={wp(10)} />}
                    containerStyle={[
                      styles.iconContainer,
                      {borderRadius: wp(10)},
                    ]}
                    onPress={() => navigation.goBack()}
                    pressedRadius={wp('5%')}
                  />
                </View>

                <View>
                  <CustomButton
                    svg={<Mute width={wp(6)} height={wp(6)} />}
                    containerStyle={[styles.iconContainer]}
                    onPress={toggleMute}
                    pressedRadius={wp('5%')}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </LinearGradient>
  );
};

export default AudioCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: wp(7),
    paddingHorizontal: wp(5),
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mutedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: wp(10),
  },
  imgWrapper: {
    overflow: 'hidden',
    borderRadius: wp(100),
    width: wp(50),
    height: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF4D',
  },
  img: {
    width: wp(45),
    height: wp(45),
    resizeMode: 'cover',
  },
  name: {
    fontFamily: fonts.Medium,
    fontSize: wp(5),
    color: COLORS.white,
    paddingTop: hp('1.5%'),
  },
  iconContainer: {
    justifyContent: 'center',
    padding: wp(2),
    backgroundColor: COLORS.white,
    borderRadius: wp('5%'),
  },
  callBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: wp(20),
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: wp(5),

    // alignItems: 'center',
  },
  overlayText: {
    color: COLORS.white,
    fontSize: wp(5),
    fontFamily: fonts.Regular,
  },
});
