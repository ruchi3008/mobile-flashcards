import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import { setDeck,getDecks } from '../utils/api'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import TextButton from './TextButton'
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
       <View style={[styles.container,{flex:3}]}>
         <View style={[styles.container,{flex:4,margin:25}]}>
          <Text style = {styles.textStyle}>What is the title of your new deck?</Text>
         </View>
         <View style={[styles.container,{flex:2,justifyContent:'flex-start'}]}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Deck Title"
            onChangeText={(title) => this.setState({title})}
            value={ this.state.title }
          />
         </View>
         <View style={[styles.container,{flex:1,alignItems:'center'}]}>
          <TextButton children='Submit' style={styles.textButtonStyle} onPress={() => this._onPressButton(this.state.title)}/>
         </View>
        </View>
        <View style={[styles.container,{flex:1}]}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'white'
  },
  textStyle:{
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBoxStyle:{
    borderRadius :10
  },
  textInputStyle:{
    height:50,
    borderColor:'black',
    borderWidth: 2,
    borderRadius:5,
    marginLeft:30,
    marginRight:30,
    paddingLeft:10
  },
  textButtonStyle:{
    fontSize:20,
    backgroundColor:'black',
    color:'white',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default connect()(AddDecks)
