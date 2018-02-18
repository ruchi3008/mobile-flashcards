import { RECEIVE_DECKS, RECEIVE_DECK, ADD_DECK, ADD_CARD} from '../actions'

const reducer = (state = [],action) => {
  switch(action.type){
    case RECEIVE_DECKS : return {
      ...state,
      decks: action.decks,
    }
    case ADD_DECK : return {
      ...state,
      decks :[...state.decks,action.deck]
    }
    case RECEIVE_DECK :
    return {
      ...state,
      deck :action.deck
    }
    case ADD_CARD :
    console.log("Step 4 : ADD_CARD : reducer" )
    const index = state.decks.findIndex(item => item.title === action.deck.title)
    console.log("state.decks[index].cards.length" + state.decks[index].cards.length)
    console.log("state.deck.cards.length" + state.deck.cards.length)
    console.log("state.deck.cards" + state.deck.cards)
    return {
      ...state,
      decks : [...state.decks.slice(0,index),
      {
        ...state.decks[index],
        cards:[...state.decks[index].cards,action.cardDetails],
      },
      ...state.decks.slice(index+1)],
      deck :{...state.deck,
      cards:[...state.deck.cards,action.cardDetails]}
    }
  }
}

export default reducer
