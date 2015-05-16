'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  TouchableHighlight,
} = React;

var styles = require("./style");

//View Elements

//Views

var HomeView = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      annualCost: 0,
      numberOfPeople: 1,
      running: false,
      currentCost: 0.0,
      timerId: null,
      numSeconds: 0,
    };
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  render: function() {
    var startStopButton;
    if (this.state.running) {
      startStopButton = "Stop";
    } else {
      startStopButton = "Start";
    }
    return(
      <View style={styles.screenContainer} >

        <View style={styles.costContainer} >
          <Text style={styles.labelText} >
            This meeting is costing you:
          </Text>
          <Text style={styles.cost} >
            ${this.state.currentCost}
          </Text>
        </View>

        <View style={styles.inputContainer} >
          <Text style={styles.labelText} >
            Annual employee cost:
          </Text>
          <View style={styles.inputTextFieldContainer} >
            <Text style={styles.inputText} >
              $
            </Text>
            <TextInput style={styles.inputField}
              onChangeText={(text) => this.setAnnualCost(text)}
              keyboardType='numeric'
              value={this.state.annualCost}
            />
            <Text style={styles.inputText} >
              ,000
            </Text>
          </View>
        </View>
        
        <View style={styles.inputContainer} >
          <Text style={styles.labelText} >
            Number in meeting:
          </Text>
          <View style={styles.inputTextFieldContainer} >
            <TextInput style={styles.inputField}
              onChangeText={(text) => this.setNumberOfPeople(text)}
              keyboardType='numeric'
              value={this.state.numberOfPeople}
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={this.toggleStartStop}>
              <Text style={styles.buttonText}>
                {startStopButton}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={this.reset}>
              <Text style={styles.buttonText}>
                Reset
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.spaceConsumer} />

      </View>
      );
  },

  setAnnualCost: function(newValue){
    this.setState({
      annualCost: Number(newValue),
    });
  },

  setNumberOfPeople: function(newValue){
    this.setState({
      numberOfPeople: Number(newValue),
    });
  },

  calcPerSecondCost: function(annualCost) {
    return((this.state.annualCost * 1000 * this.state.numberOfPeople) / (200.0 * 8.0 * 60.0 * 60.0));
  },

  timerCallback: function() {
    this.setState({
      // Update the running cost
      currentCost: (this.state.numSeconds * this.calcPerSecondCost()).toFixed(2),
      numSeconds: this.state.numSeconds + 1,
    });
  },

  toggleStartStop: function() {
    if (this.state.running) {

      // Stop the clock
      clearInterval(this.state.timerId)
      // Change the state
      this.setState({
        running: false,
        timerId: null,
      });

    } else {

      this.setState({
        running: true,
        // Set the interval timeout
        timerId: setInterval(this.timerCallback, 1000),
      });

    }
  },

  reset: function() {
    this.setState({
      currentCost: 0.0,
      numSeconds: 0,
    });
  },

});

module.exports = HomeView;
