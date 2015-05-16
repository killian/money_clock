/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// Views
var HomeView = require('./App/Views/Home');

// Elements

var money_clock = React.createClass({
  render: function() {
    return (
      <HomeView />
    );
  }
});


AppRegistry.registerComponent('money_clock', () => money_clock);
