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
  },
  AddDecks:{
      screen: AddDecks,
  },
},
{
  tabBarOptions: {
    style:{
      backgroundColor :'#ffffff'
    },
    activeTintColor: '#000000',
    inactiveTintColor: '#ffffff',
  },
})
const DeckStackNavigator = StackNavigator({
  Home :{
    screen: Tabs,
  },
  DeckDetails : {
    screen: DeckDetails,
    navigationOptions: ({navigation}) =>({
      title:`${navigation.state.params.deck.item.title}`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    })
  },
  AddCard : {
    screen : AddCard,
    navigationOptions: {
      title:'Add Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title:'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
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
