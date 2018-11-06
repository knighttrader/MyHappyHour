import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Login } from '@screens';

export default class MyHappyHour extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="home" component={Login} initial />
        </Scene>
      </Router>
    );
  }
}
