import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform } from 'react-native';
import { TabNavigator, StackNavigator,HeaderBackButton } from 'react-navigation'
import Decks from './components/Decks'
import AddDecks from './components/AddDecks'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckDetails from './components/DeckDetails'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import { getInitialData } from './utils/initializationTask'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const store = createStore(reducer)
getInitialData(store)
const Tabs = TabNavigator({
  Decks:{
    screen: Decks,
  },  AddDecks:{
      screen: AddDecks,
  },
})
const DeckStackNavigator = StackNavigator({
  Home :{
    screen: Tabs,
  },
  DeckDetails : {
    screen: DeckDetails,
  },
  AddCard : {
    screen : AddCard,
    navigationOptions({ navigation }) {
      return {
        title: 'Add Card',
        headerLeft: (
          <HeaderBackButton
            title="Custom"
            onPress={() => navigation.goBack()}
          />
        )
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions({ navigation }) {
      return {
        title: 'Quiz',
      }
    }
  }
})
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckStackNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
