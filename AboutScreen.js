import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Screen from './Screen';
import Colors from './Color';

const openAppRepository = () => {
  WebBrowser.openBrowserAsync('https://github.com/pavermakov/react-native-covid-19');
};

const openApiRepository = () => {
  WebBrowser.openBrowserAsync('https://github.com/javieraviles/covidAPI');
};

const CountriesScreen = () => {
  return (
    <Screen style={s.root}>
      <Text style={s.text}>Made by Badea Vlad</Text>
      <Text style={s.text}>with React-Native and Expo</Text>
    </Screen>
  );
};

const s = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    paddingBottom: 10,
    color: Colors.white,
  },
  gap: {
    height: 10,
  },
});

export default CountriesScreen;
