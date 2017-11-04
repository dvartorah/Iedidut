import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  cardTextContainer: {
    width: window.width - 20
  },

  cardActionsContainer: {

  }
});

const ArticleCard = ({ id, title, intro }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <View>
        <Text>{title}</Text>
        <Text>{intro}</Text>
      </View>
      
      <View>
        <TouchableOpacity>
  
        </TouchableOpacity>
      </View>
      </View>
  </View>
);

export default ArticleCard;