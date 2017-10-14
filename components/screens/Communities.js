import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import { fetchCommunities } from '../../state/actions/Communities';
import { updateCurrentPosition } from '../../state/actions/Geolocation';
import MapView from 'react-native-maps';

class Communities extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    this.actions.updateCurrentPosition();
  }

  render() {
    let { latitude, longitude } = this.props.geolocation.lastKnownPosition.coordinates;

    return (
      <MapView initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }} />
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