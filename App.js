import React,{Component} from 'react'
import { Provider } from 'react-redux'
import { initializationTask } from './utils/initializationTask'
import { StyleSheet, View } from 'react-native';
import {DeckStackNavigator} from './components/Navigators'
export default class App extends Component {
  render() {
    return (
      <Provider store={initializationTask()}>
        <View style={{flex:1}}>
          <DeckStackNavigator/>
        </View>
      </Provider>
    );
  }
}
