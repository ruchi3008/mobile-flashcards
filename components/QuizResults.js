import React, {Component} from 'react'
import { StyleSheet, Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
class QuizResults extends Component {
  render(){
    console.log(this.props)
    const percentage = parseInt(this.props.correct)/parseInt(this.props.length)*100
    return (<Text style={this.props.style} >You have secured {percentage && percentage} % </Text>)
  }
}
export default QuizResults
