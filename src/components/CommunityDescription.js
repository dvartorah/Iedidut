import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    minHeight: 150,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
    flexDirection: 'column'
  },

  hidden: {
    marginTop: Dimensions.get('window').height,
    marginBottom: -Dimensions.get('window').height
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

const CommunityDescription = ({ name, email, picture, onContactPress }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.inner}>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.picture}
            source={require('../assets/images/synagogue.png')}
          />
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={[styles.blackText, styles.communityName]}>{name}</Text>
          <Text style={[styles.blackText, styles.communitySecondaryData]}>{email}</Text>
          <Text style={[styles.blackText, styles.communitySecondaryData]}>{picture}</Text>
        </View>
      </View>
  
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.buttonText}>Mais informações</Text>
      </TouchableOpacity>
    </View>
  )
};

export default CommunityDescription;