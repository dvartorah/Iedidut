import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'

class Feed extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Button title="Go to maps" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
      </View>
    );
  }
}

export default Feed;