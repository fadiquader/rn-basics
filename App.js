/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
//
// import CounterScreen from './src/CounterScreen';
import { FlexRow, FlexCol } from './src/Flex';
import { Gestures, Fade } from './src/Gestures';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*<Gestures />*/}
        <FlexCol />
      </View>
    )
    // return (
    //   <Flex />
    // )
    // return (
    //   <View style={styles.container}>
    //     <CounterScreen />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
