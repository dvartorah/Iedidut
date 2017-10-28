import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect, Provider } from 'react-redux';
import { DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import Communities from './src/scenes/Communities';
import Feed from './src/scenes/Feed';
import store from './src/state';

const RootNavigator = DrawerNavigator({
  Home: { screen: Feed },
  Communities: { screen: Communities }
});

class Iedidut extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default Iedidut;

AppRegistry.registerComponent('Iedidut', () => Iedidut);