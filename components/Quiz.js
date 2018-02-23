import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import QuizResults from './QuizResults'
import {globalStyles} from '../utils/helper'

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {  questionNo:1,
      quizComplete:false,
      percentage:0,
      correctAnswer: this.props.navigation.state.params.deck.cards.length,
      showAnswer:false
    }
  }

  componentWillMount() {

    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    })
    this.backOpacity = this.animatedValue.interpolate({ inputRange: [89, 90], outputRange: [0, 1] })
  }
  _onPressButton(answer){
    if(this.state.showAnswer){
      this._flipCard()
    }

     if (this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer.toUpperCase()!==answer.toUpperCase())
    {
       this.setState((state)=>{
        return {
              correctAnswer:state.correctAnswer-1,
            }})
    }

    this.setState({questionNo:this.state.questionNo+1,showAnswer:false})

    if(this.state.questionNo===this.props.navigation.state.params.deck.cards.length){
      const percentage = parseInt(this.state.correctAnswer)/parseInt(this.props.navigation.state.params.deck.cards.length)*100

      this.setState(
          {quizComplete:true,
           percentage : percentage
          })
    }
  }
  _flipCard() {
    this.setState({
      showAnswer:!this.state.showAnswer
    })
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }
  getAnimationStyle(side){
    if(side==='front')
     return {
       transform: [
         { rotateY: this.frontInterpolate}
       ]
     }
     else if(side==='back')
       return {
         transform: [
           { rotateY: this.backInterpolate }
         ],
         opacity: this.backOpacity,
       }
  }
  getCard(){
    let cardsAll  = this.props.navigation.state.params.deck.cards
    let card = {}
    if(cardsAll[this.state.questionNo-1])
     card =  cardsAll[this.state.questionNo-1]
    return card
  }

  render() {
   let card = this.getCard()
    return (
      <View style={globalStyles.container}>
        {(this.props.navigation.state.params.deck.cards.length===0)&&
          <View style={globalStyles.container}>
            <Text style={globalStyles.textStyle6}>Sorry!! This deck has no questions yet.</Text>
          </View>
        }
        { !(this.props.navigation.state.params.deck.cards.length===0)&&
        <View style={[globalStyles.container,{justifyContent:'flex-start'}]}>
              {!this.state.quizComplete &&
                <View style={[globalStyles.container,{flex:1,justifyContent:'flex-start',alignSelf:'flex-start',paddingLeft:10,paddingTop:10}]}><Text style={globalStyles.textStyle5}>{this.state.questionNo}/{this.props.navigation.state.params.deck.cards.length}</Text>
                </View>
              }
              {
                 !this.state.quizComplete &&
                 <View style={[globalStyles.container,{alignItems:'center',flex:3}]}>
                  <View>
                   <Animated.View style={[globalStyles.flipCard,this.getAnimationStyle('front'),{justifyContent:'flex-end'}]}>
                     <Text style={globalStyles.textStyle6}>{card.question}</Text>
                   </Animated.View>
                   <Animated.View style={[this.getAnimationStyle('back'),globalStyles.flipCard,globalStyles.flipCardBack,{justifyContent:'flex-end'}]}>
                     <Text style={globalStyles.textStyle6}>{card.answer}</Text>
                   </Animated.View>
                  </View>
                  <TouchableOpacity onPress = {() => this._flipCard()}>
                  <Text style = {globalStyles.textStyle7}>{this.state.showAnswer && <Text>Question</Text> }{!this.state.showAnswer && <Text>Answer</Text> }</Text>
                  </TouchableOpacity>
                 </View>
              }

              {!this.state.quizComplete &&
                <View style={[globalStyles.container,{flex:3,justifyContent:'flex-start',alignItems:'center'}]}>
                   <TextButton children="Correct" style={globalStyles.textButtonStyle1} onPress={() => { this._onPressButton("yes")}}/>
                   <TextButton children="Incorrect" style={[globalStyles.textButtonStyle1,{backgroundColor:'#B22222',paddingLeft: 58,
                      paddingRight: 58}]} onPress={() => { this._onPressButton("no")}}/>
                </View>
              }
            {this.state.quizComplete &&
              <View style={[globalStyles.container]}>
              <QuizResults deck={this.props.navigation.state.params.deck} navigation={this.props.navigation}  length={this.props.navigation.state.params.deck.cards.length} correct={this.state.correctAnswer}/>
              </View>
            }
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({


});


export default connect() (Quiz)
