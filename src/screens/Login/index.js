import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './style';

export default class Login extends Component {
  _renderTitle() {
    return (
      <View style={Styles.title.container}>
        <Text style={Styles.title.text}>
          MY <Text style={Styles.title.boldText}>HAPPY</Text> HOUR
        </Text>
      </View>
    );
  }

  _renderInput(placeholder = '', isPassword = false) {
    return (
      <TextInput
        style={Styles.forms.input}
        placeholder={placeholder}
        placeholderTextColor={'yellow'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={isPassword}
        underlineColorAndroid={'transparent'}
      />
    );
  }

  _renderForms() {
    return (
      <View style={Styles.forms.container}>
        {this._renderInput('USERNAME')}
        {this._renderInput('PASSWORD', true)}
      </View>
    );
  }

  _renderButton(title, type = 'general', onPress) {
    const containerStyles = [Styles.buttons.innerContainer];

    if (type === 'block') {
      containerStyles.push(Styles.buttons.block.container);
    } else {
      containerStyles.push(Styles.buttons.general.container);
    }

    return (
      <TouchableOpacity style={containerStyles} onPress={() => onPress()}>
        <Text style={Styles.buttons[type].text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  _renderButtons() {
    return (
      <View style={Styles.buttons.container}>
        {this._renderButton('SIGN IN', 'block', () => alert('SIGN IN Pressed'))}
        {this._renderButton('VIA FACEBOOK', 'general', () =>
          alert('VIA FACEBOOK Pressed'),
        )}
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        {/* === Title Section === */}
        {this._renderTitle()}

        {/* === Forms Section === */}
        {this._renderForms()}

        {/* == Buttons Section == */}
        {this._renderButtons()}
      </View>
    );
  }
}
