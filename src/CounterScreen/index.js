import * as React from 'react';
import { View, Button, TextInput } from 'react-native';
//
import { Counter } from './Counter';

class CounterScreen extends React.Component {
  state = {
    hidden: false,
    initialCount: 0
  };

  toggleCounter = () => {
    this.setState(prev => ({
      hidden: !prev.hidden,
    }))
  };
  handleInputChange = txt => {
    const num = parseInt(txt, 10);
    if(isNaN(num)) return;
    this.setState({
      initialCount: num
    })
  }
  render() {
    const { hidden, initialCount } = this.state;

    return (
      <View style={{width: '100%'}}>
        <Button title={hidden ? 'Show' : 'Hide'} onPress={this.toggleCounter} />
        <TextInput
          value={initialCount+''}
          style={{
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
          onChangeText={this.handleInputChange}
        />
        {
          !hidden &&
          <Counter initialCount={initialCount} />
        }
      </View>
    )
  }
}

export default CounterScreen;
