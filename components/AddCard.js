import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import { connect } from 'react-redux'
class AddCard extends React.Component {
  state = {
      question: '',
      answer:'',
   }

   _onPressButton = (question,answer,deck) => {
     console.log("Step 1")
     addCardToDeck(question,answer,deck).then((deck)=>console.log(deck))
     const { dispatch } = this.props
     dispatch(addCard(question,answer,deck))
     this.props.navigation.state.params.refresh();
     console.log("Step 6 : Added card")
      this.props.navigation.goBack();
   }
     render(){
    return (
      <View style={styles.container}>
        <Text>What is title of your new deck?</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:40}}
        onChangeText={(question) => this.setState({question})}
        value={ this.state.question}
        />
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:40}}
        onChangeText={(answer) => this.setState({answer})}
        value={ this.state.answer}
        />
        <View>
          <TouchableOpacity onPress={() => this._onPressButton(this.state.question,this.state.answer,this.props.navigation.state.params.deck)}><Text>Submit</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default connect()(AddCard)
