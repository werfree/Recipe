/*

    SAyantan GHosh{
        [Email: gsayantan01@gmail.com
        Github: www.https: //github.com/werfree
        ]

*/

import React, {Component} from 'react';
import {Spinner} from 'native-base';
import {
  View,
  StyleSheet,
  ToastAndroid,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import TypeWriter from 'react-native-typewriter';
import WebView from 'react-native-webview';
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      spinnerVisible: true,
    };
  }
  static navigationOptions = {
    title: 'Procedure',
  };
  hideSpinner = () => {
    return (
      <View style={styles.loadingContainer}>
        <Spinner color="red" />
        <TypeWriter style={styles.loadingText} typing={1}>
          Please hold on.Your recipe is almost ready to cook.
        </TypeWriter>
      </View>
    );
  };
  render() {
    return (
      <WebView
        style={styles.webView}
        source={{uri: `${this.props.navigation.getParam('url', '')}`}}
        renderLoading={this.hideSpinner}
        startInLoadingState
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    marginBottom: Dimensions.get('window').height / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    marginHorizontal: 10,
  },
});
