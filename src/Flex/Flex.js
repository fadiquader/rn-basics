import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyleOne}>
        <Text style={styles.textStyle}> 1 </Text>
      </View>
      <View style={styles.viewStyleTwo}>
        <Text style={styles.textStyle}> 2 </Text>
      </View>
      <View style={styles.viewStyleThree}>
        <Text style={styles.textStyle}> 3 </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ff707a',
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    // justifyContent: 'flex-end',
    // alignItems:'flex-end'
  },
  viewStyleOne: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#5b5dab',
    // alignSelf: 'flex-end',
    flex: 1,
  },
  viewStyleTwo: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#ffb200',
    flex: 0.5
  },
  viewStyleThree: {
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#0fff76'
  },
  textStyle:{
    textAlign:'center'
  }
});
