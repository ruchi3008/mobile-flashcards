import { TabNavigator, StackNavigator,HeaderBackButton } from 'react-navigation'
import Decks from './Decks'
import AddDecks from './AddDecks'
import DeckDetails from './DeckDetails'
import AddCard from './AddCard'
import Quiz from './Quiz'

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

export  const DeckStackNavigator = StackNavigator({
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
