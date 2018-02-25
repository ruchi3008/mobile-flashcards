import React,{Component} from 'react';
import { Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import {globalStyles} from '../utils/helper'

class DeckDetails extends Component {

  render() {
    return (
      <View style={globalStyles.container8}>
        <View style={[globalStyles.container8,{flex:1}]}>
         <Text style={globalStyles.textStyle3}>{this.props.deck && this.props.deck.title}</Text>
         <Text style={globalStyles.textStyle4}>{this.props.deck && this.props.deck.cards.length} card{!(this.props.deck.cards.length===1) && <Text>s</Text>}</Text>
        </View>
        <View style={[globalStyles.container8,{flex:1}]}>
          <TextButton children="Add Card" style={[globalStyles.textButtonStyle,{color:'black',backgroundColor:'white',borderColor:'black',borderWidth: 1.5,marginBottom:15}]} onPress={() => this.props.navigation.navigate('AddCard',{deck:this.props.deck})}/>
          <TextButton children="Start Quiz" style={globalStyles.textButtonStyle} onPress={() => this.props.navigation.navigate('Quiz',{deck:this.props.deck})}/>
        </View>
      </View>
    );
  }
}



const mapStateToProps = (state,props) =>{
  return (state)?{deck:state.deck}:{}
}
export default connect(mapStateToProps) (DeckDetails)
