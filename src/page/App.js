import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ProviderStore from "../store/ProviderStore";
import codePush from "react-native-code-push";
import { Provider } from "mobx-react/native";
import { Actions, Router, Scene, Tabs, Stack } from "react-native-router-flux";

import HomePage from "./Home/HomePage";

@codePush
export default class App extends Component {
  render() {
    return (
      <Provider {...ProviderStore}>
        <Router>
          <Stack key="root">
            <Scene key="HomePage" component={HomePage} title="Login" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
