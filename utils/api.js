import { AsyncStorage } from 'react-native'

export function getDecks(){
    AsyncStorage.getAllKeys().then((keys)=>{

    if(keys)
    {
          AsyncStorage.multiGet(keys).then((results)=>{
          return results
        })
    }
  })
}

export function getDeck(key) {
  console.log("Should not be called")
  return AsyncStorage.getItem(key)
}

export function setDeck(deckTitle) {
  const deckObject = {
    title:deckTitle,
    cards:[]
  }

  try {
  return AsyncStorage.mergeItem(deckTitle,JSON.stringify(deckObject))
  } catch (error) {

  }

}

export function addCardToDeck(question,answer,deck){
console.log("Step 2: addCardToDeck -api")
const deckObject = {
    title:deck.item.title,
    cards:(deck.item.cards)?[...deck.item.cards,{question,answer}]:[{question,answer}]
  }
  return AsyncStorage.mergeItem(deck.item.title,JSON.stringify(deckObject))
}
