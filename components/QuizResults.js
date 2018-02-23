import React, {Component} from 'react'
import { StyleSheet, Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
import TextButton from './TextButton'
import {globalStyles} from '../utils/helper'
class QuizResults extends Component {
  render(){
    return (
      <View style={globalStyles.container}>
        <View style={[globalStyles.container,{flex:2}]}>
          <Text style={globalStyles.textStyle6} >Your results {this.props.correct}/{this.props.length} </Text>
        </View>
        <View style={[globalStyles.container,{flex:3,justifyContent:'flex-start',alignItems:'center'}]}>
           <TextButton children="Restart Quiz" style={globalStyles.textButtonStyle1} onPress={() => { this.props.navigation.navigate('Quiz',{deck:this.props.deck})}}/>
           <TextButton children="Return to Deck" style={[globalStyles.textButtonStyle1,{paddingLeft: 56,paddingRight: 56}]} onPress={() => { this.props.navigation.goBack()}}/>
        </View>
      </View>
    )
  }
}
export default QuizResults
