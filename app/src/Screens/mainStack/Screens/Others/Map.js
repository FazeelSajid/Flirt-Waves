import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import MapView , {Marker} from 'react-native-maps'

const Map = () => {
    // const initialRegion = {
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   };
    
      return (
        <View style={styles.container}>
          {/* <MapView
            style={styles.map}
            initialRegion={initialRegion}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Marker Title"
              description="Marker Description"
            />
          </MapView> */}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    });

    export default Map;