import React from 'react'
import {  Text, View,TouchableOpacity,TextInput,KeyboardAvoidingView } from 'react-native'
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
     if(question!="" && answer!=""){
       const { dispatch,navigation } = this.props

       addCardToDeck(question,answer,deck)
       dispatch(addCard(question,answer,deck))
       navigation.goBack();
      }
    }

    render() {
      return (
            <KeyboardAvoidingView style={globalStyles.container6}>
              <View style={globalStyles.container6}>
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
              </View>
              <View style={globalStyles.container7}>
                <TextButton children="Submit" style={globalStyles.textButtonStyle} onPress={() => this._onPressButton(this.state.question,this.state.answer,this.props.navigation.state.params.deck)}/>
              </View>
            </KeyboardAvoidingView>
        )
  }
}


export default connect()(AddCard)
