import React from 'react';
import { 
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  appbar: {
    height: 60,
    width: Dimensions.get('window').width,
    backgroundColor: '#000872',
    position: 'absolute',
    top: 0,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  title: {
    alignItems: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 15
  },

  iconContainer: {
    marginLeft: 10
  },

  icon: {
    width: 30,
    height: 30
  }
});

const AppBar = ({ isHome, title, navigation }) => (
  <View style={styles.appbar}>
    <TouchableOpacity style={styles.iconContainer}>
      <Image
        style={styles.icon}
        source={require('../assets/images/back-arrow.png')} 
      />
    </TouchableOpacity>
    
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default AppBar;