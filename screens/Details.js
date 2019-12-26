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
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Details extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      recipe: this.props.navigation.getParam('recepi', ''),
    };
  }
  static navigationOptions = {
    title: 'Details',
  };

  procedurePage = url => {
    this.props.navigation.navigate('WebView', {
      url: url,
    });
  };

  render() {
    var item = this.state.recipe;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headingContainer}>
          <Image style={styles.image} source={{uri: `${item.image}`}} />
          <View style={styles.headTextContainer}>
            <Text style={styles.heading}>{item.label}</Text>
          </View>
        </View>
        <View style={styles.middleContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsHeading}>Ingredients</Text>
              <View style={styles.ingredientsView}>
                {item.ingredients.map((ingredients, index) => (
                  <View style={styles.ingredientsContent}>
                    <FontAwesome
                      style={{marginTop: 3}}
                      name="chevron-right"
                      size={12}
                    />
                    <Text style={{marginLeft: 10, marginRight: 10}}>
                      {ingredients.text}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.contentContainer}>
              <View style={styles.caloriesContainer}>
                <Text style={styles.contentHeading}>Calories</Text>
                <View style={styles.contentView}>
                  <View style={styles.contentContent}>
                    <FontAwesome
                      style={{marginTop: 3}}
                      name="chevron-right"
                      size={12}
                    />
                    <Text style={{marginLeft: 10, marginRight: 10}}>
                      {Math.round(item.calories)} kcal
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{margin: 20}} />
              <View style={styles.procedureContainer}>
                <TouchableOpacity onPress={() => this.procedurePage(item.url)}>
                  <Text style={styles.contentHeading}>Procedure</Text>
                  <View style={styles.contentView}>
                    <View style={styles.contentContent}>
                      <FontAwesome
                        style={{marginTop: 3}}
                        name="chevron-right"
                        size={12}
                      />
                      <Text
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          color: 'blue',
                          fontStyle: 'italic',
                        }}>
                        Click here!
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFF',
  },
  headingContainer: {
    alignItems: 'center',
  },
  topCard: {},
  image: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'black',
    margin: 5,
    width: Math.round(Dimensions.get('window').width) - 5,
    height: Math.round(Dimensions.get('window').width / 2.5),
  },
  headTextContainer: {
    margin: 5,
    marginVertical: 8,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    fontStyle: 'italic',
    marginLeft: 10,
    marginRight: 10,
  },
  middleContainer: {
    margin: 5,
  },
  ingredientsContainer: {
    borderColor: 'black',
    borderWidth: 0.7,
    padding: 5,
    borderRadius: 10,
    marginBottom: 5,
  },
  ingredientsContent: {
    flexDirection: 'row',
    marginLeft: 50,
  },

  ingredientsHeading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 5,
  },
  ingredientsView: {
    alignSelf: 'center',
  },
  ingredients: {
    fontSize: 15,
    textAlign: 'right',
    fontWeight: '900',
  },
  contentContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  caloriesContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 10,

    marginLeft: 25,
  },

  procedureContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 0.7,
    borderRadius: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 25,
  },
  contentHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 4,
  },
  contentContent: {
    flexDirection: 'row',
    marginLeft: 30,
    marginBottom: 10,
  },
  contentView: {},
  scrollView: {
    marginBottom: 250,
  },
  space: {},
});
