'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

// var StyleSheet = require('react-native-debug-stylesheet');

module.exports = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'auto',
    marginTop: 20,
  },

  costContainer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'center',
    margin: 10,
  },
  labelText: {
    flex: 0,
    alignSelf: 'auto',
    fontSize: 20,
    textAlign: 'left',
    color: 'black',
  },
  cost: {
    flex: 0,
    alignSelf: 'auto',
    fontSize: 50,
    textAlign: 'left',
    color: 'black',
    height: 70,
  },
  
  inputContainer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'auto',
    margin: 10,
  },
  inputTextFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'auto',
  },
  inputText: {
    flex: 1,
    flexWrap: 'nowrap',
    alignSelf: 'auto',
    fontSize: 30,
  },
  inputField: {
    flex: 1,
    alignSelf: 'auto',
    fontSize: 30,
    height: 50,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
  },

  buttonsContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    alignSelf: 'auto',
    height: 50,
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'auto',
    margin: 10,
  },
  buttonText: {
    flex: 1,
    alignSelf: 'auto',
    fontSize: 30,
    textAlign: 'left',
    color: 'black',
    height: 50,
    marginTop: 50,
  },

  spaceConsumer: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
