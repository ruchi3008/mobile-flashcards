import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    questionNo:0
  }
  componentDidMount(){
    this.setState({
      questionNo:1,
      correctAnswer:0,
      quizComplete:false,
      showAnswer:false
    })
  }
  _onPressButton(answer){
    if (this.props.navigation.state.params.deck.cards[this.state.questionNo]===answer)
      this.setState({correctAnswer:this.state.correctAnswer +1})
    this.setState({questionNo:this.state.questionNo +1})
    if(this.state.questionNo===this.props.navigation.state.params.deck.cards.length){
        this.setState({quizComplete:true})
    }
  }
  _flipCard(){
    this.setState({
      showAnswer:!this.state.showAnswer,
    })
  }
  render() {
    console.log("quizComplete",this.state.quizComplete)
    let card = {}
    if(this.props.navigation.state.params.deck.cards[this.state.questionNo])
     card =  this.props.navigation.state.params.deck.cards[this.state.questionNo]
    return (
      <View style={styles.container}>
      {!this.state.quizComplete &&
        <Text>{this.state.questionNo}/{this.props.navigation.state.params.deck.cards.length}</Text>
      }
          {!this.state.quizComplete && !this.state.showAnswer &&
            <View>
            <Text>{card.question}</Text>

             <TouchableOpacity onPress={() => { this._flipCard()}}>
                <Text>Answer</Text></TouchableOpacity>
             <TouchableOpacity onPress={() => { this._onPressButton("yes")}}>
                <Text>Correct</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { this._onPressButton("no")}}>
                <Text>Incorrect</Text></TouchableOpacity>
              </View>
            }
            {!this.state.quizComplete && this.state.showAnswer &&
              <View>
               <Text>{card.answer}</Text>
               <TouchableOpacity onPress={() => { this._flipCard()}}>
                  <Text>Answer</Text></TouchableOpacity>
               <TouchableOpacity onPress={() => { this._onPressButton("yes")}}>
                  <Text>Correct</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { this._onPressButton("no")}}>
                  <Text>Incorrect</Text></TouchableOpacity>
                </View>
              }
          {this.state.quizComplete &&
            <Text>Hello</Text>
          }
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


export default connect() (Quiz)
