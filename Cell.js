import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export const Cell = props => {
  let source;
  if (props.value === 'x') {
    source = require('./x.png');
  } else if (props.value === 'o') {
    source = require('./o.png');
  }

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cellContainer}>
      <View>
        <Image style={styles.imageContainer} source={source} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    borderColor: 'blue',
    borderWidth: 2,
    width: 100,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
});
