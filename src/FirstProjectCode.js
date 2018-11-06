import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(inputText, text) {
    let state = this.state;

    state[inputText] = text;

    this.setState(state);
  }

  _renderTitle() {
    return (
      <View style={Styles.title.container}>
        <Text style={Styles.title.text}>
          MY <Text style={Styles.title.boldText}>HAPPY</Text> HOUR
        </Text>
      </View>
    );
  }

  _renderInput(placeholder = '', isPassword = false, inputText) {
    return (
      <TextInput
        style={Styles.forms.input}
        placeholder={placeholder}
        placeholderTextColor={'yellow'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={isPassword}
        underlineColorAndroid={'transparent'}
        onChangeText={text => this.handleChange(inputText, text)}
      />
    );
  }

  _renderForms() {
    return (
      <View style={Styles.forms.container}>
        {this._renderInput('USERNAME', false, 'username')}
        {this._renderInput('PASSWORD', true, 'password')}
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

  handleSignIn() {
    alert(JSON.stringify(this.state));
  }

  _renderButtons() {
    return (
      <View style={Styles.buttons.container}>
        {this._renderButton('SIGN IN', 'block', () => this.handleSignIn())}
        {this._renderButton('VIA FACEBOOK', 'general', () =>
          this.handleSignIn(),
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

const Styles = {
  container: {
    flex: 1,
    backgroundColor: 'red',
  },

  title: {
    container: {
      height: 250,
      flex: -1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 30,
    },
    boldText: {
      fontWeight: 'bold',
    },
  },

  forms: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'white',
      width: 270,
      height: 45,
      color: 'white',
      paddingHorizontal: 20,
      marginVertical: 10,
      textAlign: 'center',
    },
  },

  buttons: {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      width: 270,
      height: 45,
      paddingHorizontal: 20,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    general: {
      container: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red',
      },
      text: {
        color: 'white',
      },
    },
    block: {
      container: {
        backgroundColor: 'white',
      },
      text: {
        color: 'red',
      },
    },
  },
};
