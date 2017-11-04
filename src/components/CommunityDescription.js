import React, { Component } from 'react';
import { 
  View,
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Easing
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 160,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    flexDirection: 'column',
    transform: [
      { translateY: 160 }
    ]
  },

  inner: {
    flexDirection: 'row'
  },

  blackText: {
    color: '#000000',
  },

  pictureContainer: {
    backgroundColor: '#FFFFFF',
    margin: 10
  },

  descriptionContainer: {
    justifyContent: 'flex-start'
  },

  communityName: {
    fontSize: 23
  },

  communitySecondaryData: {
    fontSize: 18
  },

  picture: {
    width: 80,
    height: 80
  },

  contactButton: {
    backgroundColor: 'green',
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 5
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16
  }
});

class CommunityDescription extends Component {
  constructor(props) {
    super();

    this.state = { 
      translateY: new Animated.Value((props.visible ? 0 : 160))
    }

    this.slideUp = Animated.timing(this.state.translateY, { toValue: 0, duration: 100, easing: Easing.in });
    this.slideDown = Animated.timing(this.state.translateY, { toValue: 160, duration: 100, easing: Easing.in });
  }

  componentDidMount() {
    this.slideUp.start();
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.id != this.props.id) {
      Animated.sequence([this.slideDown, this.slideUp]).start();
    }
  }

  render() {
    return (
      <Animated.View style={[styles.container, { transform: [{ translateY: this.state.translateY }] }]}>
        <View style={styles.inner}>
          <View style={styles.pictureContainer}>
            <Image
              style={styles.picture}
              source={require('../assets/images/synagogue.png')}
            />
          </View>
          
          <View style={styles.descriptionContainer}>
            <Text style={[styles.blackText, styles.communityName]}>{this.props.name}</Text>
            <Text style={[styles.blackText, styles.communitySecondaryData]}>{this.props.email}</Text>
            <Text style={[styles.blackText, styles.communitySecondaryData]}>{this.props.picture}</Text>
          </View>
        </View>
    
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.buttonText}>Mais informações</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
};

export default CommunityDescription;