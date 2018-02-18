import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { setDeck,getDecks } from '../utils/api'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
class AddDecks extends React.Component {
  state = {
      title: '',
   }

   _onPressButton = (deckTitle) => {
     console.log("hghg")
     const { dispatch } = this.props
     setDeck(deckTitle)
     dispatch(addDeck({title:deckTitle,cards:[]}))
   }
     render(){
    return (
      <View style={styles.container}>
        <Text>What is title of your new deck?</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:40}}
        onChangeText={(title) => this.setState({title})}
        value={ this.state.title}
        />
        <View>
          <TouchableOpacity onPress={() => this._onPressButton(this.state.title)}><Text>Submit</Text></TouchableOpacity>
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

export default connect()(AddDecks)
