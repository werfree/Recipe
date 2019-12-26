/*

    SAyantan GHosh{
        [Email: gsayantan01@gmail.com
        Github: www.https: //github.com/werfree
        ]

*/

import React, {Component} from 'react';
import {View, StyleSheet, ToastAndroid, Text, SafeAreaView} from 'react-native';
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    color: '#ffff',
    margin: 10,
    fontWeight: 'bold',
  },
});
