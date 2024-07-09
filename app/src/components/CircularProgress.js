// CircularProgress.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { COLORS } from '../../config/COLORS';
import { fonts } from '../../config/Fonts';

const CircularProgress = ({ onComplete, setIsVerified }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    
    let interval;
    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.min(1, prevProgress + Math.random() / 5);
          if (newProgress >= 1) {
            clearInterval(interval);
            if (onComplete) {
              onComplete();
            }
          }
          return newProgress;
        });
      }, 500);
    }, 1500);

    

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      progress === 1 && setIsVerified(true);
    };
    
  }, [onComplete]);

  return (
    <View style={styles.container}>
      <Progress.Circle
        size={wp(30)}
        progress={progress}
        indeterminate={false}
        showsText={true}
        color={COLORS.blackTxtColor}
        unfilledColor={COLORS.white}
        borderWidth={0}
        textStyle={{fontFamily: fonts.Medium}}
        thickness={6}
        
      />
      {/* <Text style={styles.text}>{`${Math.round(progress * 100)}%`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: COLORS.primary1,
    marginTop: 10,
  },
});

export default CircularProgress;
