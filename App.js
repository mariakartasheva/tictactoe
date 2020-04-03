import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Cell} from './Cell';
class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      values: ['', '', '', '', '', '', '', '', ''],
      firstPlayer: true,
    };
    this.state = this.initialState;
  }

  onPress = id => () => {
    const nextValues = [...this.state.values];
    nextValues[id] = this.state.firstPlayer ? 'x' : 'o';
    if (
      nextValues[0] &&
      nextValues[1] &&
      nextValues[2] &&
      nextValues[0] === nextValues[1] &&
      nextValues[1] === nextValues[2]
    ) {
      console.log('you win');
    }
    this.setState({values: nextValues, firstPlayer: !this.state.firstPlayer});
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer} focusable={true} accessible={true}>
          <Text style={styles.headlineText} accessibilityLabel="Tic Tac Toe">
            Tic Tac Toe
          </Text>
          <Button
            onPress={() => {
              this.setState(this.initialState);
            }}
            title="Restart"
          />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.rowContainer}>
            <Cell value={this.state.values[0]} onPress={this.onPress(0)} />
            <Cell value={this.state.values[1]} onPress={this.onPress(1)} />
            <Cell value={this.state.values[2]} onPress={this.onPress(2)} />
          </View>
          <View style={styles.rowContainer}>
            <Cell value={this.state.values[3]} onPress={this.onPress(3)} />
            <Cell value={this.state.values[4]} onPress={this.onPress(4)} />
            <Cell value={this.state.values[5]} onPress={this.onPress(5)} />
          </View>
          <View style={styles.rowContainer}>
            <Cell value={this.state.values[6]} onPress={this.onPress(6)} />
            <Cell value={this.state.values[7]} onPress={this.onPress(7)} />
            <Cell value={this.state.values[8]} onPress={this.onPress(8)} />
          </View>
        </View>
        <View style={styles.bodyContainer} focusable={true} accessible={true}>
          <Text style={styles.headlineText}>
            Player {this.state.firstPlayer ? '1' : '2'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#e6e7e7',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 100,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headlineText: {
    marginBottom: 10,
    color: '#333333',
    textAlign: 'center',
  },
  bodyText: {
    color: '#333333',
    textAlign: 'center',
  },
});

export default App;
