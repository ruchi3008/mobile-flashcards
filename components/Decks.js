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
    <View style={styles.deckStyle}>
      <TouchableOpacity
          onPress={() => {
            this.receivDeck(deck)
            this.props.navigation.navigate('DeckDetails',{deck:deck})}}>
          <Text style={styles.textStyle1}>{deck.item.title}
          </Text>
      </TouchableOpacity>
      <Text style={styles.textStyle2}>{deck.item.cards.length} card{!(deck.item.cards.length===1) && <Text>s</Text>}</Text>
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
  textStyle1: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 25,
    textAlign: 'center',
    color:'#808080',
  },
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
