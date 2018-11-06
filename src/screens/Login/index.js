import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginTitle, FormGroup, ButtonGroup } from '@components';
import Styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(inputName, text) {
    let state = this.state;

    state[inputName] = text;

    this.setState(state);
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* === Title Section === */}
        <LoginTitle />

        {/* === Forms Section === */}
        <FormGroup
          onChangeText={(inputName, text) => this.handleChange(inputName, text)}
        />

        {/* == Buttons Section == */}
        <ButtonGroup data={this.state} />
      </View>
    );
  }
}
