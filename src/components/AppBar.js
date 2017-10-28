import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appbar: {
    height: 60,
    width: Dimensions.get('window').width,
    backgroundColor: '#000872',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    justifyContent: 'center'
  },

  title: {
    alignItems: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 30
  }
});

const AppBar = ({ isHome, title }) => (
  <View style={styles.appbar}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default AppBar;