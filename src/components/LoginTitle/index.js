import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './style';

export default class LoginTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.text}>
          MY <Text style={Styles.boldText}>HAPPY</Text> HOUR
        </Text>
      </View>
    );
  }
}
