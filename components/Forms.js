/*

    SAyantan GHosh{
        [Email: gsayantan01@gmail.com
        Github: www.https: //github.com/werfree
        ]

*/

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Form, Input, Item, Label} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainView from './MainView';

export default class Forms extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      finalSearch: '',
      demo: true,
    };
  }

  componentDidMount = () => {
    this.setState({finalSearch: ''});
  };
  saveSearch = () => {
    const finalSearch = this.state.searchText;
    this.setState({finalSearch: this.state.searchText});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainerStyle}>
          <Form style={styles.formStyle}>
            <Item style={styles.formItem}>
              <Input
                style={styles.inputField}
                placeholder="Search Your Recipes (eg Chicken,Cake)"
                ref="input"
                underlineColorAndroid="white"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                value={this.state.searchText}
                onChangeText={searchText => {
                  this.setState({searchText});
                  this.setState({finalSearch: ''});
                }}
              />
            </Item>
          </Form>
          <TouchableOpacity
            onPress={() => {
              this.saveSearch();
            }}>
            <FontAwesome name="search" size={20} style={styles.fontAwesome} />
          </TouchableOpacity>
        </View>
        <MainView search={this.state.finalSearch} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainerStyle: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 9,
    marginRight: 9,
    borderColor: 'grey',
    borderWidth: 1.5,

    borderRadius: 30,
  },
  formStyle: {flex: 4},
  label: {
    marginBottom: 5,
    color: '#353839',
  },
  fontAwesome: {
    flex: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 18,
  },
  formItem: {},
  downContainer: {
    marginTop: 40,
    marginLeft: 15,
  },
  inputField: {
    marginBottom: 1,
  },
});
