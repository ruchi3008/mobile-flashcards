import { AsyncStorage } from 'react-native'
import { receiveDecks } from '../actions'

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
