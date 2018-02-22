import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import QuizResults from './QuizResults'

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
    console.log("Before",this.state.correctAnswer)
     if (this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer.toUpperCase()!==answer.toUpperCase())
    {
       this.setState((state)=>{
        console.log("Updating state")
        return {
              correctAnswer:state.correctAnswer-1,
            }})
    }
    console.log("After",this.state.correctAnswer)
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

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ],
      opacity: this.backOpacity,
    }

    let card = {}
    if(this.props.navigation.state.params.deck.cards[this.state.questionNo-1])
     card =  this.props.navigation.state.params.deck.cards[this.state.questionNo-1]
    return (
      <View style={styles.container}>
        {(this.props.navigation.state.params.deck.cards.length===0)&&
          <View style={styles.container}>
            <Text style={styles.textStyle2}>Sorry!! This deck has no questions yet.</Text>
          </View>
        }
        { !(this.props.navigation.state.params.deck.cards.length===0)&&
        <View style={[styles.container,{justifyContent:'flex-start'}]}>
              {!this.state.quizComplete &&
                <View style={[styles.container,{flex:1,justifyContent:'flex-start',alignSelf:'flex-start',paddingLeft:10,paddingTop:10}]}><Text style={styles.textStyle1}>{this.state.questionNo}/{this.props.navigation.state.params.deck.cards.length}</Text>
                </View>
              }
              {
                 !this.state.quizComplete &&
                 <View style={[styles.container,{alignItems:'center',flex:3}]}>
                  <View>
                   <Animated.View style={[styles.flipCard,frontAnimatedStyle,{justifyContent:'flex-end'}]}>
                     <Text style={styles.textStyle2}>{card.question}</Text>
                   </Animated.View>
                   <Animated.View style={[backAnimatedStyle,styles.flipCard,styles.flipCardBack,{justifyContent:'flex-end'}]}>
                     <Text style={styles.textStyle2}>{card.answer}</Text>
                   </Animated.View>
                  </View>
                  <TouchableOpacity onPress = {() => this._flipCard()}>
                  <Text style = {styles.textStyle3}>{this.state.showAnswer && <Text>Question</Text> }{!this.state.showAnswer && <Text>Answer</Text> }</Text>
                  </TouchableOpacity>
                 </View>
              }

              {!this.state.quizComplete &&
                <View style={[styles.container,{flex:3,justifyContent:'flex-start',alignItems:'center'}]}>
                   <TextButton children="Correct" style={styles.textButtonStyle} onPress={() => { this._onPressButton("yes")}}/>
                   <TextButton children="Incorrect" style={[styles.textButtonStyle,{backgroundColor:'#B22222',paddingLeft: 58,
                      paddingRight: 58}]} onPress={() => { this._onPressButton("no")}}/>
                </View>
              }
            {this.state.quizComplete &&
              <View style={[styles.container]}>
              <QuizResults style={styles.textStyle2} length={this.props.navigation.state.params.deck.cards.length} correct={this.state.correctAnswer}/>
              </View>
            }
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'white'
  },
  textStyle1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle2: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle3: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'red',
    marginTop:20
  },
  textButtonStyle:{
    fontSize:20,
    backgroundColor:'green',
    color:'white',
    padding: 10,
    paddingLeft: 65,
    paddingRight: 65,
    height: 50,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  flipCard: {
    width: 300,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  flipCardBack: {
    backgroundColor: "#ffffff",
    borderRadius:8,
    position: "absolute",
    top: 0,
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});


export default connect() (Quiz)
