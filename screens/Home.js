import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Forms from '../components/Forms';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Recipe',
  };
  constructor(props) {
    super(props);
    this.state = {
      online: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Forms />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
