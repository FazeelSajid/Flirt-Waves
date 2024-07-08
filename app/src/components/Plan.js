import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { COLORS } from '../../config/COLORS';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from './CustomButton';
import { fonts } from '../../config/Fonts';


const Plan = ({ plan }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.price}>{plan.price}</Text> */}
      {/* <Text style={styles.plan}>{plan.plan}</Text> */}
      <View style={styles.features}>
        {plan.features.map((feature, index) => (
          <View style={{flexDirection: 'row', marginBottom: wp(2.8), marginLeft: wp(1), } } key={index} >
          <Text style={{ fontSize: wp(5) , color: COLORS.primary1 }}>{`\u25CF`}</Text>
          <Text key={index} style={styles.feature}>
                
                {feature}
            </Text>
          </View>
          
        ))}
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    // backgroundColor: '#fff',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  plan: {
    fontSize: 20,
    marginVertical: 10,
  },
  features: {
    // marginVertical: wp(2),
  },
  feature: {
    // fontSize: 16,
    fontSize: wp(4.5),
    marginLeft: wp(1.5),
    // flexWrap: 'wrap',
    color: COLORS.lightTxtColor, 
    width: wp(85)
  },
  
});

export default Plan;
