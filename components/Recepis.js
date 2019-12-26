/*

    SAyantan GHosh{
        [Email: gsayantan01@gmail.com
        Github: www.https: //github.com/werfree
        ]

*/

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'native-base';
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.recipe.recipe,
    };
  }

  update = () => {
    this.forceUpdate();
  };

  render() {
    var {recipe} = this.state;
    console.log(recipe.label);

    return (
      <View style={styles.container}>
        <Text>{recipe.label}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignContent: 'center',
  },
  recepiName: {
    fontWeight: 'bold',
    fontSize: 22,
    justifyContent: 'flex-start',
    margin: 6,
  },
});
