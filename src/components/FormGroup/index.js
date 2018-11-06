import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './style';

export default class FormGroup extends Component {
  _renderInput(placeholder = '', isPassword = false, inputName) {
    return (
      <TextInput
        style={Styles.input}
        placeholder={placeholder}
        placeholderTextColor={'yellow'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={isPassword}
        underlineColorAndroid={'transparent'}
        onChangeText={text => this.props.onChangeText(inputName, text)}
      />
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {this._renderInput('USERNAME', false, 'username')}
        {this._renderInput('PASSWORD', true, 'password')}
      </View>
    );
  }
}
