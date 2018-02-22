This project(UdaciCards) was bootstrapped with [Create React Native App]

To run:
1) Download/Clone the project from Github.
2) Navigate to Project Directory from Command prompt
3) Run npm install. This is going to install all the depedencies.
5) Install Android emulator and run an emulator.
6) Execute command yarn start.
7) Use Android Emulator or Expo app on your mobile to run the project.

Overview
1) Components
 a) Decks.js : To display the list of Decks along with the cards count.
 b) DeckDetails.js : Displays the deck details (Deck Title, number of cards) and an option to   start the quiz and add a card
 b) AddDeck.js: To add a new deck.
    Input field : Title of the deck
 c) AddCard.js : To add a new card to the deck
    Input field : Question and answer
 e) Quiz.js : Display the questions from the deck with an option to display the answer and     two buttons to get user input for the answer.
 f) QuizResults: Display the Quiz Results in percentage
 g) TextButton.js : Generic class for all the buttons. Can be used by passing style.

reducer
  a)index.js : List the logic for reducer corresponding to various actions performed by the user.

actions
  a)index.js : List all teh action

utils
a) api.js : Functions to work with the Deck data with the help of Asyncstorage
