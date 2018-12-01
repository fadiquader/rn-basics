import * as React from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = 0.25 * width;

export class Gestures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY({ x: 0, y: 0 }), // inits to zero
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // dx - accumulated distance of the gesture since the touch started
        // dy - accumulated distance of the gesture since the touch started
        this.state.pan.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if(gestureState.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right')
        } else if(gestureState.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left')
        }
        else  {
          this.resetPosition();
        }

      },
    });
  }
  forceSwipe(direction) {
    const x = direction === 'right' ? width : -width;
    Animated.timing(this.state.pan, {
      toValue: { x, y: 0 },
      duration: 250
    }).start(() => null);
  }
  resetPosition = () => {
    Animated.spring(
      this.state.pan,
      // Auto-multiplexed
      {toValue: {x: 0, y: 0}} // Back to zero
    ).start();
  }
  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          this.state.pan.getLayout(),
          {
            width,
            height: 100,
            backgroundColor: '#ff4d4c'
          }
        ]}>
        <Text>Hii</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipableCard: {
    height: 100,
    backgroundColor: '#ff4d4c',
    width: width,
  }
});
