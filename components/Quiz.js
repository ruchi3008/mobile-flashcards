import React,{Component} from 'react';
import { StyleSheet, Text, View,Platform, TouchableOpacity} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { getDeck } from '../utils/api'
import { receiveDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
class Quiz extends Component {
  state = {
    questionNo:1,
    showAnswer:false,
    quizComplete:false,
    percentage:0,
    correctAnswer: this.props.navigation.state.params.deck.cards.length
  }
  // componentDidMount(){
  //   this.setState({
  //     questionNo:1,
  //     quizComplete:false,
  //     showAnswer:false
  //   })
  // }
  _onPressButton(answer){
    console.log(this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer.toUpperCase(),answer.toUpperCase())
    // if (this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer.toUpperCase()===answer.toUpperCase())
    //   {
    //     this.setState({
    //        correctAnswer:(this.state.correctAnswer)?this.state.correctAnswer+1:1
    //      })
    //     console.log(this.state.correctAnswer)
    //   }
     if (this.props.navigation.state.params.deck.cards[this.state.questionNo-1].answer.toUpperCase()!==answer.toUpperCase())
    {  this.setState({
              correctAnswer:this.state.correctAnswer-1,
            })
    }
    this.setState({questionNo:this.state.questionNo +1,showAnswer:false})
    if(this.state.questionNo===this.props.navigation.state.params.deck.cards.length){
      const percentage = parseInt(this.state.correctAnswer)/parseInt(this.props.navigation.state.params.deck.cards.length)*100
      console.log(percentage,(this.state.correctAnswer),parseInt(this.props.navigation.state.params.deck.cards.length))
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
                !this.state.quizComplete && !this.state.showAnswer &&
                <View style={[styles.container,{flex:1,justifyContent:'flex-start',alignItems:'center'}]}>
                <Text style={styles.textStyle2}>{card.question}</Text>
                 <TouchableOpacity onPress={() => { this._flipCard()}}>
                     <Text style={styles.textStyle3}>Answer</Text>
                  </TouchableOpacity>
                </View>
              }
              {
                !this.state.quizComplete && this.state.showAnswer &&
                 <View style={[styles.container,{flex:1,justifyContent:'flex-start',alignItems:'center'}]}>
                 <Text style={styles.textStyle2}>{card.answer}</Text>
                 <TouchableOpacity onPress={() => { this._flipCard()}}>
                    <Text style={styles.textStyle3}>Question</Text></TouchableOpacity>
                 </View>
              }
              {!this.state.quizComplete &&
                <View style={[styles.container,{flex:1,justifyContent:'flex-start',alignItems:'center'}]}>
                   <TextButton children="Correct" style={styles.textButtonStyle} onPress={() => { this._onPressButton("yes")}}/>
                   <TextButton children="Incorrect" style={[styles.textButtonStyle,{backgroundColor:'#B22222',paddingLeft: 58,
                      paddingRight: 58}]} onPress={() => { this._onPressButton("no")}}/>
                </View>
              }
            {this.state.quizComplete &&
              <Text style={styles.textStyle2} >You have secured {this.state.percentage && this.state.percentage} % </Text>
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
    fontSize: 35,
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
  }
});


export default connect() (Quiz)
