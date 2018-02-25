import React from 'react'
import { Text, View,TouchableOpacity,TextInput } from 'react-native'
import { setDeck,getDecks } from '../utils/api'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { receiveDeck } from '../actions'
import {globalStyles} from '../utils/helper'
class AddDecks extends React.Component {
    state = {
        title: '',
     }

    _onPressButton = (deckTitle) => {
       const { dispatch, navigation} = this.props
       setDeck(deckTitle)
       dispatch(addDeck({title:deckTitle,cards:[]}))
       dispatch(receiveDeck({title:deckTitle,cards:[]}))
       navigation.navigate("DeckDetails",{deck:{title:deckTitle,cards:[]}})
     }
    render(){
      return (
        <View style={globalStyles.container9}>
         <View style={globalStyles.container10}>
           <View style={globalStyles.container11}>
            <Text style = {globalStyles.textStyle8}>What is the title of your new deck?</Text>
           </View>
           <View style={globalStyles.container12}>
            <TextInput
              style={globalStyles.textInputStyle1}
              placeholder="Deck Title"
              onChangeText={(title) => this.setState({title})}
              value={ this.state.title }
            />
           </View>
           <View style={globalStyles.container8}>
            <TextButton children='Create Deck' style={globalStyles.textButtonStyle4} onPress={() => this._onPressButton(this.state.title)}/>
           </View>
          </View>
          <View style={[globalStyles.container9,{flex:1}]}>
          </View>
        </View>
      );
    }
}


export default connect()(AddDecks)
