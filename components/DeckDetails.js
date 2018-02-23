import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import {globalStyles} from '../utils/helper'

class DeckDetails extends Component {

  refresh =() => {

    }

  render() {

    return (
      <View style={styles.container}>
        <View style={[styles.container,{flex:1}]}>
         <Text style={globalStyles.textStyle3}>{this.props && this.props.deck && this.props.deck.title}</Text>
         <Text style={globalStyles.textStyle4}>{this.props && this.props.deck && this.props.deck.cards.length} card{!(this.props.deck.cards.length===1) && <Text>s</Text>}</Text>
        </View>
        <View style={[styles.container,{flex:1}]}>
          <TextButton children="Add Card" style={[globalStyles.textButtonStyle,{color:'black',backgroundColor:'white',borderColor:'black',borderWidth: 1.5,marginBottom:15}]} onPress={() => this.props.navigation.navigate('AddCard',{deck:this.props.deck,
          refresh:()=>this.refresh()})}/>
          <TextButton children="Start Quiz" style={globalStyles.textButtonStyle} onPress={() => this.props.navigation.navigate('Quiz',{deck:this.props.deck})}/>
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
});

const mapStateToProps = (state,props) =>{
  return (state)?{deck:state.deck}:{}
}
export default connect(mapStateToProps) (DeckDetails)
