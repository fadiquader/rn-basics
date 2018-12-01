import * as React from 'react';
import { View, StyleSheet, Animated, Dimensions, Easing } from 'react-native';

const { height, width } = Dimensions.get('window');
export class Fade extends React.Component {
  constructor() {
    super();
    this._animatedVal = new Animated.Value(0)
  }

  componentDidMount() {
    this.fadeAnimation(1);
  }

  fadeAnimation = val => {
    Animated.timing(this._animatedVal, {
      toValue: val,
      duration: 1000,
      easing: Easing.inOut(Easing.in)
      // bounciness: 100,
      // speed: 5,
    }).start(() => this.fadeAnimation(1 - val));
  }
  render() {
    const backgroundColor = this._animatedVal.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#e7bf53', '#FF4D4C', '#1f9fff']
    });
    const translateY = this._animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height/ 2]
    });
    const heightRect = this._animatedVal.interpolate({
      inputRange: [0, 1],
      outputRange: [20, height/ 2]
    });
    return (
      <Animated.View
        style={[styles.circle, {
          height: heightRect,
          opacity: this._animatedVal,
          backgroundColor: backgroundColor,
          transform: [
            {
              translateY
            }
          ]
        }]}
      />
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: width - 50,
    height: 20,
    alignSelf: 'center'
  }
});
