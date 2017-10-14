import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { fetchCommunities } from '../../state/actions/Communities';
import { updateCurrentPosition } from '../../state/actions/Geolocation';
import MapView from 'react-native-maps';

import LoadingScreen from '../presentation/LoadingScreen';

class Communities extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.actions.updateCurrentPosition();
  }

  render() {
    let { loading } = this.props.geolocation;
    let { latitude, longitude } = this.props.geolocation.lastKnownPosition;

    if(loading || (latitude === 'undefined' && longitude === 'undefined')) {
      return (<LoadingScreen />);
    }
    
    return (
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  geolocation: state.geolocation,
  communities: state.communities
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateCurrentPosition: () => { dispatch(updateCurrentPosition()) },
    fetchCommunities: () => { dispatch(fetchCommunities()) }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Communities);