import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, AsyncStorage,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { getDecks,getDeck} from '../utils/api'
import { TabNavigator } from 'react-navigation'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'

class Decks extends Component {
  receivDeck = (deck) =>{
      this.props.dispatch(receiveDeck(deck.item))
  }
  renderItems = (deck) => {
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
         this.receivDeck(deck)
         this.props.navigation.navigate('DeckDetails',{deck:deck})}}>
          <Text>{deck.item.title}</Text></TouchableOpacity>
      <Text>{deck.item.cards.length}</Text>
    </View>
  )}
  render(){

    return (
      <View>
        <FlatList
          data={this.props.decks}
          renderItem = {this.renderItems}
          keyExtractor={(deck, index) => index}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  deckStyle: {
    height:30,
  }
});

const mapStateToProps = (state,props) => {
  if(state)
  {
    return {
      decks: state.decks
      }
  }
  else {
    return {}
  }
};
export default connect(mapStateToProps)(Decks)
