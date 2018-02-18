import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    questionNo:1,
    showAnswer:false,
    quizComplete:false,
    correctAnswer:0,
    percentage:0
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
    if (this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer===answer)
      this.setState({correctAnswer:this.state.correctAnswer +1})
    this.setState({questionNo:this.state.questionNo +1,showAnswer:false})
    if(this.state.questionNo===this.props.navigation.state.params.deck.cards.length){
      const percentage = parseInt(this.state.correctAnswer)/parseInt(this.props.navigation.state.params.deck.cards.length)*100
      console.log(percentage,parseInt(this.state.correctAnswer),parseInt(this.props.navigation.state.params.deck.cards.length))
        this.setState(
          {quizComplete:true,
           percentage : percentage
          })
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
    if(this.props.navigation.state.params.deck.cards[this.state.questionNo-1])
     card =  this.props.navigation.state.params.deck.cards[this.state.questionNo-1]
    return (
      <View style={styles.container}>
      {!this.state.quizComplete &&
        <Text>{this.state.questionNo}/{this.props.navigation.state.params.deck.cards.length}</Text>
      }
          {!this.state.quizComplete && !this.state.showAnswer &&
            <View>
            <Text>{card.question}</Text>
             <TouchableOpacity onPress={() => { this._flipCard()}}>
                 <Text>Answer</Text>
              </TouchableOpacity>
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
                  <Text>Question</Text></TouchableOpacity>
               <TouchableOpacity onPress={() => { this._onPressButton("yes")}}>
                  <Text>Correct</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => { this._onPressButton("no")}}>
                  <Text>Incorrect</Text></TouchableOpacity>
                </View>
              }
          {this.state.quizComplete &&
            <Text>You have secured {this.state.percentage && this.state.percentage}</Text>
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
