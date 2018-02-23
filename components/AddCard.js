import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import {globalStyles} from '../utils/helper'
class AddCard extends React.Component {
  state = {
      question: '',
      answer:'',
   }

   _onPressButton = (question,answer,deck) => {
     if(question!="" && answer!="")
     {
       addCardToDeck(question,answer,deck)
       const { dispatch } = this.props
       dispatch(addCard(question,answer,deck))
       this.props.navigation.state.params.refresh();
       this.props.navigation.goBack();
    }
   }
    render(){
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          style={globalStyles.textInputStyle}
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          value={ this.state.question}
        />
        <TextInput
          style={globalStyles.textInputStyle}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          value={ this.state.answer}
        />

        <View style={[styles.container],{alignItems:'center'}}>
          <TextButton children="Submit" style={[globalStyles.textButtonStyle,{  margin:30,}]} onPress={() => this._onPressButton(this.state.question,this.state.answer,this.props.navigation.state.params.deck)}/>
        </View>
        </KeyboardAvoidingView>
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

});

export default connect()(AddCard)
