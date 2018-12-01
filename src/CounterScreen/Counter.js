import * as React  from 'react';
import { View, Text, Button } from 'react-native';
//
import { DisplayCount } from './DisplayCount';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0
    }
  }

  static getDerivedStateFromProps(next){
    console.log(`getDerivedStateFromProps: `, next);
    return null
  }

  componentDidMount() {
    this.setState({
      counts: this.props.initialCount,
    });
    this.interval = setInterval(() => {
      this.setState(prev => ({
        counts: ++prev.counts
      }));
    }, 1000)
    console.log('componentDidMount: ' )
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate ');
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: ')
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`)
    clearInterval(this.interval)
  }

  increment = () => {
    const { counts } = this.state;
    // this.setState({
    //   counts: ++counts,
    // })
    // different way
    // throw new Error('throwing an error');
    this.setState(prev => ({
      counts: ++prev.counts
    }))
  };

  decrement = () => {
    this.setState(prev => ({
      counts: --prev.counts
    }))
  };

  clearCounts = () => {
    this.setState({
      counts: 0,
    })
  };

  render() {
    return (
        <View style={{ width: '100%'}}>
          <DisplayCount count={this.state.counts} />
          <View>
            <Button title="+" onPress={this.increment} />
            <Button title="-" onPress={this.decrement} />
            <Button title="clear" onPress={this.clearCounts} />
          </View>
        </View>
    )
  }
}
