import React,{Component} from 'react';
import { Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import QuizResults from './QuizResults'
import {globalStyles} from '../utils/helper'
import { clearLocalNotification, setLocalNotification} from '../utils/notification'

class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {  questionNo:1,
      quizComplete:false,
      percentage:0,
      correctAnswer: 0,
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

     if (answer === 'correct')
    {
       this.setState((state)=>{
        return {
              correctAnswer:state.correctAnswer+1,
            }})
    }

    this.setState({questionNo:this.state.questionNo+1,showAnswer:false})

    if(this.state.questionNo===this.props.navigation.state.params.deck.cards.length){

      clearLocalNotification()
        .then(setLocalNotification)
      this.setState(
          {quizComplete:true,
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
   const {length} = this.props.navigation.state.params.deck.cards
    return (
      <View style={globalStyles.container}>
        {(length===0)&&
          <View style={globalStyles.container}>
            <Text style={globalStyles.textStyle6}>Sorry!! This deck has no questions yet.</Text>
          </View>
        }
        { !(length===0)&&
        <View style={globalStyles.container1}>
              {!this.state.quizComplete &&
                <View style={globalStyles.container2}><Text style={globalStyles.textStyle5}>{this.state.questionNo}/{length}</Text>
                </View>
              }
              {
                 !this.state.quizComplete &&
                 <View style={globalStyles.container3}>
                  <View>
                   <Animated.View style={[globalStyles.flipCard,this.getAnimationStyle('front')]}>
                     <Text style={globalStyles.textStyle6}>{card.question}</Text>
                   </Animated.View>
                   <Animated.View style={[this.getAnimationStyle('back'),globalStyles.flipCard,globalStyles.flipCardBack]}>
                     <Text style={globalStyles.textStyle6}>{card.answer}</Text>
                   </Animated.View>
                  </View>
                  <TouchableOpacity onPress = {() => this._flipCard()}>
                  <Text style = {globalStyles.textStyle7}>{this.state.showAnswer && <Text>Question</Text> }{!this.state.showAnswer && <Text>Answer</Text> }</Text>
                  </TouchableOpacity>
                 </View>
              }

              {!this.state.quizComplete &&
                <View style={globalStyles.container5}>
                   <TextButton children="Correct" style={globalStyles.textButtonStyle1} onPress={() => { this._onPressButton('correct')}}/>
                   <TextButton children="Incorrect" style={globalStyles.textButtonStyle2} onPress={() => { this._onPressButton('incorrect')}}/>
                </View>
              }
            {this.state.quizComplete &&
              <View style={[globalStyles.container]}>
              <QuizResults  navigation={this.props.navigation}  length={length} correct={this.state.correctAnswer}/>
              </View>
            }
        </View>
        }
      </View>
    );
  }
}

export default connect() (Quiz)
