import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          keyboardType="numeric"
          placeholder="Nota 1"
        />
        <TextInput
          style={styles.textinput}
          keyboardType="numeric"
          placeholder="Nota 2"
        />
        <TextInput
          style={styles.textinput}
          keyboardType="numeric"
          placeholder="Número de faltas"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    padding: 30,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    fontSize: 20,
    backgroundColor: '#CCCCCC',
  },
  button: {
    margin: 20,
    padding: 20,
    backgroundColor: '#37474f',
  },
});

/*
npx react-native init calculadora         (cria a pasta do Projeto)
npx react-native run-android               (executa o app)
*/
