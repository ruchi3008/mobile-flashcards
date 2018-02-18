import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'

class DeckDetails extends Component {

  refresh =() => {
    console.log("Step 5 : Refreshed")
    // this.setState({
    //   hello:"hello"
    // })
    }

  render() {
    console.log("Step 7 : Rendering updated DeckDetails")
    return (
      <View style={styles.container}>
        <Text>DeckDetails</Text>
         <Text>{this.props && this.props.deck && this.props.deck.title}</Text>
         <Text>{this.props && this.props.deck && this.props.deck.cards.length}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard',{deck:this.props.navigation.state.params.deck,
        refresh:()=>this.refresh()})}>
            <Text>Add Card</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz',{deck:this.props.deck})}>
            <Text>Start Quiz</Text></TouchableOpacity>
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
});

const mapStateToProps = (state,props) =>{
  if(state)
  {
    return {
      deck: state.deck
      }
  }
  else {
    return {}
  }
}
export default connect(mapStateToProps) (DeckDetails)
