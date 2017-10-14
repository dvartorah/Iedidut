import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import Communities from './components/screens/Communities';
import store from './state';

const RootNavigator = StackNavigator({
  Communities
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

const mapStateToProps = (state) => {
  nav: state.nav
};

export default connect()(Iedidut);

AppRegistry.registerComponent('Iedidut', () => Iedidut);