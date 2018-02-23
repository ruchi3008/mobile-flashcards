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
  return AsyncStorage.getItem(key)
}

export function setDeck(deckTitle) {
  const deckObject = {
    title:deckTitle,
    cards:new Array()
  }

  try {
  return AsyncStorage.mergeItem(deckTitle,JSON.stringify(deckObject))
  } catch (error) {

  }

}

export function addCardToDeck(question,answer,deck){
const deckObject = {
    title:deck.title,
  //  cards:(deck.cards)?[...deck.cards,{question,answer}]:[{question,answer}]
  cards:[...deck.cards,{question,answer}]
  }
  return AsyncStorage.mergeItem(deck.title,JSON.stringify(deckObject))
}
