import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './app/src/Screens/authStack/authStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './app/src/Screens/mainStack/MainStack';
import {Provider} from 'react-redux';
import store from './app/src/redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <AuthStack />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
