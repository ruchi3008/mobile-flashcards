import React, {Component} from 'react'
import { Text, View,Platform, TouchableOpacity,Animated} from 'react-native';
import TextButton from './TextButton'
import {globalStyles} from '../utils/helper'

export default function QuizResults ({ correct,length,navigation})  {
      const { deck } = navigation.state.params
      return (
        <View style={globalStyles.container}>
          <View style={[globalStyles.container,{flex:2}]}>
            <Text style={globalStyles.textStyle6} >Your results {correct}/{length} </Text>
          </View>
          <View style={globalStyles.container5}>
             <TextButton children="Restart Quiz" style={globalStyles.textButtonStyle1} onPress={() => { navigation.navigate('Quiz',{deck:deck})}}/>
             <TextButton children="Return to Deck" style={globalStyles.textButtonStyle3} onPress={() => { navigation.navigate("DeckDetails",{deck:deck})}}/>
          </View>
        </View>
      )
    }
