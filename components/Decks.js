import React,{Component} from 'react'
import { StyleSheet, Text, View, FlatList, AsyncStorage,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'
import { getDecks,getDeck} from '../utils/api'
import { TabNavigator } from 'react-navigation'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import {globalStyles} from '../utils/helper'

class Decks extends Component {
  receivDeck = (deck) =>{
      this.props.dispatch(receiveDeck(deck.item))
  }
  renderItems = (deck) => {
    return (
    <View style={styles.deckStyle}>
      <TouchableOpacity
          onPress={() => {
            this.receivDeck(deck)
            this.props.navigation.navigate('DeckDetails',{deck:deck})}}>
          <Text style={globalStyles.textStyle1}>{deck.item.title}
          </Text>
      </TouchableOpacity>
      {deck.item.cards &&
        <Text style={globalStyles.textStyle2}>{deck.item.cards.length} card{!(deck.item.cards.length===1) && <Text>s</Text>}</Text>
      }
    </View>
  )}
  render(){

    return (
      <View style={styles.container}>
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
    alignItems:'stretch',
    backgroundColor:'white'
  },
  deckStyle: {
    height:175,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
    borderWidth: 0.5,
  },
});

const mapStateToProps = (state,props) => {
    return (state)?{decks:state.decks}:{}

}
export default connect(mapStateToProps)(Decks)
