import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './style';

export default class ButtonGroup extends Component {
  _renderButton(title, type = 'general', onPress) {
    const containerStyles = [Styles.innerContainer];

    if (type === 'block') {
      containerStyles.push(Styles.block.container);
    } else {
      containerStyles.push(Styles.general.container);
    }

    return (
      <TouchableOpacity style={containerStyles} onPress={() => onPress()}>
        <Text style={Styles[type].text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  handleSignIn() {
    alert(JSON.stringify(this.props.data));
  }

  _renderButtons() {
    return (
      <View style={Styles.container}>
        {this._renderButton('SIGN IN', 'block', () => this.handleSignIn())}
        {this._renderButton('VIA FACEBOOK', 'general', () =>
          this.handleSignIn(),
        )}
      </View>
    );
  }

  render() {
    return this._renderButtons();
  }
}
