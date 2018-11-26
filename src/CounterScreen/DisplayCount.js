import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DisplayCount = props => {
  return (
    <View>
      <Text>{props.count}</Text>
    </View>
  )
};
