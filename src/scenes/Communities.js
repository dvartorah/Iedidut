import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';

import { View, StyleSheet, Text, Image, ToastAndroid } from 'react-native';

import AppBar from '../components/AppBar';
import CommunityDescription from '../components/CommunityDescription';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  communityIcon: {
    width: 60,
    height: 60
  }
});

class Communities extends Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      coordinatesReceived: false,
      currentCommunity: null,
      communitiesList: [],
      coordinates: {
        lat: null,
        long: null
      }
    }
  }

  static navigationOptions = {
    drawerLabel: 'Comunidades'
  };

  getCommunities() {
    return [
      { "id": 1, "name": "Ohel Avoteinu", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": -23.5489, "longitude": -46.6388 } },
      { "id": 2, "name": "Tana Rabi Eliezer", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": -19.8157, "longitude": -43.9542 } },
      { "id": 3, "name": "Ohel Ovadiah Yosef", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": -20.3222, "longitude": -40.3381 } },
      { "id": 4, "name": "Yad Eliahu", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": -16.6799, "longitude": -49.255 } },
      { "id": 5, "name": "Ahavat HaTorah", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": -15.7801, "longitude": -47.9292 } },
      { "id": 6, "name": "Beit Knesset Rambam", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": 12.1508, "longitude": -86.2683 } },
      { "id": 7, "name": "Ohel Mekor Chaym", "email": "emailnaocadastrado@gmail.com", "phone": "+0000000000000", "coords": { "latitude": 13.68935, "longitude": -89.18718 } }
    ]
  }

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => resolve(coords),
        ({ message }) => reject(message)
      );
    });
  }

  selectCommunity = (id) => {
    this.setState({ currentCommunity: id });
  }

  renderCommunitiesMarkers = (communities = []) => {
    return this.state.communitiesList.map((community) => {
      return (
        <MapView.Marker
          key={community.id}
          coordinate={community.coords}
          title={community.name}
          onPress={() => this.setState({ currentCommunity: community.id })}
        >
          <Image source={require('../assets/images/hebrew.png')} style={styles.communityIcon} />
        </MapView.Marker>
      );
    });
  }

  _renderCurrentCommunity() {
    const community = this.state.communitiesList.filter((community) => {
      return community.id === this.state.currentCommunity
    })[0];

    if(community) {
      return (
        <CommunityDescription
          id={community.id}
          name={community.name}
          email={community.email}
        />
      )
    }

    return null;
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.setState({ communitiesList: this.getCommunities() });

    this.getCurrentPosition().then((coords) => {
      this.setState({
        loading: false,
        coordinatesReceived: true,
        coordinates: {
          lat: coords.latitude,
          long: coords.longitude
        }
      })
    });
  }

  thereAreCoordinates() {
    return this.state.coordinates.lat != null && this.state.coordinates.long != null;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <AppBar title="Comunidades" />

        { this.state.coordinatesReceived ?
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.coordinates.lat,
            longitude: this.state.coordinates.long,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121
          }}
        >
          { this.renderCommunitiesMarkers() }
        </MapView>
        : <Spinner visible={true} /> }

        { this._renderCurrentCommunity() }
      </View>
    );
  }
}

export default Communities;