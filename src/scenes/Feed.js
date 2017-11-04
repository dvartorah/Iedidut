import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'

const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1';
const SITE_ID = 113002857;

class Feed extends Component {
  constructor(props) {
    super();

    this.state = { posts: [] };
  }
  
  fetchArticles = (term = '') => {
    fetch(`${BASE_URL}/sites/${SITE_ID}/posts`).then((response) => {
      return response.json();
    }).then(({ posts }) => {
      this.setState({ posts });
    });
  };

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