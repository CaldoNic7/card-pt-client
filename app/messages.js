
const success = {
  signIn: 'Success! You are now signed in!',
  signOut: 'Thank\'s for using CARDio! You are now signed out.',
  signUp: 'Thank\'s for joining CARDio! Now sign-in, create your deck and crush a workout!',
  changePW: 'Success! Your password has been updated.',
  deckSave: 'Deck saved.',
  indexDecks: 'Request completed successfully. Here are your decks...',
  showDeck: 'You can now edit this deck.',
  updateDeck: 'Updates saved!',
  deleteDeck1: 'Deck has been deleted.',
  deleteDeck2: ' has been deleted'

}

const fail = {
  general: 'Uh Oh! Something went wrong. Please try again.',
  signUp: 'Sign-Up failed. Please try again.',
  signIn: 'Sign-In failed. Please try again',
  signOut: 'sign-Out failed. Please try again',
  deckSave: 'Sorry, we were unable to save your deck. Please check that you have filled out all required fields and that the information is the correct data type and then try again',
  indexDecks: 'Sorry, we were unable to show your decks.',
  showOneDeck: 'Sorry, we were unable to show this deck.',
  updateDeck: 'Sorry, we were unable to save your Updates. Please check that you have filled out all required fields and that the information is the correct data type and then try again.',
  deleteDeck: 'Sorry, we were unable to delete this deck.'
}

// chooses the success message to show via the parameter, updates, shows and sets a timeout on the #successMessage html element text, and hides the #failMessage if it happens to be showing.
const setSuccessMessage = function (message) {
  $('#failMessage').hide()
  $('#successMessage').text(message).show()
  setTimeout(() => {
    $('#successMessage').hide()
  }, 4500)
}

// chooses the fail message to show via the parameter, updates, shows and sets a timeout on the #failMessage html element text, and hides the #successMessage if it happens to be showing.
const setFailMessage = function (message) {
  $('#successMessage').hide()
  $('#failMessage').text(message).show()
  setTimeout(() => { $('#failMessage').hide() }, 5500)
}

module.exports = {
  success,
  fail,
  setSuccessMessage,
  setFailMessage
}
