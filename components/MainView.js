/*

  SAyantan GHosh{
    [Email: gsayantan01@gmail.com
    Github: www.https: //github.com/werfree
    ]

*/
import {Spinner} from 'native-base';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ToastAndroid,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card} from 'native-base';
import TypeWriter from 'react-native-typewriter';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

class MainView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      API_ID: '76e0e0c5',
      API_KEY: '5fc33fa28b37558581911fa1ac53902f',
      recipe: '',
      api: [],
      update: false,
      isLoading: true,
      isLaunch: true,
      FirstRecepi: ['apple', 'chicken', 'cheese', 'orange', ' mutton', 'crab'],
      recepiNotFound: false,
    };
  }

  apiCall = async recipe => {
    const URL = `https://api.edamam.com/search?q=${recipe}&app_id=${this.state.API_ID}&app_key=${this.state.API_KEY}`;
    console.log(URL);
    this.setState({update: !this.state.update});
    this.setState({isLoading: true});
    try {
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({isLoading: false});
      if (data.hits.length === 0) {
        ToastAndroid.showWithGravity(
          'Recepi Not Found',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.setState({recepiNotFound: true});
      } else {
        this.setState({api: data.hits});
        this.setState({isLoading: false});
        this.setState({recepiNotFound: false});
        this.forceUpdate();
      }
    } catch (error) {
      console.error(error);
      this.setState({isLoading: true});
      this.forceUpdate();
    }

    //console.log(this.state.api);
  };
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  componentDidUpdate() {
    console.log(this.state.isLaunch);
    if (this.state.recipe !== this.props.search) {
      var recipe = this.props.search;
      if (recipe !== '') {
        console.log(recipe);
        this.setState({recipe});
        this.apiCall(recipe);
        recipe = '';
      }
    } else {
      if (this.state.isLaunch == true) {
        var FirstRecepi = this.state;
        var FirstRandom =
          FirstRecepi[Math.floor(Math.random() * FirstRecepi.length)];
        this.setState({isLaunch: !this.state.isLaunch});
        this.apiCall(FirstRandom);
      }
    }
  }

  detail = recepi => {
    this.props.navigation.navigate('Details', {
      recepi: recepi,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Spinner style={{marginTop: 10}} color="red" />
          <View
            style={
              (styles.loadingContainer,
              {marginTop: Dimensions.get('window').height / 4})
            }>
            <FontAwesome name="glass" size={40} style={styles.foodIcon} />
            <TypeWriter style={styles.loadingText} typing={1}>
              Preparing Your food.
            </TypeWriter>
          </View>
        </View>
      );
    } else {
      if (this.state.recepiNotFound) {
        return (
          <View style={styles.container}>
            <Entypo name="emoji-sad" size={40} style={styles.foodIcon} />
            <TypeWriter style={styles.loadingText} typing={1}>
              Sorry!! Your recipe is not present. We will add it soon.
            </TypeWriter>
          </View>
        );
      } else {
        return (
          <View style={styles.container}>
            <FlatList
              data={this.state.api}
              removeClippedSubviews={false}
              extraData={this.state.update}
              renderItem={({item}) => {
                var recipe = item.recipe;
                //console.log(item.recipe.label);
                return (
                  <View style={styles.container}>
                    <View style={styles.border}>
                      <TouchableOpacity
                        onPress={() => {
                          this.detail(recipe);
                        }}>
                        <Card style={styles.cards}>
                          <View style={styles.cardItem}>
                            <Image
                              source={{uri: `${recipe.image}`}}
                              style={styles.image}
                            />
                            <View style={styles.detail}>
                              <Text style={styles.recepiName}>
                                {recipe.label}
                              </Text>
                              {recipe.healthLabels.map(healthLabels => (
                                <View style={styles.healthLabelsContainer}>
                                  <FontAwesome
                                    name="chevron-right"
                                    size={12}
                                    style={styles.icon}
                                  />
                                  <Text style={styles.healthLabels}>
                                    {healthLabels}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          </View>
                        </Card>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => {
                index;
              }}
            />
          </View>
        );
      }
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 3,
  },
  border: {},
  cards: {
    margin: 1,
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  cardItem: {
    flex: 1,
    flexDirection: 'row',
  },
  recepiName: {
    fontWeight: 'bold',
    fontSize: 21,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  icon: {
    marginTop: 3,
    marginRight: 5,
  },
  healthLabelsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  healthLabels: {
    marginBottom: 10,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,

    borderWidth: 0.2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  detail: {
    flex: 1,
    margin: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    marginHorizontal: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodIcon: {
    alignSelf: 'center',
    marginBottom: 15,
  },
});
export default withNavigation(MainView);
