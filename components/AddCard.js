import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
class AddCard extends React.Component {
  state = {
      question: '',
      answer:'',
   }

   _onPressButton = (question,answer,deck) => {
     if(question!="" && answer!="")
     {addCardToDeck(question,answer,deck).then((deck)=>console.log(deck))
     const { dispatch } = this.props
     dispatch(addCard(question,answer,deck))
     this.props.navigation.state.params.refresh();
      this.props.navigation.goBack();}
   }
    render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          value={ this.state.question}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          value={ this.state.answer}
        />

        <View style={[styles.container],{alignItems:'center'}}>
          <TextButton children="Submit" style={styles.textButtonStyle} onPress={() => this._onPressButton(this.state.question,this.state.answer,this.props.navigation.state.params.deck)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'stretch',
    backgroundColor:'white'
  },
  textInputStyle:{
    height:55,
    borderColor:'black',
    borderWidth: 2,
    borderRadius:8,
    marginLeft:30,
    marginRight:30,
    paddingLeft:10,
    margin:30,
    fontWeight:'bold',
  },
  textButtonStyle:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin:30,
  }
});

export default connect()(AddCard)
