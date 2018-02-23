import { AsyncStorage } from 'react-native'
import { receiveDecks } from '../actions'
import { createStore } from 'redux'
import reducer from '../reducers'

export function initializationTask(){
  const store = createStore(reducer)
  getInitialData(store)
  return store
}
export function getInitialData(store){
  const allDecks = []
  AsyncStorage.getAllKeys((err, keys) => {
  AsyncStorage.multiGet(keys, (err, decks) => {

    decks.map((result, i, deck) => {
      let key = deck[i][0]
      let value = deck[i][1]
      allDecks.push(JSON.parse(value))
    })

      store.dispatch(receiveDecks(allDecks))
  });
});
}
