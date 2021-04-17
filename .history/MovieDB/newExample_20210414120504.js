import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class newExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Stack.Screen name="new" component={newExample} initialParams={true}></Stack.Screen>
      </View>
    );
  }
}
