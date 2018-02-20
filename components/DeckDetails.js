import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class DeckDetails extends Component {

  refresh =() => {
    console.log("Step 5 : Refreshed")
    }

  render() {
    console.log("Step 7 : Rendering updated DeckDetails")
    return (
      <View style={styles.container}>
        <View style={[styles.container,{flex:1}]}>
         <Text style={styles.textStyle1}>{this.props && this.props.deck && this.props.deck.title}</Text>
         <Text style={styles.textStyle2}>{this.props && this.props.deck && this.props.deck.cards.length} card{!(this.props.deck.cards.length===1) && <Text>s</Text>}</Text>
        </View>
        <View style={[styles.container,{flex:1}]}>
          <TextButton children="Add Card" style={[styles.textButtonStyle,{color:'black',backgroundColor:'white',borderColor:'black',borderWidth: 1.5,marginBottom:15}]} onPress={() => this.props.navigation.navigate('AddCard',{deck:this.props.deck,
          refresh:()=>this.refresh()})}/>
          <TextButton children="Start Quiz" style={styles.textButtonStyle} onPress={() => this.props.navigation.navigate('Quiz',{deck:this.props.deck})}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  textStyle1: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 35,
    textAlign: 'center',
    color:'#808080',
  },
  textButtonStyle:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  }
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
