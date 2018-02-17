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
    numberOfCards:0,
    cards:[]
  }

  try {
  return AsyncStorage.mergeItem(deckTitle,JSON.stringify(deckObject))
  } catch (error) {

  }

}

export function addCardToDeck(question,answer,deck){

if (deck.item.cards){
  deck.item.cards.push({question,answer})
}
  const deckObject = {
    title:deck.item.title,
    numberOfCards:deck.item.numberOfCards+1,
    cards:(deck.item.cards)?deck.item.cards:[{question,answer}]
  }

  return AsyncStorage.mergeItem(deck.item.title,JSON.stringify(deckObject))
}
