import React,{Component} from 'react'
import { Provider } from 'react-redux'
import { initializationTask } from './utils/initializationTask'
import { StyleSheet, View } from 'react-native';
import {DeckStackNavigator} from './components/Navigators'
import { setLocalNotification } from './utils/notification'
export default class App extends Component {
  componentDidMount(){
    setLocalNotification()
  }
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
